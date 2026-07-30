$(document).ready(function() {

  // ----------------------------------------------
  // 1. DATA — each folder has unique content
  // ----------------------------------------------
  const folderData = [
    {
      id: 'ish',
      name: 'Ishi',
      emoji: '🌸',
      password: '1234',
      toName: 'Ishi',
      heartImage: 'https://picsum.photos/seed/ishi-portrait/200/200',
      stampImage: 'https://picsum.photos/seed/ishi-stamp/100/120',
      message: 'My dearest Ishi,\n\nI hope this little note finds you well. You are the quiet magic in every room, the gentle light that makes everything feel a little warmer.\n\nKeep blooming, always. The world is brighter with you in it.\n\nWith all my love,\nKyeji ✨'
    },
    {
      id: 'maya',
      name: 'Maya',
      emoji: '🌙',
      password: '1234',
      toName: 'Maya',
      heartImage: 'https://picsum.photos/seed/maya-portrait/200/200',
      stampImage: 'https://picsum.photos/seed/maya-stamp/100/120',
      message: 'Dearest Maya,\n\nYour laughter is like sunlight breaking through clouds. Thank you for being the radiant soul you are.\n\nNever forget how much joy you bring to everyone around you.\n\nForever yours,\nKyeji 🌙'
    },
    {
      id: 'leo',
      name: 'Leo',
      emoji: '⚡',
      password: '1234',
      toName: 'Leo',
      heartImage: 'https://picsum.photos/seed/leo-portrait/200/200',
      stampImage: 'https://picsum.photos/seed/leo-stamp/100/120',
      message: 'Dear Leo,\n\nBold, bright, and full of fire — that\'s you. Never let anyone dim your light.\n\nKeep chasing your stars and reaching for the impossible.\n\nWith admiration,\nKyeji ⚡'
    },
    {
      id: 'hana',
      name: 'Hana',
      emoji: '🍃',
      password: '1234',
      toName: 'Hana',
      heartImage: 'https://picsum.photos/seed/hana-portrait/200/200',
      stampImage: 'https://picsum.photos/seed/hana-stamp/100/120',
      message: 'Sweet Hana,\n\nYour kindness is like a gentle river — steady, calming, and endlessly giving. \n\nI hope you always feel as cherished as you truly are.\n\nWith warmth,\nKyeji 🍃'
    },
    {
      id: 'noah',
      name: 'Noah',
      emoji: '🌊',
      password: '1234',
      toName: 'Noah',
      heartImage: 'https://picsum.photos/seed/noah-portrait/200/200',
      stampImage: 'https://picsum.photos/seed/noah-stamp/100/120',
      message: 'Dear Noah,\n\nDeep and steady like the ocean, you are a force of nature.\n\nYou are loved more than you know, and your presence is a gift.\n\nAlways,\nKyeji 🌊'
    },
    {
      id: 'zara',
      name: 'Zara',
      emoji: '🌺',
      password: '1234',
      toName: 'Zara',
      heartImage: 'https://picsum.photos/seed/zara-portrait/200/200',
      stampImage: 'https://picsum.photos/seed/zara-stamp/100/120',
      message: 'My lovely Zara,\n\nYou are a rare and beautiful flower in this garden of life.\n\nNever doubt your radiance or the light you bring to others.\n\nWith love,\nKyeji 🌺'
    }
  ];

  // ----------------------------------------------
  // 2. RENDER FOLDER GRID
  // ----------------------------------------------
  const grid = $('#folderGrid');
  const emptyState = $('#emptyState');
  const itemCount = $('#itemCount');

  function renderFolders(filter = '') {
    const q = filter.toLowerCase().trim();
    const filtered = folderData.filter(f => f.name.toLowerCase().includes(q));
    grid.empty();

    if (filtered.length === 0) {
      emptyState.show();
      itemCount.text('💌 0 letters');
      return;
    }
    emptyState.hide();
    itemCount.text(`💌 ${filtered.length} letters`);

    filtered.forEach(f => {
      const card = `
        <div class="folder-card" 
             data-id="${f.id}" 
             data-name="${f.name}" 
             data-pw="${f.password}" 
             data-toname="${f.toName}"
             data-heart-img="${f.heartImage}"
             data-stamp-img="${f.stampImage}"
             data-msg="${f.message}">
          <div class="folder-icon">
            <span class="folder-initial">${f.name.charAt(0)}</span>
          </div>
          <div class="folder-name">${f.name}</div>
          <div class="folder-sub">a letter for you</div>
        </div>
      `;
      grid.append(card);
    });
  }

  renderFolders();

  // ----------------------------------------------
  // 3. SEARCH
  // ----------------------------------------------
  $('#searchInput').on('input', function() {
    renderFolders($(this).val());
  });

  // ----------------------------------------------
  // 4. MODAL LOGIC
  // ----------------------------------------------
  let currentTarget = null;

  $(document).on('click', '.folder-card', function() {
    const card = $(this);
    
    const name = card.data('name');
    const password = card.attr('data-pw');
    const toName = card.data('toname');
    const heartImage = card.attr('data-heart-img');
    const stampImage = card.attr('data-stamp-img');
    const msg = card.data('msg');

    // Store for later
    currentTarget = { 
      name: name, 
      password: password,
      toName: toName,
      heartImage: heartImage,
      stampImage: stampImage,
      msg: msg
    };

    $('#modalFriendName').text(name);
    $('#passwordInput').val('');
    $('#errorMsg').text('');
    $('#passwordModal').css('display', 'flex');
    $('#passwordInput').focus();
  });

  function closeModal() {
    $('#passwordModal').hide();
    $('#errorMsg').text('');
    $('#passwordInput').val('');
    currentTarget = null;
  }

  $('#closeModal, #cancelBtn').on('click', closeModal);

  // Click outside modal to close
  $('#passwordModal').on('click', function(e) {
    if (e.target === this) closeModal();
  });

  // Unlock button click
  $('#unlockBtn').on('click', function() {
    const input = $('#passwordInput').val().trim();
    
    if (!currentTarget) {
      $('#errorMsg').text('❌ No letter selected. Please try again.');
      return;
    }

    if (input === currentTarget.password) {
      // Correct password → show friend view
      const target = currentTarget;
      closeModal();

      // Fill the flat-lay paper note
      $('#friendToName').text(target.toName);
      $('#heartImage').attr('src', target.heartImage);
      $('#stampImage').attr('src', target.stampImage);
      
      // Format the message with paragraphs
      const messageLines = target.msg.split('\n');
      let messageHtml = '';
      messageLines.forEach(line => {
        if (line.trim() === '') {
          messageHtml += '<br>';
        } else if (line.includes('Kyeji')) {
          messageHtml += `<p class="signature">${line}</p>`;
        } else {
          messageHtml += `<p>${line}</p>`;
        }
      });
      $('#friendPaperMessage').html(messageHtml);

      // Switch views
      $('#landingView').hide();
      $('#friendView').css('display', 'flex');
    } else {
      $('#errorMsg').text('❌ That\'s not the right password. Try again.');
      $('#passwordInput').val('');
      $('#passwordInput').focus();
    }
  });

  // Enter key on password input
  $('#passwordInput').on('keydown', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      $('#unlockBtn').click();
    }
  });

  // ----------------------------------------------
  // 5. BACK TO FOLDERS
  // ----------------------------------------------
  $('#backBtnFlat').on('click', function() {
    $('#friendView').hide();
    $('#landingView').show();
  });

  // ----------------------------------------------
  // 6. SIDEBAR NAV (demo only)
  // ----------------------------------------------
  $('.side-link').on('click', function() {
    $('.side-link').removeClass('active');
    $(this).addClass('active');
    $('#friendView').hide();
    $('#landingView').show();
    $('#searchInput').val('').trigger('input');
  });

  // ----------------------------------------------
  // 7. START WITH LANDING VISIBLE
  // ----------------------------------------------
  $('#landingView').show();
  $('#friendView').hide();

  console.log('💌 Kyeji\'s Archives loaded — letters waiting to be opened.');
  console.log('📁 Try opening any letter with password: 1234');

});