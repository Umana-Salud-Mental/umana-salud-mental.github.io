# 🚀 Despliegue Rápido a Netlify - Umana

## Opción 1: Despliegue Automático (5 minutos)

### Pasos:

1. **Ve a Netlify**
   ```
   https://app.netlify.com
   ```

2. **Inicia sesión con GitHub**
   - Clic en "Log in"
   - Selecciona GitHub

3. **Importa el proyecto**
   - Clic en "Add new site" → "Import an existing project"
   - Selecciona "GitHub"
   - Busca: `luisspiel16-beep/Personal`
   - Rama: `copilot/add-landing-page-es`

4. **Configuración (usar estos valores):**
   ```
   Build command:     (dejar vacío)
   Publish directory: .
   ```

5. **Deploy!**
   - Clic en "Deploy site"
   - Espera 30-60 segundos

6. **¡Listo!**
   - Tu sitio estará en: `https://[nombre-random].netlify.app`

---

## Cambiar el Nombre del Sitio

1. En Netlify dashboard, ve a tu sitio
2. "Site settings" → "Site details"
3. "Change site name"
4. Ingresa: `umana` o `umana-salud-mental`
5. Tu URL será: `https://umana.netlify.app`

---

## Configurar Dominio Propio (Opcional)

1. En Netlify: "Domain settings"
2. "Add custom domain"
3. Ingresa tu dominio: `www.tudominio.com`
4. Configura los DNS según las instrucciones

---

## 🔄 Actualizaciones Automáticas

Cada vez que hagas `git push` a la rama configurada:
- Netlify detectará los cambios
- Desplegará automáticamente
- El sitio se actualizará en ~1 minuto

---

## 📱 Habilitar Formulario de Contacto

Actualiza el formulario en `index.html` línea 206:

```html
<form name="contact" method="POST" data-netlify="true">
```

Los mensajes aparecerán en: Netlify Dashboard → Forms

---

## ⚠️ ¿Problemas?

**El sitio no se ve bien:**
- Limpia caché: Ctrl + Shift + R
- Espera 2 minutos para propagación CDN

**Error de deploy:**
- Revisa los logs en Netlify dashboard
- Verifica que todos los archivos estén en el repo

**Imágenes no cargan:**
- Verifica que la carpeta `assets/` esté en el repositorio
- Revisa las rutas en el código

---

## 📞 Ayuda

- **Guía completa:** Ver `DEPLOY.md`
- **Documentación Netlify:** https://docs.netlify.com
- **Soporte:** https://answers.netlify.com

---

**¡Tu sitio estará en vivo en menos de 5 minutos! 🎉**
