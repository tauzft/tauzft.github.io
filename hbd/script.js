// EDIT MESSAGES HERE (type: tulip, daisy, sunflower, gerbera, rose, lavender)
const flowers = [
    { t: "tulip", c: "#f2607f", d: "#c93b5c", n: "Tulip", m: "Message #1: write something sweet here." },
    { t: "daisy", c: "#ffffff", d: "#ffcc33", n: "Daisy", m: "Message #2: a favorite memory of us." },
    { t: "sunflower", c: "#ffc61a", d: "#f59e0b", n: "Sunflower", m: "Message #3: something you love about them." },
    { t: "gerbera", c: "#ff7a59", d: "#e0483a", n: "Gerbera", m: "Message #4: a little promise." },
    { t: "rose", c: "#e94b6b", d: "#a82445", n: "Rose", m: "Message #5: I love you." },
    { t: "lavender", c: "#b794e8", d: "#8a63c9", n: "Lavender", m: "Message #6: an inside joke." }
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
    lavender: f => stem(30) + `<ellipse cx="50" cy="14" rx="4" ry="8" fill="${f.c}"/>` + Array.from({ length: 9 }, (_, k) => { const y = 24 + k * 8, s = k % 2 ? f.d : f.c; return `<ellipse cx="44" cy="${y}" rx="4.5" ry="7" fill="${s}" transform="rotate(-28 44 ${y})"/><ellipse cx="56" cy="${y + 3}" rx="4.5" ry="7" fill="${s == f.c ? f.d : f.c}" transform="rotate(28 56 ${y + 3})"/>` }).join('')
};
const stage = document.getElementById('stage'), btn = document.getElementById('btn'), wrap = document.getElementById('wrap'), hint = document.getElementById('hint');
let bouquet = false;
for (let i = 0; i < 12; i++) { const p = document.createElement('div'); p.className = 'pt'; p.style.left = (Math.random() * 100) + '%'; p.style.animationDuration = (9 + Math.random() * 9) + 's'; p.style.animationDelay = (-Math.random() * 14) + 's'; stage.appendChild(p) }
const els = flowers.map(f => {
    const d = document.createElement('div'); d.className = 'flower';
    d.innerHTML = `<svg viewBox="0 0 100 240">${draw[f.t](f)}</svg>`;
    d.onclick = () => { document.getElementById('fname').textContent = f.n; document.getElementById('msg').textContent = f.m; document.getElementById('overlay').classList.add('show'); d.classList.add('read'); updateHint() };
    stage.appendChild(d); return d
});
els.forEach((d, i) => d.style.animationDelay = (-i * .8) + 's');
function updateHint() {
    const r = document.querySelectorAll('.flower.read').length, n = els.length;
    hint.textContent = bouquet ? 'Tap any flower to read it again' : (r == n ? 'You read them all! Now make the bouquet' : `Tap a flower to read its note · ${r}/${n}`);
    btn.classList.toggle('pulse', !bouquet && r == n);
}
function place() {
    const W = innerWidth, H = innerHeight, n = els.length;
    if (!bouquet) {
        wrap.classList.remove('on');
        els.forEach((d, i) => {
            const col = i % 3, row = Math.floor(i / 3);
            d.style.left = (W * (.2 + col * .3) + Math.sin(i * 7) * W * .05) + 'px';
            d.style.top = (H * (.55 + row * .25) + Math.cos(i * 5) * H * .03) + 'px';
            d.style.transform = `rotate(${(Math.sin(i * 3.1) * 55).toFixed(0)}deg) scale(.85)`;
            d.style.zIndex = 1; d.style.transitionDelay = ((n - 1 - i) * 50 + 120) + 'ms';
        });
    } else {
        const bx = W / 2, top = 92, bot = H - 96, avail = bot - top;
        const base = Math.max(.5, Math.min(1.35, (avail - 110) / 245, (W / 2 - 12) / 200)), sc = [.88, 1, 1.08, 1.08, 1, .88];
        const k = Math.max(.8, base), T = 255 * base, B = 105 * k;
        const by = (top + bot) / 2 + (T - B) / 2;
        els.forEach((d, i) => {
            const a = -38 + 76 * i / (n - 1);
            d.style.transitionDelay = (i * 70) + 'ms'; d.style.left = bx + 'px'; d.style.top = by + 'px'; d.style.zIndex = [1, 2, 3, 3, 2, 1][i];
            d.style.transform = `rotate(${a}deg) scale(${(base * sc[i]).toFixed(2)})`;
        });
        wrap.style.width = (160 * k) + 'px'; wrap.style.height = (150 * k) + 'px'; wrap.style.marginLeft = (-80 * k) + 'px';
        wrap.style.left = bx + 'px'; wrap.style.top = (by - 45 * k) + 'px'; wrap.classList.add('on');
    }
    updateHint();
}
btn.onclick = () => { bouquet = !bouquet; btn.textContent = bouquet ? 'Scatter them again' : 'Make a bouquet'; btn.classList.toggle('alt', bouquet); place() };
document.getElementById('overlay').onclick = e => e.currentTarget.classList.remove('show');
addEventListener('resize', place); place();