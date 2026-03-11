# 🚀 Guía de Despliegue en GitHub Pages

## ¡Hosting GRATUITO para tu sitio web Umana!

GitHub Pages es un servicio de hosting **completamente GRATUITO** proporcionado por GitHub para sitios web estáticos. ¡Perfecto para tu plataforma Umana!

---

## 📋 **¿Qué es GitHub Pages?**

GitHub Pages es un servicio que aloja tu sitio web directamente desde tu repositorio de GitHub, completamente gratis.

### ✨ Beneficios:
- ✅ **100% GRATUITO** - Sin tarjeta de crédito, sin límites
- ✅ **Fácil configuración** - 3 clics y listo
- ✅ **HTTPS/SSL incluido** - Conexión segura automática
- ✅ **Dominio personalizado** - Usa tu propio dominio (opcional)
- ✅ **Despliegue automático** - Se actualiza con cada push
- ✅ **Confiable** - Infraestructura de GitHub
- ✅ **Rápido** - CDN global

---

## 🎯 **Despliegue Rápido (3 Pasos)**

### **Paso 1: Ir a Configuración**

1. Ve a tu repositorio en GitHub:
   ```
   https://github.com/luisspiel16-beep/Personal
   ```

2. Haz clic en **"Settings"** (Configuración) en la parte superior

### **Paso 2: Activar GitHub Pages**

1. En el menú izquierdo, busca y haz clic en **"Pages"**

2. En la sección **"Source"** (Origen):
   - **Branch:** Selecciona `copilot/add-landing-page-es`
   - **Folder:** Selecciona `/ (root)`

3. Haz clic en **"Save"** (Guardar)

### **Paso 3: ¡Esperar y Visitar!**

1. Espera 2-3 minutos para el primer despliegue

2. GitHub mostrará tu URL:
   ```
   https://luisspiel16-beep.github.io/Personal/
   ```

3. Visita esa URL y ¡tu sitio estará en vivo! 🎉

---

## 🌐 **URLs de tu Sitio**

Una vez desplegado, tu sitio estará disponible en:

- **Página Principal:**
  ```
  https://luisspiel16-beep.github.io/Personal/
  ```

- **Página de Recursos:**
  ```
  https://luisspiel16-beep.github.io/Personal/recursos.html
  ```

- **Página de Ayuda en Crisis:**
  ```
  https://luisspiel16-beep.github.io/Personal/ayuda-crisis.html
  ```

---

## 🔄 **Actualizaciones Automáticas**

Después de la configuración inicial:

1. Haces cambios en tus archivos
2. Commit: `git commit -m "Actualizar contenido"`
3. Push: `git push origin copilot/add-landing-page-es`
4. ¡GitHub Pages actualiza automáticamente en 1-2 minutos!

**No necesitas hacer nada más.** 🚀

---

## 🎨 **Dominio Personalizado (Opcional)**

Si quieres usar tu propio dominio (ej: www.umana.com):

### **Paso 1: Agregar CNAME**

1. Crea un archivo llamado `CNAME` en la raíz del repositorio
2. Dentro, escribe tu dominio:
   ```
   www.umana.com
   ```
3. Commit y push

### **Paso 2: Configurar DNS**

En tu proveedor de dominio (GoDaddy, Namecheap, etc.):

1. Agrega un registro CNAME:
   - **Host:** `www`
   - **Apunta a:** `luisspiel16-beep.github.io`

2. O agrega registros A para apex domain:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

### **Paso 3: Esperar**

- Cambios DNS toman 24-48 horas
- Luego tu sitio estará en tu dominio personalizado
- HTTPS se activará automáticamente

---

## 💰 **Comparación: GitHub Pages vs Netlify**

| Característica | GitHub Pages | Netlify |
|----------------|--------------|---------|
| **Costo** | 100% GRATIS | GRATIS (con límites) |
| **Configuración** | 3 clics | Cuenta + importar |
| **Despliegue** | Auto en push | Auto en push |
| **HTTPS/SSL** | GRATIS ✅ | GRATIS ✅ |
| **Dominio Custom** | GRATIS ✅ | GRATIS ✅ |
| **Proceso Build** | Solo estático | Soporta builds |
| **Formularios** | No ❌ | Sí ✅ |
| **Redirects** | Limitado | Completo |
| **Analytics** | Básico | Avanzado |
| **CDN** | CDN GitHub | CDN Global |
| **Límites** | 100GB/mes | 100GB/mes |

### **Recomendación:**

- **GitHub Pages** → Perfecto para sitios estáticos (como el tuyo)
- **Netlify** → Mejor si necesitas formularios o redirects complejos

Para tu sitio Umana, **GitHub Pages es ideal** porque:
- Es completamente gratis
- No necesitas formularios backend
- Es más simple de configurar
- Funciona perfectamente con sitios estáticos

---

## 📱 **Para Instagram Bio**

Usa esta URL en tu perfil de Instagram:
```
https://luisspiel16-beep.github.io/Personal/
```

O si configuras dominio personalizado:
```
www.umana.com
```

---

## ✅ **Lo que Funciona en GitHub Pages**

Todo tu sitio web Umana funciona perfectamente:

- ✅ Página principal con hero, servicios, contacto
- ✅ Página de recursos (blog/consejos)
- ✅ Página de ayuda en crisis
- ✅ Navegación entre páginas
- ✅ Botones de WhatsApp funcionando
- ✅ Enlaces de redes sociales (TikTok, Instagram, Facebook)
- ✅ Todas las animaciones e interacciones
- ✅ Diseño responsive móvil
- ✅ Colores de marca y estilos
- ✅ Búsqueda (frontend)
- ✅ Formulario newsletter (frontend)

**Nota:** Los formularios funcionan en el frontend. Para enviar emails, necesitarás un servicio backend como Formspree o EmailJS.

---

## 🆘 **Solución de Problemas**

### **El sitio no carga**

1. Verifica que Settings → Pages muestra una marca verde
2. Espera 3-5 minutos después del primer despliegue
3. Haz hard refresh en el navegador (Ctrl+Shift+R)
4. Limpia el caché del navegador

### **Imágenes no aparecen**

1. Asegúrate que la carpeta `assets/` esté en el repositorio
2. Verifica que las rutas de imágenes sean relativas (no absolutas)
3. Confirma que `.nojekyll` existe en la raíz

### **Estilos CSS no se aplican**

1. Verifica que los archivos CSS estén en el repositorio
2. Comprueba las rutas en los `<link>` tags
3. Asegúrate que `.nojekyll` existe
4. Limpia caché del navegador

### **Dominio personalizado no funciona**

1. Verifica que el archivo CNAME existe con tu dominio
2. Confirma que los registros DNS están configurados
3. Espera 24-48 horas para propagación DNS
4. Verifica en Settings → Pages que el dominio está verificado

### **404 en páginas internas**

1. Asegúrate que los archivos `.html` existen
2. Usa rutas completas: `recursos.html` no solo `recursos`
3. Las URLs son case-sensitive (mayúsculas/minúsculas importan)

---

## 🔧 **Configuración Avanzada**

### **Archivo `.nojekyll`**

Este archivo ya está incluido en tu repositorio. Le dice a GitHub que:
- No procese el sitio con Jekyll
- Sirva los archivos tal cual
- Esencial para sitios estáticos HTML puros

### **Estructura de Archivos**

```
Personal/
├── index.html              # Página principal
├── recursos.html           # Página de recursos/blog
├── ayuda-crisis.html       # Página de ayuda en crisis
├── styles.css              # Estilos principales
├── recursos.css            # Estilos de recursos
├── ayuda-crisis.css        # Estilos de crisis
├── assets/
│   └── images/
│       ├── logo-placeholder.svg
│       └── ...
├── .nojekyll              # Importante para GitHub Pages
├── netlify.toml           # Config Netlify (ignorado en GitHub Pages)
└── _redirects             # Redirects Netlify (ignorado en GitHub Pages)
```

---

## 📊 **Límites y Capacidades**

GitHub Pages tiene límites generosos:

- **Tamaño del repositorio:** 1 GB recomendado
- **Tamaño del sitio:** 1 GB
- **Ancho de banda:** 100 GB/mes
- **Builds:** 10 por hora

Para tu sitio (~30-50KB), estos límites son más que suficientes.

---

## 🎓 **Mejores Prácticas**

### **1. Optimizar Imágenes**

- Comprime imágenes antes de subir
- Usa formatos modernos (WebP, SVG)
- Tamaño recomendado: < 500KB por imagen

### **2. Minimizar CSS/JS**

- Considera minificar archivos grandes
- Combina archivos CSS cuando sea posible
- Usa herramientas como CSSNano

### **3. Caché del Navegador**

- GitHub Pages maneja el caché automáticamente
- Los visitantes obtienen versiones cacheadas
- Actualizaciones pueden tardar minutos en verse

### **4. Monitoreo**

- Usa Google Analytics para estadísticas
- GitHub Insights muestra tráfico del repositorio
- Revisa periódicamente que todo funciona

---

## 🚀 **Pasos Siguientes**

Después de desplegar en GitHub Pages:

1. **Prueba todas las páginas**
   - Verifica que la navegación funciona
   - Prueba todos los enlaces
   - Revisa en móvil y desktop

2. **Agrega tu logo**
   - Sube tu logo a `assets/images/`
   - Actualiza referencias en HTML
   - Ver `GUIA_IMAGENES.md` para ayuda

3. **Configura Analytics**
   - Agrega Google Analytics (opcional)
   - Monitorea visitas y comportamiento

4. **Comparte tu URL**
   - Agrega a Instagram bio
   - Comparte en redes sociales
   - Envía a clientes

5. **Mantén actualizado**
   - Actualiza contenido regularmente
   - Agrega nuevos posts en recursos
   - Revisa números de emergencia

---

## 💡 **Tips y Trucos**

### **URL Corta para Instagram**

Si la URL de GitHub Pages es muy larga, usa un acortador:
- Bitly: https://bitly.com
- TinyURL: https://tinyurl.com

O mejor: configura un dominio personalizado.

### **Actualizar Contenido Fácilmente**

1. Edita archivos directamente en GitHub web
2. Click en archivo → "Edit" (lápiz)
3. Haz cambios
4. Commit directamente
5. Sitio se actualiza en 1-2 minutos

### **Preview Local**

Para probar cambios antes de publicar:
```bash
# Instala un servidor local simple
python -m http.server 8000

# Abre en navegador
http://localhost:8000
```

---

## 📧 **Soporte**

### **Recursos Oficiales**

- **GitHub Pages Docs:** https://docs.github.com/pages
- **GitHub Community:** https://github.community
- **GitHub Support:** https://support.github.com

### **Tus Archivos de Ayuda**

- `GITHUB_PAGES_DEPLOY.md` - Esta guía
- `DEPLOY.md` - Guía de Netlify
- `GUIA_IMAGENES.md` - Cómo agregar imágenes

---

## ✨ **Resumen**

**Sí, puedes hospedar tu sitio en GitHub ¡GRATIS!**

### **Ventajas:**
- ✅ Completamente gratis, sin límites ocultos
- ✅ Fácil de configurar (3 clics)
- ✅ Actualizaciones automáticas
- ✅ HTTPS incluido
- ✅ Dominio personalizado disponible
- ✅ Confiable y rápido
- ✅ Perfecto para sitios estáticos

### **Proceso:**
1. Ve a Settings → Pages
2. Selecciona branch y carpeta
3. ¡Listo! Sitio en vivo en minutos

### **Tu URL:**
```
https://luisspiel16-beep.github.io/Personal/
```

---

**¡Tu plataforma Umana está lista para el mundo! 🌍**

**Sigue los pasos arriba y estarás en vivo en menos de 5 minutos.** 🎊

---

*Última actualización: Marzo 2026*
