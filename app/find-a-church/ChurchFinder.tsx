"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { GOOGLE_MAPS_API_KEY, GOOGLE_MAPS_MAP_ID } from "./config";
import {
  AdvancedMarkerInstance,
  Attribution,
  BoundsLiteral,
  GeocoderInstance,
  GeocodingLibrary,
  MapInstance,
  MapsLibrary,
  MarkerLibrary,
  PlaceLike,
  PlacesLibrary,
  distanceMiles,
  loadGoogleMaps,
  makeBounds,
  toLiteral,
} from "./googleMaps";
import styles from "./find-a-church.module.css";

type ChurchResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  distanceMiles: number;
  googleMapsUrl?: string;
  websiteUrl?: string;
  attributions: Attribution[];
};

const RADIUS_OPTIONS = [5, 10, 25, 50] as const;
const DEFAULT_RADIUS = 50;

function directionsUrl(church: ChurchResult) {
  const params = new URLSearchParams({
    api: "1",
    destination: `${church.name}, ${church.address}`,
    destination_place_id: church.id,
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function boundsForResults(results: ChurchResult[]): BoundsLiteral | null {
  if (!results.length) return null;
  if (results.length === 1) {
    return makeBounds({ lat: results[0].lat, lng: results[0].lng }, 2);
  }

  return results.reduce<BoundsLiteral>(
    (bounds, church) => ({
      north: Math.max(bounds.north, church.lat),
      south: Math.min(bounds.south, church.lat),
      east: Math.max(bounds.east, church.lng),
      west: Math.min(bounds.west, church.lng),
    }),
    {
      north: results[0].lat,
      south: results[0].lat,
      east: results[0].lng,
      west: results[0].lng,
    },
  );
}

export default function ChurchFinder() {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapInstance | null>(null);
  const geocoderRef = useRef<GeocoderInstance | null>(null);
  const placesRef = useRef<PlacesLibrary | null>(null);
  const markerLibraryRef = useRef<MarkerLibrary | null>(null);
  const markersRef = useRef<AdvancedMarkerInstance[]>([]);
  const rawPlacesRef = useRef<Map<string, PlaceLike>>(new Map());

  const [locationText, setLocationText] = useState("");
  const [radiusMiles, setRadiusMiles] = useState(DEFAULT_RADIUS);
  const [results, setResults] = useState<ChurchResult[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mapStatus, setMapStatus] = useState<"loading" | "ready" | "unconfigured" | "error">(
    GOOGLE_MAPS_API_KEY ? "loading" : "unconfigured",
  );
  const [searching, setSearching] = useState(false);
  const [message, setMessage] = useState("Enter a location to search for nearby churches.");
  const [websiteLoadingId, setWebsiteLoadingId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    if (!GOOGLE_MAPS_API_KEY || !mapElementRef.current) return;

    async function initialize() {
      try {
        const google = await loadGoogleMaps();
        const [mapsLibrary, geocodingLibrary, placesLibrary, markerLibrary] = await Promise.all([
          google.maps.importLibrary("maps") as Promise<MapsLibrary>,
          google.maps.importLibrary("geocoding") as Promise<GeocodingLibrary>,
          google.maps.importLibrary("places") as Promise<PlacesLibrary>,
          google.maps.importLibrary("marker") as Promise<MarkerLibrary>,
        ]);
        if (cancelled || !mapElementRef.current) return;

        mapRef.current = new mapsLibrary.Map(mapElementRef.current, {
          center: { lat: 39.8283, lng: -98.5795 },
          zoom: 4,
          mapId: GOOGLE_MAPS_MAP_ID,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        });
        geocoderRef.current = new geocodingLibrary.Geocoder();
        placesRef.current = placesLibrary;
        markerLibraryRef.current = markerLibrary;
        setMapStatus("ready");
      } catch {
        if (!cancelled) {
          setMapStatus("error");
          setMessage("The church search map could not load. Please try again later.");
        }
      }
    }

    void initialize();
    return () => {
      cancelled = true;
      markersRef.current.forEach((marker) => {
        marker.map = null;
      });
      markersRef.current = [];
    };
  }, []);

  async function selectChurch(churchId: string, centerOnMap = false) {
    setSelectedId(churchId);
    const selected = results.find((result) => result.id === churchId);
    if (selected && centerOnMap) mapRef.current?.panTo({ lat: selected.lat, lng: selected.lng });
    if (!selected || selected.websiteUrl || websiteLoadingId === churchId) return;

    const rawPlace = rawPlacesRef.current.get(churchId);
    if (!rawPlace) return;

    setWebsiteLoadingId(churchId);
    try {
      await rawPlace.fetchFields({ fields: ["websiteURI"] });
      setResults((current) =>
        current.map((result) =>
          result.id === churchId
            ? {
                ...result,
                websiteUrl: rawPlace.websiteURI ?? undefined,
                attributions: rawPlace.attributions ?? result.attributions,
              }
            : result,
        ),
      );
    } catch {
      // A church website is optional; Google Maps remains available for research.
    } finally {
      setWebsiteLoadingId(null);
    }
  }

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const query = locationText.trim();

    if (!query) {
      setMessage("Please enter a ZIP code, city, or address.");
      return;
    }
    if (mapStatus !== "ready" || !mapRef.current || !geocoderRef.current || !placesRef.current || !markerLibraryRef.current) {
      setMessage("The map search is not ready yet. Please try again in a moment.");
      return;
    }

    setSearching(true);
    setSelectedId(null);
    setMessage("Searching for churches near this location…");

    try {
      const geocodeResponse = await geocoderRef.current.geocode({ address: query });
      const firstMatch = geocodeResponse.results[0];
      if (!firstMatch) throw new Error("Location not found");

      const center = toLiteral(firstMatch.geometry.location);
      const bounds = makeBounds(center, radiusMiles);

      const { Place, SearchByTextRankPreference } = placesRef.current;
      const response = await Place.searchByText({
        textQuery: "church",
        fields: ["id", "displayName", "formattedAddress", "location", "googleMapsURI"],
        includedType: "church",
        useStrictTypeFiltering: true,
        locationRestriction: bounds,
        rankPreference: SearchByTextRankPreference.DISTANCE,
        maxResultCount: 20,
      });

      const nextRawPlaces = new Map<string, PlaceLike>();
      const nextResults = response.places
        .flatMap((place) => {
          if (!place.id || !place.location) return [];
          const position = toLiteral(place.location);
          const miles = distanceMiles(center, position);
          if (miles > radiusMiles) return [];
          nextRawPlaces.set(place.id, place);
          return [{
            id: place.id,
            name: place.displayName?.trim() || "Church",
            address: place.formattedAddress?.trim() || "Address not available",
            lat: position.lat,
            lng: position.lng,
            distanceMiles: miles,
            googleMapsUrl: place.googleMapsURI ?? undefined,
            attributions: place.attributions ?? [],
          } satisfies ChurchResult];
        })
        .sort((a, b) => a.distanceMiles - b.distanceMiles)
        .slice(0, 20);

      rawPlacesRef.current = nextRawPlaces;
      setResults(nextResults);

      markersRef.current.forEach((marker) => {
        marker.map = null;
      });
      markersRef.current = [];

      nextResults.forEach((church, index) => {
        const pin = new markerLibraryRef.current!.PinElement({ glyphText: String(index + 1), scale: 1.1 });
        const marker = new markerLibraryRef.current!.AdvancedMarkerElement({
          map: mapRef.current!,
          position: { lat: church.lat, lng: church.lng },
          title: `${index + 1}. ${church.name}`,
          gmpClickable: true,
          content: pin,
        });
        marker.addEventListener("gmp-click", () => void selectChurch(church.id));
        markersRef.current.push(marker);
      });

      const visibleBounds = boundsForResults(nextResults);
      if (visibleBounds) {
        mapRef.current.fitBounds(visibleBounds, 64);
      } else {
        mapRef.current.fitBounds(bounds, 48);
      }

      setMessage(
        nextResults.length
          ? `Showing ${nextResults.length} nearby church${nextResults.length === 1 ? "" : "es"} within ${radiusMiles} miles of ${firstMatch.formatted_address}.`
          : `No church matches were found within ${radiusMiles} miles. Try a broader location description or a larger radius.`,
      );
    } catch {
      setResults([]);
      setSelectedId(null);
      setMessage("We could not locate that search area. Please try a ZIP code, city and state, or a more complete address.");
    } finally {
      setSearching(false);
    }
  }

  const selectedChurch = selectedId ? results.find((result) => result.id === selectedId) : undefined;

  return (
    <section className={styles.finder} aria-labelledby="find-church-search-title">
      <div className={styles.finderHeading}>
        <p className={styles.eyebrow}>FIND CHURCHES NEAR YOU</p>
        <h2 id="find-church-search-title">Search for a Church Home</h2>
        <p>Enter a ZIP code, city, or address and choose how far you would like to search. Results are geographic matches, not endorsements by Faith Changes Everything.</p>
      </div>

      <div className={styles.privacyNotice} role="note" aria-label="Location privacy notice">
        <span className={styles.privacyIcon} aria-hidden="true">◆</span>
        <div>
          <strong>Your location is not stored by Faith Changes Everything.</strong>
          <p>The ZIP code, city, or address you enter is used only to find churches near that location and calculate distance. FCE does not save this information to your Journey, database, analytics profile, URL, or any other FCE record. Google Maps processes the search information needed to return nearby results.</p>
        </div>
      </div>

      <form className={styles.searchForm} onSubmit={handleSearch}>
        <label className={styles.locationField}>
          <span>ZIP code, city, or address</span>
          <input value={locationText} onChange={(event) => setLocationText(event.target.value)} placeholder="Example: 61265 or Moline, IL" spellCheck={false} />
        </label>
        <label>
          <span>Search radius</span>
          <select value={radiusMiles} onChange={(event) => setRadiusMiles(Number(event.target.value))}>
            {RADIUS_OPTIONS.map((radius) => <option key={radius} value={radius}>{radius} miles</option>)}
          </select>
        </label>
        <button type="submit" disabled={searching || mapStatus !== "ready"}>{searching ? "Searching…" : "Find Churches"}</button>
      </form>

      {mapStatus === "unconfigured" && <p className={styles.configurationNotice} role="status">The church-search map is built but is waiting for Google Maps API configuration before live searching can be enabled.</p>}
      <p className={styles.searchStatus} aria-live="polite">{message}</p>

      <div className={styles.finderGrid}>
        <div className={styles.mapShell}>
          <div ref={mapElementRef} className={styles.map} aria-label="Map showing church search results" />
          {mapStatus !== "ready" && <div className={styles.mapOverlay}><strong>{mapStatus === "loading" ? "Loading map…" : "Map search unavailable"}</strong><span>{mapStatus === "unconfigured" ? "Google Maps configuration is required." : "Please try again later."}</span></div>}
        </div>

        <aside className={styles.resultsPanel} aria-label="Church search results">
          <div className={styles.resultsHeader}><h3>Nearby Churches</h3><span>{results.length ? `Up to ${results.length} closest matches` : "No results yet"}</span></div>

          {selectedChurch && <section className={styles.selectedCard} aria-live="polite">
            <p className={styles.selectedLabel}>SELECTED CHURCH</p>
            <h3>{selectedChurch.name}</h3>
            <p>{selectedChurch.address}</p>
            <p className={styles.distance}>{selectedChurch.distanceMiles.toFixed(1)} miles away</p>
            <div className={styles.selectedActions}>
              {selectedChurch.websiteUrl ? <a href={selectedChurch.websiteUrl} target="_blank" rel="noreferrer">Visit Church Website</a> : <button type="button" disabled={websiteLoadingId === selectedChurch.id} onClick={() => void selectChurch(selectedChurch.id)}>{websiteLoadingId === selectedChurch.id ? "Checking website…" : "Check for Church Website"}</button>}
              {selectedChurch.googleMapsUrl && <a href={selectedChurch.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>}
              <a href={directionsUrl(selectedChurch)} target="_blank" rel="noreferrer">Directions</a>
            </div>
            {selectedChurch.attributions.length > 0 && <p className={styles.attribution}>Data attribution: {selectedChurch.attributions.map((item, index) => <span key={`${item.provider ?? "provider"}-${index}`}>{item.providerURI ? <a href={item.providerURI} target="_blank" rel="noreferrer">{item.provider ?? "Provider"}</a> : item.provider ?? "Provider"}{index < selectedChurch.attributions.length - 1 ? ", " : ""}</span>)}</p>}
          </section>}

          <div className={styles.resultList}>
            {results.map((church, index) => {
              const selected = church.id === selectedId;
              return <article key={church.id} className={`${styles.resultCard} ${selected ? styles.resultCardSelected : ""}`}>
                <div className={styles.resultNumber} aria-hidden="true">{index + 1}</div>
                <div><h4>{church.name}</h4><p>{church.address}</p><span>{church.distanceMiles.toFixed(1)} miles away</span><button type="button" onClick={() => void selectChurch(church.id, true)}>{selected ? "Selected" : "View details"}</button></div>
              </article>;
            })}
          </div>
          <p className={styles.googleAttribution}>Church location data provided by Google Maps. Results may not include every church in the selected area.</p>
        </aside>
      </div>
    </section>
  );
}
