/* ═══════════════════════════════════════════════════════════════
   config.example.js — Plantilla de configuración

   INSTRUCCIONES:
   1. Copia este archivo y renómbralo a: config.js
   2. Reemplaza los valores con tus credenciales de EmailJS
   3. config.js está en .gitignore → NUNCA se sube al repositorio

   En producción, GitHub Actions genera config.js automáticamente
   a partir de los Secrets del repositorio.
   ═══════════════════════════════════════════════════════════════ */

const EMAILJS_PUBLIC_KEY  = '1ILfNTGE7jrAZ2qlq';   // Account → API Keys
const EMAILJS_SERVICE_ID  = 'service_hdk25xt';   // Email Services → Service ID
const EMAILJS_TEMPLATE_ID = 'template_pbo4ret';  // Email Templates → Template ID

window.EMAILJS_PUBLIC_KEY = EMAILJS_PUBLIC_KEY;
window.EMAILJS_SERVICE_ID = EMAILJS_SERVICE_ID;
window.EMAILJS_TEMPLATE_ID = EMAILJS_TEMPLATE_ID;

if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY) {
   emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}
