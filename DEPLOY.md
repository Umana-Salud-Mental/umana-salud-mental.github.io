# Guía de Despliegue en Netlify - Umana

Esta guía te ayudará a desplegar el sitio web de Umana en Netlify paso a paso.

## 📋 Pre-requisitos

- Cuenta de GitHub (ya la tienes con este repositorio)
- Cuenta de Netlify (gratis en https://netlify.com)

## 🚀 Despliegue Rápido (Recomendado)

### Opción 1: Despliegue Automático desde GitHub

1. **Inicia sesión en Netlify**
   - Ve a https://app.netlify.com
   - Haz clic en "Sign up" o "Log in"
   - Selecciona "GitHub" para iniciar sesión

2. **Conecta tu repositorio**
   - Haz clic en "Add new site" → "Import an existing project"
   - Selecciona "GitHub"
   - Autoriza a Netlify a acceder a tus repositorios
   - Busca y selecciona el repositorio "luisspiel16-beep/Personal"

3. **Configura el sitio**
   - **Branch to deploy:** `copilot/add-landing-page-es` (o `main` si ya hiciste merge)
   - **Build command:** (déjalo vacío)
   - **Publish directory:** `.` (punto)
   - Haz clic en "Deploy site"

4. **¡Listo!**
   - Netlify generará una URL aleatoria como `https://random-name-123456.netlify.app`
   - Puedes cambiar el nombre del sitio en: Site settings → Site details → Change site name

### Opción 2: Despliegue Manual (Drag & Drop)

1. **Prepara los archivos**
   - Descarga todo el contenido del repositorio
   - Asegúrate de tener: `index.html`, `styles.css`, carpeta `assets/`

2. **Sube a Netlify**
   - Ve a https://app.netlify.com/drop
   - Arrastra la carpeta completa del proyecto a la zona de drop
   - Espera a que termine de subir

3. **¡Listo!**
   - Tu sitio estará disponible en unos segundos

## ⚙️ Configuración Avanzada

### Configurar Dominio Personalizado

1. En el dashboard de Netlify, ve a tu sitio
2. Click en "Domain settings"
3. Click en "Add custom domain"
4. Ingresa tu dominio (ejemplo: `www.umana.com`)
5. Sigue las instrucciones para configurar los DNS

### Habilitar HTTPS

- Netlify proporciona SSL/HTTPS automáticamente y gratis
- Se activa automáticamente una vez que configuras tu dominio
- Certificado Let's Encrypt incluido

### Despliegue Continuo

Con la configuración actual (usando GitHub), cada vez que hagas push a la rama configurada:
- Netlify detectará los cambios automáticamente
- Construirá y desplegará la nueva versión
- Tu sitio se actualizará en menos de 1 minuto

## 📝 Archivos de Configuración

Este repositorio incluye:

- **`netlify.toml`**: Configuración principal de Netlify
- **`_redirects`**: Reglas de redirección para navegación SPA

Estos archivos ya están configurados y no necesitas modificarlos.

## 🔧 Comandos Útiles de Netlify CLI (Opcional)

Si prefieres usar la línea de comandos:

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Iniciar sesión
netlify login

# Desplegar desde tu máquina
netlify deploy --prod

# Ver el sitio desplegado
netlify open
```

## 🌐 URLs de Ejemplo

Después del despliegue, tu sitio estará disponible en:

- **URL temporal:** `https://[nombre-aleatorio].netlify.app`
- **URL personalizada:** `https://umana-salud-mental.netlify.app` (recomendado)
- **Dominio propio:** `https://www.tudominio.com` (si configuras uno)

## 📊 Monitoreo y Analytics

Netlify proporciona:
- Estadísticas de tráfico básicas (gratis)
- Logs de despliegue
- Notificaciones por email de despliegues

Para analytics más avanzados, puedes integrar:
- Google Analytics
- Plausible
- Fathom

## 🔄 Actualizar el Sitio

### Método 1: Push a GitHub (Automático)
```bash
# Hacer cambios en los archivos
git add .
git commit -m "Actualización del sitio"
git push origin copilot/add-landing-page-es

# Netlify detectará y desplegará automáticamente
```

### Método 2: Despliegue Manual
- Sube los archivos actualizados usando drag & drop en Netlify
- O usa `netlify deploy --prod` con CLI

## ⚠️ Solución de Problemas

### El sitio no carga correctamente
- Verifica que `index.html` esté en la raíz del directorio publicado
- Revisa los logs de despliegue en Netlify dashboard

### Las imágenes no se muestran
- Asegúrate de que la carpeta `assets/` esté incluida en el despliegue
- Verifica las rutas en el código (deben ser relativas: `assets/images/...`)

### Los cambios no se reflejan
- Limpia la caché del navegador (Ctrl+Shift+R)
- Verifica que el despliegue se completó en Netlify
- Espera 1-2 minutos para propagación de CDN

## 📱 Configuración de Formularios (Opcional)

Si quieres que el formulario de contacto funcione:

1. Actualiza el formulario en `index.html`:
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- tus campos del formulario -->
</form>
```

2. Netlify capturará automáticamente los envíos
3. Los verás en: Site dashboard → Forms

## 🎯 Mejores Prácticas

1. **Siempre prueba en local** antes de desplegar
2. **Usa Git** para control de versiones
3. **Configura notificaciones** de despliegue por email
4. **Habilita despliegues de preview** para ramas
5. **Configura variables de entorno** si las necesitas en el futuro

## 📞 Soporte

- **Documentación Netlify:** https://docs.netlify.com
- **Comunidad:** https://answers.netlify.com
- **Status:** https://www.netlifystatus.com

## 🎉 ¡Tu Sitio Está Listo!

Una vez desplegado, comparte el enlace:
- En redes sociales
- En tarjetas de presentación
- Por WhatsApp/email a tus clientes

---

**Nota:** Este sitio es estático (HTML/CSS) y no requiere servidor backend. Es rápido, seguro y fácil de mantener.

**¿Necesitas ayuda?** Revisa los logs de Netlify o contacta al soporte de Netlify.
