// Shared gallery dataset — used by the landing carousel and the /galeria masonry.
// Placeholders are colored rectangles (CSS gradients) until real photos land.
// `ratio` is width/height and drives both the masonry cell height and the
// carousel cell width (height is fixed there).

export interface GalleryItem {
  id: number;
  title: string;
  tag: string;
  ratio: number;   // width / height
  grad: string;    // CSS background for the placeholder
}

export const galleryItems: GalleryItem[] = [
  { id: 1,  title: "Cuarto de floración",   tag: "Indoor",      ratio: 0.78, grad: "linear-gradient(150deg,#3B5A3A,#1f3322)" },
  { id: 2,  title: "Cogollo en macro",      tag: "Genética",    ratio: 1.5,  grad: "linear-gradient(150deg,#4A6B47,#2a4630)" },
  { id: 3,  title: "Sustrato vivo",         tag: "Cultivo",     ratio: 0.75, grad: "linear-gradient(150deg,#8a5a44,#5a352a)" },
  { id: 4,  title: "Análisis HPLC",         tag: "Laboratorio", ratio: 1.0,  grad: "linear-gradient(150deg,#b08a4a,#6b4f24)" },
  { id: 5,  title: "Riego por goteo",       tag: "Indoor",      ratio: 1.42, grad: "linear-gradient(150deg,#2f5752,#193733)" },
  { id: 6,  title: "Tricomas al detalle",   tag: "Genética",    ratio: 0.85, grad: "linear-gradient(150deg,#6b6f3a,#41451f)" },
  { id: 7,  title: "Curado en frasco",      tag: "Curado",      ratio: 1.18, grad: "linear-gradient(150deg,#a99f88,#6c6453)" },
  { id: 8,  title: "Plántula día 7",        tag: "Cultivo",     ratio: 0.7,  grad: "linear-gradient(150deg,#2c4a2b,#142619)" },
  { id: 9,  title: "Cosecha manual",        tag: "Cultivo",     ratio: 1.6,  grad: "linear-gradient(150deg,#9a4f3a,#5c2d21)" },
  { id: 10, title: "Banco genético",        tag: "Genética",    ratio: 1.0,  grad: "linear-gradient(150deg,#8FA68B,#566f53)" },
  { id: 11, title: "Sala de secado",        tag: "Curado",      ratio: 0.8,  grad: "linear-gradient(150deg,#224236,#10231e)" },
  { id: 12, title: "Espectro LED",          tag: "Indoor",      ratio: 1.32, grad: "linear-gradient(150deg,#8a6f3c,#52401f)" },
  { id: 13, title: "Control de clima",      tag: "Indoor",      ratio: 0.92, grad: "linear-gradient(150deg,#45564a,#283129)" },
  { id: 14, title: "Trazabilidad por lote", tag: "Laboratorio", ratio: 1.45, grad: "linear-gradient(150deg,#5a3f50,#31212d)" },
  { id: 15, title: "Hoja en contraluz",     tag: "Genética",    ratio: 0.78, grad: "linear-gradient(150deg,#567d4e,#31502c)" },
  { id: 16, title: "Equipo South Labs",     tag: "Equipo",      ratio: 1.12, grad: "linear-gradient(150deg,#a3895f,#67533a)" },
];
