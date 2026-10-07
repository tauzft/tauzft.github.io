/* ============================================================
   REVEL // CONFESSION CARD
   canvas foil scratching + weighted verdict roll + ledger
   ============================================================ */
(function () {
  "use strict";

  var ALLOWANCE = 3;

  var RARITIES = {
    common: { label: "COMMON", chance: 30, confetti: 0, note: "unremarkable" },
    uncommon: { label: "UNCOMMON", chance: 25, confetti: 26, note: "almost something" },
    rare: { label: "RARE", chance: 20, confetti: 54, note: "took a while" },
    ultraRare: { label: "ULTRA-RARE", chance: 12, confetti: 90, note: "heavy envelope" },
    epic: { label: "EPIC", chance: 8, confetti: 120, note: "not our doing" },
    legendary: { label: "LEGENDARY", chance: 5, confetti: 160, note: "beyond us entirely" }
  };

  var VERDICTS = [
    { id: "v01", rarity: "common", icon: "💬", title: "THE DOUBLE TEXT", line: "You will have to decide what pride is worth keeping." },
    { id: "v02", rarity: "uncommon", icon: "📞", title: "THE MISSED CALL", line: "What could have been will remain just beyond your reach." },
    { id: "v03", rarity: "rare", icon: "👁️", title: "THE LAST SEEN", line: "What you discover may change how you remember them." },
    { id: "v04", rarity: "ultraRare", icon: "⏳", title: "THE PENDING", line: "The answer exists, but the time is not yet yours to know." },
    { id: "v05", rarity: "epic", icon: "🚪", title: "THE OPEN DOOR", line: "An unexpected connection awaits beyond it." },
    { id: "v06", rarity: "legendary", icon: "📭", title: "THE RETURNING MESSAGE", line: "What was lost finds its way back to you." }
  ];

  var store = {
    get: function (k, fallback) {
      try {
        var v = localStorage.getItem(k);
        return v === null ? fallback : JSON.parse(v);
      } catch (e) { return fallback; }
    },
    set: function (k, v) {
      try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { }
    }
  };

  var visitor = (function () {
    var id = store.get("revel.visitor", null);
    if (!id) {
      id = "G" + Math.random().toString(36).slice(2, 7).toUpperCase();
      store.set("revel.visitor", id);
    }
    return id;
  })();

  var state = store.get("revel.ledger2", null) || {};
  if (!state.album || typeof state.album !== "object") state.album = {};
  if (!Array.isArray(state.cards)) state.cards = [];
  if (typeof state.name !== "string") state.name = "";
  var KNOWN = {};
  VERDICTS.forEach(function (v) { KNOWN[v.id] = true; });
  state.cards = state.cards.filter(function (c) { return c && findVerdict(c.id); });
  Object.keys(state.album).forEach(function (k) { if (!KNOWN[k]) delete state.album[k]; });

  var el = {
    nameForm: document.getElementById("nameForm"),
    nameInput: document.getElementById("nameInput"),
    panelStart: document.getElementById("panelStart"),
    cardZone: document.getElementById("cardZone"),
    card: document.getElementById("card"),
    foil: document.getElementById("foil"),
    cardRarity: document.getElementById("cardRarity"),
    cardIcon: document.getElementById("cardIcon"),
    cardTitle: document.getElementById("cardTitle"),
    cardLine: document.getElementById("cardLine"),
    cardName: document.getElementById("cardName"),
    cardSerial: document.getElementById("cardSerial"),
    cardDrop: document.getElementById("cardDrop"),
    progress: document.getElementById("progress"),
    pctFill: document.getElementById("pctFill"),
    pctText: document.getElementById("pctText"),
    actions: document.getElementById("actions"),
    btnAgain: document.getElementById("btnAgain"),
    draws: document.getElementById("draws"),
    finalNote: document.getElementById("finalNote"),
    btnNewRound: document.getElementById("btnNewRound"),
    btnSave: document.getElementById("btnSave"),
    btnCollection: document.getElementById("btnCollection"),
    collection: document.getElementById("collection"),
    collectionGrid: document.getElementById("collectionGrid"),
    collectionCount: document.getElementById("collectionCount"),
    btnCloseCollection: document.getElementById("btnCloseCollection"),
    counterBadge: document.getElementById("counterBadge"),
    visitorCode: document.getElementById("visitorCode"),
    toast: document.getElementById("toast"),
    starfield: document.getElementById("starfield")
  };

  var ctx = el.foil.getContext("2d", { willReadFrequently: true });
  var W = 0, H = 0;
  var PX = 4;
  var drawing = false, revealed = false, lastPt = null, resizeTimer = null;
  var current = null;
  var THRESHOLD = 0.55;

  /* ---------------- starfield ---------------- */

  (function stars() {
    var frag = document.createDocumentFragment();
    for (var i = 0; i < 90; i++) {
      var s = document.createElement("span");
      s.className = "star";
      var size = Math.random() < 0.85 ? 2 : 3;
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDelay = (Math.random() * 2.4).toFixed(2) + "s";
      s.style.opacity = Math.random();
      frag.appendChild(s);
    }
    el.starfield.appendChild(frag);
  })();

  /* ---------------- foil painting ---------------- */

  function paintFoil() {
    if (!W || !H) return;
    var cols = Math.ceil(W / PX);
    var rows = Math.ceil(H / PX);

    el.foil.width = cols;
    el.foil.height = rows;

    var g = ctx;
    g.clearRect(0, 0, cols, rows);

    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {
        var u = x / cols;
        var v = y / rows;
        var band = (x + y * 1.6) % 34;
        var base = 150 + Math.sin((u * 6 + v * 4) * Math.PI) * 38;
        if (band < 4) base += 26;
        var noise = (Math.random() - 0.5) * 34;
        var l = Math.max(0, Math.min(255, base + noise));
        var r = l * 0.93, gg = l * 0.96, b = l * 1.02;
        g.fillStyle = "rgb(" + (r | 0) + "," + (gg | 0) + "," + (b | 0) + ")";
        g.fillRect(x, y, 1, 1);
      }
    }

    var sheen = g.createLinearGradient(0, 0, cols, rows);
    sheen.addColorStop(0, "#ffffff00");
    sheen.addColorStop(0.38, "#ffffff55");
    sheen.addColorStop(0.46, "#ffffff00");
    sheen.addColorStop(0.72, "#8f8fd055");
    sheen.addColorStop(1, "#ffffff00");
    g.fillStyle = sheen;
    g.fillRect(0, 0, cols, rows);

    g.textAlign = "center";
    g.textBaseline = "middle";

    g.font = "bold " + Math.max(4, Math.round(cols * 0.042)) + "px monospace";
    g.fillStyle = "#6b7391cc";
    g.fillText("SCRATCH TO", cols / 2, rows * 0.3);

    g.font = "bold " + Math.max(5, Math.round(cols * 0.082)) + "px monospace";
    g.fillStyle = "#4e5573dd";
    g.fillText("CONFESS", cols / 2, rows * 0.46);
    g.fillText("CONFESS", cols / 2, rows * 0.63);

    g.font = "bold " + Math.max(3, Math.round(cols * 0.03)) + "px monospace";
    g.fillStyle = "#7b83a2cc";
    g.fillText("REVEL", cols / 2, rows * 0.545);

    g.strokeStyle = "#ffffff44";
    g.lineWidth = 1;
    for (var i = -rows; i < cols; i += 9) {
      g.beginPath();
      g.moveTo(i, 0);
      g.lineTo(i + rows, rows);
      g.stroke();
    }
  }

  function fitFoil() {
    var rect = el.foil.getBoundingClientRect();
    if (rect.width < 40 || rect.height < 40) return;
    W = Math.max(1, Math.round(rect.width));
    H = Math.max(1, Math.round(rect.height));
    if (!revealed) paintFoil();
  }

  function pos(ev) {
    var r = el.foil.getBoundingClientRect();
    return {
      x: (ev.clientX - r.left) / r.width,
      y: (ev.clientY - r.top) / r.height
    };
  }

  function erase(px, py, from) {
    var radius = Math.max(4, Math.round((W * 0.075) / PX));
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = "rgba(0,0,0,1)";
    ctx.beginPath();
    if (from) {
      ctx.moveTo(from.x * el.foil.width, from.y * el.foil.height);
      ctx.lineTo(px * el.foil.width, py * el.foil.height);
    } else {
      ctx.arc(px * el.foil.width, py * el.foil.height, radius, 0, Math.PI * 2);
    }
    ctx.stroke();
    ctx.globalCompositeOperation = "source-over";
  }

  function scratchedRatio() {
    var w = el.foil.width, h = el.foil.height;
    var data = ctx.getImageData(0, 0, w, h).data;
    var total = 0, cleared = 0;
    for (var i = 3; i < data.length; i += 16) {
      total++;
      if (data[i] < 40) cleared++;
    }
    return total ? cleared / total : 0;
  }

  var measureTick = 0;
  function measure() {
    var pct = Math.round(scratchedRatio() * 100);
    el.pctFill.style.width = pct + "%";
    el.pctText.textContent = pct + "%";
    if (pct >= THRESHOLD * 100) {
      finish();
    } else if (++measureTick % 3 === 0 && pct > 0) {
      spark(lastPt || { x: 0.5, y: 0.5 });
    }
  }

  /* ---------------- particles ---------------- */

  function spark(pt) {
    var r = el.card.getBoundingClientRect();
    var d = document.createElement("span");
    d.className = "confetti";
    d.style.left = (r.left + pt.x * r.width) + "px";
    d.style.top = (r.top + pt.y * r.height) + "px";
    d.style.background = Math.random() < 0.5 ? "#ffffff" : "#ffd23f";
    d.style.width = (3 + Math.random() * 4) + "px";
    d.style.height = (3 + Math.random() * 5) + "px";
    d.style.animationDuration = (0.5 + Math.random() * 0.4) + "s";
    document.body.appendChild(d);
    setTimeout(function () { d.remove(); }, 1000);
  }

  function burst(count) {
    if (!count) return;
    for (var i = 0; i < count; i++) {
      var d = document.createElement("span");
      d.className = "confetti";
      d.style.left = Math.random() * 100 + "vw";
      d.style.top = (Math.random() * 30 - 20) + "vh";
      d.style.background = ["#ff2fa0", "#25e6ff", "#b6ff3d", "#ffd23f", "#b06bff", "#ffffff"][i % 6];
      d.style.width = (4 + Math.random() * 6) + "px";
      d.style.height = (6 + Math.random() * 10) + "px";
      d.style.animationDuration = (1.6 + Math.random() * 1.6) + "s";
      d.style.animationDelay = (Math.random() * 0.4) + "s";
      document.body.appendChild(d);
      (function (node) {
        setTimeout(function () { node.remove(); }, 3600);
      })(d);
    }
  }

  /* ---------------- verdict roll ---------------- */

  function rollVerdict(exclude) {
    var used = exclude || {};
    var pool = VERDICTS.filter(function (v) { return !used[v.id]; });
    if (!pool.length) pool = VERDICTS.slice();

    var total = pool.reduce(function (sum, v) {
      return sum + RARITIES[v.rarity].chance;
    }, 0);

    var r = Math.random() * total;
    var acc = 0;
    for (var i = 0; i < pool.length; i++) {
      acc += RARITIES[pool[i].rarity].chance;
      if (r < acc) return pool[i];
    }
    return pool[pool.length - 1];
  }

  function serialFor(verdict, round) {
    var h = 0, s = visitor + verdict.id + round;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return "CONF " + String(h % 9000 + 1000);
  }

  /* ---------------- card flow ---------------- */

  function findVerdict(id) {
    for (var i = 0; i < VERDICTS.length; i++) {
      if (VERDICTS[i].id === id) return VERDICTS[i];
    }
    return null;
  }

  function lastCard() {
    return state.cards.length ? state.cards[state.cards.length - 1] : null;
  }

  function drawsLeft() {
    return Math.max(0, ALLOWANCE - state.cards.length);
  }

  function isFinal() {
    return state.cards.length > 0 && drawsLeft() === 0;
  }

  function updateChrome() {
    var left = drawsLeft();
    el.counterBadge.textContent = "CARDS: " + state.cards.length + "/" + ALLOWANCE;
    el.draws.textContent = "CARDS DRAWN " + state.cards.length + " / " + ALLOWANCE +
      (isFinal() ? " · NO DRAWS LEFT" : " · " + left + " LEFT");

    el.btnAgain.hidden = isFinal();
    el.btnAgain.textContent = left > 1
      ? "↻ CONFESS AGAIN · " + left + " LEFT"
      : "↻ CONFESS AGAIN · LAST ONE";
    el.finalNote.hidden = !isFinal();
    el.btnNewRound.hidden = !isFinal();
  }

  function paint(snap, restored, instant) {
    var v = findVerdict(snap.id) || VERDICTS[0];
    var meta = RARITIES[v.rarity];
    current = v;

    el.card.dataset.rarity = v.rarity;
    el.cardRarity.textContent = meta.label + " · " + meta.chance + "%";
    el.cardIcon.textContent = v.icon;
    el.cardTitle.textContent = v.title;
    el.cardLine.textContent = v.line;
    el.cardName.textContent = "CONFESSOR: " + (snap.name || visitor);
    el.cardSerial.textContent = snap.serial || "CONF 0000";
    el.cardDrop.textContent = isFinal()
      ? "FINAL " + state.cards.length + "/" + ALLOWANCE
      : "DRAW " + state.cards.length + "/" + ALLOWANCE;

    revealed = !!restored;
    drawing = false;
    lastPt = null;
    measureTick = 0;

    el.panelStart.hidden = true;
    el.cardZone.hidden = false;
    el.card.classList.remove("just-revealed");
    updateChrome();

    if (restored) {
      el.foil.style.opacity = "0";
      el.foil.style.pointerEvents = "none";
      el.card.classList.add("is-scratched");
      el.progress.classList.add("is-done");
      el.pctFill.style.width = "100%";
      el.pctText.textContent = "100%";
      el.actions.hidden = false;
    } else {
      el.pctFill.style.width = "0%";
      el.pctText.textContent = "0%";
      el.progress.classList.remove("is-done");
      el.card.classList.remove("is-scratched");
      el.foil.style.transition = "none";
      el.foil.style.pointerEvents = "auto";
      el.foil.style.opacity = "1";
      el.actions.hidden = true;
      fitFoil();
      requestAnimationFrame(function () {
        fitFoil();
        el.foil.style.transition = "";
        el.card.classList.add("just-revealed");
      });
    }

    el.card.scrollIntoView({ behavior: instant ? "auto" : "smooth", block: "center" });
  }

  function deal(name) {
    if (isFinal()) return;
    state.allowance = ALLOWANCE;

    var used = {};
    state.cards.forEach(function (c) { used[c.id] = true; });
    var v = rollVerdict(used);
    var n = state.cards.length + 1;
    var snap = {
      id: v.id,
      name: name,
      serial: serialFor(v, n),
      drop: "DRAW " + n + "/" + ALLOWANCE,
      scratched: false
    };
    state.cards.push(snap);
    store.set("revel.ledger2", state);
    paint(snap, false, false);

    if (state.cards.length === 1) {
      toast("YOU WERE GIVEN " + ALLOWANCE + (ALLOWANCE > 1 ? " CARDS" : " CARD") + ". THE LAST ONE IS YOURS.");
    }
  }

  function finish() {
    if (revealed) return;
    revealed = true;
    drawing = false;
    el.foil.style.opacity = "0";
    el.foil.style.pointerEvents = "none";
    el.progress.classList.add("is-done");
    el.pctFill.style.width = "100%";
    el.pctText.textContent = "100%";
    el.card.classList.add("is-scratched");
    el.actions.hidden = false;
    updateChrome();

    var snap = lastCard();
    var isNew = !state.album[current.id];
    if (isNew) state.album[current.id] = 1;
    if (snap) snap.scratched = true;
    store.set("revel.ledger2", state);

    burst(RARITIES[current.rarity].confetti);

    var tag = RARITIES[current.rarity].label;
    var tail = isFinal() ? " · FINAL CARD, THIS ONE IS YOURS" : " · " + drawsLeft() + " DRAW" + (drawsLeft() === 1 ? "" : "S") + " LEFT";
    toast(
      (current.rarity === "legendary" || current.rarity === "epic" ? "★ " + current.title + " ★ (" + tag + ")" : "VERDICT: " + current.title)
      + (isNew ? " · NEW ENTRY" : "")
      + tail
    );

    renderCollection(isNew ? current.id : null);
  }

  var toastTimer = null;
  function toast(msg) {
    el.toast.textContent = msg;
    el.toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.toast.hidden = true; }, 3200);
  }

  /* ---------------- ledger ---------------- */

  function renderCollection(flashId) {
    var found = VERDICTS.filter(function (v) { return state.album[v.id]; }).length;
    el.collectionCount.textContent = found + " / " + VERDICTS.length + " SEEN";
    el.collectionGrid.innerHTML = "";

    VERDICTS.forEach(function (v) {
      var owned = !!state.album[v.id];
      var chip = document.createElement("div");
      chip.className = "chip" + (owned ? "" : " is-locked");
      chip.dataset.rarity = v.rarity;
      if (owned) chip.title = v.line;
      if (flashId === v.id) chip.classList.add("is-new");
      chip.innerHTML =
        '<div class="chip__icon">' + (owned ? v.icon : "❔") + "</div>" +
        '<div class="chip__name">' + (owned ? v.title : "SEALED") + "</div>" +
        '<div class="chip__r">' + (owned ? RARITIES[v.rarity].label : "??%") + "</div>";
      el.collectionGrid.appendChild(chip);
    });
  }

  /* ---------------- save as png ---------------- */

  function saveCard() {
    if (!current) return;
    var W2 = 740, H2 = 1036;
    var c = document.createElement("canvas");
    c.width = W2; c.height = H2;
    var g = c.getContext("2d");
    var accent = {
      common: "#8fa3c4", uncommon: "#25e6ff", rare: "#b06bff",
      epic: "#ff8a3d", legendary: "#ffd23f"
    }[current.rarity];

    g.fillStyle = "#150a3d";
    g.fillRect(0, 0, W2, H2);
    g.fillStyle = "#ffffff08";
    for (var y = 0; y < H2; y += 6) g.fillRect(0, y, W2, 3);

    g.strokeStyle = accent;
    g.lineWidth = 10;
    g.strokeRect(14, 14, W2 - 28, H2 - 28);

    g.textAlign = "center";
    g.fillStyle = "#b9a6ff";
    g.font = "bold 22px monospace";
    g.fillText("REVEL  ·  " + el.cardSerial.textContent, W2 / 2, 70);

    g.fillStyle = accent;
    g.fillRect(120, 100, W2 - 240, 62);
    g.fillStyle = "#150a3d";
    g.font = "bold 30px monospace";
    g.fillText(RARITIES[current.rarity].label + " · " + RARITIES[current.rarity].chance + "%", W2 / 2, 142);

    g.font = "150px serif";
    g.fillText(current.icon, W2 / 2, 440);

    g.fillStyle = "#f6f1ff";
    g.font = "bold " + (current.title.length > 13 ? 34 : 44) + "px monospace";
    g.fillText(current.title, W2 / 2, 560);

    g.fillStyle = "#cfc2ff";
    g.font = "30px monospace";
    wrapText(g, current.line, W2 / 2, 630, W2 - 130, 38);

    g.strokeStyle = "#ffffff22";
    g.setLineDash([10, 10]);
    g.beginPath(); g.moveTo(60, 810); g.lineTo(W2 - 60, 810); g.stroke();
    g.setLineDash([]);

    g.textAlign = "left";
    g.fillStyle = "#ffd23f";
    g.font = "26px monospace";
    g.fillText(el.cardName.textContent, 60, 870);
    g.textAlign = "right";
    g.fillStyle = "#9b8ac9";
    g.font = "22px monospace";
    g.fillText(el.cardDrop.textContent, W2 - 60, 870);

    g.textAlign = "center";
    g.fillStyle = "#7d6cb0";
    g.font = "18px monospace";
    g.fillText("REVEL LABS ©2004—2026 · ALL VERDICTS RANDOMLY GENERATED", W2 / 2, 950);
    g.fillStyle = accent;
    g.fillText("◆ SCRATCHED IS SPENT · KEEP THIS CARD ◆", W2 / 2, 985);

    var a = document.createElement("a");
    a.download = "revel-confession-" + current.id + "-" + visitor + ".png";
    a.href = c.toDataURL("image/png");
    a.click();
    toast("DOWNLOADED. Check your files.");
  }

  function wrapText(g, text, x, y, maxW, lh) {
    var words = String(text).split(" ");
    var line = "";
    var lines = [];
    words.forEach(function (w) {
      var test = line ? line + " " + w : w;
      if (g.measureText(test).width > maxW && line) { lines.push(line); line = w; }
      else { line = test; }
    });
    if (line) lines.push(line);
    lines.forEach(function (l, i) { g.fillText(l, x, y + i * lh); });
  }

  /* ---------------- events ---------------- */

  el.nameForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (lastCard()) {
      var lc = lastCard();
      paint(lc, !!lc.scratched, false);
      return;
    }
    var name = (el.nameInput.value || "").trim().toUpperCase().slice(0, 18) || visitor;
    store.set("revel.name", name);
    state.name = name;
    deal(name);
  });

  el.foil.addEventListener("pointerdown", function (e) {
    if (revealed) return;
    drawing = true;
    el.foil.setPointerCapture(e.pointerId);
    lastPt = pos(e);
    erase(lastPt.x, lastPt.y, null);
    e.preventDefault();
  });

  el.foil.addEventListener("pointermove", function (e) {
    if (!drawing || revealed) return;
    var pt = pos(e);
    erase(pt.x, pt.y, lastPt);
    lastPt = pt;
    measure();
    e.preventDefault();
  });

  function endDraw(e) {
    if (!drawing) return;
    drawing = false;
    if (e && e.pointerId !== undefined && el.foil.hasPointerCapture && el.foil.hasPointerCapture(e.pointerId)) {
      el.foil.releasePointerCapture(e.pointerId);
    }
    lastPt = null;
  }
  el.foil.addEventListener("pointerup", endDraw);
  el.foil.addEventListener("pointercancel", endDraw);

  el.btnAgain.addEventListener("click", function () {
    deal(state.name || store.get("revel.name", "") || visitor);
  });

  el.btnNewRound.addEventListener("click", function () {
    if (!isFinal()) return;
    state.cards = [];
    state.album = {};
    state.allowance = ALLOWANCE;
    store.set("revel.ledger2", state);
    location.reload();
  });

  el.btnSave.addEventListener("click", saveCard);

  el.btnCollection.addEventListener("click", function () {
    el.collection.hidden = !el.collection.hidden;
    if (!el.collection.hidden) el.collection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  el.btnCloseCollection.addEventListener("click", function () {
    el.collection.hidden = true;
  });

  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitFoil, 180);
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitFoil);
  }

  window.addEventListener("load", fitFoil);

  /* ---------------- boot ---------------- */

  el.visitorCode.textContent = "GUEST " + visitor;
  el.nameInput.value = store.get("revel.name", "");
  renderCollection(null);

  if (lastCard()) {
    var lc = lastCard();
    paint(lc, !!lc.scratched, true);
  } else {
    el.cardZone.hidden = true;
    el.panelStart.hidden = false;
    el.counterBadge.textContent = "CARDS: 0/0";
  }
})();
