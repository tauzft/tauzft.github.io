const friends = [
  {
    name: "Axi",
    password: "flats and happiness",
    bouquet: "https://i.pinimg.com/control1/736x/68/08/de/6808dec66bc2f16c8f5144078dc5966a.jpg",
    message: "hi axi! happy 1st day of april! i know we’re not that close yet, but i’m really happy to be your friend. just know i’m proud of everything you’re doing, and i’ll always be here supporting you no matter what. i’m also just one chat away if you ever need someone to talk to."
  },
  {
    name: "Basti",
    password: "tito basti pogi",
    bouquet: "https://i.pinimg.com/1200x/18/86/15/188615d9ebaaf088b4b9ae3cafbbeeee.jpg",
    message: "hi tito basti! i hope this new month brings you lots of peace, good health, and blessings for you, tito asher and kai! please know that you are always appreciated. wishing you a great month ahead!"
  },
  {
    name: "Cin",
    password: "mama and papa",
    bouquet: "https://i.pinimg.com/736x/c2/44/1f/c2441fa1815700cf15b2c853e7775b84.jpg",
    message: "hello, cin! i miss you. i hope you’ve been doing okay lately. just wanted to remind you that you’re doing your best and that’s more than enough. stay strong po sa inyo ng bf mo! i’m always here if you need someone to talk to."
  },
  {
    name: "Elijah",
    password: "baby and chuckies",
    bouquet: "https://i.pinimg.com/1200x/0a/1b/54/0a1b540e44ba56fe550e1e55b37eb7b3.jpg",
    message: "hi, baby! i hope you’re doing okay today. just wanted to remind you how much i love and appreciate you. thank you for being you and for making my days so much brighter. i’m always here for you, no matter what. i like you."
  },
  {
    name: "Ishi",
    password: "coolest dada",
    bouquet: "https://i.pinimg.com/736x/6d/a7/59/6da759b8600a739623e19c48f25afc81.jpg",
    message: "surprise! to my coolest dada, happy 1st day of april! i just wanted to remind you how amazing you are and how much you mean to me. thank you for always being there and for everything that you do. i hope this new month brings you lots of happiness and good moments. i love you always."
  },
 {
  "name": "Kaze",
  "password": "bounce that d",
  "bouquet": "https://i.pinimg.com/736x/12/4c/29/124c29872eeb36c6a5679bfbe7c248c0.jpg",
  "message": "to my cousin pangit este pogi. happy 1st day of april! i hope this new month brings you lots of happiness, good vibes, and fun moments. thank you for always being someone i can laugh with. stay awesome and take care always!"
},
  {
    name: "Red & Serena",
    password: "best dawdilo/mowmila",
    bouquet: "https://i.pinimg.com/1200x/e0/7b/69/e07b699250e5674d968968efeef75a33.jpg",
    message: "to dawdilo/mowmila, did you know how much i missed you? oa sa drama HAAHAHHAHAAHAHA but seriously, i really do miss you. i hope you’ve been doing okay and that life’s been treating you well. let’s catch up soon, please!! i miss our kwentuhan and kulitan. take care always po."
  },
  {
    name: "Sai",
    password: "funniest dad",
    bouquet: "https://i.pinimg.com/736x/9d/62/50/9d625039b1e7239b40bd7487cab74976.jpg",
    message: "hi to my funniest and wittiest dad! happy 1st day of april! i hope you can get a good rest na po and take some time for yourself, you deserve it so much. thank you for always making us laugh and for being such an amazing dad. i love you always, take care po!"
  },
  {
    name: "Saint",
    password: "avoidant duo",
    bouquet: "https://i.pinimg.com/control1/1200x/05/5a/64/055a64b133b17cc8a80a23407adc5a29.jpg",
    message: "hi, saint! our friendship, idk what the vibe really is, but you know i know that deep inside, you’re an amazing person that not everyone gets to see. i hope you never forget that. you deserve to be appreciated, understood, and valued for who you truly are. i’m always here for you, okay? take care always"
  },
  {
    name: "Wave",
    password: "kumain",
    bouquet: "https://i.pinimg.com/1200x/2b/96/d4/2b96d45ea17cacdbeea94270aceefc20.jpg",
    message: "hi wave! you’re funny and witty, and i hope you never change. i wish you more happiness, success, and moments that make you genuinely smile this month. keep being you, it’s already more than enough. take care always"
  },
  {
    name: "Yume",
    password: "coolest cousin",
    bouquet: "https://i.pinimg.com/1200x/18/09/f7/1809f7752f7d01bad32b35f94b263887.jpg",
    message: "to my coolest cousin who’s been with me from the start, i appreciate you so much. i miss you and all the moments we’ve shared together. i hope you’re doing well and that life’s been kind to you. no matter what happens, i’m always here for you. let’s see each other soon, okay? take care always!"
  },
  {
    name: "Zen",
    password: "zenji duo",
    bouquet: "https://i.pinimg.com/736x/de/56/c7/de56c72b40139c2a69405887f1bfea58.jpg",
    message: "to my twin, the other one braincell! i know our friendship was biglaan, but i can already tell it’s something that’ll grow stronger than most. i hope we keep making memories together and stay this close no matter what. i wish you happiness, success, and all the good things you truly deserve. i’m always here for you."
  },
  {
    name: "bpp",
    password: "my family",
    bouquet: "https://i.pinimg.com/1200x/d2/b7/9f/d2b79f7d2be0fe90e54bd5daecbc20d5.jpg",
    message: "hi to everyone! i hope today, tomorrow, and all the days ahead treat you with kindness and bring you little moments of happiness. i wish you all the best in everything you do, and may you always find reasons to smile no matter what. take care always!"
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

  $("#itemCount").text(`💾 ${friends.length} items`);

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