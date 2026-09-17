export interface Client {
  name: string;
  /** Pfad relativ zu src/assets; ohne Logo wird der Name als Text gesetzt. */
  logo?: string;
  size?: "lg";
}

export const CLIENTS: Client[] = [
  { name: "Volkswagen", logo: "logos/volkswagen.png", size: "lg" },
  { name: "Porsche", logo: "logos/porsche.png", size: "lg" },
  { name: "Heineken", logo: "logos/heineken.png", size: "lg" },
  { name: "Nord Stream", logo: "logos/nordstream.png" },
  { name: "Nord Stream 2", logo: "logos/nordstream2.png" },
  { name: "Continental", logo: "logos/continental.png" },
  { name: "Selgros", logo: "logos/selgros.png" },
  { name: "Auswärtiges Amt", logo: "logos/auswaertiges-amt.png" },
  { name: "Hilton", logo: "logos/hilton.png" },
  { name: "Siemens", logo: "logos/siemens.png" },
  { name: "thyssenkrupp", logo: "logos/thyssenkrupp.png" },
  { name: "Johnson & Johnson", logo: "logos/johnson-johnson.png" },
  { name: "SOS-Kinderdorf International", logo: "logos/sos-kinderdorf.png" },
  { name: "General Motors", logo: "logos/gm.png" },
  { name: "Hyatt", logo: "logos/hyatt.png" },
  { name: "AB InBev", logo: "logos/inbev.png" },
  { name: "Ambassador Hotel", logo: "logos/ambassador-hotel.png" },
  { name: "Audi", logo: "logos/audi.png" },
  { name: "Benteler", logo: "logos/benteler.png" },
  { name: "BILLA", logo: "logos/billa.png" },
  { name: "Schweizerische Eidgenossenschaft", logo: "logos/schweiz-konsulat.png" },
  { name: "СтройСервис", logo: "logos/stroyservis.png" },
  { name: "Aeroflot-Bank", logo: "logos/aeroflot-bank.png" },
  { name: "Care International", logo: "logos/care.png" },
  { name: "Bautech", logo: "logos/bautech.png" },
  { name: "Botschaft der Europäischen Union", logo: "logos/eu.png" },
  { name: "OSZE", logo: "logos/osce.png" },
  { name: "Mitsubishi", logo: "logos/mitsubishi.png" },
  { name: "Bau Grund AG", logo: "logos/baugrund.png" },
  { name: "Philipp Holzmann AG", logo: "logos/philipp-holzmann.png" },
  { name: "HOCHTIEF", logo: "logos/hochtief.png" },
  { name: "Hoffmann-La Roche", logo: "logos/roche.png" },
  { name: "STREIF", logo: "logos/streif.png" },
];
