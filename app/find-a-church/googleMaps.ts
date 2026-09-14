import { GOOGLE_MAPS_API_KEY } from "./config";

export type LatLngLiteral = { lat: number; lng: number };
export type LatLngValue = LatLngLiteral | { lat(): number; lng(): number };
export type BoundsLiteral = { north: number; south: number; east: number; west: number };

export type Attribution = {
  provider?: string;
  providerURI?: string;
};

export type PlaceLike = {
  id: string;
  displayName?: string | null;
  formattedAddress?: string | null;
  location?: LatLngValue | null;
  googleMapsURI?: string | null;
  websiteURI?: string | null;
  attributions?: Attribution[] | null;
  fetchFields(options: { fields: string[] }): Promise<void>;
};

export type PlacesLibrary = {
  Place: {
    searchByText(request: {
      textQuery: string;
      fields: string[];
      includedType: string;
      useStrictTypeFiltering: boolean;
      locationRestriction: BoundsLiteral;
      rankPreference: string;
      maxResultCount: number;
    }): Promise<{ places: PlaceLike[] }>;
  };
  SearchByTextRankPreference: { DISTANCE: string };
};

export type GeocoderInstance = {
  geocode(request: { address: string }): Promise<{
    results: Array<{
      formatted_address: string;
      geometry: { location: LatLngValue };
    }>;
  }>;
};

export type GeocodingLibrary = {
  Geocoder: new () => GeocoderInstance;
};

export type MapInstance = {
  fitBounds(bounds: BoundsLiteral, padding?: number): void;
  panTo(position: LatLngLiteral): void;
};

export type MapsLibrary = {
  Map: new (
    element: HTMLElement,
    options: {
      center: LatLngLiteral;
      zoom: number;
      mapId: string;
      mapTypeControl: boolean;
      streetViewControl: boolean;
      fullscreenControl: boolean;
    },
  ) => MapInstance;
};

export type AdvancedMarkerInstance = HTMLElement & { map: MapInstance | null };

export type MarkerLibrary = {
  AdvancedMarkerElement: new (options: {
    map: MapInstance;
    position: LatLngLiteral;
    title: string;
    gmpClickable: boolean;
    content?: Node;
  }) => AdvancedMarkerInstance;
  PinElement: new (options: { glyphText: string; scale: number }) => HTMLElement;
};

type GoogleMapsNamespace = {
  maps: {
    importLibrary(name: "maps" | "places" | "geocoding" | "marker"): Promise<unknown>;
  };
};

declare global {
  interface Window {
    google?: GoogleMapsNamespace;
    __fceGoogleMapsPromise?: Promise<GoogleMapsNamespace>;
    __fceGoogleMapsReady?: () => void;
  }
}

export function loadGoogleMaps() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Google Maps can only load in the browser."));
  }

  if (!GOOGLE_MAPS_API_KEY) {
    return Promise.reject(new Error("Google Maps is not configured."));
  }

  if (window.google?.maps?.importLibrary) return Promise.resolve(window.google);
  if (window.__fceGoogleMapsPromise) return window.__fceGoogleMapsPromise;

  window.__fceGoogleMapsPromise = new Promise<GoogleMapsNamespace>((resolve, reject) => {
    window.__fceGoogleMapsReady = () => {
      if (window.google?.maps?.importLibrary) {
        resolve(window.google);
      } else {
        reject(new Error("Google Maps did not initialize."));
      }
      delete window.__fceGoogleMapsReady;
    };

    const script = document.createElement("script");
    const params = new URLSearchParams({
      key: GOOGLE_MAPS_API_KEY,
      v: "weekly",
      loading: "async",
      callback: "__fceGoogleMapsReady",
    });
    script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
    script.async = true;
    script.dataset.fceGoogleMaps = "true";
    script.addEventListener(
      "error",
      () => {
        delete window.__fceGoogleMapsReady;
        reject(new Error("Google Maps failed to load."));
      },
      { once: true },
    );
    document.head.appendChild(script);
  });

  return window.__fceGoogleMapsPromise;
}

export function toLiteral(value: LatLngValue): LatLngLiteral {
  if (typeof value.lat === "function" && typeof value.lng === "function") {
    return { lat: value.lat(), lng: value.lng() };
  }
  return value as LatLngLiteral;
}

export function makeBounds(center: LatLngLiteral, radiusMiles: number): BoundsLiteral {
  const latitudeDelta = radiusMiles / 69;
  const longitudeMilesPerDegree = 69.172 * Math.max(Math.cos((center.lat * Math.PI) / 180), 0.01);
  const longitudeDelta = radiusMiles / longitudeMilesPerDegree;
  return {
    north: Math.min(90, center.lat + latitudeDelta),
    south: Math.max(-90, center.lat - latitudeDelta),
    east: Math.min(180, center.lng + longitudeDelta),
    west: Math.max(-180, center.lng - longitudeDelta),
  };
}

export function distanceMiles(a: LatLngLiteral, b: LatLngLiteral) {
  const earthRadiusMiles = 3958.7613;
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180;
  const deltaLat = toRadians(b.lat - a.lat);
  const deltaLng = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const haversine =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;
  return earthRadiusMiles * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}
