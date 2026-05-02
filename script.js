const T = {
    kk: {
        "nav.sub": "Интернет-дүкен",
        "hero.eyebrow": "FakeStore API · Тікелей деректер",
        "hero.title": "Болашақтың<br><em>Интернет</em><br><span class='outline-word'>Дүкені</span>",
        "hero.sub": "Электроникадан сәнді киімге дейін — барлық тауарлар тікелей API арқылы жүктеледі. Нақты баға, нақты рейтинг.",
        "hero.stat1": "Тауар",
        "hero.stat2": "Санат",
        "hero.stat3": "Орт. рейтинг",
        "hero.ticker.lbl": "Ең қымбат тауар",
        "hero.aside.lbl": "Орташа баға",
        "hero.aside2.lbl": "Жыл сайынғы сату",
        "cat.all": "Барлығы",
        "cat.elec": "Электроника",
        "cat.jew": "Зергерлік",
        "cat.men": "Ерлер киімі",
        "cat.wom": "Әйелдер киімі",
        "sort.lbl": "Сұрыптау:",
        "sort.def": "Әдепкі",
        "sort.pasc": "Баға ↑",
        "sort.pdesc": "Баға ↓",
        "sort.rate": "Рейтинг ↓",
        "sec.title": "Тауарлар тізімі",
        "sec.loading": "Жүктелуде…",
        "modal.buy": "Себетке салу",
        "footer.text": "Деректер:",
        "footer.copy": "Портфолио жобасы",
        "toast.wish.add": "❤️ Тілектер тізіміне қосылды",
        "toast.wish.rm": "🗑️ Тізімнен алынды",
        "toast.cart": "🛒 Себетке қосылды",
        "btn.add": "Қосу",
        "btn.added": "✓ Қосылды",
        "products.count": "{n} тауар",
        "empty.title": "Тауарлар табылмады",
        "empty.sub": "Басқа санатты таңдаңыз.",
        "err.title": "Жүктеу қатесі",
        "err.sub": "Интернет байланысын тексеріңіз.",
    },
    ru: {
        "nav.sub": "Интернет-магазин",
        "hero.eyebrow": "FakeStore API · Живые данные",
        "hero.title": "Магазин<br><em>Будущего</em><br><span class='outline-word'>Онлайн</span>",
        "hero.sub": "От электроники до модной одежды — все товары загружаются напрямую через API. Реальные цены, реальные рейтинги.",
        "hero.stat1": "Товаров",
        "hero.stat2": "Категорий",
        "hero.stat3": "Ср. рейтинг",
        "hero.ticker.lbl": "Самый дорогой",
        "hero.aside.lbl": "Средняя цена",
        "hero.aside2.lbl": "Продаж в год",
        "cat.all": "Все",
        "cat.elec": "Электроника",
        "cat.jew": "Ювелирка",
        "cat.men": "Мужская одежда",
        "cat.wom": "Женская одежда",
        "sort.lbl": "Сортировка:",
        "sort.def": "По умолчанию",
        "sort.pasc": "Цена ↑",
        "sort.pdesc": "Цена ↓",
        "sort.rate": "Рейтинг ↓",
        "sec.title": "Каталог товаров",
        "sec.loading": "Загрузка…",
        "modal.buy": "Добавить в корзину",
        "footer.text": "Данные:",
        "footer.copy": "Портфолио-проект",
        "toast.wish.add": "❤️ Добавлено в избранное",
        "toast.wish.rm": "🗑️ Удалено из избранного",
        "toast.cart": "🛒 Товар добавлен в корзину",
        "btn.add": "В корзину",
        "btn.added": "✓ Добавлено",
        "products.count": "{n} товаров",
        "empty.title": "Товары не найдены",
        "empty.sub": "Попробуйте другую категорию.",
        "err.title": "Ошибка загрузки",
        "err.sub": "Проверьте подключение к интернету.",
    },
    en: {
        "nav.sub": "Online Store",
        "hero.eyebrow": "FakeStore API · Live Data",
        "hero.title": "The Future<br>of <em>Online</em><br><span class='outline-word'>Shopping</span>",
        "hero.sub": "From cutting-edge electronics to fashion — all products loaded live via API. Real prices, real ratings.",
        "hero.stat1": "Products",
        "hero.stat2": "Categories",
        "hero.stat3": "Avg rating",
        "hero.ticker.lbl": "Most expensive",
        "hero.aside.lbl": "Average price",
        "hero.aside2.lbl": "Annual sales",
        "cat.all": "All",
        "cat.elec": "Electronics",
        "cat.jew": "Jewellery",
        "cat.men": "Men's Clothing",
        "cat.wom": "Women's Clothing",
        "sort.lbl": "Sort:",
        "sort.def": "Default",
        "sort.pasc": "Price ↑",
        "sort.pdesc": "Price ↓",
        "sort.rate": "Rating ↓",
        "sec.title": "Product Catalogue",
        "sec.loading": "Loading…",
        "modal.buy": "Add to Cart",
        "footer.text": "Data:",
        "footer.copy": "Portfolio project",
        "toast.wish.add": "❤️ Added to wishlist",
        "toast.wish.rm": "🗑️ Removed from wishlist",
        "toast.cart": "🛒 Added to cart",
        "btn.add": "Add",
        "btn.added": "✓ Added",
        "products.count": "{n} products",
        "empty.title": "No products found",
        "empty.sub": "Try a different category.",
        "err.title": "Load error",
        "err.sub": "Check your internet connection.",
    }
};

/* ── State ───────────────────────────────────────────── */
let lang = 'ru';
let theme = 'dark';
let allProducts = [];
let cartCount = 0;
let activeCat = 'all';

/* ── Helpers ─────────────────────────────────────────── */
const t = k => (T[lang][k] || k);
const $ = id => document.getElementById(id);
const qs = s => document.querySelector(s);
const qa = s => document.querySelectorAll(s);

function applyLang() {
    document.documentElement.lang = lang === 'kk' ? 'kk' : lang === 'en' ? 'en' : 'ru';
    qa('[data-i]').forEach(el => { el.textContent = t(el.dataset.i); });
    qa('[data-i-html]').forEach(el => { el.innerHTML = t(el.dataset.iHtml || el.dataset.i); });
    qa('.flt-btn').forEach(b => { if (b.dataset.i) b.textContent = t(b.dataset.i); });
    qa('.sort-sel option').forEach(o => { if (o.dataset.i) o.textContent = t(o.dataset.i); });
    // Re-render add buttons
    qa('.add-btn').forEach(b => { if (!b.classList.contains('ok')) b.querySelector('.add-lbl').textContent = t('btn.add'); });
    document.querySelector('.modal-buy-btn').textContent = t('modal.buy');
    updateCount();
}

function updateCount() {
    const shown = getCurrentProducts().length;
    $('sec-count').textContent = t('products.count').replace('{n}', shown);
}

/* ── Theme ───────────────────────────────────────────── */
function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme);
    $('theme-icon').innerHTML = theme === 'dark'
        ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
        : '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
}

$('theme-btn').addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme();
});

/* ── Language ────────────────────────────────────────── */
qa('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        lang = btn.dataset.l;
        qa('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyLang();
    });
});

/* ── Stars ───────────────────────────────────────────── */
function starsHTML(rate) {
    let s = '';
    for (let i = 1; i <= 5; i++) {
        if (rate >= i) s += '<div class="star s-full"></div>';
        else if (rate >= i - .5) s += '<div class="star s-half"></div>';
        else s += '<div class="star s-emp"></div>';
    }
    return s;
}

/* ── Category class ──────────────────────────────────── */
function catCls(c) {
    if (c === 'electronics') return 'cat-elec';
    if (c === 'jewelery') return 'cat-jew';
    if (c === "men's clothing") return 'cat-men';
    if (c === "women's clothing") return 'cat-wom';
    return '';
}
function catLabel(c) {
    const map = { electronics: "cat.elec", jewelery: "cat.jew", "men's clothing": "cat.men", "women's clothing": "cat.wom" };
    return t(map[c] || 'cat.all');
}

/* ── Skeletons ───────────────────────────────────────── */
function showSkeletons(n = 8) {
    $('grid').innerHTML = Array.from({ length: n }, () => `
    <div class="sk-card">
      <div class="sk-img sk"></div>
      <div class="sk-body">
        <div class="sk-line sk" style="width:90%"></div>
        <div class="sk-line sk" style="width:70%"></div>
        <div class="sk-line sk" style="width:55%;margin-top:var(--s3)"></div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:var(--s4)">
          <div class="sk sk-line" style="width:55px;height:18px;border-radius:4px"></div>
          <div class="sk sk-line" style="width:90px;height:32px;border-radius:var(--r-lg)"></div>
        </div>
      </div>
    </div>`).join('');
}

/* ── Sort & filter ───────────────────────────────────── */
function getCurrentProducts() {
    let list = activeCat === 'all' ? allProducts : allProducts.filter(p => p.category === activeCat);
    const sv = $('sort-sel').value;
    if (sv === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sv === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sv === 'rating') list = [...list].sort((a, b) => b.rating.rate - a.rating.rate);
    return list;
}

/* ── Render ──────────────────────────────────────────── */
function render() {
    const products = getCurrentProducts();
    if (!products.length) {
        $('grid').innerHTML = `
      <div class="empty-box">
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <h3>${t('empty.title')}</h3>
        <p>${t('empty.sub')}</p>
      </div>`;
        $('sec-count').textContent = t('products.count').replace('{n}', 0);
        return;
    }

    $('sec-count').textContent = t('products.count').replace('{n}', products.length);

    $('grid').innerHTML = products.map((p, idx) => {
        const delay = (idx % 10) * 55;
        const pct = (p.rating.rate / 5) * 100;
        return `
      <div class="card-wrap" role="listitem">
        <article class="pcard" data-id="${p.id}" style="animation-delay:${delay}ms"
          tabindex="0" aria-label="${p.title}">

          <div class="pcard-img">
            <span class="cat-tag ${catCls(p.category)}">${catLabel(p.category)}</span>
            <button class="wish-btn" aria-label="${t('toast.wish.add')}"
              onclick="toggleWish(event,this)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <img src="${p.image}" alt="${p.title}" width="170" height="170"
              loading="lazy" decoding="async"
              onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22170%22 height=%22170%22%3E%3Crect fill=%22%23222%22 width=%22170%22 height=%22170%22/%3E%3Ctext x=%2285%22 y=%2292%22 text-anchor=%22middle%22 fill=%22%23555%22 font-size=%2232%22%3E📦%3C/text%3E%3C/svg%3E'"
            />
          </div>

          <div class="pcard-body">
            <div class="pcard-name">${p.title}</div>
            <div class="pcard-desc">${p.description}</div>
            <div class="pcard-rating">
              <div class="stars">${starsHTML(p.rating.rate)}</div>
              <span class="r-score">${p.rating.rate}</span>
              <div class="rating-bar"><div class="rating-fill" data-w="${pct}"></div></div>
              <span class="r-cnt">(${p.rating.count})</span>
            </div>
            <div class="pcard-foot">
              <span class="pcard-price">$${p.price.toFixed(2)}</span>
              <button class="add-btn"
                onclick="addCart(event,'${p.title.replace(/'/g, "\\'").replace(/"/g, '&quot;')}',${p.price})">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                </svg>
                <span class="add-lbl">${t('btn.add')}</span>
              </button>
            </div>
          </div>
        </article>
      </div>`;
    }).join('');

    // Animate rating bars
    requestAnimationFrame(() => {
        qa('.rating-fill').forEach(b => setTimeout(() => { b.style.width = b.dataset.w + '%'; }, 200));
    });

    // 3D tilt
    qa('.pcard').forEach(card => {
        card.addEventListener('mousemove', onTilt);
        card.addEventListener('mouseleave', onReset);
        card.addEventListener('click', () => openModal(card.dataset.id));
        card.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(card.dataset.id); });
    });
}

/* ── 3D Tilt ──────────────────────────────────────────── */
function onTilt(e) {
    const c = e.currentTarget;
    const r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    c.style.transform = `perspective(1000px) rotateX(${-y * 10}deg) rotateY(${x * 13}deg) scale3d(1.025,1.025,1.025)`;
}
function onReset(e) {
    e.currentTarget.style.transform = '';
}

/* ── Wishlist ────────────────────────────────────────── */
function toggleWish(e, btn) {
    e.stopPropagation();
    btn.classList.toggle('on');
    const added = btn.classList.contains('on');
    btn.innerHTML = added
        ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'
        : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
    toast(t(added ? 'toast.wish.add' : 'toast.wish.rm'));
}

/* ── Add to Cart ─────────────────────────────────────── */
function addCart(e, title, price) {
    e.stopPropagation();
    cartCount++;
    $('cart-cnt').textContent = cartCount;
    const btn = e.currentTarget;
    btn.classList.add('ok');
    btn.querySelector('.add-lbl').textContent = t('btn.added');
    setTimeout(() => {
        btn.classList.remove('ok');
        btn.querySelector('.add-lbl').textContent = t('btn.add');
    }, 1800);
    toast(`${t('toast.cart')} — $${Number(price).toFixed(2)}`);
}

/* ── Toast ───────────────────────────────────────────── */
function toast(msg) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    $('toasts').appendChild(el);
    setTimeout(() => el.remove(), 3000);
}

/* ── Modal ───────────────────────────────────────────── */
function openModal(id) {
    const p = allProducts.find(x => x.id == id);
    if (!p) return;
    $('m-img').src = p.image;
    $('m-img').alt = p.title;
    $('m-title').textContent = p.title;
    $('m-desc').textContent = p.description;
    $('m-price').textContent = `$${p.price.toFixed(2)}`;
    const catEl = $('m-cat');
    catEl.textContent = catLabel(p.category);
    catEl.className = `modal-cat-tag ${catCls(p.category)}`;
    $('m-rating').innerHTML = `
    <div class="stars">${starsHTML(p.rating.rate)}</div>
    <span class="r-score">${p.rating.rate}</span>
    <span class="r-cnt">(${p.rating.count})</span>`;
    $('m-buy').onclick = () => {
        cartCount++; $('cart-cnt').textContent = cartCount;
        toast(`${t('toast.cart')} — $${p.price.toFixed(2)}`);
        $('m-buy').textContent = t('btn.added');
        $('m-buy').style.background = '#2aaa60';
        setTimeout(() => { $('m-buy').textContent = t('modal.buy'); $('m-buy').style.background = ''; closeModal(); }, 1200);
    };
    $('overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    $('overlay').classList.remove('open');
    document.body.style.overflow = '';
}
$('modal-close').addEventListener('click', closeModal);
$('overlay').addEventListener('click', e => { if (e.target === $('overlay')) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── Filters & Sort ──────────────────────────────────── */
qa('.flt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        activeCat = btn.dataset.cat;
        qa('.flt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render();
    });
});
$('sort-sel').addEventListener('change', render);

/* ── Fetch ───────────────────────────────────────────── */
showSkeletons(8);

fetch('https://fakestoreapi.com/products')
    .then(r => { if (!r.ok) throw new Error(); return r.json(); })
    .then(data => {
        allProducts = data;
        $('stat-total').textContent = data.length;
        const avgP = (data.reduce((s, p) => s + p.price, 0) / data.length).toFixed(2);
        const maxP = Math.max(...data.map(p => p.price)).toFixed(2);
        $('avg-price').textContent = '$' + avgP;
        $('max-price').textContent = '$' + maxP;
        render();
    })
    .catch(() => {
        $('grid').innerHTML = `
      <div class="empty-box">
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <h3>${t('err.title')}</h3>
        <p>${t('err.sub')}</p>
      </div>`;
        $('sec-count').textContent = '—';
    });

/* ── Init ────────────────────────────────────────────── */
applyTheme();
applyLang();
