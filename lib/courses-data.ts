export interface Course {
  slug: string
  title: string
  category: string
  description: string
  duration: string
  modality: string
  students: string
  rating: number
  price: string
  popular: boolean
  icon: string
  heroImage: string
  overview: string
  objectives: string[]
  curriculum: {
    module: string
    topics: string[]
  }[]
  requirements: string[]
  benefits: string[]
  certification: string
  jobOpportunities: string[]
  relatedCourses: string[]
  targetAudience?: string
  whatIncludes?: string[]
  methodology?: string
  finalProject?: string
}

export const coursesData: Course[] = [
  {
    slug: "criminalistica",
    title: "Diplomatura en Ciencias Criminalísticas",
    category: "Área Jurídica y Social",
    description: "Análisis forense, investigación penal, técnicas periciales",
    duration: "6 meses",
    modality: "Online en vivo",
    students: "150+ estudiantes",
    rating: 4.9,
    price: "Consultar",
    popular: true,
    icon: "Gavel",
    heroImage: "/materias/criminologia.png",
    overview:
      "La Diplomatura en Ciencias Criminalísticas te prepara para trabajar en el sistema judicial argentino con conocimientos sólidos en investigación criminal, análisis forense y técnicas periciales. Aprenderás de profesionales activos en el campo y desarrollarás habilidades prácticas para resolver casos reales.",
    objectives: [
      "Dominar técnicas de investigación criminal moderna",
      "Aplicar métodos de análisis forense en diferentes tipos de evidencia",
      "Desarrollar habilidades de observación y análisis crítico",
      "Comprender el marco legal y procesal penal argentino",
      "Elaborar informes periciales profesionales",
    ],
    curriculum: [
      {
        module: "Introducción a las Ciencias Criminalísticas",
        topics: ["Historia de la criminalística", "Metodología científica aplicada", "Ética profesional"],
      },
      {
        module: "Investigación de la Escena del Crimen",
        topics: [
          "Preservación de la escena",
          "Técnicas de búsqueda",
          "Documentación fotográfica",
          "Cadena de custodia",
        ],
      },
      {
        module: "Dactiloscopia",
        topics: ["Clasificación de huellas dactilares", "Técnicas de revelado", "Comparación e identificación"],
      },
      {
        module: "Balística Forense",
        topics: ["Armas de fuego", "Análisis de proyectiles", "Residuos de disparo"],
      },
      {
        module: "Documentología",
        topics: ["Análisis de escrituras", "Falsificaciones", "Alteraciones documentales"],
      },
    ],
    requirements: [
      "Secundario completo",
      "Mayor de 18 años",
      "Computadora con conexión a internet estable",
      "Disponibilidad para clases en vivo",
    ],
    benefits: [
      "Certificación nacional e internacional",
      "Acceso a bolsa de trabajo especializada",
      "Prácticas con casos reales",
      "Networking con profesionales del sector",
      "Material de estudio actualizado",
    ],
    certification: "Certificado avalado por la Cámara Argentina de Capacitación y Profesionalización y O.I.E.P.",
    jobOpportunities: [
      "Perito judicial",
      "Investigador privado",
      "Consultor en seguridad",
      "Analista forense",
      "Instructor en academias policiales",
    ],
    relatedCourses: ["lsa", "marketing-digital", "personal-trainer"],
  },
  {
    slug: "marketing-digital",
    title: "Marketing Digital",
    category: "Marketing y Tecnología",
    description: "Redes sociales, publicidad online, SEO",
    duration: "4 meses",
    modality: "Online en vivo",
    students: "300+ estudiantes",
    rating: 4.8,
    price: "Consultar",
    popular: true,
    icon: "TrendingUp",
    heroImage: "/materias/marketing.jpg",
    overview:
      "Domina el mundo digital y convierte tu pasión por las redes sociales en una carrera profesional. Aprende estrategias de marketing digital, manejo de redes sociales, publicidad online y SEO para posicionarte como experta en el área más demandada del momento.",
    objectives: [
      "Crear estrategias de marketing digital efectivas",
      "Gestionar redes sociales profesionalmente",
      "Dominar herramientas de publicidad online",
      "Aplicar técnicas de SEO y SEM",
      "Analizar métricas y optimizar campañas",
    ],
    curriculum: [
      {
        module: "Fundamentos del Marketing Digital",
        topics: ["Ecosistema digital", "Customer journey", "Buyer personas", "Estrategia de contenidos"],
      },
      {
        module: "Redes Sociales",
        topics: ["Instagram Business", "Facebook Ads", "LinkedIn", "TikTok", "Community Management"],
      },
      {
        module: "Publicidad Online",
        topics: ["Google Ads", "Facebook Ads Manager", "Segmentación", "Optimización de campañas"],
      },
      {
        module: "SEO y Posicionamiento",
        topics: ["Keyword research", "SEO on-page", "Link building", "Google Analytics"],
      },
      {
        module: "E-commerce y Conversión",
        topics: ["Tiendas online", "Email marketing", "Automatización", "Métricas de conversión"],
      },
    ],
    requirements: [
      "Conocimientos básicos de computación",
      "Manejo de redes sociales personales",
      "Computadora con conexión a internet",
      "Ganas de aprender y experimentar",
    ],
    benefits: [
      "Trabajo remoto y flexible",
      "Alta demanda laboral",
      "Posibilidad de freelancing",
      "Herramientas profesionales incluidas",
      "Certificación reconocida",
    ],
    certification: "Certificado avalado por la Cámara Argentina de Capacitación y Profesionalización",
    jobOpportunities: [
      "Community Manager",
      "Especialista en publicidad digital",
      "Consultora en marketing digital",
      "Freelancer independiente",
      "Coordinadora de marketing",
    ],
    relatedCourses: ["emprendimientos-digitales", "secretariado-rrhh", "criminalistica"],
  },
  {
    slug: "personal-trainer",
    title: "Programa de Personal Trainer",
    category: "Salud y Deporte",
    description: "Entrenamiento funcional, planificación deportiva",
    duration: "3 meses",
    modality: "Online en vivo",
    students: "200+ estudiantes",
    rating: 4.9,
    price: "Consultar",
    popular: false,
    icon: "Dumbbell",
    heroImage: "/materias/trainer.jpg",
    overview:
      "Conviértete en Personal Trainer certificada y ayuda a otros a alcanzar sus objetivos fitness. Aprende anatomía, fisiología del ejercicio, planificación de entrenamientos y técnicas de motivación para desarrollar una carrera exitosa en el mundo del fitness.",
    objectives: [
      "Diseñar rutinas de entrenamiento personalizadas",
      "Aplicar principios de anatomía y fisiología",
      "Desarrollar habilidades de coaching y motivación",
      "Crear planes nutricionales básicos",
      "Gestionar tu negocio como trainer independiente",
    ],
    curriculum: [
      {
        module: "Anatomía y Fisiología",
        topics: ["Sistema muscular", "Sistema cardiovascular", "Biomecánica", "Adaptaciones al ejercicio"],
      },
      {
        module: "Planificación del Entrenamiento",
        topics: ["Periodización", "Evaluación física", "Diseño de rutinas", "Progresión de ejercicios"],
      },
      {
        module: "Entrenamiento Funcional",
        topics: ["Ejercicios funcionales", "Entrenamiento con peso corporal", "Uso de implementos"],
      },
      {
        module: "Nutrición Deportiva",
        topics: ["Macronutrientes", "Hidratación", "Suplementación", "Planes alimentarios básicos"],
      },
      {
        module: "Coaching y Negocio",
        topics: ["Técnicas de motivación", "Comunicación efectiva", "Marketing personal", "Gestión de clientes"],
      },
    ],
    requirements: [
      "Interés genuino por el fitness",
      "Condición física básica",
      "Secundario completo",
      "Disponibilidad para prácticas",
    ],
    benefits: [
      "Trabajo flexible e independiente",
      "Ingresos por sesión",
      "Impacto positivo en la salud",
      "Networking en el sector fitness",
      "Posibilidad de especializaciones",
    ],
    certification: "Certificado avalado por la Cámara Argentina de Capacitación y Profesionalización",
    jobOpportunities: [
      "Personal Trainer independiente",
      "Instructor en gimnasios",
      "Coach online",
      "Preparador físico",
      "Instructor de clases grupales",
    ],
    relatedCourses: ["enfermeria-geriatrica", "marketing-digital", "emprendimientos-digitales"],
  },
  {
    slug: "enfermeria-geriatrica",
    title: "Técnicas de Enfermería con Orientación Geriátrica",
    category: "Salud y Deporte",
    description: "Cuidados especializados para adultos mayores",
    duration: "5 meses",
    modality: "Online en vivo",
    students: "180+ estudiantes",
    rating: 4.8,
    price: "Consultar",
    popular: false,
    icon: "Stethoscope",
    heroImage: "/materias/nurse.jpg",
    overview:
      "Especialízate en el cuidado de adultos mayores con técnicas de enfermería geriátrica. Aprende sobre las necesidades específicas de esta población, cuidados paliativos, administración de medicamentos y acompañamiento integral para brindar atención de calidad.",
    objectives: [
      "Aplicar técnicas de enfermería geriátrica",
      "Comprender las necesidades del adulto mayor",
      "Administrar medicamentos de forma segura",
      "Brindar cuidados paliativos",
      "Desarrollar habilidades de comunicación empática",
    ],
    curriculum: [
      {
        module: "Gerontología y Geriatría",
        topics: ["Proceso de envejecimiento", "Cambios fisiológicos", "Patologías frecuentes"],
      },
      {
        module: "Técnicas de Enfermería",
        topics: ["Signos vitales", "Administración de medicamentos", "Cuidados de higiene", "Movilización"],
      },
      {
        module: "Cuidados Especializados",
        topics: ["Úlceras por presión", "Demencia", "Diabetes", "Hipertensión"],
      },
      {
        module: "Cuidados Paliativos",
        topics: ["Manejo del dolor", "Acompañamiento", "Comunicación con familias"],
      },
      {
        module: "Aspectos Legales y Éticos",
        topics: ["Marco legal", "Derechos del paciente", "Ética profesional", "Documentación"],
      },
    ],
    requirements: ["Secundario completo", "Vocación de servicio", "Estabilidad emocional", "Disponibilidad horaria"],
    benefits: [
      "Alta demanda laboral",
      "Trabajo estable",
      "Impacto social positivo",
      "Posibilidad de trabajo domiciliario",
      "Certificación oficial",
    ],
    certification: "Certificado avalado por la Cámara Argentina de Capacitación y Profesionalización",
    jobOpportunities: [
      "Enfermera geriátrica",
      "Cuidadora domiciliaria",
      "Asistente en geriátricos",
      "Acompañante terapéutica",
      "Coordinadora de cuidados",
    ],
    relatedCourses: ["personal-trainer", "administracion-clinicas", "lsa"],
  },
  {
    slug: "administracion-clinicas",
    title: "Administración de Clínicas y Sanatorios",
    category: "Administración y Empresas",
    description: "Gestión eficiente de centros de salud",
    duration: "4 meses",
    modality: "Online en vivo",
    students: "120+ estudiantes",
    rating: 4.7,
    price: "Consultar",
    popular: false,
    icon: "Building2",
    heroImage: "/materias/clinic.jpg",
    overview:
      "Aprende a gestionar eficientemente centros de salud, clínicas y sanatorios. Domina la administración hospitalaria, gestión de recursos humanos, facturación médica y sistemas de calidad para liderar equipos en el sector salud.",
    objectives: [
      "Gestionar operaciones de centros de salud",
      "Administrar recursos humanos médicos",
      "Manejar sistemas de facturación médica",
      "Implementar sistemas de calidad",
      "Coordinar servicios médicos",
    ],
    curriculum: [
      {
        module: "Administración Hospitalaria",
        topics: ["Organización hospitalaria", "Planificación estratégica", "Gestión de recursos"],
      },
      {
        module: "Recursos Humanos en Salud",
        topics: ["Selección de personal médico", "Capacitación", "Evaluación de desempeño"],
      },
      {
        module: "Facturación y Finanzas",
        topics: ["Nomenclador médico", "Obras sociales", "Facturación electrónica", "Control de costos"],
      },
      {
        module: "Calidad y Acreditación",
        topics: ["Sistemas de calidad", "Acreditación hospitalaria", "Indicadores de gestión"],
      },
      {
        module: "Marco Legal Sanitario",
        topics: ["Legislación sanitaria", "Habilitaciones", "Auditorías", "Responsabilidad civil"],
      },
    ],
    requirements: [
      "Secundario completo",
      "Conocimientos básicos de administración",
      "Interés por el sector salud",
      "Habilidades organizativas",
    ],
    benefits: [
      "Sector en crecimiento",
      "Salarios competitivos",
      "Estabilidad laboral",
      "Desarrollo profesional",
      "Impacto en la salud pública",
    ],
    certification: "Certificado avalado por la Cámara Argentina de Capacitación y Profesionalización",
    jobOpportunities: [
      "Administrador de clínica",
      "Coordinador de servicios médicos",
      "Supervisor de facturación",
      "Auditor médico",
      "Consultor en gestión sanitaria",
    ],
    relatedCourses: ["secretariado-administrativo", "secretariado-rrhh", "enfermeria-geriatrica"],
  },
  {
    slug: "secretariado-administrativo",
    title: "Secretariado Administrativo Contable",
    category: "Administración y Empresas",
    description: "Manejo de finanzas, facturación, gestión documental",
    duration: "3 meses",
    modality: "Online en vivo",
    students: "250+ estudiantes",
    rating: 4.6,
    price: "Consultar",
    popular: false,
    icon: "Calculator",
    heroImage: "/materias/contabiliadad.jpg",
    overview:
      "Conviértete en una secretaria administrativa contable integral. Aprende manejo de finanzas, facturación, gestión documental y herramientas administrativas para ser indispensable en cualquier empresa u organización.",
    objectives: [
      "Manejar sistemas contables básicos",
      "Gestionar facturación y cobranzas",
      "Organizar documentación empresarial",
      "Utilizar herramientas ofimáticas avanzadas",
      "Brindar soporte administrativo integral",
    ],
    curriculum: [
      {
        module: "Fundamentos Contables",
        topics: ["Conceptos básicos", "Libros contables", "Asientos contables", "Balance"],
      },
      {
        module: "Facturación y Cobranzas",
        topics: ["Tipos de comprobantes", "Facturación electrónica", "Gestión de cobranzas", "Conciliaciones"],
      },
      {
        module: "Gestión Documental",
        topics: ["Archivo y clasificación", "Correspondencia", "Contratos", "Expedientes"],
      },
      {
        module: "Herramientas Ofimáticas",
        topics: ["Excel avanzado", "Word profesional", "PowerPoint", "Sistemas de gestión"],
      },
      {
        module: "Atención al Cliente",
        topics: ["Comunicación efectiva", "Atención telefónica", "Resolución de conflictos"],
      },
    ],
    requirements: [
      "Secundario completo",
      "Conocimientos básicos de computación",
      "Habilidades organizativas",
      "Buena comunicación",
    ],
    benefits: [
      "Amplia salida laboral",
      "Trabajo en diversos sectores",
      "Horarios flexibles",
      "Posibilidad de teletrabajo",
      "Base para otros estudios",
    ],
    certification: "Certificado avalado por la Cámara Argentina de Capacitación y Profesionalización",
    jobOpportunities: [
      "Secretaria administrativa",
      "Asistente contable",
      "Recepcionista",
      "Asistente de gerencia",
      "Coordinadora administrativa",
    ],
    relatedCourses: ["secretariado-rrhh", "administracion-clinicas", "emprendimientos-digitales"],
  },
  {
    slug: "secretariado-rrhh",
    title: "Secretariado en Recursos Humanos",
    category: "Administración y Empresas",
    description: "Reclutamiento, liquidación de sueldos, clima laboral",
    duration: "3 meses",
    modality: "Online en vivo",
    students: "180+ estudiantes",
    rating: 4.7,
    price: "Consultar",
    popular: false,
    icon: "Users",
    heroImage: "/materias/rrhh.jpg",
    overview:
      "Especialízate en Recursos Humanos y conviértete en el nexo entre la empresa y sus empleados. Aprende reclutamiento, selección, liquidación de sueldos, gestión del clima laboral y desarrollo del talento humano.",
    objectives: [
      "Gestionar procesos de reclutamiento y selección",
      "Liquidar sueldos y jornales",
      "Administrar legajos de personal",
      "Desarrollar clima laboral positivo",
      "Aplicar legislación laboral",
    ],
    curriculum: [
      {
        module: "Fundamentos de RRHH",
        topics: ["Gestión del talento", "Cultura organizacional", "Comunicación interna"],
      },
      {
        module: "Reclutamiento y Selección",
        topics: ["Búsqueda de candidatos", "Entrevistas", "Evaluaciones", "Onboarding"],
      },
      {
        module: "Liquidación de Sueldos",
        topics: ["Conceptos remunerativos", "Descuentos", "Aportes", "Software de liquidación"],
      },
      {
        module: "Legislación Laboral",
        topics: ["Ley de Contrato de Trabajo", "Convenios colectivos", "ART", "Licencias"],
      },
      {
        module: "Desarrollo y Capacitación",
        topics: ["Planes de carrera", "Evaluación de desempeño", "Capacitación", "Clima laboral"],
      },
    ],
    requirements: [
      "Secundario completo",
      "Habilidades interpersonales",
      "Discreción y confidencialidad",
      "Conocimientos básicos de computación",
    ],
    benefits: [
      "Área estratégica en empresas",
      "Desarrollo profesional continuo",
      "Networking empresarial",
      "Salarios competitivos",
      "Impacto en el bienestar laboral",
    ],
    certification: "Certificado avalado por la Cámara Argentina de Capacitación y Profesionalización",
    jobOpportunities: [
      "Asistente de RRHH",
      "Analista de personal",
      "Coordinadora de capacitación",
      "Especialista en nóminas",
      "Consultora en RRHH",
    ],
    relatedCourses: ["secretariado-administrativo", "administracion-clinicas", "marketing-digital"],
  },
  {
    slug: "emprendimientos-digitales",
    title: "Emprendimientos Digitales",
    category: "Marketing y Tecnología",
    description: "Modelos de negocio online, e-commerce, monetización",
    duration: "3 meses",
    modality: "Online en vivo",
    students: "220+ estudiantes",
    rating: 4.8,
    price: "Consultar",
    popular: false,
    icon: "Globe",
    heroImage: "/materias/enterprise.jpg",
    overview:
      "Crea y desarrolla tu propio negocio digital desde cero. Aprende sobre modelos de negocio online, e-commerce, monetización digital y todas las herramientas necesarias para emprender exitosamente en el mundo digital.",
    objectives: [
      "Desarrollar modelos de negocio digitales",
      "Crear tiendas online rentables",
      "Implementar estrategias de monetización",
      "Gestionar emprendimientos digitales",
      "Aplicar marketing digital al emprendimiento",
    ],
    curriculum: [
      {
        module: "Fundamentos del Emprendimiento Digital",
        topics: ["Mindset emprendedor", "Validación de ideas", "Lean startup", "Canvas de negocio"],
      },
      {
        module: "E-commerce y Tiendas Online",
        topics: ["Plataformas de e-commerce", "Logística", "Medios de pago", "Atención al cliente"],
      },
      {
        module: "Monetización Digital",
        topics: ["Modelos de suscripción", "Productos digitales", "Afiliaciones", "Publicidad online"],
      },
      {
        module: "Marketing para Emprendedores",
        topics: ["Branding personal", "Redes sociales", "Content marketing", "Email marketing"],
      },
      {
        module: "Gestión y Escalabilidad",
        topics: ["Automatización", "Métricas clave", "Financiamiento", "Expansión"],
      },
    ],
    requirements: [
      "Espíritu emprendedor",
      "Conocimientos básicos de marketing digital",
      "Computadora con internet",
      "Dedicación y constancia",
    ],
    benefits: [
      "Independencia económica",
      "Trabajo desde cualquier lugar",
      "Escalabilidad ilimitada",
      "Múltiples fuentes de ingresos",
      "Libertad de horarios",
    ],
    certification: "Certificado avalado por la Cámara Argentina de Capacitación y Profesionalización",
    jobOpportunities: [
      "Emprendedor digital",
      "Consultor en e-commerce",
      "Especialista en monetización",
      "Coach de emprendedores",
      "Desarrollador de productos digitales",
    ],
    relatedCourses: ["marketing-digital", "secretariado-administrativo", "personal-trainer"],
  },
  {
    slug: "lsa",
    title: "Lengua de Señas Argentina (LSA)",
    category: "Área Jurídica y Social",
    description: "Inclusión laboral y comunicación accesible",
    duration: "4 meses",
    modality: "Online en vivo",
    students: "160+ estudiantes",
    rating: 4.9,
    price: "Consultar",
    popular: false,
    icon: "HandHeart",
    heroImage: "/materias/señas.jpeg",
    overview:
      "Aprende Lengua de Señas Argentina y conviértete en un puente de comunicación para la comunidad sorda. Desarrolla habilidades de interpretación, traducción y comunicación inclusiva para trabajar en diversos ámbitos profesionales.",
    objectives: [
      "Dominar la gramática de LSA",
      "Desarrollar fluidez en la comunicación",
      "Aplicar técnicas de interpretación",
      "Comprender la cultura sorda",
      "Promover la inclusión social",
    ],
    curriculum: [
      {
        module: "Introducción a LSA",
        topics: ["Historia de la lengua de señas", "Cultura sorda", "Alfabeto dactilológico"],
      },
      {
        module: "Gramática y Estructura",
        topics: ["Parámetros formativos", "Estructura gramatical", "Expresión facial", "Espacio de señas"],
      },
      {
        module: "Vocabulario Especializado",
        topics: ["Señas cotidianas", "Vocabulario técnico", "Números y tiempo", "Colores y formas"],
      },
      {
        module: "Interpretación",
        topics: ["Técnicas de interpretación", "Ética profesional", "Interpretación simultánea"],
      },
      {
        module: "Aplicación Profesional",
        topics: ["LSA en educación", "LSA en salud", "LSA en ámbito judicial", "Accesibilidad"],
      },
    ],
    requirements: [
      "Interés genuino por la inclusión",
      "Habilidades motoras finas",
      "Paciencia y empatía",
      "Compromiso social",
    ],
    benefits: [
      "Impacto social positivo",
      "Demanda creciente",
      "Trabajo en diversos sectores",
      "Desarrollo personal",
      "Contribución a la inclusión",
    ],
    certification: "Certificado avalado por la Cámara Argentina de Capacitación y Profesionalización",
    jobOpportunities: [
      "Intérprete de LSA",
      "Instructor de lengua de señas",
      "Facilitador en inclusión",
      "Asistente en educación especial",
      "Consultor en accesibilidad",
    ],
    relatedCourses: ["criminalistica", "enfermeria-geriatrica", "secretariado-rrhh"],
  },
]

export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find((course) => course.slug === slug)
}

export function getRelatedCourses(courseSlug: string): Course[] {
  const course = getCourseBySlug(courseSlug)
  if (!course) return []

  return course.relatedCourses
    .map((slug) => getCourseBySlug(slug))
    .filter((course): course is Course => course !== undefined)
    .slice(0, 3)
}
