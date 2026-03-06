# Instrucciones para Agregar Imágenes y Logo a Umana

## Cómo Agregar el Logo de Umana

### Opción 1: Subir archivo directamente (Recomendado)
1. Coloca tu archivo de logo (PNG, SVG, o JPG) en la carpeta `assets/images/`
2. Nombra el archivo como `umana-logo.png` o `umana-logo.svg`
3. El logo se mostrará automáticamente en la navegación

### Opción 2: Usar GitHub
1. Ve a tu repositorio en GitHub
2. Navega a la carpeta `assets/images/`
3. Haz clic en "Add file" > "Upload files"
4. Arrastra tu logo o selecciónalo desde tu computadora
5. Haz commit de los cambios

## Estructura de Carpetas para Imágenes

```
Personal/
├── index.html
├── styles.css
└── assets/
    └── images/
        ├── umana-logo.png          (Logo principal)
        ├── hero-background.jpg     (Imagen de fondo del hero - opcional)
        ├── team/                   (Fotos del equipo - opcional)
        │   ├── person1.jpg
        │   └── person2.jpg
        └── icons/                  (Íconos personalizados - opcional)
            ├── therapy.svg
            └── support.svg
```

## Formatos Recomendados

### Para el Logo:
- **SVG** (Vector): Mejor calidad, se ve perfecto en cualquier tamaño
- **PNG** con fondo transparente: Segunda mejor opción
- Tamaño recomendado: 200-300px de ancho

### Para Imágenes de Fondo:
- **JPG** para fotos
- **WebP** para mejor rendimiento
- Tamaño recomendado: 1920x1080px máximo

## Actualizar el HTML con tu Logo

Una vez que hayas subido el logo, edita `index.html` línea 14:

### Si usas PNG:
```html
<div class="logo">
    <img src="assets/images/umana-logo.png" alt="Umana" class="logo-img">
</div>
```

### Si usas SVG:
```html
<div class="logo">
    <img src="assets/images/umana-logo.svg" alt="Umana" class="logo-img">
</div>
```

## Agregar CSS para el Logo

Agrega esto al archivo `styles.css` después de la línea 44:

```css
.logo-img {
    height: 40px;
    width: auto;
    vertical-align: middle;
}

/* Para pantallas pequeñas */
@media (max-width: 480px) {
    .logo-img {
        height: 30px;
    }
}
```

## Agregar Imagen de Fondo al Hero

Si quieres agregar una imagen de fondo a la sección hero:

1. Sube tu imagen a `assets/images/hero-background.jpg`
2. Actualiza el CSS del hero (línea 59-71 en styles.css):

```css
.hero {
    background: linear-gradient(135deg, rgba(34, 139, 139, 0.9) 0%, rgba(72, 201, 176, 0.9) 100%), 
                url('assets/images/hero-background.jpg') center/cover;
    color: #fff;
    padding: 6rem 0;
    text-align: center;
}
```

## Agregar Imágenes al Equipo (Sección "Quiénes Somos")

Las fotos del equipo ya están configuradas en el HTML. Solo necesitas:

1. Subir las fotos a `assets/images/team/`
2. Nombrarlas como: `team-member-1.jpg`, `team-member-2.jpg`, etc.
3. Las imágenes se mostrarán automáticamente

## Optimización de Imágenes

### Antes de subir imágenes grandes:
1. **Comprime las imágenes**: Usa herramientas como TinyPNG.com o Squoosh.app
2. **Redimensiona**: No subas imágenes más grandes de lo necesario
3. **Convierte a WebP**: Para mejor rendimiento (opcional)

## Herramientas Recomendadas

- **Edición de imágenes**: Canva.com (gratis)
- **Compresión**: TinyPNG.com
- **Crear logos**: Canva.com, LogoMakr.com
- **Iconos gratis**: FontAwesome.com, Heroicons.com

## Problemas Comunes

### El logo no se muestra:
- Verifica que la ruta del archivo sea correcta
- Asegúrate que el nombre del archivo coincida exactamente (mayúsculas/minúsculas)
- Verifica que el archivo esté en la carpeta `assets/images/`

### La imagen está distorsionada:
- Usa `width: auto` y `height: auto` en CSS
- Mantén las proporciones originales de la imagen

### La página carga lento:
- Comprime todas las imágenes
- Usa formatos modernos como WebP
- Considera usar lazy loading para imágenes

## Soporte

Si tienes problemas, verifica:
1. La consola del navegador (F12) para ver errores
2. Que las rutas de archivo sean correctas
3. Que los archivos estén en el repositorio

---

**Nota**: Recuerda hacer commit y push de todos los cambios después de agregar imágenes.
