/* ══════════════════════════════════════════
   BEARS HELADOS — APP.JS
══════════════════════════════════════════ */

const STORAGE_KEYS = {
  flavors:  "mh_flavors",
  settings: "mh_settings",
  session:  "mh_session",
  cart:     "mh_cart",
  orders:   "mh_orders",
  profiles: "mh_profiles",
};

const USERS = [
  { username: "admin",   password: "admin123",   role: "admin",   displayName: "Admin"   },
  { username: "cliente", password: "cliente123", role: "cliente", displayName: "Cliente" },
];

const WHATSAPP_NUMBER = "5491164993898";

const DEFAULT_SETTINGS = {
  title:    "Catálogo Bears Helados",
  subtitle: "Sabores artesanales premium",
};

const DEFAULT_FLAVORS = [
  { id: "flv-1",  name: "Chocolate con almendras",    description: "Combinación de chocolates importados con almendras crocantes.",                                     image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/chocolate-con-almendras.jpg" },
  { id: "flv-2",  name: "Chocolate de la casa",       description: "Deliciosa combinación de chocolates importados.",                                                   image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/chocolate.jpg" },
  { id: "flv-3",  name: "Chocolate SERIOUS BLACK",    description: "Un sabor estrella. Intenso blend de cacaos de Colombia y Ecuador al 70%.",                          image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/serious-black.jpg" },
  { id: "flv-4",  name: "SERIOUS BLACK Tentación",    description: "Intenso blend de cacaos con mucho dulce de leche. Dejate tentar.",                                  image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/serious-black-tentacion.jpg" },
  { id: "flv-5",  name: "Chocolate fondente",         description: "Sorbete de chocolate al 80%, súper intenso y vegano.",                                              image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/chocolate-fondente.jpg" },
  { id: "flv-6",  name: "Chocolate FERRERO",          description: "Fórmula exclusiva a base de chocolates, avellanas y nutella.",                                      image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/ferrero-rocher.jpg" },
  { id: "flv-7",  name: "FELICES POR SIEMPRE",        description: "Chocolate blanco con trozos de torta Red Velvet y compota de frutos rojos.",                       image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/felices-por-siempre.jpg" },
  { id: "flv-8",  name: "Alfajor BEARS",              description: "Increíble receta exclusiva de Bears.",                                                              image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/alfajor-bears.jpg" },
  { id: "flv-9",  name: "Chocopardo",                 description: "Dos mundos en uno: helado y chocotorta con dulce de leche natural y Chocolinas.",                  image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/chocopardo.jpg" },
  { id: "flv-10", name: "Dulce de leche de la casa",  description: "Blend de los mejores dulces de leche argentinos.",                                                  image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/dulce-de-leche.jpg" },
  { id: "flv-11", name: "Dulce de leche granizado",   description: "Dulce de leche con trozos de chocolate semi amargo.",                                               image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/dulce-de-leche-granizado.jpg" },
  { id: "flv-12", name: "Dulce de leche tentación",   description: "El mismo exquisito dulce de leche combinado con más dulce de leche natural.",                      image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/dulce-de-leche-tentacion.jpg" },
  { id: "flv-13", name: "Dulce de leche Bears",       description: "Helado de dulce de leche con dulce de leche natural y bombones rellenos.",                         image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/dulce-de-leche-bears.jpg" },
  { id: "flv-14", name: "Banana Split",               description: "Crema de bananas naturales, dulce de leche y trocitos de chocolate semi amargo.",                  image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/banana-split.jpg" },
  { id: "flv-15", name: "Frutilla a la crema",        description: "Intenso helado de frutillas naturales seleccionadas.",                                              image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/frutilla-a-la-crema.jpg" },
  { id: "flv-16", name: "Frutilla Bears",             description: "Frutilla a la crema con trozos de chocolate semi amargo.",                                         image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/frutilla-bears.jpg" },
  { id: "flv-17", name: "Coco con dulce de leche",    description: "Helado de coco en escamas con dulce de leche natural.",                                            image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/coco-con-dulce-de-leche.jpg" },
  { id: "flv-18", name: "Mousse de maracuyá",         description: "Versión de maracuyá natural a la crema inspirada en el postre mousse.",                            image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/mousee-de-maracuya.jpg" },
  { id: "flv-19", name: "Frambuesa Bears",            description: "Frambuesas naturales a la crema veteado con chocolate semi amargo y blanco.",                      image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/frambuesa-bears.jpg" },
  { id: "flv-20", name: "Maracuyá con naranja",       description: "Helado de fruta natural de maracuyá combinado con naranja.",                                       image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/maracuya-con-naranja-natural.jpg" },
  { id: "flv-21", name: "Piña natural",               description: "Helado natural súper cremoso de piñas frescas.",                                                   image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/pina-natural.jpg" },
  { id: "flv-22", name: "Frutilla natural",           description: "Helado natural de frutillas frescas seleccionadas.",                                               image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/frutilla-natural.jpg" },
  { id: "flv-23", name: "Limón natural",              description: "Helado natural con jugo de limones recién exprimidos.",                                            image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/limon-natural.jpg" },
  { id: "flv-24", name: "Crema americana",            description: "Cremosidad y sabor increíbles.",                                                                   image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/crema-americana.jpg" },
  { id: "flv-25", name: "Mascarpone",                 description: "Crema con queso mascarpone y compota de frutos rojos naturales.",                                  image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/mascarpone-con-frutos-rojos.jpg" },
  { id: "flv-26", name: "Menta granizada",            description: "Crema de menta con trocitos de chocolate semi amargo.",                                            image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/menta-granizada.jpg" },
  { id: "flv-27", name: "Cream & Cookies",            description: "Crema americana con galletitas Oreo originales.",                                                  image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/cookies-and-cream.jpg" },
  { id: "flv-28", name: "Tramontana",                 description: "Crema americana, dulce de leche natural y esferas de galletita bañadas en chocolate.",             image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/tramontana.jpg" },
  { id: "flv-29", name: "Vainilla",                   description: "Crema sabor vainilla de textura suave.",                                                           image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/vainilla.jpg" },
  { id: "flv-30", name: "Lemon pie",                  description: "Helado de limón a la crema con lemon curd, cookies de limón y merengue italiano.",                 image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/lemon-pie.jpg" },
  { id: "flv-31", name: "Pistacchio italiano",        description: "El verdadero sabor del pistacchio, súper cremoso.",                                                image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/pistacchio-italiano.jpg" },
  { id: "flv-32", name: "Cookie monster",             description: "Helado de crema del cielo con galletitas Oreo.",                                                   image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/cookie-monster.jpg" },
  { id: "flv-33", name: "Unicornio BEARS",            description: "Crema tricolor y tri sabor: frutilla a la crema, vainilla y crema del cielo.",                     image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/unicornio-bears.jpg" },
  { id: "flv-34", name: "Nocciolino",                 description: "Crema de avellanas con pasta de avellanas, avellanas crocantes y Nutella.",                        image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/nocchiolino.jpg" },
  { id: "flv-35", name: "Súper sambayón",             description: "Receta de sambayón con huevos frescos pasteurizados y vino marsalla.",                             image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/sambayon.jpg" },
  { id: "flv-36", name: "Sambayón con almendras",     description: "Súper sambayón con crocantes almendras tostadas.",                                                 image: "https://bearshelados.com.ar/wp-content/uploads/2023/07/sambayon-con-almendras.jpg" },
  { id: "flv-37", name: "Don Beilys",                 description: "Receta exclusiva Don Beilys.",                                                                     image: "https://bearshelados.com.ar/wp-content/uploads/2023/10/don-beilys.jpg" },
];

/* ── state ── */
const state = { currentFlavorIndex: 0 };

/* ── helpers ── */
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

function safeParse(json, fallback) {
  try { return JSON.parse(json) ?? fallback; } catch { return fallback; }
}
function readStorage(key, fallback) { return safeParse(localStorage.getItem(key), fallback); }
function writeStorage(key, value)   { localStorage.setItem(key, JSON.stringify(value)); }

/* ── storage bootstrap ── */
function bootstrapStorage() {
  if (!localStorage.getItem(STORAGE_KEYS.flavors))  writeStorage(STORAGE_KEYS.flavors,  DEFAULT_FLAVORS);
  if (!localStorage.getItem(STORAGE_KEYS.settings)) writeStorage(STORAGE_KEYS.settings, DEFAULT_SETTINGS);
  if (!localStorage.getItem(STORAGE_KEYS.cart))     writeStorage(STORAGE_KEYS.cart,     []);
  if (!localStorage.getItem(STORAGE_KEYS.orders))   writeStorage(STORAGE_KEYS.orders,   []);
}

/* ── session ── */
function getSession()        { return readStorage(STORAGE_KEYS.session, null); }
function setSession(session) { writeStorage(STORAGE_KEYS.session, session); }
function clearSession()      { localStorage.removeItem(STORAGE_KEYS.session); }

/* ── flavors ── */
function getFlavors()          { return readStorage(STORAGE_KEYS.flavors, []); }
function setFlavors(flavors)   { writeStorage(STORAGE_KEYS.flavors, flavors); }

/* ── settings ── */
function getSettings()         { return readStorage(STORAGE_KEYS.settings, DEFAULT_SETTINGS); }
function setSettings(settings) { writeStorage(STORAGE_KEYS.settings, settings); }

/* ── cart ── */
function getCart()       { return readStorage(STORAGE_KEYS.cart, []); }
function setCart(cart)   { writeStorage(STORAGE_KEYS.cart, cart); }

/* ── orders ── */
function getOrders()         { return readStorage(STORAGE_KEYS.orders, []); }
function setOrders(orders)   { writeStorage(STORAGE_KEYS.orders, orders); }

/* ── profiles (per-user data: displayName, phone, avatar) ── */
function getProfiles() { return readStorage(STORAGE_KEYS.profiles, {}); }
function getProfile(username) {
  const profiles = getProfiles();
  const user = USERS.find((u) => u.username === username);
  return profiles[username] || { displayName: user?.displayName || username, phone: "", avatar: "" };
}
function setProfile(username, data) {
  const profiles = getProfiles();
  profiles[username] = { ...getProfile(username), ...data };
  writeStorage(STORAGE_KEYS.profiles, profiles);
}

/* ══════════════════════════════════════════
   RENDER — shared
══════════════════════════════════════════ */
/* ── render avatar helper ── */
function renderAvatarEl(el, profile, fallbackLetter) {
  if (!el) return;
  if (profile.avatar) {
    el.innerHTML = `<img src="${profile.avatar}" alt="avatar" />`;
  } else {
    el.textContent = (profile.displayName || fallbackLetter || "?")[0].toUpperCase();
  }
}

function renderHeader() {
  const settings = getSettings();
  const session  = getSession();
  $("#storeTitle").textContent    = settings.title;
  $("#storeSubtitle").textContent = settings.subtitle;

  const profile = getProfile(session.username);
  const profileBtn = $("#profileBtn");
  if (profileBtn) {
    profileBtn.classList.remove("hidden");
    $("#profileName").textContent = profile.displayName;
    renderAvatarEl($("#profileAvatarSmall"), profile, session.username);
  }
}

function showApp() {
  $("#loginView").classList.add("hidden");
  $("#appView").classList.remove("hidden");
}

function showLogin() {
  $("#appView").classList.add("hidden");
  $("#loginView").classList.remove("hidden");
  $("#loginError").textContent = "";
  $("#loginForm").reset();
}

function renderApp() {
  renderHeader();
  showApp();
  const session = getSession();

  if (session.role === "admin") {
    $("#clientPanel").classList.add("hidden");
    $("#adminPanel").classList.remove("hidden");
    $("#cartToggleBtn").classList.add("hidden");
    renderAdminStats();
    renderAdminSettings();
    renderAdminFlavors();
    renderReports();
  } else {
    $("#adminPanel").classList.add("hidden");
    $("#clientPanel").classList.remove("hidden");
    $("#cartToggleBtn").classList.remove("hidden");
    state.currentFlavorIndex = 0;
    buildFlipbook();
    renderCart();
  }
}

/* ══════════════════════════════════════════
   PROFILE DRAWER
══════════════════════════════════════════ */
function openProfileDrawer() {
  const drawer  = document.getElementById("profileDrawer");
  const overlay = document.getElementById("profileOverlay");
  if (!drawer) return;
  renderProfileDrawer();
  drawer.classList.add("open");
  overlay?.classList.add("visible");
  document.body.style.overflow = "hidden";
}

function closeProfileDrawer() {
  const drawer  = document.getElementById("profileDrawer");
  const overlay = document.getElementById("profileOverlay");
  if (!drawer) return;
  drawer.classList.remove("open");
  overlay?.classList.remove("visible");
  document.body.style.overflow = "";
}

function renderProfileDrawer() {
  const session = getSession();
  if (!session) return;
  const profile = getProfile(session.username);

  renderAvatarEl($("#profileAvatarBig"), profile, session.username);

  const nameEl  = $("#profileDisplayName");
  const phoneEl = $("#profilePhone");
  if (nameEl)  nameEl.value  = profile.displayName || "";
  if (phoneEl) phoneEl.value = profile.phone || "";

  const orders  = getOrders().filter((o) => o.username === session.username);
  const listEl  = $("#profileOrdersList");
  const section = $("#profileOrdersSection");
  if (!listEl) return;

  if (session.role === "admin") {
    if (section) section.style.display = "none";
  } else {
    if (section) section.style.display = "";
  }

  if (!orders.length) {
    listEl.innerHTML = `<p class="pd-empty">Todavía no realizaste pedidos.</p>`;
    return;
  }

  listEl.innerHTML = orders.slice(0, 8).map((order) => {
    const date  = new Date(order.date).toLocaleString("es-AR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" });
    const items = order.items.map((i) => `${i.name} ×${i.qty}`).join(", ");
    const total = order.items.reduce((s, i) => s + i.qty, 0);
    return `
      <div class="pd-order-card" data-order-id="${order.id}">
        <div class="pd-order-date">${date} · ${total} sabor${total !== 1 ? "es" : ""}</div>
        <div class="pd-order-items">${items}</div>
        <div class="pd-order-repeat">Tocar para repetir →</div>
      </div>
    `;
  }).join("");
}

/* ══════════════════════════════════════════
   CART DRAWER
════════════════════════════════════════ */
function openCartDrawer() {
  const drawer  = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (!drawer) return;
  drawer.classList.add("open");
  if (overlay) overlay.classList.add("visible");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const drawer  = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (!drawer) return;
  drawer.classList.remove("open");
  if (overlay) overlay.classList.remove("visible");
  document.body.style.overflow = "";
}

/* ════════════════════════════════════════   FLIPBOOK (StPageFlip)
══════════════════════════════════════════ */
let pageFlipInstance = null;

function buildFlipbook() {
  const flavors = getFlavors();

  /* StPageFlip.destroy() removes the holder from DOM, so we always recreate it */
  if (pageFlipInstance) {
    try { pageFlipInstance.destroy(); } catch (_) {}
    pageFlipInstance = null;
  }

  /* Find the wrapper and recreate a fresh #flipbook div */
  const wrapper = $(".flipbook-wrapper");
  if (!wrapper) return;

  /* Remove the old holder if it still exists (first load) */
  const oldHolder = $("#flipbook");
  if (oldHolder) oldHolder.remove();

  /* Remove any stray stf__parent left by a previous instance */
  wrapper.querySelectorAll(".stf__parent, [class^='stf']").forEach(el => el.remove());

  /* Create fresh holder and insert before .progress-bar-wrap */
  const holder = document.createElement("div");
  holder.id = "flipbook";
  const progressBar = wrapper.querySelector(".progress-bar-wrap");
  wrapper.insertBefore(holder, progressBar);

  if (!flavors.length) return;

  /* ── PORTADA ── */
  const firstFlavor = flavors[0];
  const coverFront = document.createElement("div");
  coverFront.className = "page page-cover";
  coverFront.innerHTML = `
    <div class="page-cover-bg" style="background-image:url('${firstFlavor.image}')"></div>
    <div class="page-cover-content">
      <p class="page-cover-label">Sabores artesanales</p>
      <h2 class="page-cover-title">Bears<br>Helados</h2>
      <p class="page-cover-year">Catálogo ${new Date().getFullYear()}</p>
    </div>
  `;

  const coverBack = document.createElement("div");
  coverBack.className = "page page-cover-back";
  coverBack.innerHTML = `
    <div class="page-cover-back-mark">B</div>
    <p class="page-cover-back-text">Pasá las páginas<br>para descubrir nuestros sabores</p>
  `;

  holder.appendChild(coverFront);
  holder.appendChild(coverBack);

  // build page elements — odd pages: photo, even pages: detail
  flavors.forEach((flavor, i) => {
    const pageNumOdd  = i * 2 + 1;
    const pageNumEven = i * 2 + 2;

    const photoPage = document.createElement("div");
    photoPage.className = "page page-photo";
    photoPage.innerHTML = `
      <img src="${flavor.image}" alt="${flavor.name}" loading="lazy" />
      <span class="pf-page-num">${pageNumOdd}</span>
    `;

    const detailPage = document.createElement("div");
    detailPage.className = "page page-detail";
    detailPage.innerHTML = `
      <span class="pf-page-num pf-page-num-right">${pageNumEven}</span>
      <div class="pf-category">Sabores Bears</div>
      <h2 class="pf-name">${flavor.name}</h2>
      <div class="pf-divider"></div>
      <p class="pf-desc">${flavor.description}</p>
      <button class="btn-flipbook-add" data-flavor-id="${flavor.id}">Agregar al carrito</button>
    `;

    holder.appendChild(photoPage);
    holder.appendChild(detailPage);
  });

  const isMobile = window.innerWidth < 650;

  pageFlipInstance = new St.PageFlip(holder, {
    width:               400,
    height:              490,
    size:                "stretch",
    minWidth:            150,
    minHeight:           200,
    maxWidth:            420,
    maxHeight:           510,
    maxShadowOpacity:    0.4,
    showCover:           false,
    mobileScrollSupport: true,
    usePortrait:         isMobile,
    flippingTime:        700,
    startZIndex:         1,
    autoSize:            true,
  });

  pageFlipInstance.loadFromHTML(holder.querySelectorAll(".page"));
  updateBookProgress();
  pageFlipInstance.on("flip", updateBookProgress);
}

function updateBookProgress() {
  if (!pageFlipInstance) return;
  const flavors = getFlavors();
  if (!flavors.length) return;

  const pageIdx   = pageFlipInstance.getCurrentPageIndex();
  /* page 0,1 = cover; flavors start at page 2 */
  const flavorIdx = Math.max(0, Math.floor((pageIdx - 2) / 2));
  const current   = Math.min(flavorIdx + 1, flavors.length);
  const pct       = Math.round((current / flavors.length) * 100);

  const label = $("#bookProgress");
  const fill  = $("#magProgressFill");
  if (label) label.textContent = pageIdx < 2 ? "Portada" : `${current} de ${flavors.length}`;
  if (fill)  fill.style.width  = `${pct}%`;
}

/* ══════════════════════════════════════════
   RENDER — CARRITO
══════════════════════════════════════════ */
function addFlavorToCart(flavorId) {
  const flavors = getFlavors();
  const flavor  = flavors.find((f) => f.id === flavorId);
  if (!flavor) return;

  const cart = getCart();
  const row  = cart.find((i) => i.id === flavorId);
  if (row) row.qty += 1;
  else cart.push({ id: flavor.id, name: flavor.name, qty: 1 });

  setCart(cart);
  renderCart();
}

function updateCartQty(flavorId, delta) {
  const cart = getCart().map((i) => i.id === flavorId ? { ...i, qty: i.qty + delta } : i).filter((i) => i.qty > 0);
  setCart(cart);
  renderCart();
}

function renderCart() {
  const cart  = getCart();
  const list  = $("#cartList");
  const empty = $("#cartEmpty");

  const totalUnits = cart.reduce((s, i) => s + i.qty, 0);
  const badge = $("#cartBadge");
  if (badge) {
    badge.textContent = totalUnits;
    badge.classList.toggle("hidden", totalUnits === 0);
  }

  const countEl = $("#cartCount");
  if (countEl) {
    countEl.textContent = totalUnits;
    countEl.classList.toggle("empty", totalUnits === 0);
  }

  const totalVal = $("#cartTotalVal");
  if (totalVal) totalVal.textContent = totalUnits;

  list.innerHTML = "";
  const hasItems = cart.length > 0;
  empty.style.display = hasItems ? "none" : "flex";
  list.style.display  = hasItems ? ""     : "none";

  for (const item of cart) {
    const li = document.createElement("li");
    li.className = "cart-item";
    li.innerHTML = `
      <span class="ci-name">${item.name}</span>
      <div class="ci-right">
        <div class="ci-stepper">
          <button data-action="minus" data-id="${item.id}">−</button>
          <span>${item.qty}</span>
          <button data-action="plus"  data-id="${item.id}">+</button>
        </div>
        <button class="ci-del" data-action="remove" data-id="${item.id}" title="Quitar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
    `;
    list.appendChild(li);
  }
}

function buildWhatsappMessage(cart) {
  const lines = [
    "Hola Bears! Quiero hacer un pedido:",
    "",
    ...cart.map((item, i) => `  ${i + 1}. ${item.name}  x${item.qty}`),
    "",
    `Total sabores: ${cart.reduce((s, i) => s + i.qty, 0)}`,
    `Fecha: ${new Date().toLocaleString("es-AR")}`,
  ];
  return lines.join("\n");
}

function registerOrderAndOpenWhatsapp() {
  const cart = getCart();
  if (!cart.length) {
    showToast("Tu carrito está vacío.", "warn");
    return;
  }
  const message = buildWhatsappMessage(cart);
  const orders  = getOrders();
  orders.unshift({ id: `ord-${Date.now()}`, date: new Date().toISOString(), items: cart });
  setOrders(orders);

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");

  setCart([]);
  renderCart();
  showToast("Pedido enviado a WhatsApp");
}

/* ══════════════════════════════════════════
   RENDER — ADMIN
══════════════════════════════════════════ */
function renderAdminStats() {
  const flavors = getFlavors();
  const orders  = getOrders();
  const units   = orders.reduce((s, o) => s + o.items.reduce((a, i) => a + i.qty, 0), 0);

  const stats = [
    { label: "Sabores",  value: flavors.length },
    { label: "Pedidos",  value: orders.length  },
    { label: "Unidades", value: units          },
    { label: "Usuarios", value: USERS.length   },
  ];

  $("#adminStatsBar").innerHTML = stats.map((s, i) => `
    <div class="stat-card" style="animation-delay:${i * .07}s">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}

function renderAdminSettings() {
  const settings = getSettings();
  $("#settingsTitle").value    = settings.title;
  $("#settingsSubtitle").value = settings.subtitle;
}

let _flavorSearch = "";

function renderAdminFlavors(search = _flavorSearch) {
  _flavorSearch = search;
  const flavors  = getFlavors();
  const filtered = search
    ? flavors.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
    : flavors;

  const count = $("#flavorsCount");
  if (count) count.textContent = `${filtered.length} de ${flavors.length} sabores`;

  const container = $("#flavorAdminList");
  if (!container) return;
  container.innerHTML = "";

  if (!filtered.length) {
    container.innerHTML = `<p style="color:var(--ink-soft);padding:16px">No hay sabores que coincidan.</p>`;
    return;
  }

  for (const flavor of filtered) {
    const card = document.createElement("div");
    card.className = "flavor-admin-card";
    card.innerHTML = `
      <div class="fac-img-wrap">
        <img src="${flavor.image}" alt="${flavor.name}" loading="lazy" />
      </div>
      <div class="fac-body">
        <label>Nombre
          <input data-field="name"        data-id="${flavor.id}" value="${flavor.name}" />
        </label>
      <div class="fac-img-upload">
          <input type="url" data-field="image" data-id="${flavor.id}" value="${flavor.image}" placeholder="URL de imagen…" />
          <label class="btn-fac-upload" for="fac-file-${flavor.id}">Subir
            <input id="fac-file-${flavor.id}" type="file" accept="image/*" style="display:none" data-id="${flavor.id}" />
          </label>
        </div>
        <label>Descripción
          <textarea data-field="description" data-id="${flavor.id}">${flavor.description}</textarea>
        </label>
      </div>
      <div class="fac-actions">
        <button class="btn-fac-save" data-action="save"   data-id="${flavor.id}">Guardar</button>
        <button class="btn-fac-del"  data-action="delete" data-id="${flavor.id}">Eliminar</button>
      </div>
    `;
    container.appendChild(card);
  }
}

function renderReports() {
  const orders  = getOrders();
  const flavors = getFlavors();

  /* top sabores */
  const counter = {};
  orders.forEach((o) => o.items.forEach((i) => { counter[i.name] = (counter[i.name] || 0) + i.qty; }));
  const top      = Object.entries(counter).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const maxVal   = top[0]?.[1] || 1;

  const topHTML = top.length
    ? top.map(([name, qty]) => `
        <div class="report-row">
          <div>
            <span class="report-row-name">${name}</span>
            <div class="report-bar-wrap"><div class="report-bar" style="width:${Math.round((qty/maxVal)*100)}%"></div></div>
          </div>
          <span class="report-row-val">${qty}</span>
        </div>
      `).join("")
    : `<p class="report-empty">Aun no hay pedidos.</p>`;

  /* últimos pedidos */
  const ordersHTML = orders.length
    ? orders.slice(0, 6).map((o) => `
        <div class="report-order-row">
          <div class="report-order-date">${new Date(o.date).toLocaleString("es-AR")}</div>
          <div class="report-order-items">${o.items.map((i) => `${i.name} x${i.qty}`).join(" · ")}</div>
        </div>
      `).join("")
    : `<p class="report-empty">Sin pedidos aun.</p>`;

  $("#reports").innerHTML = `
    <div class="report-card">
      <div class="report-card-title">Top sabores pedidos</div>
      <div class="report-list">${topHTML}</div>
    </div>
    <div class="report-card">
      <div class="report-card-title">Ultimos pedidos</div>
      <div class="report-list">${ordersHTML}</div>
    </div>
    <div class="report-card">
      <div class="report-card-title">Resumen</div>
      <div class="report-list">
        <div class="report-row"><span class="report-row-name">Sabores en catalogo</span><span class="report-row-val">${flavors.length}</span></div>
        <div class="report-row"><span class="report-row-name">Pedidos totales</span><span class="report-row-val">${orders.length}</span></div>
        <div class="report-row"><span class="report-row-name">Unidades pedidas</span><span class="report-row-val">${Object.values(counter).reduce((a,b) => a+b, 0)}</span></div>
      </div>
    </div>
  `;
}

/* ══════════════════════════════════════════
   TOAST
══════════════════════════════════════════ */
function showToast(msg, type = "ok") {
  const t = document.createElement("div");
  t.className = `toast${type === "warn" ? " warn" : ""}`;
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2400);
}

/* ══════════════════════════════════════════
   ADMIN TABS
══════════════════════════════════════════ */
function activateAdminTab(tabId) {
  $$(".admin-tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === tabId));
  $$(".admin-tab-content").forEach((c) => c.classList.toggle("active", c.id === `tab-${tabId}`));
}

/* ══════════════════════════════════════════
   EVENTOS
══════════════════════════════════════════ */
function bindEvents() {

  /* ── login ── */
  $("#loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = $("#username").value.trim();
    const password = $("#password").value;
    const user = USERS.find((u) => u.username === username && u.password === password);
    if (!user) { $("#loginError").textContent = "Usuario o contraseña incorrectos."; return; }
    setSession({ username: user.username, role: user.role });
    renderApp();
  });

  /* acceso rápido */
  document.querySelectorAll(".qa-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const { user, pass } = btn.dataset;
      const found = USERS.find((u) => u.username === user && u.password === pass);
      if (!found) return;
      setSession({ username: found.username, role: found.role });
      renderApp();
    });
  });

  /* ── logout ── */
  $("#logoutBtn").addEventListener("click", () => { clearSession(); showLogin(); });

  /* ── Profile drawer ── */
  $("#profileBtn")?.addEventListener("click", openProfileDrawer);
  $("#profileCloseBtn")?.addEventListener("click", closeProfileDrawer);
  $("#profileOverlay")?.addEventListener("click", closeProfileDrawer);

  /* Avatar upload */
  $("#profileAvatarFile")?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const session = getSession();
      if (!session) return;
      setProfile(session.username, { avatar: ev.target.result });
      renderAvatarEl($("#profileAvatarBig"),   getProfile(session.username), session.username);
      renderAvatarEl($("#profileAvatarSmall"), getProfile(session.username), session.username);
      showToast("Foto actualizada");
    };
    reader.readAsDataURL(file);
  });

  /* Profile form save */
  $("#profileForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const session = getSession();
    if (!session) return;
    const displayName = $("#profileDisplayName").value.trim();
    const phone       = $("#profilePhone").value.trim();
    if (!displayName) { showToast("El nombre no puede estar vacío.", "warn"); return; }
    setProfile(session.username, { displayName, phone });
    $("#profileName").textContent = displayName;
    showToast("Datos guardados");
  });

  /* Repeat order from my orders */
  $("#profileOrdersList")?.addEventListener("click", (e) => {
    const card = e.target.closest(".pd-order-card");
    if (!card) return;
    const orderId = card.dataset.orderId;
    const order = getOrders().find((o) => o.id === orderId);
    if (!order) return;

    /* Merge items into current cart */
    const cart = getCart();
    order.items.forEach((item) => {
      const existing = cart.find((c) => c.id === item.id);
      if (existing) existing.qty += item.qty;
      else cart.push({ ...item });
    });
    setCart(cart);
    renderCart();
    closeProfileDrawer();
    openCartDrawer();
    showToast("Pedido repetido en tu carrito");
  });

  /* ── Profile drawer ── */
  $("#profileBtn")?.addEventListener("click", openProfileDrawer);
  $("#profileCloseBtn")?.addEventListener("click", closeProfileDrawer);
  $("#profileOverlay")?.addEventListener("click", closeProfileDrawer);

  /* Avatar upload */
  $("#profileAvatarFile")?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const session = getSession();
      if (!session) return;
      setProfile(session.username, { avatar: ev.target.result });
      renderAvatarEl($("#profileAvatarBig"),   getProfile(session.username), session.username);
      renderAvatarEl($("#profileAvatarSmall"), getProfile(session.username), session.username);
      showToast("Foto actualizada");
    };
    reader.readAsDataURL(file);
  });

  /* Profile form save */
  $("#profileForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const session = getSession();
    if (!session) return;
    const displayName = $("#profileDisplayName").value.trim();
    const phone       = $("#profilePhone").value.trim();
    if (!displayName) { showToast("El nombre no puede estar vacío.", "warn"); return; }
    setProfile(session.username, { displayName, phone });
    $("#profileName").textContent = displayName;
    showToast("Datos guardados");
  });

  /* Repeat order from my orders */
  $("#profileOrdersList")?.addEventListener("click", (e) => {
    const card = e.target.closest(".pd-order-card");
    if (!card) return;
    const orderId = card.dataset.orderId;
    const order = getOrders().find((o) => o.id === orderId);
    if (!order) return;
    const cart = getCart();
    order.items.forEach((item) => {
      const existing = cart.find((c) => c.id === item.id);
      if (existing) existing.qty += item.qty;
      else cart.push({ ...item });
    });
    setCart(cart);
    renderCart();
    closeProfileDrawer();
    openCartDrawer();
    showToast("Pedido repetido en el carrito");
  });

  /* ── Cart toggle button ── */
  $("#cartToggleBtn")?.addEventListener("click", openCartDrawer);
  $("#cartCloseBtn")?.addEventListener("click", closeCartDrawer);
  $("#cartOverlay")?.addEventListener("click", closeCartDrawer);

  /* ── prev / next — StPageFlip API ── */
  $("#prevPageBtn").addEventListener("click", () => {
    if (pageFlipInstance) pageFlipInstance.flipPrev();
  });
  $("#nextPageBtn").addEventListener("click", () => {
    if (pageFlipInstance) pageFlipInstance.flipNext();
  });

  /* teclado */
  document.addEventListener("keydown", (e) => {
    if (!pageFlipInstance) return;
    if ($("#clientPanel")?.classList.contains("hidden")) return;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") pageFlipInstance.flipNext();
    if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   pageFlipInstance.flipPrev();
  });

  /* ── Agregar al carrito (dentro de paginas del flipbook) ── */
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-flipbook-add");
    if (!btn) return;
    const flavorId = btn.dataset.flavorId;
    if (!flavorId) return;
    addFlavorToCart(flavorId);
    btn.textContent = "Agregado";
    btn.classList.add("added");
    setTimeout(() => {
      btn.textContent = "Agregar al carrito";
      btn.classList.remove("added");
    }, 900);
  });

  $("#clearCartBtn").addEventListener("click", () => { setCart([]); renderCart(); });

  $("#orderWhatsappBtn").addEventListener("click", registerOrderAndOpenWhatsapp);

  $("#cartList").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const { action, id } = btn.dataset;
    if (action === "plus")   updateCartQty(id,  1);
    if (action === "minus")  updateCartQty(id, -1);
    if (action === "remove") { setCart(getCart().filter((i) => i.id !== id)); renderCart(); }
  });

  /* ── admin: settings ── */
  $("#settingsForm").addEventListener("submit", (e) => {
    e.preventDefault();
    setSettings({ title: $("#settingsTitle").value.trim(), subtitle: $("#settingsSubtitle").value.trim() });
    renderHeader();
    showToast("Titulos guardados");
  });

  /* ── admin: nuevo sabor ── */
  $("#newFlavorFile")?.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const src = ev.target.result;
      $("#newFlavorImage").value = "";
      const preview = $("#newFlavorPreview");
      if (preview) {
        preview.innerHTML = `<img src="${src}" alt="preview" />`;
        preview.classList.remove("hidden");
      }
      /* store base64 in a data attribute so submit can pick it up */
      $("#newFlavorFile").dataset.base64 = src;
    };
    reader.readAsDataURL(file);
  });

  $("#newFlavorForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name        = $("#newFlavorName").value.trim();
    const description = $("#newFlavorDescription").value.trim();
    const imageUrl    = $("#newFlavorImage").value.trim();
    const imageB64    = $("#newFlavorFile").dataset.base64 || "";
    const image       = imageB64 || imageUrl;
    if (!name || !description || !image) { showToast("Completá todos los campos.", "warn"); return; }
    const flavors = getFlavors();
    flavors.push({ id: `flv-${Date.now()}`, name, description, image });
    setFlavors(flavors);
    $("#newFlavorForm").reset();
    delete $("#newFlavorFile").dataset.base64;
    const preview = $("#newFlavorPreview");
    if (preview) { preview.innerHTML = ""; preview.classList.add("hidden"); }
    renderAdminFlavors();
    renderAdminStats();
    showToast("Sabor agregado");
    activateAdminTab("flavors");
  });

  /* ── admin: buscar sabor ── */
  $("#flavorsSearch")?.addEventListener("input", (e) => renderAdminFlavors(e.target.value));

  /* ── admin: acciones en tarjetas de sabor ── */
  $("#flavorAdminList").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    const { action, id } = btn.dataset;

    if (action === "delete") {
      if (!confirm("¿Eliminar este sabor?")) return;
      setFlavors(getFlavors().filter((f) => f.id !== id));
      renderAdminFlavors();
      renderAdminStats();
      showToast("Sabor eliminado.");
    }

    if (action === "save") {
      const card  = btn.closest(".flavor-admin-card");
      const name  = card.querySelector('[data-field="name"]').value.trim();
      const imgInput = card.querySelector('[data-field="image"]');
      const fileInput = card.querySelector('input[type="file"][data-id]');
      const imageUrl = imgInput?.value.trim() || "";
      const imageB64 = fileInput?.dataset?.base64 || "";
      const image = imageB64 || imageUrl;
      const desc  = card.querySelector('[data-field="description"]').value.trim();
      if (!name || !image || !desc) { showToast("Completá todos los campos.", "warn"); return; }
      const flavors = getFlavors().map((f) => f.id === id ? { ...f, name, image, description: desc } : f);
      setFlavors(flavors);
      const imgEl = card.querySelector(".fac-img-wrap img");
      if (imgEl) imgEl.src = image;
      showToast("Cambios guardados");
    }
  });

  /* file upload en tarjetas de sabor existentes */
  $("#flavorAdminList").addEventListener("change", (e) => {
    const fileInput = e.target.closest('input[type="file"]');
    if (!fileInput) return;
    const file = fileInput.files?.[0];
    if (!file) return;
    const id = fileInput.dataset.id;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const src = ev.target.result;
      fileInput.dataset.base64 = src;
      const card = fileInput.closest(".flavor-admin-card");
      const imgEl = card?.querySelector(".fac-img-wrap img");
      if (imgEl) imgEl.src = src;
      /* update url input to show something */
      const urlInput = card?.querySelector('[data-field="image"]');
      if (urlInput) urlInput.value = "(imagen subida)";
    };
    reader.readAsDataURL(file);
  });

  /* ── admin: tabs ── */
  $$(".admin-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabId = tab.dataset.tab;
      activateAdminTab(tabId);
      if (tabId === "reports") renderReports();
    });
  });
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */
function init() {
  bootstrapStorage();
  bindEvents();
  const session = getSession();
  if (session) renderApp();
  else          showLogin();
}

init();
