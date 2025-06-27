# 🎓 Pro-Lab Educativa

> Plataforma educativa moderna para formación laboral con certificación nacional e internacional

![Pro-Lab Educativa](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Características

- ✨ **Hero con video background** y animaciones suaves
- 🔽 **Scroll animado** con flecha interactive
- 🎨 **Scrollbar personalizado** con tema azul corporativo
- 📱 **Diseño responsive** para todos los dispositivos
- 🌙 **Modo oscuro** completo
- 🎓 **Sistema de cursos** con páginas detalladas
- 📋 **Formularios de contacto** integrados
- 🏢 **Secciones corporativas**: About, Stats, Job Board, etc.

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** o **pnpm** (viene con Node.js)
- **Git** - [Descargar aquí](https://git-scm.com/)

## 🛠️ Instalación Local

### 1. Clonar el repositorio
\`\`\`bash
git clone https://github.com/eltanook/pro-lab.git
cd pro-lab
\`\`\`

### 2. Instalar dependencias
\`\`\`bash
npm install
# o si prefieres pnpm
pnpm install
\`\`\`

### 3. Ejecutar en modo desarrollo
\`\`\`bash
npm run dev
# o
pnpm dev
\`\`\`

### 4. Abrir en el navegador
Visita [http://localhost:3000](http://localhost:3000) para ver el proyecto.

## 🌐 Deployment en Netlify

### Opción A: Deploy Automático desde GitHub (Recomendado)

1. **Ir a [Netlify](https://netlify.com)** e inicia sesión
2. Hacer clic en **"New site from Git"**
3. Conectar con **GitHub** y seleccionar el repositorio \`pro-lab\`
4. Configurar las opciones de build:
   - **Build command:** \`npm run build\`
   - **Publish directory:** \`.next\`
   - **Node version:** \`18\`
5. Hacer clic en **"Deploy site"**

### Opción B: Deploy Manual

1. **Construir el proyecto localmente:**
\`\`\`bash
npm run build
\`\`\`

2. **Ir a [Netlify](https://netlify.com)**
3. Arrastrar la carpeta \`.next\` al área de deploy

## 🔧 Configuración de Netlify

El archivo \`netlify.toml\` ya está configurado con:

- ✅ Configuración de build para Next.js
- ✅ Redirects para SPA routing
- ✅ Headers de seguridad
- ✅ Cache optimization
- ✅ Node.js 18

## 📁 Estructura del Proyecto

\`\`\`
prolab-educativa/
├── app/                    # App Router de Next.js 14
│   ├── contacto/          # Página de contacto
│   ├── cursos/            # Páginas de cursos
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes React
│   ├── course/            # Componentes de cursos
│   ├── layout/            # Header y Footer
│   ├── sections/          # Secciones de página
│   └── ui/                # Componentes UI reutilizables
├── lib/                   # Utilidades y datos
│   ├── courses-data.ts    # Datos de cursos
│   └── utils.ts           # Funciones utilitarias
├── public/                # Assets estáticos
│   ├── materias/          # Imágenes de materias
│   ├── hero.mp4          # Video del hero
│   └── *.jpg              # Imágenes generales
├── styles/                # Estilos adicionales
├── netlify.toml           # Configuración de Netlify
└── package.json           # Dependencias y scripts
\`\`\`

## 🎨 Tecnologías Utilizadas

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS utilitario
- **Lucide React** - Iconos modernos
- **Shadcn/ui** - Componentes UI de alta calidad

## 🔧 Scripts Disponibles

\`\`\`bash
npm run dev        # Servidor de desarrollo
npm run build      # Build para producción
npm run start      # Servidor de producción
npm run lint       # Linter de código
\`\`\`

## 🌟 Funcionalidades Destacadas

### Hero Section
- Video background automático
- Flecha animada para scroll suave
- Diseño responsive con overlays

### Sistema de Cursos
- Páginas dinámicas para cada curso
- Información detallada y curriculum
- Cursos relacionados
- Imágenes optimizadas

### UI/UX
- Scrollbar personalizado
- Animaciones suaves
- Modo oscuro completo
- Componentes accesibles

## 📞 Soporte

Para soporte técnico, contacta a través de:
- **Email:** info@prolabeducativa.com.ar
- **WhatsApp:** +54 9 11 1234-5678

## 📄 Licencia

Este proyecto fue desarrollado por [Nexium Solutions](https://nexiumsolutions.online/) para Pro-Lab Educativa.

---

### 🚀 ¡Listo para producción en Netlify!

El proyecto está completamente configurado para deployment automático. Solo conecta tu repositorio de GitHub con Netlify y se deployará automáticamente en cada push. 