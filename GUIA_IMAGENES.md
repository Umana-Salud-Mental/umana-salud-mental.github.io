# Guía Rápida: Cómo Agregar Imágenes y Logo

## 📁 Estructura de Carpetas

La estructura recomendada para tus imágenes es:

```
/assets/
  /images/
    logo-placeholder.svg (reemplazar con tu logo)
    logo.png (tu logo real)
    /blog/
      post-1.jpg
      post-2.jpg
      ...
    /team/
      therapist-1.jpg
      therapist-2.jpg
```

## 🎨 Agregar Logo de Umana

### Opción 1: Via GitHub (Recomendado)

1. Ve a tu repositorio en GitHub
2. Navega a: `assets/images/`
3. Click en "Add file" → "Upload files"
4. Arrastra tu logo (formatos: PNG, SVG, JPG)
5. Nombre sugerido: `logo.png` o `logo-umana.svg`
6. Commit los cambios

### Opción 2: Via Git Local

```bash
# Copia tu logo a la carpeta correcta
cp tu-logo.png /path/to/Personal/assets/images/logo.png

# Añade y commitea
git add assets/images/logo.png
git commit -m "Add Umana logo"
git push origin copilot/add-landing-page-es
```

### Actualizar el HTML

Edita estos archivos para usar tu logo real:

**index.html (línea 18):**
```html
<img src="assets/images/logo.png" alt="Umana - Plataforma de Salud Mental" class="logo-img">
```

**recursos.html (línea 20):**
```html
<img src="assets/images/logo.png" alt="Umana - Plataforma de Salud Mental" width="150">
```

**ayuda-crisis.html (línea 20):**
```html
<img src="assets/images/logo.png" alt="Umana - Plataforma de Salud Mental" width="150">
```

## 📝 Agregar Imágenes a Posts del Blog

### 1. Subir Imágenes

Sube las imágenes de tus posts a `assets/images/blog/`:

```bash
# Ejemplo: subir imagen de un post
cp ansiedad-post.jpg assets/images/blog/ansiedad-post.jpg
git add assets/images/blog/ansiedad-post.jpg
git commit -m "Add blog post image"
git push
```

### 2. Actualizar en recursos.html

Reemplaza los gradientes con imágenes reales:

**Antes:**
```html
<div class="post-image" style="background: linear-gradient(135deg, #B7C6AD 0%, #5D8064 100%);"></div>
```

**Después:**
```html
<div class="post-image" style="background-image: url('assets/images/blog/ansiedad-post.jpg'); background-size: cover; background-position: center;"></div>
```

## 🖼️ Imagen "La ayuda está al alcance de tus manos"

### Crear/Subir Imagen

1. Diseña o descarga una imagen relevante (recomendado: 400x400px)
2. Súbela a: `assets/images/hero-help.jpg`

### Actualizar recursos.html (línea 68)

**Reemplazar el SVG con:**
```html
<div class="get-started-image">
    <img src="assets/images/hero-help.jpg" alt="La ayuda está al alcance de tus manos" style="max-width: 200px; border-radius: 15px;">
</div>
```

## 📸 Imágenes de Equipo (Opcional)

Si quieres agregar fotos de terapeutas en "Quiénes Somos":

### 1. Subir Fotos
```bash
assets/images/team/
  terapeuta-1.jpg
  terapeuta-2.jpg
  terapeuta-3.jpg
```

### 2. Agregar a index.html

En la sección "Nuestro Equipo", puedes agregar:

```html
<div class="team-gallery">
    <div class="team-member">
        <img src="assets/images/team/terapeuta-1.jpg" alt="Terapeuta">
        <h4>Dra. María González</h4>
        <p>Psicóloga Clínica</p>
    </div>
    <!-- Repetir para cada terapeuta -->
</div>
```

## 🎯 Tamaños Recomendados

- **Logo:** 300x100px (PNG con fondo transparente o SVG)
- **Posts destacados:** 800x400px
- **Posts regulares:** 600x300px
- **Imagen hero:** 400x400px o 800x800px
- **Fotos de equipo:** 300x300px (cuadradas)

## 🔧 Herramientas Útiles

### Para Editar Imágenes:
- **Canva** (gratis): https://www.canva.com
- **Figma** (gratis): https://www.figma.com
- **GIMP** (gratis): https://www.gimp.org

### Para Optimizar:
- **TinyPNG**: https://tinypng.com (comprime imágenes)
- **Squoosh**: https://squoosh.app (optimiza y convierte)

### Para Crear Logo:
- **Canva**: Plantillas de logo gratis
- **Looka**: Generador de logos
- **Hatchful** (Shopify): Logo generator

## 📦 Vía Netlify

Una vez desplegado en Netlify:

1. Ve a tu dashboard de Netlify
2. Navega a "Deploys" → "Deploy settings"
3. Puedes subir archivos directamente desde la interfaz
4. O usar Netlify CLI:

```bash
netlify deploy --prod
# Selecciona la carpeta del proyecto
```

## ⚡ Método Rápido - Drag & Drop

### En GitHub:

1. Ve a: https://github.com/luisspiel16-beep/Personal
2. Navega a: `assets/images/`
3. Arrastra y suelta tus imágenes
4. Escribe un mensaje de commit
5. Click "Commit changes"

### En Netlify (después de desplegar):

1. Ve a tu sitio en Netlify
2. Puedes actualizar assets directamente
3. O reconectar con GitHub para auto-deploy

## 📝 Ejemplo Completo

### Paso a Paso para Agregar Logo:

```bash
# 1. Descarga/crea tu logo (ejemplo: logo-umana.png)

# 2. Via GitHub Web:
#    - Ve a tu repo
#    - assets/images/
#    - Upload logo-umana.png

# 3. O via Git:
cd /path/to/Personal
cp ~/Downloads/logo-umana.png assets/images/
git add assets/images/logo-umana.png
git commit -m "Add official Umana logo"
git push origin copilot/add-landing-page-es

# 4. Actualiza index.html, recursos.html, ayuda-crisis.html:
#    Cambia: assets/images/logo-placeholder.svg
#    Por: assets/images/logo-umana.png

# 5. Commit los cambios HTML:
git add index.html recursos.html ayuda-crisis.html
git commit -m "Update logo references"
git push origin copilot/add-landing-page-es

# 6. Deploy en Netlify (auto-deploy si configurado)
```

## 🌐 URLs de Referencia

Después de desplegar, tus imágenes estarán en:
- `https://umana-salud-mental.netlify.app/assets/images/logo.png`
- `https://umana-salud-mental.netlify.app/assets/images/blog/post-1.jpg`

## 💡 Tips

1. **Usa PNG con transparencia para el logo**
2. **Optimiza todas las imágenes antes de subir** (< 500KB)
3. **Usa nombres descriptivos**: `ansiedad-tecnicas.jpg` mejor que `img1.jpg`
4. **Mantén aspect ratios consistentes** para posts
5. **Verifica que las imágenes se vean bien en móvil**

## 🔄 Actualización Automática

Si usas el deploy automático de Netlify:
1. Sube imagen a GitHub
2. Netlify detecta el cambio
3. Auto-despliega en ~1 minuto
4. Tu sitio se actualiza automáticamente

---

**¿Necesitas ayuda?** Contacta vía los issues del repositorio o email.
