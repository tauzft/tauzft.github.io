// EDIT MESSAGES HERE (type: tulip, daisy, sunflower, gerbera, rose, lily)
const flowers = [
    { t: "tulip", c: "#f2607f", d: "#c93b5c", n: "Tulip", m: "Happy birthday, our dearest Eli! Our precious Eli, stay safe and healthy. I will always support you in your endeavors (kahit di halata), i'm always here to ragebait you. More family time to come with you, Eli boi. Love ka namin, take care of yourself. God bless.\n\nLove,\nG." },
    { t: "sunflower", c: "#ffc61a", d: "#f59e0b", n: "Sunflower", m: "Happy birthday my Elijah!\n\nNo words can explain how grateful I am for your existence. Thank you for being such an amazing friend. I hope that you will always continue to look for the goodness of people without losing yourself. Worth it i-celebrate ang buhay mo. I'll see you soon!\n\nAll the love from, Celestine ganda." },
    { t: "gerbera", c: "#ff7a59", d: "#e0483a", n: "Gerbera", m: "Hello, bff! 💐❤️\n\nHappiest birthday to you! I'm so thankful for the friendship we share. Thank you for being Mochi's \"tito ninong pogi\" and for always taking good care of her and being there for her. You're the only friend I fully trust my daughter with, and that means so much to me. Thank you, too, for all the random gifts and flowers you send my way. You always know how to make me feel special!\n\nJust like gerbera flowers, you bring so much sunshine, joy, and happiness into my days, bff.🌼 Thank you for being such a wonderful friend and for having such a kind heart. I'm truly grateful to have you in our lives.\n\nWishing you all the happiness, love, and blessings you deserve. Happiest birthday again, bff! Love you so muchy! 💛 We miss you! Let's meet soon. 🫶🏻\n\nLove,\nKali, Flynn, and Mochi" },
    { t: "daisy", c: "#ffffff", d: "#ffcc33", n: "Daisy", m: "Happy birthday, bff eli!\nI hope you always know how loved you are. Enjoy your day, best boy! Ily! 🤍\n\nwith love, Lai (azi)" },
    { t: "rose", c: "#e94b6b", d: "#a82445", n: "Rose", m: "Happy birthday, twin! 🥹🤍 I hope you still remember me kahit hindi na tayo masyadong nag-uusap like before. Honestly, I kinda missed having that bond with you—the random conversations, kwentos, and just being comfortable around each other. Life really gets busy and somehow people drift apart, pero I still genuinely appreciate the friendship we had and the memories we shared. I hope you're doing well and that life has been treating you kindly. I'm wishing you more happiness, peace, good things, and people who will always remind you how loved and appreciated you are. Enjoy your day, twin! You deserve all the good things coming your way. 🫶🏻\n\nall the love, your twin! (eli) 🫡" },
    { t: "lily", c: "#f6e7ff", d: "#c8a2e0", n: "Lily", m: "Happy happy nyapi yapi birthday to my fijicakes!\n\nThank you for simply existing! You are one of my long time friends and I'm happy to have you in my life.\n\nI wish you happiness and good health syempre. I wish you success din with your plans and that always remember you are loved by many people.\n\nAndito ako always busy man at sa hindi! Feel free to message me lang ah. Miss na miss na kita. I hope you're doing good there. Support kita lagi for anything especially your pangaraps\n\n- Sai ni Ishi" },
    { t: "sunflower", c: "#ffc61a", d: "#f59e0b", n: "Sunflower", m: "Eli Dols! Maligayang pagbati! Una sa lahat, para sayo walang mura to! Salamat sa buhay mo, salamat kasi ang bait mo, salamat kasi wala akong naramdamang intimidation sayo! 🥺 Grabe kahit days or 1 week bago ka mag reply, okay lang! HAHAHHAHAHAH\n\nIsang karangalan maging kaibigan mo. Napakabuti ng puso mo, ingatan mo yan! Love you!\n\n—Lam mo na to, migo pogi! 😎" },
    { t: "tulip", c: "#ff9ec4", d: "#e0559a", n: "Tulip", m: "Happy Birthday! I hope your day is filled with as much joy, laughter, and happiness as you bring into the lives of everyone around you. You truly deserve a fantastic year ahead filled with wonderful memories and great adventures. Cheers to another amazing trip around the sun!\n\n- Sebastian Andre" },
    { t: "daisy", c: "#ffe0ec", d: "#ff6f91", n: "Daisy", m: "Happiest birthday to you, Eli! I hope happy ka sa celebration ng birthday mo! Eat lots of cake and drink lots of Chuckie na din coz fave mo ata? hehe please gimme some na din juseyo! chz HAHAHAHA. I wish you all the happiness in life! I hope ma-achieve mo lahat ng goals and dreams mo. We're still not that close but I hope we get to bond more hehe. Basta wag mo kasi ako aawayin kasi susumbong kita kay Kuya HAHAHAHAHAHA eme lang. Enjoy your day, Eli. Mwa mwa!\n\nLove,\nFae" },
    { t: "rose", c: "#b45bd4", d: "#7a2e9e", n: "Rose", m: "Happy birthday to my bestfriend, my bebeboi, my Eli, my Jahjah!\n\nJah, thank you for being someone I can laugh with, share my thoughts with, and turn to whenever life gets a little too dramatic. I'm so lucky to have you in my life and I hope you never forget how much you mean to me.\n\nI wish you nothing but genuine happiness, peace of mind, good health, and all the beautiful things this world has to offer. I hope life becomes kinder to you, and that you receive the same love and kindness you always deserve. You deserve to be happy, not just today but every single day.\n\nThey say, \"Everyone deserves an Elijah in their life!\" so, thank you for being my Elijah. Sayo ko talaga masasabi yung, stay what you are!\n\nLagi mong tandaan, you are loved! Again, happy birthday! Mwa!\n\nyour always kuya Ashie!" },
    { t: "lily", c: "#ffe0a3", d: "#e0872b", n: "Lily", m: "hello! i know we've only recently started talking and interacting, but HAPPY BIRTHDAY! i wish you all the best and hope this year brings you lots of happiness and good things. enjoy your special day!\n\nps. nasabi ni jiji na nasa spain ka raw so yung chuckie w/ alcohol mo, next time nalang kapag nakauwi ka na 🙂‍↕️\n\n— cael" },
    { t: "gerbera", c: "#ff5252", d: "#c62828", n: "Gerbera", m: "hi eli ni kyeji! i met u months ago pa pero we didn't get to be THAT close lmaoooo pero still i'm so happy i met you and i consider one of my bffs kaya xd also i'm so glad kyeji have you arghhhh otp namin kayo ni nate tbh IJBOLLL (hey true yan) AYON i hope makahangout ulit kita soon happy birthday eli yipeeeee\n\n- keios" },
    { t: "daisy", c: "#e6dcff", d: "#8e6fd8", n: "Daisy", m: "Happy birthday, Eli!\n\nNagbibirthday ka pala noh? Kala ko bula ka lang na biglang sumulpot eh, djk. There's nothing much to say but I pray and hope that you get the life that you've been envisioning from the very moment you learned how to dream. You've been nothing but a good friend and listener, probably everything someone could ever wish for and just know that I'm just always around the corner ready for any of your kalokohan and well, a stray cat and dog talks kind of night.\n\nNext time na chuckie mo kapag nakauwi ka na. Happy birthday, Eli! You are loved more than you could even think of. Don't let anyone or anything dim your light.\n\n- CNV. " },
    { t: "lily", c: "#ffeef5", d: "#e8739a", n: "Lily", m: "Happy birthday, Eli! Wishing you more happiness, and may your day be filled with love. I hope you enjoy it, and may more happy memories come your way. The kulits said happy birthday, too! ♡ \n\n- Ishi ni Sai" },
    { t: "sunflower", c: "#ffd966", d: "#e0872b", n: "Sunflower", m: "Happy happy birthday to our sweetest and loveliest Eli!! 🥹💗🎂 I hope you never lose that sweet self of yours na nagpapaspecial sa'yo sa lahat ng tao sa paligid mo. We love you so so much nak!! Keep doing your best sa studies and good luck sa lahat ng bagay na haharapin mo. Always remember na nandito lang kami for you, through your wins, struggles and everything in between!\n\nI hope this new chapter of your life brings you more happiness, lov  and beautiful memories. Sana maging gentle sa'yo ang year na ito and bring you more blessings, lessons and opportunities to grow. Another year older means another year of achievements, kaya always be proud of yourself and sa lahat ng narating mo. Take your time, enjoy life and don't be too hard on yourself okiii?\n\nNever forget kung gaano ka kamahal ng mga tao sa paligid mo, elicakes!! You deserve all the good things in life and we will always be here to support and cheer you on. Continue being the wonderful person that you are and always remember na we're so proud of you. Happy birthday ulit nak!! We love you always!! 🫶🏻💐🎉 \n\n - arendables pinakamaganda" },
    { t: "tulip", c: "#ffd93b", d: "#d9a400", n: "Yellow Tulip", m: "happy birthday, my yelo! 🤍\n\ntoday is all about you, and i hope you get to feel just how loved and appreciated you are, not just today but every day. i'm so proud of the person you are and the person you're slowly becoming. i know life isn't always kind, and there are days when things feel heavier than usual, but i hope you never forget how much you deserve all the good things this world has to offer.\n\nthank you for existing, jo. thank you for letting me know you, for sharing your thoughts with me, and for allowing me to be part of your life. i hope this new chapter brings you more reasons to smile, opportunities to grow, and moments that remind you that all your efforts are worth it. sana maging gentle sa'yo ang mundo this time, and may you always find reasons to keep going, even on the days when it's difficult to do so.\n\nplease take care of yourself, okay? don't be too hard on yourself, and remember that you don't always have to have everything figured out. i'm always rooting for you, proud of you, and happy to see you become more of yourself. you deserve to be celebrated for simply being you, not just for the things you achieve.\n\nhappy birthday ulit, ga ko. i hope today reminds you of how special you are. i love you, and i'm really, really glad that you were born. 🤍" }
];

// EDIT GIFTS HERE (put image files in the hbd/gifts folder, then list them below)
const gifts = [
    { img: "gifts/gift1.avif", cap: "From Celes" },
    { img: "gifts/gift2.avif", cap: "From Keios" },
    { img: "gifts/gift3.avif", cap: "From Kali, Flynn, and Mochi" },
    { img: "gifts/gift4.avif", cap: "From Sebastian" },
    { img: "gifts/gift5.avif", cap: "From Asher" },
    { img: "gifts/gift6.avif", cap: "From Sai ni Ishi" },
    { img: "gifts/gift7.avif", cap: "From Ishi ni Sai" },
    { img: "gifts/gift8.png", cap: "From Sylvan" },
    { img: "gifts/image.avif", cap: "Greetings from Jensen" }
];

const placeholderGift = (cap) => "data:image/svg+xml," + encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='#ffdfe9'/><rect x='22' y='34' width='56' height='46' rx='4' fill='#e06a8a'/><rect x='18' y='26' width='64' height='14' rx='4' fill='#d15475'/><rect x='46' y='26' width='8' height='54' fill='#ffd166'/><path d='M50 26c-8-12-22-14-22-4 0 6 10 6 22 4zM50 26c8-12 22-14 22-4 0 6-10 6-22 4z' fill='#ffd166'/><text x='50' y='94' font-family='Georgia' font-size='9' fill='#7a3d52' text-anchor='middle'>${cap}</text></svg>`
);

const G = "#4f9a5a", G2 = "#6fb872";
const stem = (top) => `<path d="M50 ${top} Q43 ${(top + 240) / 2} 50 240" stroke="${G}" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M47 185 Q18 175 12 140 Q40 144 47 185Z" fill="${G2}"/><path d="M48 150 Q80 140 88 108 Q58 112 48 150Z" fill="${G2}"/>`;
const ring = (n, fn) => Array.from({ length: n }, (_, i) => fn(i * 360 / n, i)).join('');
const petal = (a, cy, rx, ry, fill, st = 'rgba(0,0,0,.12)') => `<ellipse cx="50" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${st}" transform="rotate(${a} 50 50)"/>`;
const dots = (r, n, fill) => ring(n, a => `<circle cx="${50 + r * Math.cos(a * Math.PI / 180)}" cy="${50 + r * Math.sin(a * Math.PI / 180)}" r="1.5" fill="${fill}"/>`);

const draw = {
    tulip: f => stem(92) + `<path d="M50 96 C25 92 20 54 27 24 C40 36 50 62 50 96Z" fill="${f.d}"/><path d="M50 96 C75 92 80 54 73 24 C60 36 50 62 50 96Z" fill="${f.d}"/>
  <path d="M50 98 C33 80 35 42 50 12 C65 42 67 80 50 98Z" fill="${f.c}"/><path d="M50 20 C44 40 43 64 47 86" stroke="#fff" stroke-opacity=".4" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    daisy: f => stem(64) + ring(14, a => petal(a, 30, 5.5, 19, f.c)) + ring(14, a => petal(a + 13, 33, 4.5, 16, f.c)) + `<circle cx="50" cy="50" r="10" fill="${f.d}" stroke="#d99a00"/>` + dots(5, 6, '#d99a00'),
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
        const cols = Math.max(3, Math.ceil(Math.sqrt(n))), rows = Math.ceil(n / cols);
        const sc = Math.max(.55, Math.min(.85, (H - 210) / 480)), half = 120 * sc;
        const dx = Math.min(W * .28, 280, (W - 60) / Math.max(1, cols - 1));
        const dy = Math.max(30, Math.min(H * .18, 150, (H / 2 - 105 - half) / 1.15));
        const cx = W / 2, cy = H / 2;
        els.forEach((d, i) => {
            const col = i % cols, row = Math.floor(i / cols);
            const cnt = row === rows - 1 ? n - cols * (rows - 1) : cols;
            const x = cx + (col - (cnt - 1) / 2) * dx + Math.sin(i * 7) * dx * .18;
            const y = cy + (row - (rows - 1) / 2) * dy + Math.cos(i * 5) * dy * .15 + half;
            d.style.zIndex = 4; d.style.transitionDelay = ((n - 1 - i) * 50 + 120) + 'ms';
            d.style.transform = `translate(${(x - 50).toFixed(1)}px, ${(y - 240).toFixed(1)}px) rotate(${(Math.sin(i * 3.1) * 55).toFixed(0)}deg) scale(${sc.toFixed(2)})`;
        });
    } else {
        const bx = W / 2, top = 92, bot = H - 96, avail = bot - top;
        const base = Math.max(.5, Math.min(1.35, (avail - 110) / 245, (W / 2 - 12) / 200));
        const k = Math.max(.8, base), T = 255 * base, B = 105 * k;
        const by = (top + bot) / 2 + (T - B) / 2;
        const mouthW = 84 * k, mouthH = 18 * k;
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
            const a = -40 + 80 * t, s = .85 + .25 * Math.sin(Math.PI * t);
            const px = bx + (t - .5) * mouthW, py = by + Math.abs(t - .5) * mouthH;
            const z = 10 + Math.round(6 * Math.sin(Math.PI * t));
            els[idx].style.transitionDelay = (p * 70) + 'ms'; els[idx].style.zIndex = z;
            els[idx].style.transform = `translate(${(px - 50).toFixed(1)}px, ${(py - 240).toFixed(1)}px) rotate(${a.toFixed(0)}deg) scale(${(base * s).toFixed(3)})`;
        });
        wrap.style.width = (160 * k) + 'px'; wrap.style.height = (150 * k) + 'px'; wrap.style.marginLeft = (-80 * k) + 'px';
        wrap.style.left = bx + 'px'; wrap.style.top = (by - 30 * k) + 'px'; wrap.classList.add('on');
    }
    updateHint();
}

btn.onclick = () => { bouquet = !bouquet; btn.textContent = bouquet ? 'Scatter them again' : 'Make a bouquet'; btn.classList.toggle('alt', bouquet); place() };
document.getElementById('overlay').onclick = e => e.currentTarget.classList.remove('show');
addEventListener('resize', place); place();

const giftbtn = document.getElementById('giftbtn'), giftsEl = document.getElementById('gifts'), grid = document.getElementById('giftgrid');
if (gifts.length) {
    grid.innerHTML = gifts.map((g, i) =>
        `<div class="gift" data-i="${i}"><img src="${g.img}" alt="${g.cap}" onerror="this.onerror=null;this.src='${placeholderGift(g.cap)}'"><div class="cap">${g.cap}</div></div>`
    ).join('');
} else {
    grid.innerHTML = '<div id="nogift">No gifts added yet 🌷</div>';
}
giftbtn.onclick = () => giftsEl.classList.add('show');
giftsEl.onclick = e => { if (!e.target.closest('#giftscroll')) giftsEl.classList.remove('show') };
grid.onclick = e => {
    const card = e.target.closest('.gift'); if (!card) return;
    const g = gifts[+card.dataset.i];
    const z = document.getElementById('giftzoom');
    z.querySelector('img').src = card.querySelector('img').src;
    z.querySelector('.cap').textContent = g.cap;
    z.classList.add('show');
    e.stopPropagation();
};
document.addEventListener('click', e => { if (e.target.closest('#giftzoom')) document.getElementById('giftzoom').classList.remove('show') });