import type { BibleStudyLessonSummary, BibleStudySeriesDetail } from "./data";

const oldTestamentSource = [
  {
    slug: "old-tanak-testament",
    title: "Old Tanak Testament",
    summary: "This opening lesson introduces the Old Testament as the TaNaK, the ancient three-part collection of Torah, Prophets, and Writings. By seeing how these scrolls are arranged and connected, we begin to recognize the Old Testament as one unified story of God’s covenant purposes, humanity’s failure, and the hope of restoration still waiting to be fulfilled.",
    bibleProjectUrl: "https://bibleproject.com/videos/old-tanak-testament",
    streamSrc: "https://stream.mux.com/6Lj53xd8H9NzgbpoKdSezAy7LTGmYEttA5h1xBHcgQw/high.mp4?download=tanak-old-testament.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00128-01-tanak.pdf",
    image: "img-2026-00054-01-tanakotovw.jpg"
  },
  {
    slug: "genesis-1-11",
    title: "Genesis 1-11",
    summary: "Genesis 1–11 introduces God’s good creation, humanity’s calling to reflect His character, and the rebellion that fractures life with sin, violence, and death. From the garden through the flood and Babel, these chapters also plant the first seeds of hope that God will not abandon His world but will act to rescue and restore it.",
    bibleProjectUrl: "https://bibleproject.com/videos/genesis-1-11",
    streamSrc: "https://stream.mux.com/wqRoO23V1icFCGIVSz13nEKs00760200UnXO9ueJl02iLgE/high.mp4?download=genesis-1-11.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00129-genesis-1-11.pdf",
    image: "img-2026-00055-02-genesis1-50.jpg"
  },
  {
    slug: "genesis-12-50",
    title: "Genesis 12-50",
    summary: "Genesis 12–50 follows Abraham and his family, the people God chooses as the means through which blessing will reach the nations. Their story is filled with weakness, deception, rivalry, and failure, yet God remains faithful to His covenant promises, using even human evil for good and pointing forward to a future king from Judah.",
    bibleProjectUrl: "https://bibleproject.com/videos/genesis-12-50",
    streamSrc: "https://stream.mux.com/z15mG00wREQicM00azwBVwDGIvH7rXBZ1fjl9q6tTQGM00/high.mp4?download=genesis-12-50.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00130-03-genesis-12-50.pdf",
    image: "img-2026-00055-02-genesis1-50.jpg"
  },
  {
    slug: "exodus-1-18",
    title: "Exodus 1-18",
    summary: "Exodus 1–18 tells how Israel’s life in Egypt turns from refuge to slavery and how God responds to their cries. Through Moses, the plagues, Passover, and the crossing of the sea, God confronts Pharaoh’s violence and rescues His people, while the wilderness stories begin revealing that Israel’s own hearts will also need transformation.",
    bibleProjectUrl: "https://bibleproject.com/videos/exodus-1-18",
    streamSrc: "https://stream.mux.com/LNqUHmhGOmCmqjQTZcIphfwS3eVJK00wieQ6aQMaGVxw/high.mp4?download=exodus-1-18.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00131-04-exodus-1-18.pdf",
    image: "img-2026-00056-03-04-exodus-art.jpg"
  },
  {
    slug: "exodus-19-40",
    title: "Exodus 19-40",
    summary: "Exodus 19–40 brings Israel to Mount Sinai, where God forms a covenant people called to represent Him to the nations. The Ten Commandments, the covenant laws, and the tabernacle reveal His desire to dwell among them, while the golden calf and Israel’s rebellion show how deeply they need mercy, mediation, and renewed hearts.",
    bibleProjectUrl: "https://bibleproject.com/videos/exodus-19-40",
    streamSrc: "https://stream.mux.com/HklRATIfa01ZdmDywyhA81r5q00XXNqU1HbwjUxM01mo01U/high.mp4?download=exodus-19-40.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00132-05-exodus-19-40.pdf",
    image: "img-2026-00056-03-04-exodus-art.jpg"
  },
  {
    slug: "leviticus",
    title: "Leviticus",
    summary: "Leviticus addresses a central question: How can sinful people live near a holy God? Through sacrifices, priests, purity laws, sacred festivals, and the Day of Atonement, God provides Israel a gracious way to remain in His presence while teaching them that holiness touches worship, relationships, justice, and every part of life.",
    bibleProjectUrl: "https://bibleproject.com/videos/leviticus",
    streamSrc: "https://stream.mux.com/7TNQ5NOpg00rXMM3qJ6kJRGPS93daQEIp00w61Zt68Wns/high.mp4?download=leviticus.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00133-06-leviticus.pdf",
    image: "img-2026-00057-05-leviticus.jpg"
  },
  {
    slug: "numbers",
    title: "Numbers",
    summary: "Numbers follows Israel from Mount Sinai toward the promised land, with God’s presence at the center of the community. Again and again, fear, complaint, and rebellion derail the journey—from the spies’ report to Moses’ own failure—yet God continues to combine justice with mercy and remains faithful to His covenant promises.",
    bibleProjectUrl: "https://bibleproject.com/videos/numbers",
    streamSrc: "https://stream.mux.com/n16pUwPUNbwUikVezsGVWrS8JE7NbyYHX8gbb01f901IA/high.mp4?download=numbers.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00134-07-numbers.pdf",
    image: "img-2026-00058-06-numbers.jpg"
  },
  {
    slug: "deuteronomy",
    title: "Deuteronomy",
    summary: "Deuteronomy records Moses’ final words to a new generation preparing to enter the promised land. He calls Israel to remember God’s grace, learn from the failures of the past, listen to His instruction, and love Him with wholehearted devotion, showing the nations what wise and faithful covenant life can look like.",
    bibleProjectUrl: "https://bibleproject.com/videos/deuteronomy",
    streamSrc: "https://stream.mux.com/EHvrj2Mv01jx38OtNfd01fAnsaRn1dGSDDSs74TPA14jY/high.mp4?download=deuteronomy.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00135-08-deuteronomy.pdf",
    image: "img-2026-00059-07-deuteronomy.jpg"
  },
  {
    slug: "joshua",
    title: "Joshua",
    summary: "Joshua follows Israel as a new generation enters the land God promised to Abraham, with Joshua stepping into leadership after Moses. The book repeatedly connects God’s faithfulness with Israel’s need to trust and obey, showing both God’s judgment on evil and the responsibility of His people to remain faithful once His promises are received.",
    bibleProjectUrl: "https://bibleproject.com/videos/joshua",
    streamSrc: "https://stream.mux.com/HujTkYPHfobXrlyuGOU6Yh1VHUZo4xhXORgPH5SFd9g/high.mp4?download=joshua.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00136-09-joshua.pdf",
    image: "img-2026-00060-08-joshua.jpg"
  },
  {
    slug: "judges",
    title: "Judges",
    summary: "Judges shows what happens when Israel repeatedly abandons its covenant calling and adopts the ways of the nations around them. Cycles of rebellion, oppression, rescue, and relapse grow darker as even Israel’s leaders become corrupt, exposing the depth of the human problem and creating a longing for faithful leadership and God’s gracious rescue.",
    bibleProjectUrl: "https://bibleproject.com/videos/judges",
    streamSrc: "https://stream.mux.com/Otbyel01cL7r8DeqXfQnl202QrZnqliftejHSB00wKAfXE/high.mp4?download=judges.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00137-10-judges.pdf",
    image: "img-2026-00061-09-judges.jpg"
  },
  {
    slug: "ruth",
    title: "Ruth",
    summary: "Ruth tells a deeply personal story of loss, loyalty, generosity, and restoration during the dark period of the judges. Through Ruth, Naomi, and Boaz, we see God quietly working through ordinary acts of faithfulness, turning tragedy toward hope and weaving their family into the line of David and the larger story of redemption.",
    bibleProjectUrl: "https://bibleproject.com/videos/ruth",
    streamSrc: "https://stream.mux.com/iqZx3WUmJn9b01DVAv8TEFmmCOkww01SLsQAinnLdTPSo/high.mp4?download=ruth.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00196-36-ruth.pdf",
    image: "img-2026-00062-10-ruth.jpg"
  },
  {
    slug: "1-samuel",
    title: "1st Samuel",
    summary: "First Samuel traces Israel’s transition from the time of the judges to the beginning of the monarchy through Samuel, Saul, and David. The contrast between pride and humility runs throughout the story: Saul’s self-protective leadership collapses, while David rises as God continues working through human weakness to move His covenant purposes forward.",
    bibleProjectUrl: "https://bibleproject.com/videos/1-samuel",
    streamSrc: "https://stream.mux.com/Zm6vrOXsGg7deyrc00nCM4iF02BUFKii004ZtCcCjkSFY00/high.mp4?download=1-samuel.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00138-11-1-samuel.pdf",
    image: "img-2026-00063-1-24-samuel.jpg"
  },
  {
    slug: "2-samuel",
    title: "2nd Samuel",
    summary: "Second Samuel follows David’s reign through both remarkable success and devastating failure. God establishes a covenant promise concerning David’s royal line, but David’s own sin brings painful consequences to his family and kingdom, making it clear that Israel’s ultimate hope cannot rest in David himself but in the faithful King still to come.",
    bibleProjectUrl: "https://bibleproject.com/videos/2-samuel",
    streamSrc: "https://stream.mux.com/T1AiFIWA7i8CaCt7ogx3XOxVarCvMtz1lwh8xGMFH01A/high.mp4?download=2-samuel.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00139-12-2-samuel.pdf",
    image: "img-2026-00063-1-24-samuel.jpg"
  },
  {
    slug: "1-and-2-kings",
    title: "1st and 2nd Kings",
    summary: "First and Second Kings follow Israel’s rulers from Solomon through the destruction of Jerusalem and the Babylonian exile. The temple, the divided kingdom, prophetic warnings, idolatry, and injustice reveal how repeatedly Israel’s leaders fail, yet the story closes with a small sign that God has not forgotten His promise concerning David’s royal line.",
    bibleProjectUrl: "https://bibleproject.com/videos/1-and-2-kings",
    streamSrc: "https://stream.mux.com/Blf01ojENAUfAtaGs3RLvNVuxmiv14i00vMTaQEAP00SkI/high.mp4?download=1-and-2-kings.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00140-13-1-and-2-kings.pdf",
    image: "img-2026-00064-13-14-kings.jpg"
  },
  {
    slug: "ezra-nehemiah",
    title: "Ezra-Nehemiah",
    summary: "Ezra–Nehemiah recounts Israel’s return from exile and the efforts to rebuild the temple, restore the community around the Torah, and repair Jerusalem’s walls. Although each project succeeds outwardly, the book ends with disappointment because the deeper problem of the human heart remains, leaving the great prophetic promises of restoration still awaiting fulfillment.",
    bibleProjectUrl: "https://bibleproject.com/videos/ezra-nehemiah",
    streamSrc: "https://stream.mux.com/K5mL016L7dWCYRjILrMYImIFbd8TgWRjrFFZ73Pfhd9E/high.mp4?download=ezra-nehemiah.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00197-38-ezra-nehemiah.pdf",
    image: "img-2026-00065-15-ezra-nehemiah.jpg"
  },
  {
    slug: "esther",
    title: "Esther",
    summary: "Esther follows a Jewish community living in Persia, where a plot to destroy them places Esther and Mordecai at the center of a dramatic series of reversals. God is never named directly, yet His providence is visible throughout the story, inviting us to trust that He remains at work even when His presence seems hidden.",
    bibleProjectUrl: "https://bibleproject.com/videos/esther",
    streamSrc: "https://stream.mux.com/LfMTBfZzMmcCZFiRPCuDWc5gKFARKURCjqOpTkxufsg/high.mp4?download=esther.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00198-39-esther.pdf",
    image: "img-2026-00066-16-esther.jpg"
  },
  {
    slug: "job",
    title: "Job",
    summary: "Job wrestles with one of life’s hardest questions: Why do righteous people suffer when there is no simple explanation? Job and his friends offer competing answers, but God ultimately reveals how limited human perspective can be. The book invites us to bring our pain honestly to God while learning to trust His wisdom and character.",
    bibleProjectUrl: "https://bibleproject.com/videos/job",
    streamSrc: "https://stream.mux.com/V7uvmqQX9JJmMlibPrFQL4MXQnMFTlIOyrHPoGV4Eds/high.mp4?download=job.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00193-33-job.pdf",
    image: "img-2026-00067-17-job.jpg"
  },
  {
    slug: "psalms",
    title: "Psalms",
    summary: "Psalms is more than a collection of songs; it is a carefully arranged prayer book that teaches God’s people how to live with faith and hope. Through praise, lament, Torah meditation, and expectation of the Messiah, the Psalms give language for both suffering and worship while directing the heart toward God’s promised kingdom.",
    bibleProjectUrl: "https://bibleproject.com/videos/psalms",
    streamSrc: "https://stream.mux.com/WL00639k024I00n8nVdrpd6GyyscWpuji02f1co4pph8vu00/high.mp4?download=psalms.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00141-14-31-psalms.pdf",
    image: "img-2026-00068-18-psalms.jpg"
  },
  {
    slug: "proverbs",
    title: "Proverbs",
    summary: "Proverbs presents wisdom as the practical skill of living well in God’s world, beginning with reverence for the Lord. Its sayings address relationships, work, money, speech, family, character, and countless everyday choices, while also reminding us that wisdom describes the normal patterns of life rather than offering guaranteed formulas for success.",
    bibleProjectUrl: "https://bibleproject.com/videos/proverbs",
    streamSrc: "https://stream.mux.com/00FFIKKvk8ijn02jkZCaRdVenh4MNYlg42Mb37qSLc6YQ/high.mp4?download=proverbs.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00192-32-proverbs.pdf",
    image: "img-2026-00069-19-proverbs.jpg"
  },
  {
    slug: "ecclesiastes",
    title: "Ecclesiastes",
    summary: "Ecclesiastes confronts the fleeting and unpredictable nature of life with unusual honesty. The Teacher examines work, pleasure, achievement, wisdom, and the human desire for control, only to show how quickly these things can slip away. The book calls us to receive life as God’s gift, live humbly, and recognize the limits of our understanding.",
    bibleProjectUrl: "https://bibleproject.com/videos/ecclesiastes",
    streamSrc: "https://stream.mux.com/1IKsgT01kgxw5kA4QunirAXk01hKMU02n1AX1J2YVbrQmA/high.mp4?download=ecclesiastes.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00194-34-ecclesiastes.pdf",
    image: "img-2026-00070-20-ecclesiastes.jpg"
  },
  {
    slug: "song-of-songs",
    title: "Song of Songs",
    summary: "Song of Songs is a collection of love poetry celebrating the beauty, desire, vulnerability, and power found in committed human love. Its garden imagery echoes the goodness of creation and Eden, inviting us to see love as a gift from God that can be life-giving when treasured faithfully rather than distorted by selfishness.",
    bibleProjectUrl: "https://bibleproject.com/videos/song-of-songs",
    streamSrc: "https://stream.mux.com/fwB6nQFG3YWwUU01fZ3SV572jYz1TcL102v75RuIJ00IHQ/high.mp4?download=song-of-songs.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00195-35-song-of-songs.pdf",
    image: "img-2026-00071-21-song-of-songs.jpg"
  },
  {
    slug: "isaiah-1-39",
    title: "Isaiah 1-39",
    summary: "Isaiah 1–39 confronts Judah’s idolatry, corrupt leadership, and oppression with warnings that Assyria and Babylon will become instruments of judgment. Yet alongside those warnings stands a remarkable hope: God will purify His people, raise up a king from David’s line, restore Jerusalem, and extend His blessing and justice to the nations.",
    bibleProjectUrl: "https://bibleproject.com/videos/isaiah-1-39",
    streamSrc: "https://stream.mux.com/8eEAqV5uDN8HC00Ma4x4X1Qh91eqLY4ws00BAZ02cdFQ100/high.mp4?download=isaiah-1-39.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00142-14-isaiah-1-39.pdf",
    image: "img-2026-00072-1-48-isaiah.jpg"
  },
  {
    slug: "isaiah-40-66",
    title: "Isaiah 40-66",
    summary: "Isaiah 40–66 turns from judgment toward comfort and restoration for a people facing exile. These chapters develop the hope of God returning to His people, the work of His servant, the renewal of Jerusalem, and ultimately a new creation in which God’s salvation reaches beyond Israel to embrace the nations.",
    bibleProjectUrl: "https://bibleproject.com/videos/isaiah-40-66",
    streamSrc: "https://stream.mux.com/4eHLEEp01WP2ZRZ502NXjBOZZP6BkrH5vEZgqvKIcV00IM/high.mp4?download=isaiah-40-66.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00143-15-isaiah-40-66.pdf",
    image: "img-2026-00072-1-48-isaiah.jpg"
  },
  {
    slug: "jeremiah",
    title: "Jeremiah",
    summary: "Jeremiah speaks into Judah’s final years before Jerusalem’s destruction, confronting idolatry, injustice, corrupt leadership, and persistent covenant unfaithfulness. He warns that Babylonian exile is coming and then lives through the tragedy himself, yet the book also looks beyond judgment toward God’s grace, a renewed covenant, and hearts transformed to know Him.",
    bibleProjectUrl: "https://bibleproject.com/videos/jeremiah",
    streamSrc: "https://stream.mux.com/jz7SoAfl01jEdU3nojIh9FSgR5wxxYbjK3T6BhJgwTMU/high.mp4?download=jeremiah.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00144-16-jeremiah.pdf",
    image: "img-2026-00073-24-jeremiah.jpg"
  },
  {
    slug: "lamentations",
    title: "Lamentations",
    summary: "Lamentations gives voice to the grief that followed the destruction of Jerusalem and the suffering of exile. Through five carefully crafted poems, the book refuses to minimize pain, allowing confession, protest, sorrow, and prayer to stand before God honestly. It reminds us that lament is not faithlessness but an important part of faithful life in a broken world.",
    bibleProjectUrl: "https://bibleproject.com/videos/lamentations",
    streamSrc: "https://stream.mux.com/23QyuBJVJca17RnoITUJdLUEzwuISerAfOZiHEEyGD4/high.mp4?download=lamentations.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00201-37-lamentations.pdf",
    image: "img-2026-00074-25-lamentations.jpg"
  },
  {
    slug: "ezekiel-1-33",
    title: "Ezekiel 1-33",
    summary: "Ezekiel 1–33 follows an exiled priest who encounters God’s glory far from Jerusalem and is commissioned to explain why judgment has come. Through dramatic visions and symbolic actions, Ezekiel exposes Israel’s idolatry and injustice, describes God’s presence departing the temple, and announces Jerusalem’s fall while preserving the promise that judgment will not be the final word.",
    bibleProjectUrl: "https://bibleproject.com/videos/ezekiel-1-33",
    streamSrc: "https://stream.mux.com/S5xIHejldSKMcnY3eyqlrozVjoZAhsIIdIxvHO701uWY/high.mp4?download=ezekiel-1-33.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00145-17-ezekiel-1-33.pdf",
    image: "img-2026-00075-1-48-ezekiel.jpg"
  },
  {
    slug: "ezekiel-34-48",
    title: "Ezekiel 34-48",
    summary: "Ezekiel 34–48 shifts from Jerusalem’s fall to a sweeping vision of restoration. God promises a new Davidic shepherd, new hearts, and His Spirit within His people, then expands the hope toward the defeat of evil, a renewed temple and city, and a river of life that transforms creation as God’s presence returns.",
    bibleProjectUrl: "https://bibleproject.com/videos/ezekiel-34-48",
    streamSrc: "https://stream.mux.com/Js945DhitoDwD2kF9VVBc69FWr02ZRPL4V8zSnBVUe34/high.mp4?download=ezekiel-34-48.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00146-18-ezekiel-34-48.pdf",
    image: "img-2026-00075-1-48-ezekiel.jpg"
  },
  {
    slug: "daniel",
    title: "Daniel",
    summary: "Daniel brings together stories of faithfulness in exile with symbolic visions about the rise and fall of powerful kingdoms. Daniel and his friends show what it looks like to remain loyal to God under pressure, while the visions expose how human empires become beastly when they exalt themselves and point toward God’s everlasting kingdom.",
    bibleProjectUrl: "https://bibleproject.com/videos/daniel",
    streamSrc: "https://stream.mux.com/O00snPn01lnnfWV01p019xE9NNUni6wD5wO8b1KwZNScJ5s/high.mp4?download=daniel.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00199-40-daniel.pdf",
    image: "img-2026-00076-28-daniel.jpg"
  },
  {
    slug: "hosea",
    title: "Hosea",
    summary: "Hosea uses the prophet’s own marriage and family as a painful picture of Israel’s broken covenant relationship with God. Israel’s idolatry and dependence on other nations bring real judgment, yet God’s persistent commitment remains stronger than their unfaithfulness, leaving the book with hope that He will heal, restore, and renew His people.",
    bibleProjectUrl: "https://bibleproject.com/videos/hosea",
    streamSrc: "https://stream.mux.com/F00pcpKlLEtFAwunZDoTSZKc01oPlRNz7YgCSNrLwidVQ/high.mp4?download=hosea.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00147-19-hosea.pdf",
    image: "img-2026-00077-29-hosea.jpg"
  },
  {
    slug: "joel",
    title: "Joel",
    summary: "Joel begins with a devastating locust plague and uses that crisis to explore the Day of the Lord, calling God’s people to genuine repentance rather than outward display. The book then widens the horizon toward God pouring out His Spirit, confronting violent nations, and bringing renewed blessing to His people and His world.",
    bibleProjectUrl: "https://bibleproject.com/videos/joel",
    streamSrc: "https://stream.mux.com/cnErnF3I4ZBrO8hX54U55HC5Qbx7d01rfpPXYxEHi00lE/high.mp4?download=joel.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00148-20-joel.pdf",
    image: "img-2026-00078-30-joel.jpg"
  },
  {
    slug: "amos",
    title: "Amos",
    summary: "Amos confronts a prosperous Israel whose religious activity hides deep injustice, exploitation, and indifference toward the vulnerable. He insists that worship cannot be separated from righteous relationships and calls for justice to shape the life of God’s people. Judgment and exile are coming, yet the book still preserves a final hope of restoration.",
    bibleProjectUrl: "https://bibleproject.com/videos/amos",
    streamSrc: "https://stream.mux.com/MntqpD8nPSJPa9ggfjOoMcth2PoZzbcezAJNCqLSWKs/high.mp4?download=amos.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00149-21-amos.pdf",
    image: "img-2026-00079-31-amos.jpg"
  },
  {
    slug: "obadiah",
    title: "Obadiah",
    summary: "Obadiah focuses on Edom’s pride and its violence against Judah, showing how arrogance and exploitation eventually turn back on those who practice them. The prophet widens Edom’s downfall into a picture of the Day of the Lord, when God will oppose violent nations, bring justice, and move His story toward restoration.",
    bibleProjectUrl: "https://bibleproject.com/videos/obadiah",
    streamSrc: "https://stream.mux.com/e54eYhANW2he2lipAqw027I02Ag5LLh7lCMIfQbGBgdTQ/high.mp4?download=obadiah.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00150-22-obadiah.pdf",
    image: "img-2026-00080-32-obadiah.jpg"
  },
  {
    slug: "jonah",
    title: "Jonah",
    summary: "Jonah is less about a reluctant missionary journey than about the heart of the prophet himself. Jonah resists God’s mercy toward Nineveh even after experiencing that mercy personally, and the book ends by confronting the reader with a question: Will we share God’s compassion for people we would rather see judged?",
    bibleProjectUrl: "https://bibleproject.com/videos/jonah",
    streamSrc: "https://stream.mux.com/72VJz01n9FdX01Mq02GYfH8FWrCfwsTQ1rjZbFuXNdtAoM/high.mp4?download=jonah.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00151-23-jonah.pdf",
    image: "img-2026-00081-33-jonah.jpg"
  },
  {
    slug: "micah",
    title: "Micah",
    summary: "Micah exposes leaders who enrich themselves through theft, corrupt prophets who sell reassuring messages, and a nation whose covenant life has been distorted by injustice. Judgment is unavoidable, yet Micah repeatedly interrupts his warnings with hope: God will preserve a remnant, raise up a faithful ruler, and bring peace and restoration beyond exile.",
    bibleProjectUrl: "https://bibleproject.com/videos/micah",
    streamSrc: "https://stream.mux.com/sQ4TgNlm4nGKVrWvY00reKgjlqUM5f9S2BWIlUwv3hXM/high.mp4?download=micah.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00152-24-micah.pdf",
    image: "img-2026-00082-34-micah.jpg"
  },
  {
    slug: "nahum",
    title: "Nahum",
    summary: "Nahum announces the downfall of Nineveh and the Assyrian empire, a system built through violence, bloodshed, and oppression. Its severe poetry reminds us that powerful nations are not beyond God’s justice and that injustice eventually bears destructive fruit, while offering hope that God remains a refuge for those who trust Him.",
    bibleProjectUrl: "https://bibleproject.com/videos/nahum",
    streamSrc: "https://stream.mux.com/wbjRIFZBq58kWa42z01019dpc6LMdnCjsoKLLRMgwTNHM/high.mp4?download=nahum.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00153-25-nahum.pdf",
    image: "img-2026-00083-35-nahum.jpg"
  },
  {
    slug: "habakkuk",
    title: "Habakkuk",
    summary: "Habakkuk records an honest conversation with God about violence, injustice, and the troubling rise of Babylon. The prophet does not receive an easy explanation, but he learns that faithfulness means trusting God’s character and timing even when circumstances remain dark. By the end, Habakkuk moves from protest to worship and confident hope.",
    bibleProjectUrl: "https://bibleproject.com/videos/habakkuk",
    streamSrc: "https://stream.mux.com/pTt2bB00yyDfm5yxGJGWeVf727oKGDaGpUr1ejIgzgQ4/high.mp4?download=habakkuk.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00154-26-habakkuk.pdf",
    image: "img-2026-00084-36-habakkuk.jpg"
  },
  {
    slug: "zephaniah",
    title: "Zephaniah",
    summary: "Zephaniah presents the Day of the Lord as both judgment and purification, confronting the sin, violence, and false worship of Judah and the surrounding nations. Yet God’s justice opens the way for a different future—a humble, restored people and a renewed world in which God gathers His people and brings lasting joy.",
    bibleProjectUrl: "https://bibleproject.com/videos/zephaniah",
    streamSrc: "https://stream.mux.com/kjAdtqF00isi8bDgSxUv2ddIzmjrUKY3u9mS4hCaPyd00/high.mp4?download=zephaniah.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00155-27-zephaniah.pdf",
    image: "img-2026-00085-37-zephaniah.jpg"
  },
  {
    slug: "haggai",
    title: "Haggai",
    summary: "Haggai speaks to returned exiles who have rebuilt their own lives while leaving God’s temple in ruins. He challenges their misplaced priorities, calls them to repentance and covenant faithfulness, and encourages them to rebuild in hope, reminding them that their present obedience is connected to God’s larger promise of His presence and coming kingdom.",
    bibleProjectUrl: "https://bibleproject.com/videos/haggai",
    streamSrc: "https://stream.mux.com/pZRi77eK9R8MdBGDyC02r7MHTCMMg00gKAcZfC6q7DtEs/high.mp4?download=haggai.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00156-28-haggai.pdf",
    image: "img-2026-00086-38-haggai.jpg"
  },
  {
    slug: "zechariah",
    title: "Zechariah",
    summary: "Zechariah uses a remarkable series of visions, symbols, and prophetic poems to encourage a discouraged post-exile community. The book calls God’s people to repentance and faithfulness while looking toward a purified Jerusalem, renewed worship, a future priestly King, and the coming kingdom of God that will ultimately bring restoration to creation.",
    bibleProjectUrl: "https://bibleproject.com/videos/zechariah",
    streamSrc: "https://stream.mux.com/J2VrrthtfMUEhNLNWIvdst9ovEsCBoAwC00JbS01JCBC8/high.mp4?download=zechariah.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00157-29-zechariah.pdf",
    image: "img-2026-00087-39-zechariah.jpg"
  },
  {
    slug: "malachi",
    title: "Malachi",
    summary: "Malachi confronts a post-exile community that has grown cynical and careless in worship, marriage, generosity, and justice. Through a series of disputes, God exposes their unfaithfulness while preserving a faithful remnant and promising a coming messenger, a purifying Day of the Lord, and the future restoration toward which the Torah and Prophets have been pointing.",
    bibleProjectUrl: "https://bibleproject.com/videos/malachi",
    streamSrc: "https://stream.mux.com/qsffsziguotrr00hG6fmDFt3qwbnhHny5GmQVKxtyc00I/high.mp4?download=malachi.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00158-30-malachi.pdf",
    image: "img-2026-00088-40-malachi.jpg"
  },
  {
    slug: "1-and-2-chronicles",
    title: "1st and 2nd Chronicles",
    summary: "First and Second Chronicles retell Israel’s story from Adam through the return from exile with special attention to David, the temple, and the kings of Judah. As the final book of the Hebrew Bible, Chronicles looks backward in order to sustain hope forward, leaving readers waiting for the promised King, renewed worship, and the ultimate return from exile.",
    bibleProjectUrl: "https://bibleproject.com/videos/1-and-2-chronicles",
    streamSrc: "https://stream.mux.com/k02iIOIASBRpdsdZX762jRd015pOGZHM91qQVPvys7iJo/high.mp4?download=1-and-2-chronicles.mp4",
    transcriptUrl: "https://resources.faithchangeseverything.org/documents/bible-studies/old-testement/doc-2026-00200-41-1-2-chronicles.pdf",
    image: "img-2026-00089-41-chronicles.jpg"
  }
] as const;

export const oldTestamentLessons: BibleStudyLessonSummary[] = oldTestamentSource.map((lesson) => ({
  slug: lesson.slug,
  title: lesson.title,
  summary: lesson.summary,
  href: `/bible-studies/old-testament/${lesson.slug}`,
  imageSrc: `/images/bible-studies/old-testament/${lesson.image}`,
  imageAlt: `BibleProject overview illustration for ${lesson.title}`,
  video: {
    title: lesson.title,
    description: `Watch the BibleProject overview for ${lesson.title} and see how this book or section contributes to the larger story of the Old Testament.`,
    href: lesson.bibleProjectUrl,
    streamSrc: lesson.streamSrc,
    ownerName: "BibleProject",
    ownerUrl: "https://bibleproject.com/",
    attribution: "BibleProject is the author and owner of this video.",
  },
  resourcesOwnerName: "BibleProject",
  resourcesOwnerUrl: "https://bibleproject.com/",
  resourcesAttribution:
    "BibleProject is the author and owner of these resources. These materials are provided in their original, unaltered form.",
  resources: [
    {
      title: "Video Transcript",
      description:
        "Read the complete teaching transcript if you prefer to read instead of, or in addition to, watching the video.",
      href: lesson.transcriptUrl,
      actionLabel: "Open Transcript",
    },
  ],
}));

export const oldTestamentSeriesDetail: BibleStudySeriesDetail = {
  slug: "old-testament",
  title: "Old Testament",
  introduction:
    "The Old Testament is the foundation of the biblical story. This 41-lesson series follows its books and major movements as one unfolding story, helping us see God’s character, covenant purposes, and the hope that prepares the way for Christ.",
  overviewTitle: "Understanding the Old Testament",
  lessonsTitle: "Explore the Old Testament",
  lessonsDescription:
    "Begin with the TaNaK overview, then continue through the Old Testament lessons in order at your own pace.",
  pastorIntroduction: {
    title: "A Personal Introduction from Pastor Richard",
    excerpt:
      "The Old Testament is the foundation of the biblical story. It introduces us to creation, humanity’s rebellion, God’s covenant promises, the nation of Israel, the law, the prophets, the wisdom writings, and the long expectation that God would one day bring restoration and redemption. Yet many of us have learned to read the Old Testament simply as a collection of individual books rather than as one unfolding story. This series is designed to help us step back and see that larger picture.\n\nWe will begin with the TaNaK, the traditional three-part arrangement of the Hebrew Scriptures: the Torah, the Nevi’im, and the Ketuvim. This ordering differs from the arrangement most Christians are familiar with today, and understanding it can help us see connections, themes, and patterns that are easy to miss when we read the books only in isolation. The opening BibleProject video explains why this ancient structure matters, and the remaining videos will then guide us through the Old Testament story from Genesis through Malachi, helping us see how each book contributes to the larger biblical narrative.\n\nAs you move through these 41 lessons, I encourage you not to rush. Read the Scriptures alongside the videos, take notes, ask questions, and pay attention to the themes that continue to appear again and again—God’s faithfulness, covenant, holiness, human rebellion, judgment, mercy, hope, and the promise of restoration. My prayer is that this series will help you see the Old Testament not as a distant collection of ancient writings, but as a unified story that reveals the character of God, prepares us to understand the coming of Jesus Christ, and deepens our understanding of the entire Bible.",
    imageSrc: "/images/pastor-richard.png",
    videoEmbedUrl:
      "https://customer-r3nvd2sbu94qp82j.cloudflarestream.com/2f86be6db1166bca169b5b298542ffad/iframe",
    compactLayout: true,
  },
  lessons: oldTestamentLessons,
  sourceNote:
    "The teaching videos and transcripts in this series are provided by BibleProject. Ownership and attribution appear with each third-party resource on the individual study pages.",
};