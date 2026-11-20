/**
 * MACUQUINA TOURS — Turismo en Potosí, Bolivia
 * Toda la información de los lugares está en el arreglo `places` (abajo).
 * Para editar un recorrido, cambia sus textos aquí; la página se arma sola.
 */

/* ==========================================================================
   CONTACTO  → cambia estos datos por los tuyos
   ========================================================================== */
const CONTACT = {
  whatsapp: '59171234567',          // número con código de país, sin + ni espacios
  whatsappLabel: '+591 71234567',  // cómo se muestra en la página
  email: 'contacto@macuquinatours.com'
};

/* VIDEOS DE LA HISTORIA DE POTOSÍ → pega cada enlace de YouTube entre las comillas.
   Los espacios que dejes vacíos ('') no se muestran. Puedes usar 1, 2, 3, 4 o los 5. */
const HISTORIA_VIDEO = [
  'https://youtu.be/wQvbu-Ytd6U?si=HrB501rzfCdevh88',  // VIDEO 1  →  'https://youtu.be/XXXXXXXXXXX'
  'https://youtu.be/HiUsuvApf-s?si=2mQHoAso0m5K5xLm',  // VIDEO 2
  'https://youtu.be/6ZBgytMGEns?si=Hx9Duq9INeWBT25d',  // VIDEO 3
  'https://youtu.be/Z0244YeaNcg?si=FvQPg1VoQ894aJcA',  // VIDEO 4
  ''   // VIDEO 5
];

/* ==========================================================================
   LUGARES Y RECORRIDOS
   zone: 'centro' | 'cerro' | 'aventura'
   image: imagen del lugar, junto a index.html (reemplázala por tu foto con el mismo nombre)
   price: (opcional) escribe por ejemplo price: 'Bs 150' dentro del lugar para mostrar el precio
   ========================================================================== */
const places = [
  {
    id: 'city-tour',
    zone: 'centro', zoneLabel: 'Centro histórico',
    name: 'City Tour Colonial Completo',
    image: 'city-tour.png',
    short: 'El recorrido más completo: plazas, conventos, catedral, Casa de Moneda y la torre con la mejor vista de la ciudad.',
    about: 'Un paseo a pie por el centro de la Villa Imperial, declarada Patrimonio de la Humanidad por la UNESCO. Recorres en una sola mañana o tarde los lugares más emblemáticos de Potosí con guía local.',
    duration: '3 a 4 horas', level: 'Fácil · caminata', language: 'Español / inglés',
    schedule: 'Salidas diarias (mañana y tarde)',
    pickup: { name: 'Plaza 10 de Noviembre', note: 'Frente a la Catedral, en el corazón del centro histórico. Aquí te esperamos con el guía de Macuquina Tours y empieza el recorrido.' },
    stops: [
      { name: 'Convento y templo de San Francisco', time: '20 min', text: 'Historia del convento y, si quieres, subida a la azotea.' },
      { name: 'Balcón de la Horca', time: '10 min', text: 'Un rincón con historia propia del Potosí colonial.' },
      { name: 'Catedral de Potosí', time: '20 min', text: 'Interior de la catedral y opción de subir al campanario.' },
      { name: 'Plaza 6 de Agosto', time: '10 min', text: 'Explicación de cómo era la ciudad en tiempos coloniales.' },
      { name: 'Colegio Pichincha', time: '10 min', text: 'Breve visita a las catacumbas que lo conectan con la catedral.' },
      { name: 'Casa Nacional de Moneda', time: '30 min', text: 'Entrada a la antigua Casa de la Moneda de Potosí.' },
      { name: 'Torre de la Compañía de Jesús', time: '20 min', text: 'Subida a la torre con vista de la ciudad.' },
      { name: 'Convento de Santa Teresa', time: '30 min', text: 'Claustros y templo de un convento donde aún viven monjas de clausura.' }
    ],
    end: { name: 'Plaza 10 de Noviembre', note: 'Regreso a pie al punto de partida.' },
    includes: ['Guía local', 'Entradas a los sitios del recorrido', 'Mapa y recomendaciones'],
    tips: ['Usa calzado cómodo: hay calles empedradas y cuestas.', 'Las subidas a torres y azoteas son opcionales.'],
    zonePin: 'centro'
  },
  {
    id: 'misa-de-las-12',
    legendId: 'la-misa-de-las-12',
    zone: 'centro', zoneLabel: 'Recorrido nocturno · Viernes',
    name: 'La Misa de las 12 · Ecos de la Villa Imperial',
    image: 'la-misa-de-las-12.jpg',
    short: 'Ruta nocturna teatralizada con actores, faroles y la escenificación de la leyenda más famosa de Potosí.',
    about: 'Descubre la historia política, el comercio de la plata y las jerarquías coloniales de Potosí a través de una ruta nocturna teatralizada, que termina con la escenificación de la leyenda de La Misa de las 12.',
    duration: '2 horas', level: 'Fácil · a pie', language: 'Español',
    schedule: 'Todos los viernes, 19:30 hrs',
    price: 'Bs. 70 por persona',
    pickup: { name: 'Atrio de la Catedral (Plaza 10 de Noviembre)', note: 'Recepción y sellado de pasaportes a las 19:30 hrs.' },
    stops: [
      { name: 'Plaza 10 de Noviembre y Catedral', time: '19:30 hrs', text: 'Recepción, sellado de pasaportes y relato sobre el control político y los toques de queda en la colonia.' },
      { name: 'Casa de Moneda', time: '20:00 hrs', text: 'Historia del comercio de la plata macuquina y cómo la vestimenta delataba el estatus social.' },
      { name: 'Arco de Cobija o Plaza 10 de Noviembre', time: '20:35 hrs', text: 'Intervención teatral con la beata vestida de saya y manto rumbo al templo.' },
      { name: 'Atrio colonial (San Francisco / La Merced)', time: '21:30 hrs', text: 'Escenificación de La Misa de las 12, entrega de monedas macuquinas y degustación caliente.' }
    ],
    end: { name: 'Atrio colonial (San Francisco / La Merced)', note: 'Cierre con la escenificación de la leyenda.' },
    includes: ['Recorrido guiado y teatralizado (2 horas)', 'Pasaporte de la Villa Imperial sellado con lacre', 'Material ilustrado de bolsillo', 'Bebida caliente y réplica de moneda macuquina'],
    tips: ['Promoción grupal: 4 personas pagan Bs. 210 (4×3).', 'Llega unos minutos antes para el sellado de pasaportes.', 'La noche en Potosí es fría: lleva ropa de abrigo.'],
    zonePin: 'centro'
  },
  {
    id: 'cerro-rico',
    zone: 'cerro', zoneLabel: 'Cerro Rico',
    name: 'Cerro Rico y Minas Cooperativas',
    image: 'cerro-rico.png',
    short: 'Entra al cerro que financió un imperio y conoce la vida de los mineros que aún trabajan en él.',
    about: 'El Cerro Rico, de más de 4.800 m de altura, es el símbolo de Potosí. Visitas una mina cooperativa en actividad, conoces el trabajo de los mineros y la tradición del Tío, guardián de la mina.',
    duration: '3 a 4 horas', level: 'Exigente · bajo tierra 1,5 a 2 h', language: 'Español / inglés',
    schedule: 'Salidas diarias en la mañana y en la tarde (consulta disponibilidad)',
    pickup: { name: 'Plaza 10 de Noviembre', note: 'Recojo en la plaza o en tu hotel del centro, según coordinemos.' },
    stops: [
      { name: 'Mercado Minero', time: '30 min', text: 'Compras los obsequios tradicionales para los mineros: hojas de coca, bebidas, guantes.' },
      { name: 'Equipamiento de seguridad', time: '15 min', text: 'Te entregamos casco, lámpara, botas y overol.' },
      { name: 'Traslado al Cerro Rico', time: '20 min', text: 'Subimos en vehículo hasta la entrada de una cooperativa minera en actividad.' },
      { name: 'Recorrido por las galerías', time: '1,5 a 2 h', text: 'Caminata por túneles junto a los mineros y visita al Tío de la mina.' },
      { name: 'Salida de la mina', time: '15 min', text: 'Vistas del cerro y de la ciudad desde la bocamina.' }
    ],
    end: { name: 'Plaza 10 de Noviembre', note: 'Regreso en vehículo al punto de recojo.' },
    includes: ['Guía experto en minería', 'Transporte desde y hacia el centro', 'Equipo de seguridad completo'],
    tips: ['No recomendado con claustrofobia, asma o problemas cardíacos.', 'Aclimátate al menos un día antes: la altura supera los 4.000 m.', 'Lleva un pañuelo para cubrirte la boca del polvo.', 'Mejor reservar entre semana: los domingos muchas cooperativas no trabajan.'],
    zonePin: 'cerro'
  },
  {
    id: 'casa-moneda',
    zone: 'centro', zoneLabel: 'Centro histórico',
    name: 'Casa Nacional de Moneda',
    image: 'casa-moneda.png',
    short: 'La antigua fábrica de monedas de plata del Imperio español y uno de los mejores museos de Bolivia.',
    about: 'Aquí se acuñaba la plata que salía del Cerro Rico. Hoy es museo: máquinas originales de madera, arte religioso y arqueología en un edificio del siglo XVIII.',
    duration: '1,5 a 2 horas', level: 'Fácil', language: 'Español / inglés',
    schedule: 'Visitas guiadas varias veces al día',
    pickup: { name: 'Plaza 10 de Noviembre', note: 'Salimos caminando juntos hacia la Casa de Moneda.' },
    stops: [
      { name: 'Caminata por calles coloniales', time: '10 min', text: 'Corto paseo desde la plaza hasta el museo.' },
      { name: 'Ingreso y patio principal', time: '15 min', text: 'Entrada al edificio, patio con fuente y contexto histórico.' },
      { name: 'Sala de acuñación', time: '40 min', text: 'Prensas y maquinaria original de madera con la que se fabricaban las monedas.' },
      { name: 'Salas de arte y arqueología', time: '40 min', text: 'Arte religioso, piezas coloniales y objetos arqueológicos.' }
    ],
    end: { name: 'Plaza 10 de Noviembre', note: 'Regreso a pie al punto de partida.' },
    includes: ['Guía', 'Entrada a la Casa Nacional de Moneda'],
    tips: ['Lleva efectivo por si hay cobro de cámara.'],
    zonePin: 'centro'
  },
  {
    id: 'catedral',
    zone: 'centro', zoneLabel: 'Centro histórico',
    name: 'Catedral y Plaza 10 de Noviembre',
    image: 'catedral.png',
    short: 'La plaza principal, la catedral y las catacumbas que conectan con el Colegio Pichincha.',
    about: 'Un recorrido corto por el núcleo cívico y religioso de la ciudad: la plaza, la catedral con su campanario y los rincones históricos que la rodean.',
    duration: '1 a 1,5 horas', level: 'Fácil', language: 'Español / inglés',
    schedule: 'Salidas diarias',
    pickup: { name: 'Plaza 10 de Noviembre', note: 'Junto a la fuente de la plaza principal. Comenzamos con una breve explicación de su historia.' },
    stops: [
      { name: 'Catedral de Potosí', time: '25 min', text: 'Interior y opción de subir al campanario para ver la ciudad.' },
      { name: 'Balcón de la Horca', time: '10 min', text: 'Una parada con historia a pocos pasos.' },
      { name: 'Plaza 6 de Agosto', time: '10 min', text: 'La otra plaza histórica del centro.' },
      { name: 'Colegio Pichincha y catacumbas', time: '15 min', text: 'Breve recorrido por los pasajes que lo unen con la catedral.' }
    ],
    end: { name: 'Plaza 10 de Noviembre', note: 'Cierre del recorrido en el punto de partida.' },
    includes: ['Guía', 'Entradas de los sitios'],
    tips: ['Subir al campanario es opcional.'],
    zonePin: 'centro'
  },
  {
    id: 'torre-compania',
    zone: 'centro', zoneLabel: 'Centro histórico',
    name: 'Torre de la Compañía de Jesús',
    image: 'torre-compania.png',
    short: 'Sube a la torre barroca y mira Potosí y el Cerro Rico desde las alturas.',
    about: 'La torre es uno de los miradores más fotografiados del centro. Subes por su escalera y ves los techos coloniales, las cúpulas y el Cerro Rico de fondo.',
    duration: '1 hora', level: 'Fácil · escaleras', language: 'Español / inglés',
    schedule: 'Salidas diarias, ideal al atardecer',
    pickup: { name: 'Plaza 10 de Noviembre', note: 'Salida a pie con el guía.' },
    stops: [
      { name: 'Calles coloniales del centro', time: '10 min', text: 'Paseo por las calles de piedra hasta la torre.' },
      { name: 'Torre de la Compañía de Jesús', time: '25 min', text: 'Historia del templo y subida a la torre.' },
      { name: 'Mirador de la torre', time: '15 min', text: 'Vista de la ciudad y del Cerro Rico. Hora ideal para fotos.' }
    ],
    end: { name: 'Plaza 10 de Noviembre', note: 'Regreso a pie al punto de partida.' },
    includes: ['Guía', 'Entrada a la torre'],
    tips: ['Lleva abrigo: arriba suele soplar viento.', 'Con la altura, sube despacio.'],
    zonePin: 'centro'
  },
  {
    id: 'santa-teresa',
    zone: 'centro', zoneLabel: 'Centro histórico',
    name: 'Convento y Museo de Santa Teresa',
    image: 'santa-teresa.png',
    short: 'Claustros, templo y arte virreinal en un convento donde aún viven monjas de clausura.',
    about: 'Una de las visitas más especiales de Potosí. Recorres los claustros y el templo del convento con guía, entre pinturas y objetos de la época virreinal.',
    duration: '1 a 1,5 horas', level: 'Fácil', language: 'Español / inglés',
    schedule: 'Visitas guiadas en horarios fijos (consulta)',
    pickup: { name: 'Plaza 10 de Noviembre', note: 'Salida a pie con el guía.' },
    stops: [
      { name: 'Caminata por el centro', time: '10 min', text: 'Paseo corto hasta el convento.' },
      { name: 'Claustros del convento', time: '30 min', text: 'Patios y galerías del convento.' },
      { name: 'Templo y museo', time: '30 min', text: 'Arte religioso y piezas virreinales.' }
    ],
    end: { name: 'Plaza 10 de Noviembre', note: 'Regreso a pie al punto de partida.' },
    includes: ['Guía', 'Entrada al convento y museo'],
    tips: ['Viste con respeto: es un lugar religioso en uso.', 'Se visita solo con guía.'],
    zonePin: 'centro'
  },
  {
    id: 'san-francisco',
    zone: 'centro', zoneLabel: 'Centro histórico',
    name: 'Convento de San Francisco y azotea',
    image: 'san-francisco.png',
    short: 'Uno de los conventos más antiguos de la ciudad, con museo y azotea frente al Cerro Rico.',
    about: 'Visitas el templo, el convento y el pequeño museo, y subes a la azotea para ver los techos de Potosí con el Cerro Rico detrás.',
    duration: '1 a 1,5 horas', level: 'Fácil', language: 'Español / inglés',
    schedule: 'Salidas diarias',
    pickup: { name: 'Plaza 10 de Noviembre', note: 'Salida a pie con el guía.' },
    stops: [
      { name: 'Camino al convento', time: '10 min', text: 'Corto paseo por las calles del centro.' },
      { name: 'Templo y convento de San Francisco', time: '25 min', text: 'Historia y arquitectura del conjunto.' },
      { name: 'Museo del convento', time: '15 min', text: 'Una pequeña muestra de arte y objetos históricos.' },
      { name: 'Azotea', time: '15 min', text: 'Vista de los techos coloniales y del Cerro Rico.' }
    ],
    end: { name: 'Plaza 10 de Noviembre', note: 'Regreso a pie al punto de partida.' },
    includes: ['Guía', 'Entrada al convento, museo y azotea'],
    tips: ['La subida a la azotea es por escaleras estrechas.'],
    zonePin: 'centro'
  },
  {
    id: 'ojo-inca',
    zone: 'aventura', zoneLabel: 'Naturaleza y aventura',
    name: 'Ojo del Inca · Laguna de Tarapaya',
    image: 'ojo-del-inca.png',
    short: 'Una laguna circular de aguas termales a unos 26 km de la ciudad. Perfecta para relajarse.',
    about: 'El Ojo del Inca es una laguna casi perfectamente circular cuyas aguas rondan los 35 °C, ubicada cerca de la comunidad de Tarapaya, a unos 26 km de Potosí. Se visita en media jornada con tiempo para caminar, bañarte y comer al aire libre.',
    duration: '3 a 4 horas', level: 'Fácil', language: 'Español / inglés',
    schedule: 'Salida en la mañana o en la tarde',
    pickup: { name: 'Plaza 10 de Noviembre', note: 'Salida en vehículo desde el centro.' },
    stops: [
      { name: 'Viaje a Tarapaya', time: '40 min', text: 'Traslado de unos 26 km desde Potosí.' },
      { name: 'Caminata hasta el Ojo del Inca', time: '20 min', text: 'Corto paseo hasta la laguna.' },
      { name: 'Baño termal', time: '1 h', text: 'Disfruta del agua tibia en las zonas habilitadas.' },
      { name: 'Almuerzo tipo pícnic', time: '30 min', text: 'Comida al aire libre junto a la laguna.' },
      { name: 'Regreso a Potosí', time: '40 min', text: 'Retorno por la misma ruta.' }
    ],
    end: { name: 'Plaza 10 de Noviembre', note: 'Te dejamos en el mismo punto del recojo.' },
    includes: ['Guía', 'Transporte ida y vuelta', 'Ingreso a las aguas termales', 'Almuerzo tipo pícnic'],
    tips: ['Trae traje de baño, toalla y ropa de cambio.', 'Báñate solo en las zonas habilitadas: en las partes profundas hay corrientes fuertes.'],
    zonePin: 'tarapaya'
  },
  {
    id: 'kari-kari',
    zone: 'aventura', zoneLabel: 'Naturaleza y aventura',
    name: 'Lagunas del Kari Kari · 2 días',
    image: 'kari-kari.png',
    short: 'Trekking por las lagunas artificiales coloniales de la cordillera, con noche en una comunidad.',
    about: 'Una caminata de dos días por las serranías del Kari Kari, donde están las lagunas y manantiales artificiales que abastecían a la ciudad colonial, con vistas del Cerro Rico y una noche en casa de familia.',
    duration: '2 días / 1 noche', level: 'Moderado a exigente', language: 'Español',
    schedule: 'Salida en la mañana (reserva con 1 día de anticipación)',
    pickup: { name: 'Plaza 10 de Noviembre', note: 'Salida en vehículo hacia el inicio de la caminata.' },
    stops: [
      { day: 'Día 1', name: 'Traslado al inicio del sendero', time: '1 h', text: 'Salimos en vehículo desde el centro hacia la cordillera.' },
      { day: 'Día 1', name: 'Caminata por las lagunas', time: '4 a 5 h', text: 'Sendero junto a lagunas y manantiales artificiales, con vistas del Cerro Rico. Almuerzo pícnic en ruta.' },
      { day: 'Día 1', name: 'Noche en casa de familia', time: 'Tarde / noche', text: 'Cena y alojamiento en una comunidad local.' },
      { day: 'Día 2', name: 'Desayuno y caminata final', time: 'Mañana', text: 'Segundo tramo del sendero y almuerzo.' },
      { day: 'Día 2', name: 'Regreso a Potosí', time: 'Tarde', text: 'Traslado de vuelta a la ciudad.' }
    ],
    end: { name: 'Plaza 10 de Noviembre', note: 'Llegada al mismo punto del recojo.' },
    includes: ['Guía', 'Transporte', 'Una noche de alojamiento', 'Comidas indicadas (pícnic, cena, desayuno)', 'Entradas'],
    tips: ['Requiere buena condición física y aclimatación a la altura.', 'Lleva ropa de abrigo, impermeable y bolsa de dormir si lo pides.', 'No apto para personas con movilidad reducida.', 'El recorrido exacto puede ajustarse según clima y estado del sendero.'],
    zonePin: 'kari-kari'
  }
];

/* ==========================================================================
   ZONAS DEL MAPA
   ========================================================================== */
const mapZones = {
  'centro': {
    tag: 'ZONA 01', title: 'Centro histórico',
    desc: 'Plazas, conventos, la catedral, la Casa de Moneda y las torres. Casi todo se recorre a pie desde la Plaza 10 de Noviembre.'
  },
  'cerro': {
    tag: 'ZONA 02', title: 'Cerro Rico',
    desc: 'La montaña de plata que dio origen a Potosí y donde aún trabajan los mineros cooperativistas.'
  },
  'tarapaya': {
    tag: 'ZONA 03', title: 'Tarapaya · Ojo del Inca',
    desc: 'A unos 26 km de la ciudad, una laguna circular de aguas termales rodeada de paisaje andino. La ubicación en el mapa es orientativa.'
  },
  'kari-kari': {
    tag: 'ZONA 04', title: 'Cordillera Kari Kari',
    desc: 'Serranías y lagunas artificiales de la época colonial, ideales para caminar y conocer comunidades.'
  }
};

/* ==========================================================================
   ÍCONOS (SVG en línea)
   ========================================================================== */
const ICON = {
  clock: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  level: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V14M10 20V9M16 20V4M22 20H2"/></svg>',
  cal:   '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
  lang:  '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></svg>',
  pin:   '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  flag:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 21V4M5 4h12l-2 4 2 4H5"/></svg>',
  wa:    '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.8-1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.4z"/></svg>'
};

document.addEventListener('DOMContentLoaded', () => {

  const $ = (s, el = document) => el.querySelector(s);
  const esc = (t) => String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const waLink = (msg) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`;
  const priceText = (p) => p.price ? p.price : 'Consulta el precio';
  const legendsFor = (id) => (typeof legends !== 'undefined' ? legends : []).filter(l => l.places.includes(id));
  const placeName = (id) => (places.find(p => p.id === id) || {}).name || id;

  /* 1. Menú móvil */
  const menuBtn = $('#menu-btn'), nav = $('#nav');
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }));

  /* 2. Tarjetas */
  const grid = $('#cards-grid');
  const cardHTML = (p) => `
    <article class="place-card" data-zone="${p.zone}" data-id="${p.id}" tabindex="0" aria-label="${esc(p.name)}">
      <div class="card-media">
        <img class="card-img" src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy">
        <span class="card-chip">${esc(p.zoneLabel)}</span>
        <span class="card-dur">${ICON.clock.replace('width="22" height="22"', 'width="13" height="13"')} ${esc(p.duration)}</span>
      </div>
      <div class="card-body">
        <span class="card-meta">${esc(p.level)}${legendsFor(p.id).length ? ` · <b class="card-lg">${legendsFor(p.id).length} ${legendsFor(p.id).length === 1 ? 'leyenda' : 'leyendas'}</b>` : ''}</span>
        <h3 class="card-title">${esc(p.name)}</h3>
        <p class="card-excerpt">${esc(p.short)}</p>
        <div class="card-route">
          <div class="r-start"><b>Recojo</b><span>${esc(p.pickup.name)}</span></div>
          <div class="r-end"><b>Final</b><span>${esc(p.end.name)}</span></div>
        </div>
        <div class="card-foot">
          <span class="card-price">${p.price ? 'Desde <strong>' + esc(p.price) + '</strong>' : esc(priceText(p))}</span>
          <button class="card-link" data-target="${p.id}">Ver recorrido <span aria-hidden="true">→</span></button>
        </div>
      </div>
    </article>`;
  grid.innerHTML = places.map(cardHTML).join('') + '<div class="empty" id="empty" hidden>No encontramos recorridos con esa búsqueda. Prueba con otra palabra.</div>';

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.place-card');
    if (card) openModal(card.dataset.id);
  });
  grid.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.classList.contains('place-card')) openModal(e.target.dataset.id);
  });

  /* 3. Buscador y filtros */
  const state = { q: '', zone: 'all' };
  const qInput = $('#q'), zoneSel = $('#zone-select'), pills = document.querySelectorAll('.pill'), count = $('#result-count'), empty = $('#empty');
  const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');

  function applyFilters() {
    const q = norm(state.q.trim());
    let n = 0;
    grid.querySelectorAll('.place-card').forEach(card => {
      const p = places.find(x => x.id === card.dataset.id);
      const hay = norm([p.name, p.short, p.zoneLabel, ...p.stops.map(s => s.name), ...legendsFor(p.id).map(l => l.title)].join(' '));
      const ok = (state.zone === 'all' || p.zone === state.zone) && (!q || hay.includes(q));
      card.style.display = ok ? '' : 'none';
      if (ok) n++;
    });
    empty.hidden = n !== 0;
    count.textContent = n === 1 ? '1 recorrido' : n + ' recorridos';
    pills.forEach(b => { const a = b.dataset.filter === state.zone; b.classList.toggle('active', a); b.setAttribute('aria-selected', a); });
    zoneSel.value = state.zone;
  }
  qInput.addEventListener('input', () => { state.q = qInput.value; applyFilters(); });
  zoneSel.addEventListener('change', () => { state.zone = zoneSel.value; applyFilters(); });
  pills.forEach(b => b.addEventListener('click', () => { state.zone = b.dataset.filter; applyFilters(); }));
  $('#search-form').addEventListener('submit', (e) => { e.preventDefault(); applyFilters(); $('#lugares').scrollIntoView({ behavior: 'smooth' }); });
  applyFilters();

  /* 4. Esquema de ruta (SVG) */
  function routeMapSVG(p) {
    const n = p.stops.length + 2, Wd = 640, Hd = 150, pad = 34;
    const pts = Array.from({ length: n }, (_, i) => [pad + i * (Wd - pad * 2) / (n - 1), Hd / 2 + 34 * Math.sin(i * 1.25 + .4)]);
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 1; i < n; i++) {
      const mx = (pts[i - 1][0] + pts[i][0]) / 2;
      d += ` C${mx},${pts[i - 1][1]} ${mx},${pts[i][1]} ${pts[i][0]},${pts[i][1]}`;
    }
    let nodes = '';
    pts.forEach(([x, y], i) => {
      if (i === 0) nodes += `<circle cx="${x}" cy="${y}" r="15" fill="#E60000" stroke="#fff" stroke-width="3"/><circle cx="${x}" cy="${y}" r="5" fill="#fff"/>`;
      else if (i === n - 1) nodes += `<circle cx="${x}" cy="${y}" r="15" fill="#0A0A0A" stroke="#fff" stroke-width="3"/><path d="M${x - 4},${y + 6} V${y - 6} H${x + 6} L${x + 3},${y - 2} L${x + 6},${y + 2} H${x - 4}" fill="#fff" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/>`;
      else nodes += `<circle cx="${x}" cy="${y}" r="13" fill="#fff" stroke="#A47551" stroke-width="2.5"/><text x="${x}" y="${y + 4.5}" text-anchor="middle" font-size="13" font-weight="700" fill="#1B1410" font-family="DM Sans, sans-serif">${i}</text>`;
    });
    return `<figure class="route-map">
      <svg viewBox="0 0 ${Wd} ${Hd}" role="img" aria-label="Esquema del recorrido de ${esc(p.name)}">
        <path d="${d}" fill="none" stroke="#E60000" stroke-width="3.5" stroke-dasharray="2 9" stroke-linecap="round"/>
        ${nodes}
      </svg>
      <div class="rm-legend"><span><i style="background:#E60000"></i>Recojo</span><span><i style="background:#fff;border:2px solid #A47551"></i>Paradas</span><span><i style="background:#0A0A0A"></i>Final</span></div>
      <figcaption>Esquema referencial, no está a escala.</figcaption>
    </figure>`;
  }

  /* 5. Línea de tiempo */
  function timelineHTML(p) {
    let h = `<div class="tl-item start"><span class="tl-dot">${ICON.pin.replace('width="20" height="20"', 'width="16" height="16"')}</span><div class="tl-body"><small>Punto de recojo</small><div class="tl-head"><strong>${esc(p.pickup.name)}</strong></div></div></div>`;
    let day = null, n = 0;
    p.stops.forEach(s => {
      if (s.day && s.day !== day) { day = s.day; h += `<div class="tl-day">${esc(day)}</div>`; }
      n++;
      h += `<div class="tl-item"><span class="tl-dot">${n}</span><div class="tl-body"><div class="tl-head"><strong>${esc(s.name)}</strong>${s.time ? `<span class="tl-time">${esc(s.time)}</span>` : ''}</div><p>${esc(s.text)}</p></div></div>`;
    });
    h += `<div class="tl-item end"><span class="tl-dot">${ICON.flag.replace('width="20" height="20"', 'width="16" height="16"')}</span><div class="tl-body"><small>Punto final</small><div class="tl-head"><strong>${esc(p.end.name)}</strong></div></div></div>`;
    return `<div class="timeline">${h}</div>`;
  }

  /* 6. Ficha del recorrido */
  const overlay = $('#modal-overlay'), modalContent = $('#modal-content'), mobileBar = $('#mobile-bar');
  let lastFocus = null;

  function openModal(id) {
    const p = places.find(x => x.id === id);
    if (!p) return;
    lastFocus = document.activeElement;
    const msg = 'Hola Macuquina Tours, quiero reservar: ' + p.name;
    modalContent.innerHTML = `
      <div class="dt-hero">
        <img src="${esc(p.image)}" alt="${esc(p.name)}">
        <div class="dt-hero-text"><span class="dt-chip">${esc(p.zoneLabel)}</span><h2 class="dt-title" id="modal-title">${esc(p.name)}</h2></div>
      </div>
      <div class="dt-body">
        <div class="dt-main">
          <div class="dt-facts">
            <div class="dt-fact">${ICON.clock}<div><small>Duración</small><strong>${esc(p.duration)}</strong></div></div>
            <div class="dt-fact">${ICON.level}<div><small>Dificultad</small><strong>${esc(p.level)}</strong></div></div>
            <div class="dt-fact">${ICON.cal}<div><small>Salidas</small><strong>${esc(p.schedule)}</strong></div></div>
            <div class="dt-fact">${ICON.lang}<div><small>Idioma</small><strong>${esc(p.language)}</strong></div></div>
          </div>

          <h3 class="dt-h">Descripción</h3>
          <p class="dt-about">${esc(p.about)}</p>

          <h3 class="dt-h">Dónde empieza y dónde termina</h3>
          <div class="dt-points">
            <div class="dt-point start"><span class="dt-point-ico">${ICON.pin}</span><div><small>Punto de recojo</small><strong>${esc(p.pickup.name)}</strong><p>${esc(p.pickup.note)}</p></div></div>
            <div class="dt-point end"><span class="dt-point-ico">${ICON.flag}</span><div><small>Punto final</small><strong>${esc(p.end.name)}</strong><p>${esc(p.end.note)}</p></div></div>
          </div>

          <h3 class="dt-h">Muestra del recorrido</h3>
          ${routeMapSVG(p)}

          <h3 class="dt-h">Qué harás, paso a paso</h3>
          ${timelineHTML(p)}

          ${p.legendId ? specialLegend(p) : legendsFor(p.id).length ? `<h3 class="dt-h">Leyendas de este lugar</h3>
          <div class="dt-lgbox">
            <p class="dt-lgbox-intro">Historias que se cuentan en <strong>${esc(p.name)}</strong>. Toca una leyenda para leerla aquí mismo.</p>
            ${legendsFor(p.id).map((l, i) => legendInFicha(l, p, i === 0)).join('')}
          </div>` : ''}
          ${MISA_LINK.includes(p.id) ? misaLink() : ''}

          <div class="dt-two">
            <div><h3 class="dt-h">Incluye</h3><ul class="list-ok">${p.includes.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>
            <div><h3 class="dt-h">Importante saber</h3><ul class="list-warn">${p.tips.map(i => `<li>${esc(i)}</li>`).join('')}</ul></div>
          </div>
        </div>

        <aside class="dt-book">
          <div class="book-price"><small>${p.price ? 'Desde' : 'Precio'}</small><strong>${esc(priceText(p))}</strong></div>
          <div class="book-rows">
            <div>${ICON.clock.replace('width="22" height="22"', 'width="18" height="18"')}<span>${esc(p.duration)}</span></div>
            <div>${ICON.pin.replace('width="20" height="20"', 'width="18" height="18"')}<span>Recojo: ${esc(p.pickup.name)}</span></div>
            <div>${ICON.flag.replace('width="20" height="20"', 'width="18" height="18"')}<span>Final: ${esc(p.end.name)}</span></div>
          </div>
          <div class="book-btns">
            <a class="btn btn-primary btn-block" target="_blank" rel="noopener" href="${waLink(msg)}">${ICON.wa} Reservar por WhatsApp</a>
            <button class="btn btn-secondary btn-block" id="modal-close-bottom">Seguir viendo lugares</button>
          </div>
          <p class="book-note">Te confirmamos disponibilidad y horario por WhatsApp.</p>
        </aside>
      </div>`;
    mobileBar.innerHTML = `<div><small style="color:#6F6258;font-size:.7rem">${p.price ? 'Desde' : 'Precio'}</small><br><strong>${esc(priceText(p))}</strong></div><a class="btn btn-primary" target="_blank" rel="noopener" href="${waLink(msg)}">Reservar</a>`;
    $('#modal-close-bottom').addEventListener('click', closeModal);
    overlay.scrollTop = 0;
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    $('#modal-close-btn').focus();
  }

  function closeModal() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }
  $('#modal-close-btn').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  modalContent.addEventListener('click', (e) => {
    const o = e.target.closest('[data-open]'); if (o) return openModal(o.dataset.open);
    const x = e.target.closest('[data-xp]'); if (x) return openLegend(x.dataset.xp, true);
    const b = e.target.closest('[data-legend]'); if (b) openLegend(b.dataset.legend);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (lgOverlay.classList.contains('active')) closeLegend();
    else if (overlay.classList.contains('active')) closeModal();
  });

  /* 6b. Leyendas de Potosí */
  const lgGrid = $('#legends-grid'), lgOverlay = $('#legend-overlay'), lgContent = $('#legend-content');
  let lgLastFocus = null;
  const moodClass = (m) => m === 'Leyenda popular' ? ' soft' : '';

  if (lgGrid && typeof legends !== 'undefined') {
    lgGrid.innerHTML = legends.map(l => `
      <article class="legend-card${l.image ? ' has-img' : ''}" data-legend="${l.id}" tabindex="0" aria-label="Leyenda: ${esc(l.title)}">
        ${l.image ? `<div class="legend-img"><img src="${esc(l.image)}" alt="" loading="lazy"><span class="legend-badge">${esc(l.badge || '')}</span></div>` : ''}
        <span class="legend-mood${moodClass(l.mood)}">${esc(l.mood)}</span>
        <h3>${esc(l.title)}</h3>
        <p>${esc(l.teaser)}</p>
        <span class="legend-where">${esc(l.where)}</span>
        <div class="legend-places">${l.places.map(id => `<span>${esc(placeName(id))}</span>`).join('')}</div>
        <span class="legend-read">Leer leyenda →</span>
      </article>`).join('');
    lgGrid.addEventListener('click', (e) => { const c = e.target.closest('.legend-card'); if (c) openLegend(c.dataset.legend); });
    lgGrid.addEventListener('keydown', (e) => { if (e.key === 'Enter' && e.target.classList.contains('legend-card')) openLegend(e.target.dataset.legend); });
  }

  /* Video de YouTube de una leyenda (campo video en legends.js) */
  function ytId(u) {
    const m = String(u || '').match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/);
    return m ? m[1] : '';
  }
  /* Devuelve el reproductor: YouTube (enlace) o archivo propio (.mp4/.webm/.mov) */
  function playerHTML(src, title) {
    if (Array.isArray(src)) return src.map(s => playerHTML(s, title)).join('');
    const id = ytId(src);
    if (id) return `<div class="vid-frame"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${esc(title)}" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`;
    if (String(src || '').trim()) return `<video class="vid-file" controls playsinline preload="metadata" src="${esc(src)}" title="${esc(title)}"></video>`;
    return '';
  }
  function videoHTML(l) {
    const pl = playerHTML(l.video, l.title);
    return `<div class="dt-video"><h5>Video de esta historia</h5>${pl || '<p class="vid-empty">Próximamente: aquí podrás ver esta historia en video.</p>'}</div>`;
  }

  const hv = $('#historia-video');
  if (hv) {
    const pl = playerHTML(HISTORIA_VIDEO, 'La historia de Potosí');
    hv.innerHTML = pl
      ? pl
      : `<div class="hist-empty"><span class="hist-play" aria-hidden="true"></span><strong>Video próximamente</strong><small>Aquí verás la historia de Potosí.</small></div>`;
  }

  /* Leyenda desplegable dentro de la ficha de un recorrido */
  function legendInFicha(l, p, open) {
    const x = l.experience;
    return `<details class="dt-ld"${open ? ' open' : ''}>
      <summary>
        <span class="dt-ld-main"><span class="dt-ld-mood">${esc(l.mood)}</span><strong>${esc(l.title)}</strong><small>${esc(l.teaser)}</small></span>
        <span class="dt-ld-plus" aria-hidden="true"></span>
      </summary>
      <div class="dt-ld-body">
        <div class="dt-ld-meta"><span><b>Lugar</b>${esc(p.name)}</span><span><b>Leyenda</b>${esc(l.title)}</span></div>
        ${l.image ? `<img class="dt-ld-img" src="${esc(l.image)}" alt="${esc(l.title)}" loading="lazy">` : ''}
        ${l.tellAt && l.tellAt[p.id] ? `<p class="dt-tell"><b>Se cuenta en la parada «${esc(l.tellAt[p.id].stop)}».</b> ${esc(l.tellAt[p.id].link)}</p>` : ''}
        <div class="dt-ld-text">${l.content}</div>
        <p class="dt-ld-note">${esc(l.note)}</p>
        ${videoHTML(l)}
        ${x ? `<div class="dt-ld-xp"><div><small>${esc(x.kicker)}</small><strong>${esc(x.title)}</strong><span>${esc(x.practical[0].value)} · ${esc(x.practical[2].value)}</span></div><button data-xp="${l.id}">Ver recorrido nocturno</button></div>` : ''}
      </div>
    </details>`;
  }

  /* Ficha propia de La Misa de las 12 */
  const MISA_LINK = ['catedral', 'casa-moneda', 'san-francisco'];
  function misaLink() {
    const mp = places.find(x => x.id === 'misa-de-las-12');
    return `<div class="dt-ld-xp dt-misa-link"><div><small>Leyenda + recorrido nocturno</small><strong>${esc(mp.name)}</strong><span>${esc(mp.schedule)} · ${esc(mp.price)}</span></div><button data-open="misa-de-las-12">Ver ficha</button></div>`;
  }
  function specialLegend(p) {
    const l = (typeof legends !== 'undefined' ? legends : []).find(x => x.id === p.legendId);
    if (!l) return '';
    return `<h3 class="dt-h">La leyenda</h3>
      <div class="dt-lgbox">
        <div class="dt-ld-meta"><span><b>Lugar</b>${esc(l.where)}</span><span><b>Leyenda</b>${esc(l.title)}</span></div>
        <div class="dt-ld-text">${l.content}</div>
        <p class="dt-ld-note">${esc(l.note)}</p>
        ${videoHTML(l)}
      </div>
      ${l.experience ? xpHTML(l, true) : ''}`;
  }

  /* Experiencia nocturna ligada a una leyenda */
  function xpHTML(l, compact) {
    const x = l.experience, wa = waLink(x.waMessage);
    return `<section class="xp" id="xp-block">
      <span class="xp-kicker">${esc(x.kicker)} · ${esc(x.brand)}</span>
      <h3 class="xp-title">${esc(x.title)}</h3>
      <p class="xp-sub">${esc(x.subtitle)}</p>
      ${compact ? '' : `<a class="btn btn-primary" target="_blank" rel="noopener" href="${wa}">${esc(x.cta)}</a>`}
      ${x.image ? `<img class="xp-img" src="${esc(x.image)}" alt="${esc(x.imageAlt || '')}" loading="lazy">` : ''}
      <h4 class="xp-h">${esc(x.aboutTitle)}</h4>
      <p class="xp-text">${esc(x.about)}</p>
      <h4 class="xp-h">¿Qué incluye tu entrada?</h4>
      <div class="xp-inc">${x.includes.map(i => `<div class="xp-inc-item"><strong>${esc(i.title)}</strong><p>${esc(i.text)}</p></div>`).join('')}</div>
      ${compact ? '' : `      <h4 class="xp-h">Itinerario nocturno (${x.itinerary.length} paradas)</h4>
      <ol class="xp-iti">${x.itinerary.map(s => `<li><span class="xp-time">${esc(s.time)} hrs</span><div><strong>${esc(s.place)}</strong><p>${esc(s.text)}</p></div></li>`).join('')}</ol>
`}
      <h4 class="xp-h">Datos prácticos y tarifas</h4>
      <div class="xp-prac">${x.practical.map(d => `<div><small>${esc(d.label)}</small><strong>${esc(d.value)}</strong></div>`).join('')}</div>
      ${compact ? '' : `<a class="btn btn-primary btn-block" target="_blank" rel="noopener" href="${wa}">${esc(x.cta)}</a>`}
    </section>`;
  }

  function openLegend(id, toExperience) {
    const l = (typeof legends !== 'undefined' ? legends : []).find(x => x.id === id);
    if (!l) return;
    lgLastFocus = document.activeElement;
    lgContent.innerHTML = `
      ${l.image ? `<div class="lg-hero"><img src="${esc(l.image)}" alt="${esc(l.title)}"></div>` : ''}
      <span class="lg-mood">${esc(l.mood)}</span>
      <h2 class="lg-title" id="legend-title">${esc(l.title)}</h2>
      ${l.subtitle ? `<p class="lg-sub">${esc(l.subtitle)}</p>` : ''}
      <p class="lg-where">${esc(l.where)}</p>
      <div class="lg-text">${l.content}</div>
      <p class="lg-note">${esc(l.note)}</p>
      ${l.experience ? xpHTML(l) : ''}
      <div class="lg-visit"><h4>Vive esta leyenda en nuestros recorridos</h4>
        <div class="lg-visit-btns">${l.places.map(pid => `<button data-place="${pid}">${esc(placeName(pid))} →</button>`).join('')}</div>
      </div>`;
    lgOverlay.scrollTop = 0;
    lgOverlay.classList.add('active');
    lgOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    $('#legend-close-btn').focus();
    if (toExperience) {
      const el = $('#xp-block');
      if (el) { let y = 0, n = el; while (n && n !== lgOverlay) { y += n.offsetTop; n = n.offsetParent; } lgOverlay.scrollTop = Math.max(0, y - 16); }
    }
  }

  function closeLegend() {
    lgOverlay.classList.remove('active');
    lgOverlay.setAttribute('aria-hidden', 'true');
    if (!overlay.classList.contains('active')) document.body.style.overflow = '';
    if (lgLastFocus) lgLastFocus.focus();
  }
  $('#legend-close-btn').addEventListener('click', closeLegend);
  lgOverlay.addEventListener('click', (e) => { if (e.target === lgOverlay) closeLegend(); });
  lgContent.addEventListener('click', (e) => {
    const b = e.target.closest('[data-place]');
    if (b) { closeLegend(); openModal(b.dataset.place); }
  });

  /* 7. Mapa interactivo */
  const pins = document.querySelectorAll('.map-pin');
  const mapTag = $('#map-panel-tag'), mapTitle = $('#map-panel-title'), mapDesc = $('#map-panel-desc'), mapTours = $('#map-panel-tours');
  function selectZone(key) {
    const z = mapZones[key]; if (!z) return;
    pins.forEach(p => p.classList.toggle('active', p.dataset.point === key));
    mapTag.textContent = z.tag; mapTitle.textContent = z.title; mapDesc.textContent = z.desc;
    mapTours.innerHTML = places.filter(p => p.zonePin === key)
      .map(p => `<li><button class="panel-tour-btn" data-target="${p.id}"><span>${esc(p.name)}</span><em>${esc(p.duration)}</em></button></li>`).join('');
  }
  pins.forEach(pin => pin.addEventListener('click', () => selectZone(pin.dataset.point)));
  mapTours.addEventListener('click', (e) => { const b = e.target.closest('.panel-tour-btn'); if (b) openModal(b.dataset.target); });
  selectZone('centro');

  /* 8. Contacto */
  document.querySelectorAll('[data-wa]').forEach(a => a.href = waLink(a.dataset.wa));
  document.querySelectorAll('[data-wa-label]').forEach(el => el.textContent = CONTACT.whatsappLabel);
  document.querySelectorAll('[data-email]').forEach(a => { a.href = 'mailto:' + CONTACT.email; a.textContent = CONTACT.email; });

  /* 9. Enlace activo del menú según la sección */
  const links = [...document.querySelectorAll('.nav-link')];
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id)); });
  }, { rootMargin: '-40% 0px -55% 0px' });
  links.forEach(l => { const s = document.querySelector(l.getAttribute('href')); if (s) io.observe(s); });
});
