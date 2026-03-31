const friends = [
  {
    name: "Aly",
    password: "sunflower01",
    bouquet: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80",
    message: "Wishing you a gentle start to the month, filled with pretty little moments, peace, and lots of reasons to smile today."
  },
  {
    name: "Bea",
    password: "roses4bea",
    bouquet: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=1200&q=80",
    message: "Here's a little bouquet and a little reminder that you are appreciated, loved, and thought of always."
  },
  {
    name: "Cara",
    password: "tuliptime",
    bouquet: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1200&q=80",
    message: "Hope this month opens softly for you and blooms into something beautiful, calm, and memorable."
  },
  {
    name: "Dani",
    password: "lavender",
    bouquet: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=1200&q=80",
    message: "Sending you a sweet little surprise for the first day of the month. I hope your days feel light and lovely."
  },
  {
    name: "Elle",
    password: "peonyday",
    bouquet: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80",
    message: "May this new month bring peace to your heart, sweetness to your days, and tiny happy surprises along the way."
  },
  {
    name: "Elle1",
    password: "peonyday",
    bouquet: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80",
    message: "May this new month bring peace to your heart, sweetness to your days, and tiny happy surprises along the way."
  }
];

let selectedFriend = null;

function renderFolders(keyword = "") {
  const filtered = friends.filter(f =>
    f.name.toLowerCase().includes(keyword.toLowerCase())
  );

  const $grid = $("#folderGrid").empty();

  if (!filtered.length) {
    $("#emptyState").show();
    return;
  }

  $("#emptyState").hide();

  filtered.forEach((friend, i) => {
    const $card = $(`
      <button class="folder-card" style="animation-delay:${i * 0.06}s">
        <div class="folder-icon">
        </div>
        <div class="folder-name">${friend.name}</div>
        <div class="folder-sub">Private folder</div>
      </button>
    `);

    $card.on("click", function () {
      selectedFriend = friend;
      $("#modalFriendName").text(friend.name);
      $("#passwordInput").val("");
      $("#errorMsg").text("");
      $("#passwordModal").fadeIn(200).css("display", "flex");
      // Focus the password input after the modal finishes fading in
      setTimeout(() => $("#passwordInput").focus(), 210);
    });

    $grid.append($card);
  });
}

function openFriendFolder(friend) {
  $("#friendTitle").text(`For ${friend.name}`);
  $("#friendImage").attr({
    src: friend.bouquet,
    alt: `Bouquet for ${friend.name}`
  });
  $("#friendMessage").text(friend.message);

  $("#passwordModal").fadeOut(150);
  $(".landing-view").hide();
  $("#friendView").css("display", "grid").hide().fadeIn(260);
}

$(document).ready(function () {
  renderFolders();

  // Search
  $("#searchInput").on("input", function () {
    renderFolders($(this).val().trim());
  });

  // Close modal
  $("#closeModal, #cancelBtn").on("click", function () {
    $("#passwordModal").fadeOut(180);
  });

  // Click backdrop to close
  $("#passwordModal").on("click", function (e) {
    if ($(e.target).is("#passwordModal")) {
      $(this).fadeOut(180);
    }
  });

  // Unlock
  $("#unlockBtn").on("click", function () {
    const entered = $("#passwordInput").val();

    if (selectedFriend && entered === selectedFriend.password) {
      openFriendFolder(selectedFriend);
      $("#errorMsg").text("");
    } else {
      $("#errorMsg").html("❌ Wrong password. Try again.");
      $("#passwordInput").focus().select();
    }
  });

  // Enter key in password field
  $("#passwordInput").on("keydown", function (e) {
    if (e.key === "Enter") $("#unlockBtn").trigger("click");
  });

  // Back button
  $("#backBtn").on("click", function () {
    $("#friendView").hide();
    $(".landing-view").fadeIn(240);
  });

  // Sidebar nav (decorative, no routing needed)
  $(".side-link").on("click", function () {
    $(".side-link").removeClass("active");
    $(this).addClass("active");
  });
});