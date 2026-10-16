// All site copy and routes, one object per language. Draft text: the group still has to review it.
export const languages = { es: "Español", en: "English" } as const;
export type Lang = keyof typeof languages;

export const CONTACT_EMAIL = "asociacionbluegrassmadrid@gmail.com";
export const MAPA_COLLINS = "https://www.google.com/maps/search/?api=1&query=Collin%27s+Irish+Tavern+Calle+de+Sagasta+26+Madrid";

// Social profiles shown in the footer. Add a url to each one to turn it into a link.
export const redes: { id: string; nombre: string; url?: string }[] = [
  { id: "instagram", nombre: "Instagram" },
  { id: "tiktok", nombre: "TikTok" },
  { id: "facebook", nombre: "Facebook" },
];

export const pestanas = ["inicio", "nosotros", "noticias", "jams", "agenda", "galeria", "contacto"] as const;
export type Pestana = (typeof pestanas)[number];

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const rutas: Record<Pestana, Record<Lang, string>> = {
  inicio: { es: `${base}/`, en: `${base}/en/` },
  nosotros: { es: `${base}/quienes-somos/`, en: `${base}/en/about/` },
  noticias: { es: `${base}/noticias/`, en: `${base}/en/news/` },
  jams: { es: `${base}/jams/`, en: `${base}/en/jams/` },
  agenda: { es: `${base}/agenda/`, en: `${base}/en/events/` },
  galeria: { es: `${base}/galeria/`, en: `${base}/en/gallery/` },
  contacto: { es: `${base}/contacto/`, en: `${base}/en/contact/` },
};

const es = {
  nombre: "Asociación de Bluegrass de Madrid",
  descripcion: "Asociación sin ánimo de lucro para divulgar el bluegrass y la música americana en Madrid.",
  pestanas: { inicio: "Inicio", nosotros: "Quiénes somos", noticias: "Noticias", jams: "Jams", agenda: "Agenda", galeria: "Galería", contacto: "Contacto" },
  inicio: {
    titulo: "Bluegrass en Madrid",
    entrada: "Somos una asociación sin ánimo de lucro de Madrid: músicos y aficionados que se juntan a tocar bluegrass. Acabamos de empezar y somos la primera asociación de la ciudad dedicada a divulgar esta música.",
    ultimas: "Últimas noticias",
  },
  noticias: {
    titulo: "El tablón",
    subtitulo: "Últimas noticias de la asociación",
    mas: "Ver noticias anteriores",
    leer: "Leer más",
    volver: "Todas las noticias",
    soloEspanol: "",
  },
  nosotros: {
    titulo: "Una asociación de amigos",
    subtitulo: "por amor a esta música",
    texto: [
      "Somos una asociación sin ánimo de lucro con base en Madrid. Casi todos nos conocimos en la jam de los domingos del Collins, que lleva unos diez años sonando en la calle Sagasta: gente que toca banjo, mandolina, guitarra, violín o cualquier otro instrumento, y gente que solo viene a escuchar o, simplemente, a pasar un buen rato y tomar algo.",
      "En 2026 decidimos darle forma de asociación para hacer más cosas juntos en Madrid: más jams, una slow jam para quien empieza, conciertos, talleres y contacto con la gente del bluegrass de otros sitios.",
      "Con el tiempo queremos ir a más: un campus para aprender, un festival, bandas que salgan de aquí a tocar en serio. Poco a poco y entre todos.",
    ],
    pie: "Nat, con el banjo, en la slow jam de octubre de 2026.",
  },
  jams: {
    titulo: "Dónde tocamos",
    subtitulo: "Las dos están abiertas a músicos de cualquier nivel y al público",
    collins: {
      nombre: "Americana Music Jam Madrid",
      texto: "La jam de siempre. Lleva unos diez años en el Collins y es donde nació la asociación. Bluegrass, old time y americana.",
      cuando: "Domingos, 20:30",
      donde: "Collin's Irish Tavern · Calle Sagasta 26",
    },
    slow: {
      nombre: "Slow Jam Madrid",
      texto: "La jam de la asociación, la lleva Nat. Canciones más despacio y sin prisa, para quien empieza o quiere ganar soltura. Va cambiando de sitio, así que conviene seguir las noticias para saber cuándo y dónde es la próxima.",
      cuando: "Fecha en la agenda",
    },
    llegar: "Cómo llegar",
  },
  agenda: {
    titulo: "Próximas citas",
    cadaDomingo: "Cada domingo",
    dia: "Dom",
    fija: { titulo: "Americana Music Jam Madrid", donde: "Collin's Irish Tavern · Calle Sagasta 26", hora: "20:30" },
    vacia: "La próxima slow jam y otros planes se anunciarán aquí. Si quieres que te avisemos, escríbenos.",
  },
  galeria: {
    titulo: "Fotos",
    subtitulo: "Recuerdos de nuestros eventos, reuniones y jams. Si tienes alguna, mándanosla.",
    fotos: [
      { src: "collins-grupo", ancho: 1000, alto: 1110, mini: 560, pie: "Músicos de la jam del Collins, en la escalera del pub" },
      { src: "collins-jam", ancho: 1400, alto: 1050, mini: 720, pie: "Domingo de jam en el Collins" },
      { src: "collins-ronda", ancho: 1400, alto: 1120, mini: 720, pie: "Cantando en la jam del Collins, octubre de 2026" },
      { src: "collins-mariano", ancho: 1000, alto: 1500, mini: 560, pie: "Mariano a la guitarra, en el Collins" },
      { src: "collins-jesus", ancho: 1000, alto: 1250, mini: 560, pie: "Jesús al violín, en el Collins" },
      { src: "slow-jam-jj-nat", ancho: 1400, alto: 1120, mini: 720, pie: "JJ y Nat en la slow jam, octubre de 2026" },
      { src: "slow-jam-nat", ancho: 1000, alto: 1250, mini: 560, pie: "Nat, octubre de 2026" },
    ],
    visor: { nombre: "Visor de fotos", cerrar: "Cerrar", anterior: "Foto anterior", siguiente: "Foto siguiente" },
  },
  contacto: {
    titulo: "Escríbenos",
    subtitulo: "Para tocar, proponer un concierto, hacerte socio o lo que sea",
    socio: { titulo: "Hacerse socio", texto: "Estamos preparando la forma de apuntarse. Mientras, escríbenos y te contamos." },
    donar: { titulo: "Donaciones", texto: "Pronto podrás apoyar a la asociación. Toda ayuda irá a jams, conciertos y talleres." },
  },
  pie: { redes: "Redes sociales" },
  temaOscuro: "Modo oscuro",
  menu: { nombre: "Menú", cerrar: "Cerrar menú" },
  fecha: "es-ES",
};

const en: typeof es = {
  nombre: "Madrid Bluegrass Association",
  descripcion: "Non-profit association promoting bluegrass and American roots music in Madrid.",
  pestanas: { inicio: "Home", nosotros: "About us", noticias: "News", jams: "Jams", agenda: "Events", galeria: "Gallery", contacto: "Contact" },
  inicio: {
    titulo: "Bluegrass in Madrid",
    entrada: "We are a non-profit association based in Madrid: musicians and fans who get together to play bluegrass. We have only just started, and we are the first association in the city devoted to spreading this music.",
    ultimas: "Latest news",
  },
  noticias: {
    titulo: "The noticeboard",
    subtitulo: "Latest news from the association",
    mas: "Show older news",
    leer: "Read more",
    volver: "All news",
    soloEspanol: "This news item is only available in Spanish.",
  },
  nosotros: {
    titulo: "A group of friends",
    subtitulo: "who love this music",
    texto: [
      "We are a non-profit association based in Madrid. Most of us met at the Sunday jam at the Collins, which has been going on Calle Sagasta for about ten years: people who play banjo, mandolin, guitar, fiddle or any other instrument, and people who just come to listen or simply to have a good time and a drink.",
      "In 2026 we decided to set up an association so we could do more together in Madrid: more jams, a slow jam for beginners, concerts, workshops and links with bluegrass people elsewhere.",
      "Over time we want to go further: a camp to learn, a festival, bands from here that go out and play for real. Step by step, and together.",
    ],
    pie: "Nat on banjo at the slow jam, October 2026.",
  },
  jams: {
    titulo: "Where we play",
    subtitulo: "Both are open to musicians of any level and to the public",
    collins: {
      nombre: "Americana Music Jam Madrid",
      texto: "The original jam. It has been running at the Collins for about ten years, and it is where the association was born. Bluegrass, old time and americana.",
      cuando: "Sundays, 8:30 pm",
      donde: "Collin's Irish Tavern · Calle Sagasta 26",
    },
    slow: {
      nombre: "Slow Jam Madrid",
      texto: "The association's own jam, run by Nat. Slower songs and no rush, for beginners and anyone who wants to build confidence. It moves around, so keep an eye on the news to find out when and where the next one is.",
      cuando: "Date in the events list",
    },
    llegar: "Directions",
  },
  agenda: {
    titulo: "Coming up",
    cadaDomingo: "Every Sunday",
    dia: "Sun",
    fija: { titulo: "Americana Music Jam Madrid", donde: "Collin's Irish Tavern · Calle Sagasta 26", hora: "8:30 pm" },
    vacia: "The next slow jam and other plans will be announced here. If you want us to let you know, write to us.",
  },
  galeria: {
    titulo: "Photos",
    subtitulo: "Memories from our events, meetings and jams. If you have any, send them over.",
    fotos: [
      { src: "collins-grupo", ancho: 1000, alto: 1110, mini: 560, pie: "Musicians from the Collins jam, on the pub stairs" },
      { src: "collins-jam", ancho: 1400, alto: 1050, mini: 720, pie: "Sunday jam at the Collins" },
      { src: "collins-ronda", ancho: 1400, alto: 1120, mini: 720, pie: "Singing at the Collins jam, October 2026" },
      { src: "collins-mariano", ancho: 1000, alto: 1500, mini: 560, pie: "Mariano on guitar at the Collins" },
      { src: "collins-jesus", ancho: 1000, alto: 1250, mini: 560, pie: "Jesús on fiddle at the Collins" },
      { src: "slow-jam-jj-nat", ancho: 1400, alto: 1120, mini: 720, pie: "JJ and Nat at the slow jam, October 2026" },
      { src: "slow-jam-nat", ancho: 1000, alto: 1250, mini: 560, pie: "Nat, October 2026" },
    ],
    visor: { nombre: "Photo viewer", cerrar: "Close", anterior: "Previous photo", siguiente: "Next photo" },
  },
  contacto: {
    titulo: "Write to us",
    subtitulo: "To play, suggest a concert, become a member or anything else",
    socio: { titulo: "Becoming a member", texto: "We are getting the sign-up ready. In the meantime, write to us and we will tell you more." },
    donar: { titulo: "Donations", texto: "You will soon be able to support the association. Every bit goes to jams, concerts and workshops." },
  },
  pie: { redes: "Social media" },
  temaOscuro: "Dark mode",
  menu: { nombre: "Menu", cerrar: "Close menu" },
  fecha: "en-GB",
};

export const ui = { es, en };
export type UI = typeof es;
