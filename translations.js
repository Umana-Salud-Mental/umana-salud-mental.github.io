/* ═══════════════════════════════════════════════════════════
   UMANA – INTERNATIONALISATION (i18n)
   Default language : Spanish (es-419)
   Supported        : Spanish (es) · English (en)
   Usage in HTML    : data-i18n="key"          → textContent
                      data-i18n-html="key"      → innerHTML (safe: our own content)
                      data-i18n-aria="key"      → aria-label
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* Typewriter headline phrases, per language */
  var TYPEWRITER = {
    es: ['Tu salud mental importa', 'Tu bienestar es nuestra misión', 'Da el primer paso hoy'],
    en: ['Your mental health matters', 'Your wellbeing is our mission', 'Take the first step today']
  };

  /* ── Full string dictionary ──────────────────────────────── */
  var STRINGS = {

    /* ═══════════════  SPANISH  ═══════════════ */
    es: {
      /* Navigation */
      'nav.home':      'Inicio',
      'nav.about':     'Quiénes Somos',
      'nav.services':  'Servicios',
      'nav.resources': 'Recursos',
      'nav.contact':   'Contacto',
      'nav.lang':      'EN',
      'nav.lang.aria': 'Switch to English',
      'a11y.skip':     'Saltar al contenido principal',

      /* Hero */
      'hero.subtitle': 'Terapia 100% online con profesionales certificados',
      'hero.desc':     'En Umana, creemos que cuidar tu bienestar emocional es fundamental. Accede a terapia profesional, confidencial y personalizada desde cualquier lugar, cuando más lo necesitas.',
      'hero.cta':      'Comienza tu viaje de bienestar',
      'hero.whatsapp': 'Contactar por WhatsApp',
      'hero.urgency':  '🟢 Sesiones disponibles esta semana',

      /* Trust stats */
      'stats.patients':     'Pacientes atendidos',
      'stats.therapists':   'Terapeutas certificados',
      'stats.satisfaction': 'Tasa de satisfacción',
      'stats.online':       'Online y confidencial',

      /* How it works */
      'how.heading':   '¿Cómo Funciona Umana?',
      'how.intro':     'Comenzar es más fácil de lo que crees. Solo tres pasos te separan del bienestar.',
      'how.s1.title':  'Agenda tu sesión',
      'how.s1.desc':   'Contáctanos por WhatsApp o llena nuestro formulario. Rápido, fácil y sin compromiso.',
      'how.s2.title':  'Conoce a tu terapeuta',
      'how.s2.desc':   'Te conectamos con el profesional más adecuado para tus necesidades y objetivos.',
      'how.s3.title':  'Comienza tu proceso',
      'how.s3.desc':   'Sesiones 100% online desde la comodidad de tu hogar, a tu ritmo y horario.',
      'how.cta':       'Agenda tu primera sesión',
      'how.cta.note':  'Sin compromiso · Primera consulta orientativa gratuita',

      /* About */
      'about.heading': 'Quiénes Somos',
      'about.sub':     'Umana - Tu Plataforma de Salud Mental Online',
      'about.p1':      'Umana es una plataforma digital 100% online dedicada a hacer la salud mental accesible para todos. Conectamos a personas que buscan apoyo emocional con profesionales de salud mental certificados y con experiencia.',
      'about.p2':      'Nuestra misión es eliminar las barreras que impiden a las personas buscar ayuda. Ofrecemos sesiones online desde la comodidad de tu hogar, estamos aquí para acompañarte en cada paso de tu camino hacia el bienestar.',
      'about.values':  'Nuestros Valores',
      'about.v1':      '✓ <strong>Accesibilidad:</strong> Hacemos la terapia disponible para todos',
      'about.v2':      '✓ <strong>Confidencialidad:</strong> Tu privacidad es nuestra prioridad',
      'about.v3':      '✓ <strong>Profesionalismo:</strong> Solo trabajamos con especialistas certificados',
      'about.v4':      '✓ <strong>Empatía:</strong> Entendemos que dar el primer paso puede ser difícil',
      'about.v5':      '✓ <strong>Innovación:</strong> Utilizamos tecnología para mejorar tu experiencia',
      'about.team':    'Nuestro Equipo',
      'about.team.p':  'Contamos con un equipo multidisciplinario de psicólogos, terapeutas y especialistas en salud mental, todos comprometidos con tu bienestar. Cada profesional en nuestra plataforma ha sido cuidadosamente seleccionado y verificado para garantizar la más alta calidad de atención.',

      /* Services */
      'svc.heading':  'Nuestros Servicios',
      'svc.intro':    'Ofrecemos servicios 100% online de salud mental para apoyarte en lo que necesites',
      'svc.1.title':  'Terapia Individual Online',
      'svc.1.desc':   'Sesiones personalizadas para trabajar en ansiedad, depresión, estrés y otros desafíos emocionales con profesionales especializados.',
      'svc.2.title':  'Terapia de Pareja Online',
      'svc.2.desc':   'Fortalece tu relación, mejora la comunicación y resuelve conflictos con terapeutas especializados en relaciones.',
      'svc.3.title':  'Terapia Familiar Online',
      'svc.3.desc':   'Mejora la dinámica familiar, resuelve conflictos y construye relaciones más saludables entre todos los miembros.',
      'svc.4.title':  'Orientación Profesional Online',
      'svc.4.desc':   'Descubre tu camino profesional, toma decisiones de carrera informadas y alcanza tus metas laborales.',

      /* Schedule */
      'sch.heading': 'Horarios de Atención',
      'sch.days1':   'Lunes - Viernes',
      'sch.time1':   '8:00 AM - 5:00 PM',
      'sch.desc1':   'Atención 100% online',
      'sch.days2':   'Sábados',
      'sch.time2':   '9:00 AM - 12:00 PM',
      'sch.desc2':   'Horario especial de fin de semana',
      'sch.note':    '* Agenda tu cita con anticipación. Horarios sujetos a disponibilidad de profesionales.',

      /* FAQ */
      'faq.heading': 'Preguntas Frecuentes',
      'faq.intro':   'Todo lo que necesitas saber antes de dar el primer paso.',
      'faq.q1': '¿Cómo funciona Umana?',
      'faq.a1': 'Umana es una plataforma que conecta a personas que buscan apoyo de salud mental con profesionales certificados. Agenda tu cita, conoce a tu terapeuta y comienza tu proceso terapéutico de manera sencilla y confidencial, 100% desde tu hogar.',
      'faq.q2': '¿Los terapeutas están certificados?',
      'faq.a2': 'Sí, todos nuestros profesionales están debidamente certificados y cuentan con licencia para ejercer. Cada terapeuta pasa por un riguroso proceso de verificación antes de unirse a nuestra plataforma.',
      'faq.q3': '¿Cuánto cuesta una sesión?',
      'faq.a3': 'Los costos varían según el tipo de servicio y el profesional. Contáctanos para conocer nuestras tarifas actuales y planes disponibles. Trabajamos para hacer la terapia accesible para todos.',
      'faq.q4': '¿Es confidencial mi información?',
      'faq.a4': 'Absolutamente. La confidencialidad es fundamental para nosotros. Toda la información compartida en las sesiones está protegida por las leyes de privacidad y secreto profesional. Usamos tecnología de encriptación para proteger tus datos.',
      'faq.q5': '¿Puedo cambiar de terapeuta?',
      'faq.a5': 'Sí, sabemos que la conexión con tu terapeuta es importante. Si sientes que no es el adecuado para ti, puedes solicitar un cambio sin ningún problema ni costo adicional.',
      'faq.q6': '¿Qué necesito para una sesión online?',
      'faq.a6': 'Solo necesitas una conexión a internet estable, un dispositivo (computadora, tablet o smartphone) con cámara y micrófono, y un espacio privado donde te sientas cómodo hablando.',
      'faq.q7': '¿Cuánto dura una sesión?',
      'faq.a7': 'Las sesiones típicamente duran entre 45 y 60 minutos. Tu terapeuta trabajará contigo para establecer la frecuencia y duración más adecuadas para tu proceso.',
      'faq.q8': '¿Puedo cancelar o reprogramar mi cita?',
      'faq.a8': 'Sí, puedes cancelar o reprogramar tu cita con al menos 24 horas de anticipación sin costo adicional. Contáctanos y con gusto te ayudamos a encontrar un nuevo horario.',

      /* Testimonials */
      'test.heading': 'Lo que dicen nuestros pacientes',
      'test.intro':   'Historias reales de personas que dieron el primer paso hacia su bienestar.',
      'test.q1':      '\u201cGracias a Umana pude dar el primer paso que tanto me costaba. Mi terapeuta me cambió la vida. No saben cuánto valoro este servicio.\u201d',
      'test.loc1':    'Quito, Ecuador',
      'test.q2':      '\u201cNunca pensé que la terapia online funcionaría tan bien. Ahora me siento en control de mi ansiedad. El proceso fue muy claro y sin complicaciones.\u201d',
      'test.loc2':    'Guayaquil, Ecuador',
      'test.q3':      '\u201cEl proceso fue muy fácil desde el inicio. Encontré a la terapeuta perfecta para mí en poco tiempo. La recomiendo con los ojos cerrados.\u201d',
      'test.loc3':    'Cuenca, Ecuador',
      'test.note':    '* Testimonios anónimos con permiso de nuestros pacientes. Los nombres han sido modificados para proteger la privacidad.',

      /* Blog preview */
      'blog.heading': 'Recursos para tu Bienestar',
      'blog.intro':   'Artículos escritos por nuestros especialistas para acompañarte en tu camino.',
      'blog.all':     'Ver todos los recursos \u2192',
      'blog.cat1':    '\ud83d\ude30 Ansiedad',
      'blog.t1':      '10 Técnicas Efectivas para Manejar la Ansiedad',
      'blog.d1':      'Aprende estrategias prácticas y respaldadas por la ciencia para reducir la ansiedad en tu vida diaria.',
      'blog.r1':      'Leer artículo \u2192',
      'blog.cat2':    '\ud83d\ude14 Depresión',
      'blog.t2':      'Señales de Depresión y Cuándo Buscar Ayuda',
      'blog.d2':      'Identifica los síntomas clave y entiende cuándo es el momento de dar el paso y hablar con un profesional.',
      'blog.r2':      'Leer artículo \u2192',
      'blog.cat3':    '\ud83e\uddd8 Autocuidado',
      'blog.t3':      'La Importancia del Autocuidado Mental',
      'blog.d3':      'Descubre por qué el autocuidado no es un lujo, sino una necesidad fundamental para tu salud emocional.',
      'blog.r3':      'Leer artículo \u2192',

      /* Contact */
      'ct.heading':  'Contacto',
      'ct.info.h':   'Información de Contacto',
      'ct.info.p':   'Estamos aquí para ayudarte. Contáctanos para agendar una consulta, resolver dudas o conocer más sobre nuestros servicios.',
      'ct.email.l':  'Email',
      'ct.phone.l':  'Teléfono / WhatsApp',
      'ct.addr.l':   'Dirección',
      'ct.addr.v':   'Quito, Ecuador',
      'ct.hrs.l':    'Horarios',
      'ct.hrs.v1':   'Lunes a Viernes: 8:00 AM - 5:00 PM',
      'ct.hrs.v2':   'Sábados: 9:00 AM - 12:00 PM',
      'ct.wa.btn':   'Contactar por WhatsApp',
      'ct.form.h':   'Envíanos un mensaje',
      'ct.form.nm':  'Nombre completo',
      'ct.form.em':  'Email',
      'ct.form.ph':  'Teléfono',
      'ct.form.ms':  'Mensaje',
      'ct.form.btn': 'Enviar mensaje',
      'ct.form.ok':  '¡Gracias por contactarnos! Te responderemos pronto.',

      /* Crisis */
      'crisis.before': 'Si estás en crisis o cualquier otra persona puede estar en peligro - no uses este sitio.',
      'crisis.link':   'Estos recursos',
      'crisis.after':  'pueden brindarte ayuda inmediata.',

      /* Footer */
      'footer.social':   'Síguenos en redes sociales',
      'footer.copy':     '© 2026 Umana - Plataforma de Salud Mental. Todos los derechos reservados.',
      'footer.privacy':  'Tu información es confidencial y está protegida.',

      /* Recursos page */
      'rec.meta.title':     'Recursos de Salud Mental | Umana',
      'rec.meta.desc':      'Recursos de salud mental, consejos y artículos de terapia - Umana',
      'rec.breadcrumb.home':'Inicio',
      'rec.breadcrumb.cur': 'Recursos',
      'rec.hero.h1':        'Recursos de Salud Mental',
      'rec.hero.sub':       'Encuentra artículos, consejos y guías para tu bienestar emocional',
      'rec.search.ph':      'Buscar por tema, palabra clave...',
      'rec.search.btn':     'Buscar',
      'rec.pill.all':       'Todo',
      'rec.pill.ansiedad':  'Ansiedad',
      'rec.pill.depresion': 'Depresión',
      'rec.pill.relaciones':'Relaciones',
      'rec.pill.estres':    'Estrés',
      'rec.pill.autocuidado':'Autocuidado',
      'rec.pill.familia':   'Familia',
      'rec.feat.heading':   'Artículos Destacados',
      'rec.badge.feat':     'Destacado',
      'rec.cat.ansiedad':   'Ansiedad',
      'rec.cat.depresion':  'Depresión',
      'rec.cat.relaciones': 'Relaciones',
      'rec.cat.estres':     'Estrés',
      'rec.cat.autocuidado':'Autocuidado',
      'rec.cat.familia':    'Familia',
      'rec.time.7':         '7 min lectura',
      'rec.time.10':        '10 min lectura',
      'rec.time.8':         '8 min lectura',
      'rec.time.5':         '5 min',
      'rec.time.6':         '6 min',
      'rec.time.9':         '9 min',
      'rec.time.4':         '4 min',
      'rec.time.12':        '12 min',
      'rec.time.11':        '11 min',
      'rec.time.3':         '3 min',
      'rec.time.15':        '15 min',
      'rec.time.7m':        '7 min',
      'rec.link':           'Leer más →',
      'rec.feat.a1.h':      '10 Técnicas Efectivas para Manejar la Ansiedad',
      'rec.feat.a1.p':      'Descubre estrategias comprobadas para reducir la ansiedad y recuperar el control de tus emociones en momentos difíciles.',
      'rec.feat.a2.h':      'Señales de Depresión y Cuándo Buscar Ayuda',
      'rec.feat.a2.p':      'Aprende a reconocer los síntomas de la depresión y descubre por qué buscar apoyo profesional es un paso valiente.',
      'rec.feat.a3.h':      'Comunicación Asertiva en las Relaciones',
      'rec.feat.a3.p':      'Mejora tus relaciones personales aprendiendo a comunicarte de manera clara, respetuosa y efectiva.',
      'rec.all.heading':    'Todos los Artículos',
      'rec.sort.label':     'Ordenar por:',
      'rec.sort.recent':    'Más recientes',
      'rec.sort.popular':   'Más populares',
      'rec.sort.title':     'Título A-Z',
      'rec.a1.h':           'Mindfulness: Reduce el Estrés Diario',
      'rec.a1.p':           'Técnicas simples de mindfulness que puedes practicar en cualquier momento del día.',
      'rec.a2.h':           'La Importancia del Autocuidado Mental',
      'rec.a2.p':           'Por qué cuidar tu salud mental debe ser una prioridad en tu vida diaria.',
      'rec.a3.h':           'Sanando Relaciones Familiares',
      'rec.a3.p':           'Estrategias para mejorar la dinámica familiar y fortalecer los vínculos.',
      'rec.a4.h':           'Respiración para Controlar la Ansiedad',
      'rec.a4.p':           'Aprende técnicas de respiración que calman el sistema nervioso en minutos.',
      'rec.a5.h':           'Dormir Bien: Clave para tu Salud Mental',
      'rec.a5.p':           'La conexión entre el sueño y la salud emocional, y cómo mejorar tu descanso.',
      'rec.a6.h':           'Límites Saludables en las Relaciones',
      'rec.a6.p':           'Aprende a poner límites sin culpa y construir relaciones más sanas.',
      'rec.a7.h':           'Superar el Duelo: Un Proceso Personal',
      'rec.a7.p':           'Entender las etapas del duelo y cómo transitar este proceso con apoyo.',
      'rec.a8.h':           'Ansiedad Social: Cómo Enfrentarla',
      'rec.a8.p':           'Estrategias prácticas para manejar el miedo a las situaciones sociales.',
      'rec.a9.h':           'Autoestima: Fundamento del Bienestar',
      'rec.a9.p':           'Cómo construir una relación sana contigo mismo y fortalecer tu autoestima.',
      'rec.topics.heading': 'Explora por Temas',
      'rec.topics.intro':   'Encuentra recursos específicos para lo que más te importa hoy',
      'rec.topic.ansiedad.h':   'Ansiedad',
      'rec.topic.ansiedad.p':   'Técnicas, guías y consejos para manejar la ansiedad en el día a día.',
      'rec.topic.ansiedad.n':   '8 artículos',
      'rec.topic.depresion.h':  'Depresión',
      'rec.topic.depresion.p':  'Información, señales y caminos hacia la recuperación.',
      'rec.topic.depresion.n':  '6 artículos',
      'rec.topic.relaciones.h': 'Relaciones',
      'rec.topic.relaciones.p': 'Comunicación, límites y vínculos saludables.',
      'rec.topic.relaciones.n': '7 artículos',
      'rec.topic.estres.h':     'Estrés',
      'rec.topic.estres.p':     'Estrategias de manejo del estrés y equilibrio emocional.',
      'rec.topic.estres.n':     '5 artículos',
      'rec.topic.autocuidado.h':'Autocuidado',
      'rec.topic.autocuidado.p':'Hábitos y prácticas para cuidar tu bienestar integral.',
      'rec.topic.autocuidado.n':'9 artículos',
      'rec.topic.familia.h':    'Familia',
      'rec.topic.familia.p':    'Dinámicas familiares, crianza y comunicación en el hogar.',
      'rec.topic.familia.n':    '4 artículos',
      'rec.topic.btn':          'Explorar',
      'rec.news.heading':       'Recibe Recursos Semanales',
      'rec.news.sub':           'Artículos, tips y recordatorios de bienestar directo a tu bandeja',
      'rec.news.ph':            'Tu correo electrónico',
      'rec.news.btn':           'Suscribirme',
      'rec.news.privacy':       'Sin spam. Puedes darte de baja cuando quieras.',
      'rec.cta.heading':        '¿Necesitas Apoyo Personalizado?',
      'rec.cta.sub':            'Los artículos son un buen comienzo, pero hablar con un profesional marca la diferencia.',
      'rec.cta.btn':            'Hablar con un terapeuta',
      'rec.cta.btn2':           'Explorar servicios',

      /* Badge strip */
      'badge.1': '100% Confidencial',
      'badge.2': 'Terapeutas Verificados',
      'badge.3': 'Datos Cifrados',
      'badge.4': 'Sin Compromiso',

      /* Conditions section */
      'cond.heading': '¿Qué podemos tratar juntos?',
      'cond.intro':   'Nuestros especialistas están capacitados para acompañarte en una amplia variedad de desafíos emocionales.',
      'cond.1.name': 'Ansiedad',     'cond.1.desc': 'Aprende a manejar la preocupación excesiva y los ataques de pánico.',
      'cond.2.name': 'Depresión',    'cond.2.desc': 'Recupera la energía, el ánimo y las ganas de vivir con apoyo profesional.',
      'cond.3.name': 'Estrés',       'cond.3.desc': 'Desarrolla herramientas para afrontar las presiones del día a día.',
      'cond.4.name': 'Burnout',      'cond.4.desc': 'Supera el agotamiento laboral y recupera el equilibrio en tu vida.',
      'cond.5.name': 'Relaciones',   'cond.5.desc': 'Mejora tus vínculos y aprende a comunicarte con mayor efectividad.',
      'cond.6.name': 'Autoestima',   'cond.6.desc': 'Construye una relación más sana y compasiva contigo mismo.',

      /* Outcome callout */
      'oc.stat':  '92%',
      'oc.desc':  'de nuestros pacientes reportan mejoría en sus primeras 12 semanas',
      'oc.label': 'Basado en seguimiento de nuestros pacientes',

      /* Service tabs */
      'svc.tab.all':    'Todos',
      'svc.tab.ind':    'Individual',
      'svc.tab.couple': 'Pareja',
      'svc.tab.family': 'Familia',

      /* Final CTA */
      'fcta.heading': 'Tu camino hacia el bienestar empieza hoy',
      'fcta.sub':     'Cientos de personas ya están mejor. Tú puedes ser la siguiente.',
      'fcta.btn':     'Agenda tu primera sesión',
      'fcta.wa':      'Escribir por WhatsApp',

      /* Therapists */
      'th.heading':   'Conoce a nuestros especialistas',
      'th.intro':     'Profesionales certificados, empáticos y comprometidos con tu bienestar.',
      'th.1.name':    'Dra. Carolina V.',
      'th.1.spec':    'Ansiedad y Depresión',
      'th.1.years':   '8 años de experiencia',
      'th.1.quote':   '"Mi objetivo es que cada paciente descubra su propia fortaleza interior."',
      'th.2.name':    'Psic. Andrés M.',
      'th.2.spec':    'Terapia de Pareja',
      'th.2.years':   '6 años de experiencia',
      'th.2.quote':   '"Las relaciones sanas se construyen con empatía, escucha y trabajo conjunto."',
      'th.3.name':    'Dra. Valentina R.',
      'th.3.spec':    'Burnout y Estrés',
      'th.3.years':   '5 años de experiencia',
      'th.3.quote':   '"El burnout no es debilidad; es una señal de que necesitas apoyo y cuidado."',
      'th.tag.adults': 'Adultos',
      'th.tag.rel':    'Relaciones',
      'th.tag.comm':   'Comunicación',
      'th.tag.fam':    'Familias',
      'th.tag.stress': 'Estrés',
      'th.tag.work':   'Laboral',
      'th.tag.self':   'Autoestima',

      /* Help picker */
      'hp.heading':    '¿Con qué necesitas ayuda hoy?',
      'hp.pill.1': 'Ansiedad',  'hp.pill.2': 'Depresión',
      'hp.pill.3': 'Estrés',    'hp.pill.4': 'Relaciones',
      'hp.pill.5': 'Burnout',   'hp.pill.6': 'Autoestima',
      'hp.pill.7': 'Trauma',    'hp.pill.8': 'Duelo',
      'hp.default':    'Selecciona un tema para ver cómo podemos ayudarte.',
      'hp.cta.prefix': 'Podemos ayudarte con ',
      'hp.cta.suffix': '. Agenda tu primera sesión →',

      /* Clinical outcomes */
      'out.heading': 'Resultados que importan',
      'out.intro':   'Números reales de personas reales que confiaron en nuestro proceso.',
      'out.1.num':   '92%',    'out.1.label': 'Mejora reportada',    'out.1.desc': 'Pacientes que reportan mejoría significativa en su bienestar general.',
      'out.2.num':   '8 semanas', 'out.2.label': 'Resultado promedio', 'out.2.desc': 'Tiempo promedio para notar cambios positivos y sostenibles.',
      'out.3.num':   '3x',     'out.3.label': 'Más efectivo',        'out.3.desc': 'Que el abordaje autodidacta sin acompañamiento profesional.',
      'out.4.num':   '98%',    'out.4.label': 'Satisfacción',        'out.4.desc': 'De pacientes satisfechos con la calidad de su terapeuta asignado.',

      /* Evidence-based approach */
      'ap.heading': 'Un enfoque basado en evidencia',
      'ap.intro':   'Combinamos las metodologías más efectivas y respaldadas por la ciencia para garantizar tu progreso.',
      'ap.1.title': 'Terapia Cognitivo-Conductual (TCC)',
      'ap.1.desc':  'Identifica y transforma patrones de pensamiento negativos que afectan tu bienestar emocional y conductual.',
      'ap.2.title': 'Mindfulness y Atención Plena',
      'ap.2.desc':  'Desarrolla la capacidad de estar presente y gestionar el estrés con técnicas de atención consciente.',
      'ap.3.title': 'Seguimiento de Progreso',
      'ap.3.desc':  'Medimos y monitoreamos tu avance con herramientas validadas para asegurar resultados concretos y sostenibles.',
      'ap.link':    'Evidencia científica →',

      /* Platform features */
      'pf.heading': 'Todo lo que necesitas, en un solo lugar',
      'pf.1': 'Video de Alta Calidad',
      'pf.2': '100% Privado y Seguro',
      'pf.3': 'Horarios Flexibles',
      'pf.4': 'Desde Cualquier Dispositivo',
      'pf.5': 'Comunicación entre Sesiones',
      'pf.6': 'Seguimiento de tu Progreso'
    },

    /* ═══════════════  ENGLISH  ═══════════════ */
    en: {
      /* Navigation */
      'nav.home':      'Home',
      'nav.about':     'About Us',
      'nav.services':  'Services',
      'nav.resources': 'Resources',
      'nav.contact':   'Contact',
      'nav.lang':      'ES',
      'nav.lang.aria': 'Cambiar a Español',
      'a11y.skip':     'Skip to main content',

      /* Hero */
      'hero.subtitle': '100% online therapy with certified professionals',
      'hero.desc':     'At Umana, we believe that caring for your emotional wellbeing is essential. Access professional, confidential, and personalized therapy from anywhere, whenever you need it most.',
      'hero.cta':      'Begin your wellness journey',
      'hero.whatsapp': 'Contact via WhatsApp',
      'hero.urgency':  '🟢 Sessions available this week',

      /* Trust stats */
      'stats.patients':     'Patients served',
      'stats.therapists':   'Certified therapists',
      'stats.satisfaction': 'Satisfaction rate',
      'stats.online':       'Online & confidential',

      /* How it works */
      'how.heading':  'How Does Umana Work?',
      'how.intro':    'Getting started is easier than you think. Only three steps separate you from wellbeing.',
      'how.s1.title': 'Book your session',
      'how.s1.desc':  'Contact us via WhatsApp or fill out our form. Quick, easy, and commitment-free.',
      'how.s2.title': 'Meet your therapist',
      'how.s2.desc':  'We connect you with the most suitable professional for your needs and goals.',
      'how.s3.title': 'Begin your journey',
      'how.s3.desc':  '100% online sessions from the comfort of your home, at your own pace and schedule.',
      'how.cta':      'Book your first session',
      'how.cta.note': 'No commitment · Free initial orientation consultation',

      /* About */
      'about.heading': 'About Us',
      'about.sub':     'Umana - Your Online Mental Health Platform',
      'about.p1':      'Umana is a 100% online digital platform dedicated to making mental health accessible to everyone. We connect people seeking emotional support with certified, experienced mental health professionals.',
      'about.p2':      'Our mission is to remove the barriers that prevent people from seeking help. We offer online sessions from the comfort of your home, and we are here to accompany you at every step of your journey to wellbeing.',
      'about.values':  'Our Values',
      'about.v1':      '✓ <strong>Accessibility:</strong> We make therapy available to everyone',
      'about.v2':      '✓ <strong>Confidentiality:</strong> Your privacy is our priority',
      'about.v3':      '✓ <strong>Professionalism:</strong> We only work with certified specialists',
      'about.v4':      '✓ <strong>Empathy:</strong> We understand that taking the first step can be difficult',
      'about.v5':      '✓ <strong>Innovation:</strong> We use technology to improve your experience',
      'about.team':    'Our Team',
      'about.team.p':  'We have a multidisciplinary team of psychologists, therapists, and mental health specialists, all committed to your wellbeing. Every professional on our platform has been carefully selected and verified to ensure the highest quality of care.',

      /* Services */
      'svc.heading': 'Our Services',
      'svc.intro':   'We offer 100% online mental health services to support you in whatever you need',
      'svc.1.title': 'Individual Online Therapy',
      'svc.1.desc':  'Personalized sessions to work on anxiety, depression, stress and other emotional challenges with specialized professionals.',
      'svc.2.title': 'Couples Online Therapy',
      'svc.2.desc':  'Strengthen your relationship, improve communication and resolve conflicts with therapists specialized in relationships.',
      'svc.3.title': 'Family Online Therapy',
      'svc.3.desc':  'Improve family dynamics, resolve conflicts and build healthier relationships among all family members.',
      'svc.4.title': 'Professional Guidance Online',
      'svc.4.desc':  'Discover your professional path, make informed career decisions and achieve your professional goals.',

      /* Schedule */
      'sch.heading': 'Office Hours',
      'sch.days1':   'Monday \u2013 Friday',
      'sch.time1':   '8:00 AM \u2013 5:00 PM',
      'sch.desc1':   '100% online service',
      'sch.days2':   'Saturdays',
      'sch.time2':   '9:00 AM \u2013 12:00 PM',
      'sch.desc2':   'Special weekend schedule',
      'sch.note':    '* Schedule your appointment in advance. Hours subject to professional availability.',

      /* FAQ */
      'faq.heading': 'Frequently Asked Questions',
      'faq.intro':   'Everything you need to know before taking the first step.',
      'faq.q1': 'How does Umana work?',
      'faq.a1': 'Umana is a platform that connects people seeking mental health support with certified professionals. Book your appointment, meet your therapist and begin your therapeutic process simply and confidentially, 100% from your home.',
      'faq.q2': 'Are the therapists certified?',
      'faq.a2': 'Yes, all our professionals are duly certified and licensed to practice. Each therapist goes through a rigorous verification process before joining our platform.',
      'faq.q3': 'How much does a session cost?',
      'faq.a3': 'Costs vary depending on the type of service and the professional. Contact us to learn about our current rates and available plans. We work to make therapy accessible to everyone.',
      'faq.q4': 'Is my information confidential?',
      'faq.a4': 'Absolutely. Confidentiality is fundamental to us. All information shared in sessions is protected by privacy laws and professional secrecy. We use encryption technology to protect your data.',
      'faq.q5': 'Can I change my therapist?',
      'faq.a5': 'Yes, we know that the connection with your therapist is important. If you feel they are not right for you, you can request a change without any problem or additional cost.',
      'faq.q6': 'What do I need for an online session?',
      'faq.a6': 'You only need a stable internet connection, a device (computer, tablet or smartphone) with a camera and microphone, and a private space where you feel comfortable talking.',
      'faq.q7': 'How long is a session?',
      'faq.a7': 'Sessions typically last between 45 and 60 minutes. Your therapist will work with you to establish the most appropriate frequency and duration for your process.',
      'faq.q8': 'Can I cancel or reschedule my appointment?',
      'faq.a8': 'Yes, you can cancel or reschedule your appointment with at least 24 hours notice at no additional cost. Contact us and we will be happy to help you find a new time.',

      /* Testimonials */
      'test.heading': 'What our patients say',
      'test.intro':   'Real stories from people who took the first step toward their wellbeing.',
      'test.q1':      '\u201cThanks to Umana I was able to take the first step that was so hard for me. My therapist changed my life. You don\u2019t know how much I value this service.\u201d',
      'test.loc1':    'Quito, Ecuador',
      'test.q2':      '\u201cI never thought online therapy would work so well. Now I feel in control of my anxiety. The process was very clear and uncomplicated.\u201d',
      'test.loc2':    'Guayaquil, Ecuador',
      'test.q3':      '\u201cThe process was very easy from the start. I found the perfect therapist for me in no time. I recommend it wholeheartedly.\u201d',
      'test.loc3':    'Cuenca, Ecuador',
      'test.note':    '* Anonymous testimonials with permission from our patients. Names have been changed to protect privacy.',

      /* Blog preview */
      'blog.heading': 'Wellness Resources',
      'blog.intro':   'Articles written by our specialists to accompany you on your journey.',
      'blog.all':     'View all resources \u2192',
      'blog.cat1':    '\ud83d\ude30 Anxiety',
      'blog.t1':      '10 Effective Techniques to Manage Anxiety',
      'blog.d1':      'Learn practical, science-backed strategies to reduce anxiety in your daily life.',
      'blog.r1':      'Read article \u2192',
      'blog.cat2':    '\ud83d\ude14 Depression',
      'blog.t2':      'Signs of Depression and When to Seek Help',
      'blog.d2':      'Identify the key symptoms and understand when it is time to take the step and talk to a professional.',
      'blog.r2':      'Read article \u2192',
      'blog.cat3':    '\ud83e\uddd8 Self-care',
      'blog.t3':      'The Importance of Mental Self-Care',
      'blog.d3':      'Discover why self-care is not a luxury, but a fundamental necessity for your emotional health.',
      'blog.r3':      'Read article \u2192',

      /* Contact */
      'ct.heading':  'Contact',
      'ct.info.h':   'Contact Information',
      'ct.info.p':   'We are here to help you. Contact us to schedule a consultation, resolve questions or learn more about our services.',
      'ct.email.l':  'Email',
      'ct.phone.l':  'Phone / WhatsApp',
      'ct.addr.l':   'Location',
      'ct.addr.v':   'Quito, Ecuador',
      'ct.hrs.l':    'Hours',
      'ct.hrs.v1':   'Monday to Friday: 8:00 AM - 5:00 PM',
      'ct.hrs.v2':   'Saturdays: 9:00 AM - 12:00 PM',
      'ct.wa.btn':   'Contact via WhatsApp',
      'ct.form.h':   'Send us a message',
      'ct.form.nm':  'Full name',
      'ct.form.em':  'Email',
      'ct.form.ph':  'Phone',
      'ct.form.ms':  'Message',
      'ct.form.btn': 'Send message',
      'ct.form.ok':  'Thank you for contacting us! We will respond shortly.',

      /* Crisis */
      'crisis.before': 'If you are in crisis or any other person may be in danger - do not use this site.',
      'crisis.link':   'These resources',
      'crisis.after':  'can provide you with immediate help.',

      /* Footer */
      'footer.social':  'Follow Us on Social Media',
      'footer.copy':    '\u00a9 2026 Umana - Mental Health Platform. All rights reserved.',
      'footer.privacy': 'Your information is confidential and protected.',

      /* Recursos page */
      'rec.meta.title':     'Mental Health Resources | Umana',
      'rec.meta.desc':      'Mental health resources, therapy tips and articles - Umana',
      'rec.breadcrumb.home':'Home',
      'rec.breadcrumb.cur': 'Resources',
      'rec.hero.h1':        'Mental Health Resources',
      'rec.hero.sub':       'Find articles, tips and guides for your emotional wellbeing',
      'rec.search.ph':      'Search by topic, keyword...',
      'rec.search.btn':     'Search',
      'rec.pill.all':       'All',
      'rec.pill.ansiedad':  'Anxiety',
      'rec.pill.depresion': 'Depression',
      'rec.pill.relaciones':'Relationships',
      'rec.pill.estres':    'Stress',
      'rec.pill.autocuidado':'Self-care',
      'rec.pill.familia':   'Family',
      'rec.feat.heading':   'Featured Articles',
      'rec.badge.feat':     'Featured',
      'rec.cat.ansiedad':   'Anxiety',
      'rec.cat.depresion':  'Depression',
      'rec.cat.relaciones': 'Relationships',
      'rec.cat.estres':     'Stress',
      'rec.cat.autocuidado':'Self-care',
      'rec.cat.familia':    'Family',
      'rec.time.7':         '7 min read',
      'rec.time.10':        '10 min read',
      'rec.time.8':         '8 min read',
      'rec.time.5':         '5 min',
      'rec.time.6':         '6 min',
      'rec.time.9':         '9 min',
      'rec.time.4':         '4 min',
      'rec.time.12':        '12 min',
      'rec.time.11':        '11 min',
      'rec.time.3':         '3 min',
      'rec.time.15':        '15 min',
      'rec.time.7m':        '7 min',
      'rec.link':           'Read more →',
      'rec.feat.a1.h':      '10 Effective Techniques to Manage Anxiety',
      'rec.feat.a1.p':      'Discover proven strategies to reduce anxiety and regain control of your emotions in difficult moments.',
      'rec.feat.a2.h':      'Signs of Depression and When to Seek Help',
      'rec.feat.a2.p':      'Learn to recognize the symptoms of depression and discover why seeking professional support is a courageous step.',
      'rec.feat.a3.h':      'Assertive Communication in Relationships',
      'rec.feat.a3.p':      'Improve your personal relationships by learning to communicate clearly, respectfully and effectively.',
      'rec.all.heading':    'All Articles',
      'rec.sort.label':     'Sort by:',
      'rec.sort.recent':    'Most recent',
      'rec.sort.popular':   'Most popular',
      'rec.sort.title':     'Title A-Z',
      'rec.a1.h':           'Mindfulness: Reduce Daily Stress',
      'rec.a1.p':           'Simple mindfulness techniques you can practice at any time of day.',
      'rec.a2.h':           'The Importance of Mental Self-care',
      'rec.a2.p':           'Why caring for your mental health should be a priority in your daily life.',
      'rec.a3.h':           'Healing Family Relationships',
      'rec.a3.p':           'Strategies to improve family dynamics and strengthen bonds.',
      'rec.a4.h':           'Breathing to Control Anxiety',
      'rec.a4.p':           'Learn breathing techniques that calm the nervous system in minutes.',
      'rec.a5.h':           'Good Sleep: Key to Your Mental Health',
      'rec.a5.p':           'The connection between sleep and emotional health, and how to improve your rest.',
      'rec.a6.h':           'Healthy Boundaries in Relationships',
      'rec.a6.p':           'Learn to set boundaries without guilt and build healthier relationships.',
      'rec.a7.h':           'Overcoming Grief: A Personal Journey',
      'rec.a7.p':           'Understanding the stages of grief and how to navigate this process with support.',
      'rec.a8.h':           'Social Anxiety: How to Face It',
      'rec.a8.p':           'Practical strategies to manage fear of social situations.',
      'rec.a9.h':           'Self-esteem: Foundation of Wellbeing',
      'rec.a9.p':           'How to build a healthy relationship with yourself and strengthen your self-esteem.',
      'rec.topics.heading': 'Explore by Topic',
      'rec.topics.intro':   'Find specific resources for what matters most to you today',
      'rec.topic.ansiedad.h':   'Anxiety',
      'rec.topic.ansiedad.p':   'Techniques, guides and tips to manage anxiety day to day.',
      'rec.topic.ansiedad.n':   '8 articles',
      'rec.topic.depresion.h':  'Depression',
      'rec.topic.depresion.p':  'Information, signs and paths to recovery.',
      'rec.topic.depresion.n':  '6 articles',
      'rec.topic.relaciones.h': 'Relationships',
      'rec.topic.relaciones.p': 'Communication, boundaries and healthy connections.',
      'rec.topic.relaciones.n': '7 articles',
      'rec.topic.estres.h':     'Stress',
      'rec.topic.estres.p':     'Stress management strategies and emotional balance.',
      'rec.topic.estres.n':     '5 articles',
      'rec.topic.autocuidado.h':'Self-care',
      'rec.topic.autocuidado.p':'Habits and practices to care for your holistic wellbeing.',
      'rec.topic.autocuidado.n':'9 articles',
      'rec.topic.familia.h':    'Family',
      'rec.topic.familia.p':    'Family dynamics, parenting and communication at home.',
      'rec.topic.familia.n':    '4 articles',
      'rec.topic.btn':          'Explore',
      'rec.news.heading':       'Receive Weekly Resources',
      'rec.news.sub':           'Articles, tips and wellness reminders straight to your inbox',
      'rec.news.ph':            'Your email address',
      'rec.news.btn':           'Subscribe',
      'rec.news.privacy':       'No spam. You can unsubscribe anytime.',
      'rec.cta.heading':        'Need Personalized Support?',
      'rec.cta.sub':            'Articles are a good start, but talking to a professional makes all the difference.',
      'rec.cta.btn':            'Talk to a therapist',
      'rec.cta.btn2':           'Explore services',

      /* Badge strip */
      'badge.1': '100% Confidential',
      'badge.2': 'Verified Therapists',
      'badge.3': 'Encrypted Data',
      'badge.4': 'No Commitment',

      /* Conditions section */
      'cond.heading': 'What can we treat together?',
      'cond.intro':   'Our specialists are trained to support you through a wide variety of emotional challenges.',
      'cond.1.name': 'Anxiety',      'cond.1.desc': 'Learn to manage excessive worry and panic attacks.',
      'cond.2.name': 'Depression',   'cond.2.desc': 'Regain energy, mood and joy with professional support.',
      'cond.3.name': 'Stress',       'cond.3.desc': 'Develop tools to face everyday pressures.',
      'cond.4.name': 'Burnout',      'cond.4.desc': 'Overcome work exhaustion and restore balance in your life.',
      'cond.5.name': 'Relationships','cond.5.desc': 'Improve your bonds and learn to communicate more effectively.',
      'cond.6.name': 'Self-esteem',  'cond.6.desc': 'Build a healthier, more compassionate relationship with yourself.',

      /* Outcome callout */
      'oc.stat':  '92%',
      'oc.desc':  'of our patients report improvement in their first 12 weeks',
      'oc.label': 'Based on patient follow-up data',

      /* Service tabs */
      'svc.tab.all':    'All',
      'svc.tab.ind':    'Individual',
      'svc.tab.couple': 'Couples',
      'svc.tab.family': 'Family',

      /* Final CTA */
      'fcta.heading': 'Your path to wellbeing starts today',
      'fcta.sub':     'Hundreds of people are already doing better. You can be next.',
      'fcta.btn':     'Book your first session',
      'fcta.wa':      'Message on WhatsApp',

      /* Therapists */
      'th.heading':   'Meet our specialists',
      'th.intro':     'Certified, empathetic professionals committed to your wellbeing.',
      'th.1.name':    'Dr. Carolina V.',
      'th.1.spec':    'Anxiety & Depression',
      'th.1.years':   '8 years of experience',
      'th.1.quote':   '"My goal is for every patient to discover their own inner strength."',
      'th.2.name':    'Psych. Andrés M.',
      'th.2.spec':    'Couples Therapy',
      'th.2.years':   '6 years of experience',
      'th.2.quote':   '"Healthy relationships are built with empathy, listening and joint work."',
      'th.3.name':    'Dr. Valentina R.',
      'th.3.spec':    'Burnout & Stress',
      'th.3.years':   '5 years of experience',
      'th.3.quote':   '"Burnout is not weakness; it is a signal that you need support and care."',
      'th.tag.adults': 'Adults',
      'th.tag.rel':    'Relationships',
      'th.tag.comm':   'Communication',
      'th.tag.fam':    'Families',
      'th.tag.stress': 'Stress',
      'th.tag.work':   'Work',
      'th.tag.self':   'Self-esteem',

      /* Help picker */
      'hp.heading':    'What do you need help with today?',
      'hp.pill.1': 'Anxiety',      'hp.pill.2': 'Depression',
      'hp.pill.3': 'Stress',       'hp.pill.4': 'Relationships',
      'hp.pill.5': 'Burnout',      'hp.pill.6': 'Self-esteem',
      'hp.pill.7': 'Trauma',       'hp.pill.8': 'Grief',
      'hp.default':    'Select a topic to see how we can help you.',
      'hp.cta.prefix': 'We can help you with ',
      'hp.cta.suffix': '. Schedule your first session →',

      /* Clinical outcomes */
      'out.heading': 'Results that matter',
      'out.intro':   'Real numbers from real people who trusted our process.',
      'out.1.num':   '92%',        'out.1.label': 'Improvement reported', 'out.1.desc': 'Patients who report significant improvement in their overall wellbeing.',
      'out.2.num':   '8 weeks',    'out.2.label': 'Average result',       'out.2.desc': 'Average time to notice positive and sustainable changes.',
      'out.3.num':   '3x',         'out.3.label': 'More effective',       'out.3.desc': 'Than self-directed approaches without professional guidance.',
      'out.4.num':   '98%',        'out.4.label': 'Satisfaction',         'out.4.desc': 'Of patients satisfied with the quality of their assigned therapist.',

      /* Evidence-based approach */
      'ap.heading': 'An evidence-based approach',
      'ap.intro':   'We combine the most effective, science-backed methodologies to ensure your progress.',
      'ap.1.title': 'Cognitive Behavioural Therapy (CBT)',
      'ap.1.desc':  'Identify and transform negative thinking patterns that affect your emotional and behavioural wellbeing.',
      'ap.2.title': 'Mindfulness & Mindful Awareness',
      'ap.2.desc':  'Develop the ability to be present and manage stress with mindful attention techniques.',
      'ap.3.title': 'Progress Tracking',
      'ap.3.desc':  'We measure and monitor your progress with validated tools to ensure concrete, sustainable results.',
      'ap.link':    'Scientific evidence →',

      /* Platform features */
      'pf.heading': 'Everything you need, in one place',
      'pf.1': 'High-Quality Video',
      'pf.2': '100% Private & Secure',
      'pf.3': 'Flexible Scheduling',
      'pf.4': 'From Any Device',
      'pf.5': 'Between-Session Messaging',
      'pf.6': 'Progress Tracking'
    }
  };

  /* ── i18n engine ─────────────────────────────────────────── */
  var I18N = {
    current: 'es',
    typewriterPhrases: TYPEWRITER,

    t: function (key) {
      var s = STRINGS[this.current];
      return (s && s[key] !== undefined) ? s[key] : (STRINGS.es[key] || key);
    },

    apply: function (lang) {
      if (lang !== 'es' && lang !== 'en') lang = 'es';
      this.current = lang;

      /* html[lang] attribute */
      document.documentElement.setAttribute('lang', lang === 'es' ? 'es-419' : 'en');

      /* data-i18n → textContent */
      var self = this;
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var v = self.t(el.getAttribute('data-i18n'));
        if (v) el.textContent = v;
      });

      /* data-i18n-html → innerHTML (controlled content, safe) */
      document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
        var v = self.t(el.getAttribute('data-i18n-html'));
        if (v) el.innerHTML = v;
      });

      /* data-i18n-aria → aria-label */
      document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
        var v = self.t(el.getAttribute('data-i18n-aria'));
        if (v) el.setAttribute('aria-label', v);
      });

      /* data-i18n-placeholder → placeholder attribute */
      document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        var v = self.t(el.getAttribute('data-i18n-placeholder'));
        if (v) el.setAttribute('placeholder', v);
      });

      /* <title> and <meta name="description"> via data attributes on <head> */
      var titleKey = document.documentElement.dataset.i18nTitle;
      if (titleKey) { var tv = self.t(titleKey); if (tv) document.title = tv; }
      var descEl = document.querySelector('meta[name="description"][data-i18n-content]');
      if (descEl) { var dv = self.t(descEl.getAttribute('data-i18n-content')); if (dv) descEl.setAttribute('content', dv); }

      /* contact form alert message — store on element, not in attribute */
      var form = document.querySelector('.contact-form form');
      if (form) {
        form.dataset.submitMsg = self.t('ct.form.ok');
        /* If not yet wired, add once */
        if (!form.dataset.i18nWired) {
          form.dataset.i18nWired = '1';
          form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert(form.dataset.submitMsg || 'Gracias');
          });
          /* Remove the inline onsubmit to avoid double-firing */
          form.removeAttribute('onsubmit');
        }
      }

      /* persist */
      try { localStorage.setItem('umana_lang', lang); } catch (e) {}

      /* notify typewriter */
      if (window._umanaTypewriter) window._umanaTypewriter.setLang(lang);
    },

    init: function () {
      var saved;
      try { saved = localStorage.getItem('umana_lang'); } catch (e) {}
      var lang = (saved === 'en') ? 'en' : 'es';
      this.current = lang;
      if (lang !== 'es') this.apply(lang);
    }
  };

  window.UMANA_I18N = I18N;
}());
