# 🚀 Guía de Despliegue - Recursos Redesign

## ¡Todo está listo para desplegar!

El rediseño de la página Recursos está completamente terminado y listo para publicarse. Solo necesitas completar uno de los siguientes métodos de despliegue.

---

## ✅ Estado Actual

- ✅ Todos los cambios confirmados en `copilot/add-landing-page-es`
- ✅ Página Recursos completamente rediseñada
- ✅ Inspirado en BetterHelp, con identidad Umana
- ✅ Responsive y optimizado
- ✅ Todas las animaciones funcionando
- ⏳ Esperando despliegue a producción

---

## 🎯 Método 1: Pull Request (Recomendado - Más Fácil)

### Pasos:

1. **Ve a tu repositorio en GitHub:**
   ```
   https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io
   ```

2. **Crea un Pull Request:**
   - Click en la pestaña "Pull requests"
   - Click en "New pull request"
   - **Base:** `main`
   - **Compare:** `copilot/add-landing-page-es`
   - Click en "Create pull request"
   - Añade un título: "Deploy recursos redesign"
   - Click en "Create pull request"

3. **Revisa y Fusiona:**
   - Revisa los cambios (si deseas)
   - Click en "Merge pull request"
   - Click en "Confirm merge"

4. **Espera la Publicación:**
   - GitHub Pages se despliega automáticamente en 1-2 minutos
   - Tu sitio estará en vivo en: **https://umana-salud-mental.github.io**

---

## 🎯 Método 2: Línea de Comandos

Si tienes acceso push a main, ejecuta estos comandos en tu terminal:

```bash
# 1. Clona el repositorio (si no lo tienes)
git clone https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io.git
cd umana-salud-mental.github.io

# 2. Cambia a la rama main
git checkout main

# 3. Fusiona la rama copilot
git merge copilot/add-landing-page-es --allow-unrelated-histories

# 4. Si hay conflictos en README.md, resuelve así:
git checkout --theirs README.md
git add README.md
git commit -m "Merge recursos redesign into main"

# 5. Publica los cambios
git push origin main
```

---

## 🎯 Método 3: Desplegar Directamente desde la Rama

Puedes configurar GitHub Pages para desplegar directamente desde `copilot/add-landing-page-es` sin fusionar:

1. **Ve a Configuración de Pages:**
   ```
   https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io/settings/pages
   ```

2. **Configura la Fuente:**
   - Bajo "Source"
   - **Branch:** Selecciona `copilot/add-landing-page-es`
   - **Folder:** Selecciona `/ (root)`
   - Click en "Save"

3. **Espera el Despliegue:**
   - El sitio se publicará en: **https://umana-salud-mental.github.io**
   - Tiempo estimado: 1-2 minutos

---

## 🌐 URLs del Sitio (Después del Despliegue)

Una vez desplegado, tu sitio estará disponible en:

- **Página Principal:** https://umana-salud-mental.github.io
- **Página Recursos (Nueva):** https://umana-salud-mental.github.io/recursos.html
- **Ayuda en Crisis:** https://umana-salud-mental.github.io/ayuda-crisis.html

---

## 📋 ¿Qué se está Desplegando?

### Página Recursos - Características Nuevas:

✅ **Búsqueda Mejorada:** Barra de búsqueda prominente con filtrado en tiempo real
✅ **Filtros por Categoría:** Pills interactivos (Ansiedad, Depresión, Relaciones, etc.)
✅ **Artículos Destacados:** Sección con los 3 artículos principales
✅ **Grid de Artículos:** Diseño moderno basado en tarjetas
✅ **Temas/Categorías:** Sección con iconos y contadores de artículos
✅ **Ordenamiento:** Dropdown para ordenar (Recientes, Populares, A-Z)
✅ **Newsletter:** Formulario de suscripción
✅ **CTAs:** Botones para contactar terapeutas
✅ **Responsive:** Completamente optimizado para móvil
✅ **Animaciones:** Efectos suaves en hover y transiciones

### Archivos Incluidos:

**Nuevos/Actualizados:**
- `recursos.html` - Rediseño completo (28 KB)
- `recursos.css` - Estilos nuevos (16 KB)
- `RECURSOS_REDESIGN_SUMMARY.md` - Documentación completa
- `README.md` - Descripción actualizada del proyecto
- `DEPLOY_RECURSOS.md` - Esta guía

**Backups Creados:**
- `recursos-old-backup.html` - Versión anterior guardada
- `recursos-old-backup.css` - Estilos anteriores guardados

**Sin Cambios:**
- `index.html` - Página principal
- `styles.css` - Estilos principales
- `ayuda-crisis.html` - Página de ayuda en crisis
- `ayuda-crisis.css` - Estilos de ayuda en crisis
- Todos los archivos en `assets/`

---

## ⏱️ Tiempo de Despliegue

Una vez que completes cualquiera de los métodos arriba:

1. **Push/Merge:** Inmediato
2. **GitHub Pages Build:** 1-2 minutos
3. **Propagación CDN:** 1-2 minutos
4. **Tiempo Total:** ~3-5 minutos

### Monitorear el Despliegue:

Puedes ver el progreso del despliegue en:
```
https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io/actions
```

Busca el workflow "pages build and deployment" - debe mostrar un checkmark verde ✅ cuando esté completo.

---

## ✅ Verificación Post-Despliegue

Después de que el sitio esté en vivo, verifica:

### 1. Página Principal
- [ ] Visita: https://umana-salud-mental.github.io
- [ ] Verifica navegación funciona
- [ ] Links de redes sociales funcionan
- [ ] Botón de WhatsApp funciona

### 2. Página Recursos (Nueva)
- [ ] Visita: https://umana-salud-mental.github.io/recursos.html
- [ ] Prueba la búsqueda
- [ ] Click en filtros de categoría
- [ ] Hover sobre tarjetas de artículos
- [ ] Prueba el dropdown de ordenamiento
- [ ] Verifica formulario de newsletter
- [ ] Click en "Habla con un Terapeuta"

### 3. Página de Crisis
- [ ] Visita: https://umana-salud-mental.github.io/ayuda-crisis.html
- [ ] Verifica selector de países
- [ ] Links de contacto de emergencia visibles

### 4. Responsive
- [ ] Abre en móvil o redimensiona navegador
- [ ] Verifica todo se adapta correctamente
- [ ] Navegación móvil funciona
- [ ] Botones son táctiles

### 5. Navegación Entre Páginas
- [ ] Desde Inicio → Recursos
- [ ] Desde Recursos → Inicio
- [ ] Desde Recursos → Crisis
- [ ] Desde Crisis → Inicio

---

## 🎨 Identidad Visual Mantenida

El rediseño mantiene 100% de la identidad de Umana:

### Colores de Marca:
- ✅ **Verde Salvia:** #5D8064 (Primary)
- ✅ **Crema:** #F5EFE6 (Fondos)
- ✅ **Gris Oscuro:** #2F2F2F (Texto)
- ✅ **Durazno:** #D9A88F (CTAs)
- ✅ **Salvia Claro:** #B7C6AD (Acentos)
- ✅ **Terracota:** #C86B4A (Hover, alertas)

### Tipografía:
- ✅ **Fuente:** Inter (Google Fonts)
- ✅ **Pesos:** 300, 400, 500, 600, 700

### Elementos de Marca:
- ✅ Navegación consistente
- ✅ Logo y posicionamiento
- ✅ Integración de redes sociales
- ✅ Botones de WhatsApp
- ✅ Sección de ayuda en crisis
- ✅ Footer con enlaces rápidos

---

## 🔧 Solución de Problemas

### El sitio no se actualiza después de desplegar:

1. **Limpia el caché del navegador:**
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

2. **Prueba en modo incógnito:**
   - Abre una ventana privada/incógnito
   - Visita el sitio

3. **Espera más tiempo:**
   - A veces toma hasta 5 minutos
   - Verifica GitHub Actions para confirmar que terminó

### Imágenes no cargan:

- Verifica que la carpeta `assets/images/` esté en el repositorio
- Asegúrate de que `.nojekyll` existe en la raíz
- Revisa las rutas de imágenes en el HTML

### Errores en GitHub Actions:

1. Ve a: https://github.com/Umana-Salud-Mental/umana-salud-mental.github.io/actions
2. Click en el workflow que falló
3. Revisa los logs para ver el error
4. Común: conflictos de merge, archivos faltantes

### Página 404:

- Verifica que GitHub Pages esté habilitado en Settings → Pages
- Confirma que la rama correcta está seleccionada
- Espera 5 minutos después de cambiar configuración

---

## 📱 Compartir en Redes Sociales

Una vez desplegado, puedes compartir:

### Instagram:
- Agrega a tu biografía: https://umana-salud-mental.github.io
- Comparte en historias con link

### TikTok:
- Agrega a tu perfil: https://umana-salud-mental.github.io

### Facebook:
- Comparte el enlace en tus posts
- Actualiza información de la página

---

## 📊 Analíticas (Opcional)

Para monitorear visitantes, considera agregar:

### Google Analytics:
1. Crea cuenta en Google Analytics
2. Obtén tu código de seguimiento
3. Agrégalo a `index.html` y `recursos.html`

### Facebook Pixel:
1. Crea pixel en Facebook Business
2. Agrega código a las páginas
3. Rastrea conversiones

---

## 🎊 ¡Listo para Desplegar!

**Todo está preparado.** Solo elige uno de los 3 métodos arriba y tu hermoso sitio estará en vivo en minutos.

### Resumen Rápido:

1. **Método más fácil:** Pull Request en GitHub (no requiere git)
2. **Método rápido:** Comandos git (si tienes acceso)
3. **Método alternativo:** Configurar GitHub Pages para usar copilot branch

### Tu Nuevo Sitio:
- 🏠 https://umana-salud-mental.github.io
- 📚 https://umana-salud-mental.github.io/recursos.html
- 🆘 https://umana-salud-mental.github.io/ayuda-crisis.html

---

## 📞 Soporte

Si necesitas ayuda:
- Revisa la documentación en el repositorio
- Consulta GitHub Docs: https://docs.github.com/pages
- Verifica GitHub Actions para logs de despliegue

---

**¡Felicitaciones! Tu plataforma Umana está lista para ayudar a personas en todo Ecuador y más allá.** 🎉🚀

---

*Última actualización: Marzo 11, 2026*
