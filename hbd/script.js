// EDIT MESSAGES HERE (type: tulip, daisy, sunflower, gerbera, rose, lily)
const flowers = [
    { t: "tulip", c: "#f2607f", d: "#c93b5c", n: "Tulip", m: "Happy birthday, our dearest Eli! Our precious Eli, stay safe and healthy. I will always support you in your endeavors (kahit di halata), i'm always here to ragebait you. More family time to come with you, Eli boi. Love ka namin, take care of yourself. God bless. \n\nLove,\nG." },
    { t: "sunflower", c: "#ffc61a", d: "#f59e0b", n: "Sunflower", m: "Happy birthday my Elijah! \n\nNo words can explain how grateful I am for your existence. Thank you for being such an amazing friend. I hope that you will always continue to look for the goodness of people without losing yourself. Worth it i-celebrate ang buhay mo. I'll see you soon! All the love from, Celestine ganda." },
    { t: "sunflower", c: "#ffc61a", d: "#f59e0b", n: "Sunflower", m: "Eli Dols! Maligayang pagbati! Una sa lahat, para sayo walang mura to! Salamat sa buhay mo, salamat kasi ang bait mo, salamat kasi wala akong naramdamang intimidation sayo! 🥺 Grabe kahit days or 1 week bago ka mag reply, okay lang! HAHAHHAHAHAH \n\nIsang karangalan maging kaibigan mo. Napakabuti ng puso mo, ingatan mo yan! Love you!\n\n—Lam mo na to, migo pogi! 😎" },
    { t: "daisy", c: "#ffffff", d: "#ffcc33", n: "Daisy", m: "Happy birthday, bff eli!\nI hope you always know how loved you are. Enjoy your day, best boy! Ily! 🤍\n\nwith love, Lai (azi)" },
    { t: "rose", c: "#e94b6b", d: "#a82445", n: "Rose", m: "Happy birthday, twin! 🥹🤍 I hope you still remember me kahit hindi na tayo masyadong nag-uusap like before. Honestly, I kinda missed having that bond with you—the random conversations, kwentos, and just being comfortable around each other. Life really gets busy and somehow people drift apart, pero I still genuinely appreciate the friendship we had and the memories we shared. I hope you're doing well and that life has been treating you kindly. I'm wishing you more happiness, peace, good things, and people who will always remind you how loved and appreciated you are. Enjoy your day, twin! You deserve all the good things coming your way. 🫶🏻 \n\nall the love, your twin! (eli) 🫡" },

    // --- Remaining original flowers (no message assigned yet) ---
    { t: "gerbera", c: "#ff7a59", d: "#e0483a", n: "Gerbera", m: "Message #4: a little promise." },
    { t: "lily", c: "#f6e7ff", d: "#c8a2e0", n: "Lily", m: "Message #6: an inside joke." }
];

const G = "#4f9a5a", G2 = "#6fb872";
const stem = (top) => `<path d="M50 ${top} Q43 ${(top + 240) / 2} 50 240" stroke="${G}" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M47 185 Q18 175 12 140 Q40 144 47 185Z" fill="${G2}"/><path d="M48 150 Q80 140 88 108 Q58 112 48 150Z" fill="${G2}"/>`;
const ring = (n, fn) => Array.from({ length: n }, (_, i) => fn(i * 360 / n, i)).join('');
const petal = (a, cy, rx, ry, fill, st = 'rgba(0,0,0,.12)') => `<ellipse cx="50" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${st}" transform="rotate(${a} 50 50)"/>`;
const dots = (r, n, fill) => ring(n, a => `<circle cx="${50 + r * Math.cos(a * Math.PI / 180)}" cy="${50 + r * Math.sin(a * Math.PI / 180)}" r="1.5" fill="${fill}"/>`);

const draw = {
    tulip: f => stem(92) + `<path d="M50 96 C25 92 20 54 27 24 C40 36 50 62 50 96Z" fill="${f.d}"/><path d="M50 96 C75 92 80 54 73 24 C60 36 50 62 50 96Z" fill="${f.d}"/>
  <path d="M50 98 C33 80 35 42 50 12 C65 42 67 80 50 98Z" fill="${f.c}"/><path d="M50 20 C44 40 43 64 47 86" stroke="#fff" stroke-opacity=".4" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    daisy: f => stem(64) + ring(14, a => petal(a, 30, 5.5, 19, '#fff')) + ring(14, a => petal(a + 13, 33, 4.5, 16, '#fdfdfd')) + `<circle cx="50" cy="50" r="10" fill="${f.d}" stroke="#d99a00"/>` + dots(5, 6, '#d99a00'),
    sunflower: f => stem(68) + ring(16, a => petal(a, 27, 7, 20, f.d)) + ring(16, a => petal(a + 11, 29, 7, 18, f.c)) + `<circle cx="50" cy="50" r="16" fill="#5a3a1e" stroke="#3d2412"/>` + dots(5, 6, '#8a5a2b') + dots(10, 12, '#8a5a2b') + dots(14, 16, '#7a4a22'),
    gerbera: f => stem(66) + ring(18, a => petal(a, 29, 4.5, 21, f.d)) + ring(18, a => petal(a + 10, 31, 4.5, 19, f.c)) + `<circle cx="50" cy="50" r="10" fill="#3d2b3d"/><circle cx="50" cy="50" r="5.5" fill="#ffd166"/>` + dots(7.5, 8, '#ffd166'),
    rose: f => `<path d="M50 78 L36 94 Q50 88 50 80Z M50 78 L64 94 Q50 88 50 80Z" fill="${G}"/>` + stem(84) + `<circle cx="50" cy="52" r="29" fill="${f.d}"/>` + ring(6, a => `<circle cx="${50 + 17 * Math.cos(a * Math.PI / 180)}" cy="${52 + 17 * Math.sin(a * Math.PI / 180)}" r="13" fill="${f.c}" stroke="${f.d}" stroke-width="1.5"/>`) + `<circle cx="50" cy="52" r="14" fill="${f.c}" stroke="${f.d}" stroke-width="1.5"/><path d="M50 52 m-3 0 a3 3 0 1 1 6 0 a6 6 0 1 1 -12 0 a10 10 0 1 1 20 0" stroke="${f.d}" stroke-width="2" fill="none" stroke-linecap="round"/>`,
    lily: f => stem(66) + ring(6, a => {
        const r = (a - 90) * Math.PI / 180, tx = 50 + 19 * Math.cos(r), ty = 50 + 19 * Math.sin(r);
        return `<path d="M50 50 Q37 35 50 17 Q63 35 50 50Z" fill="${f.c}" stroke="${f.d}" stroke-width="1.3" stroke-linejoin="round" transform="rotate(${a} 50 50)"/>
  <line x1="50" y1="50" x2="${tx.toFixed(1)}" y2="${ty.toFixed(1)}" stroke="${f.d}" stroke-width="1.3" stroke-linecap="round"/>
  <ellipse cx="${tx.toFixed(1)}" cy="${ty.toFixed(1)}" rx="3.2" ry="1.7" fill="#ffb347" stroke="${f.d}" stroke-width=".7" transform="rotate(${a - 90} ${tx.toFixed(1)} ${ty.toFixed(1)})"/>`
    }) + `<circle cx="50" cy="50" r="6.5" fill="${f.d}"/><circle cx="50" cy="50" r="2.4" fill="${f.c}" opacity=".85"/>`
};

const stage = document.getElementById('stage'), btn = document.getElementById('btn'), wrap = document.getElementById('wrap'), hint = document.getElementById('hint');
let bouquet = false;
for (let i = 0; i < 12; i++) { const p = document.createElement('div'); p.className = 'pt'; p.style.left = (Math.random() * 100) + '%'; p.style.animationDuration = (9 + Math.random() * 9) + 's'; p.style.animationDelay = (-Math.random() * 14) + 's'; stage.appendChild(p) }

const els = flowers.map(f => {
    const d = document.createElement('div'); d.className = 'flower';
    d.innerHTML = `<svg viewBox="0 0 100 240">${draw[f.t](f)}</svg>`;
    d.onclick = () => {
        document.getElementById('fname').textContent = f.n;
        document.getElementById('msg').innerHTML = f.m;
        document.getElementById('overlay').classList.add('show');
        d.classList.add('read');
        updateHint();
    };
    stage.appendChild(d); return d
});
els.forEach((d, i) => d.style.animationDelay = (-i * 0.8) + 's');

function updateHint() {
    const r = document.querySelectorAll('.flower.read').length, n = els.length;
    hint.textContent = bouquet ? 'Tap any flower to read it again' : (r == n ? 'You read them all! Now make the bouquet' : `Tap a flower to read its note · ${r}/${n}`);
    btn.classList.toggle('pulse', !bouquet && r == n);
}

function place() {
    const W = innerWidth, H = innerHeight, n = els.length;
    if (!bouquet) {
        wrap.classList.remove('on');
        const cols = 3, rows = Math.ceil(n / cols);
        const sc = Math.max(.55, Math.min(.85, (H - 210) / 480)), half = 120 * sc;
        const dx = Math.min(W * .28, 280);
        const dy = Math.max(30, Math.min(H * .18, 150, (H / 2 - 105 - half) / 1.15));
        const cx = W / 2, cy = H / 2;
        els.forEach((d, i) => {
            const col = i % cols, row = Math.floor(i / cols);
            const cnt = row === rows - 1 ? n - cols * (rows - 1) : cols;
            const x = cx + (col - (cnt - 1) / 2) * dx + Math.sin(i * 7) * dx * .18;
            const y = cy + (row - (rows - 1) / 2) * dy + Math.cos(i * 5) * dy * .15;
            d.style.left = x + 'px';
            d.style.top = (y + half) + 'px';
            d.style.transform = `rotate(${(Math.sin(i * 3.1) * 55).toFixed(0)}deg) scale(${sc.toFixed(2)})`;
            d.style.zIndex = 4; d.style.transitionDelay = ((n - 1 - i) * 50 + 120) + 'ms';
        });
    } else {
        const bx = W / 2, top = 92, bot = H - 96, avail = bot - top;
        const base = Math.max(.5, Math.min(1.35, (avail - 110) / 245, (W / 2 - 12) / 200));
        const k = Math.max(.8, base), T = 255 * base, B = 105 * k;
        const by = (top + bot) / 2 + (T - B) / 2;
        const buckets = [];
        flowers.forEach((f, i) => {
            let b = buckets.find(x => x.t === f.t);
            if (!b) buckets.push(b = { t: f.t, ids: [] });
            b.ids.push(i);
        });
        const order = [];
        while (order.length < n) buckets.forEach(b => { if (b.ids.length) order.push(b.ids.shift()) });
        order.forEach((idx, p) => {
            const t = n === 1 ? .5 : p / (n - 1);
            const a = -38 + 76 * t, s = .85 + .25 * Math.sin(Math.PI * t), z = 10 + Math.round(2 * Math.sin(Math.PI * t));
            els[idx].style.transitionDelay = (p * 70) + 'ms'; els[idx].style.left = bx + 'px'; els[idx].style.top = by + 'px'; els[idx].style.zIndex = z;
            els[idx].style.transform = `rotate(${a.toFixed(0)}deg) scale(${(base * s).toFixed(2)})`;
        });
        wrap.style.width = (160 * k) + 'px'; wrap.style.height = (150 * k) + 'px'; wrap.style.marginLeft = (-80 * k) + 'px';
        wrap.style.left = bx + 'px'; wrap.style.top = (by - 45 * k) + 'px'; wrap.classList.add('on');
    }
    updateHint();
}

btn.onclick = () => { bouquet = !bouquet; btn.textContent = bouquet ? 'Scatter them again' : 'Make a bouquet'; btn.classList.toggle('alt', bouquet); place() };
document.getElementById('overlay').onclick = e => e.currentTarget.classList.remove('show');
addEventListener('resize', place); place();