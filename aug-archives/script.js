$(document).ready(function() {

  // ----------------------------------------------
  // 1. DATA — each folder has unique content
  // ----------------------------------------------
  const folderData = [
    {
      id: 'ate-eva',
      name: 'Ate Eva',
      emoji: '🌷',
      password: 'sampagita',
      toName: 'Ate Eva',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/12/8e/b3/128eb34676f64f60604d4312a96adeb5.jpg',
      message: 'Like a sampaguita, you don’t have to be loud to brighten someone’s day. I hope this new month brings you quiet joys, kind people, and little moments that make you smile. Wishing you peaceful mornings and days that bloom beautifully.'
    },
    {
      id: 'ate-yume',
      name: 'Ate Yume',
      emoji: '🌙',
      password: 'muning12',
      toName: 'Ate Yume',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/65/02/bf/6502bf0db16982bcf590f7f16c0527b4.jpg',
      message: 'Like a quiet evening spent with your thoughts, I hope this month gives you the peace you deserve. May each day bring gentle surprises, restful nights, and reasons to smile without even trying. Happy new month.'
    },
    {
      id: 'dad-sai',
      name: 'Dad Sai',
      emoji: '☀️',
      password: 'sunbun24',
      toName: 'Dad Sai',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/0f/fc/9a/0ffc9a5f4e2e610f62ae7039b24f48e1.jpg',
      message: 'Like the morning sun, I hope you begin this month with warmth and renewed strength. May every new day give you something to look forward to, and may life be a little kinder to you this month.'
    },
    {
      id: 'dada-ishi',
      name: 'Dada Ishi',
      emoji: '🌸',
      password: 'rosybear',
      toName: 'Dada Ishi',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/fe/55/8c/fe558cbc6e2558ed1c7bad23f19e58cd.jpg',
      message: 'Like a rose that blooms in its own time, I hope this month reminds you that beautiful things never need to be rushed. Wishing you peaceful days, genuine smiles, and moments worth remembering.'
    },
    {
      id: 'dawdilo-mowmila',
      name: 'Dawdilo & Mowmila',
      emoji: '🌸',
      password: 'imypo',
      toName: 'Dawdilo and Mowmila',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/18/34/3e/18343e47d0181e826ff1bf8acad275a9.jpg',
      message: 'Like two roses growing in the same garden, I hope this month brings warmth into your home and joy into your days. Wishing you many quiet moments, shared laughter, and countless blessings.'
    },
    {
      id: 'evren',
      name: 'Evren',
      emoji: '⭐',
      password: 'bituin7',
      toName: 'Evren',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/59/94/94/599494e437899b2149e59b3352a7ecd2.jpg',
      message: 'Tulad ng bituing patuloy na kumikislap sa gabi, nawa’y manatiling maliwanag ang pag-asa sa puso mo. Sana’y maging magaan ang simula ng bagong buwan at mapuno ito ng mabubuting araw at maliliit na biyaya.'
    },
    {
      id: 'for-you',
      name: 'For You',
      emoji: '💌',
      password: 'openme',
      toName: 'You',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/1e/0d/33/1e0d33eba7f702502838f3a4288d9856.jpg',
      message: 'Some things are meant to be opened at just the right time. As a new month begins, I hope you welcome every opportunity, every lesson, and every quiet blessing that comes your way. Have a beautiful month ahead.'
    },
    {
      id: 'ios',
      name: 'Ios',
      emoji: '🌊',
      password: 'alon22',
      toName: 'Ios',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/d6/f9/ad/d6f9ad841cfda4a33a701efa3a642fdc.jpg',
      message: 'Like the waves, may you keep moving forward no matter where life takes you. I hope this month brings calm after every busy day, and enough little moments to remind you that you\'re doing just fine.'
    },
    {
      id: 'kuya-arzhel',
      name: 'Kuya Arzhel',
      emoji: '🍀',
      password: 'luntian',
      toName: 'Kuya Arzhel',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/1a/f5/31/1af5313b1b90af8b9975226959976405.jpg',
      message: 'Like everything green after the rain, I hope this month brings new beginnings and steady growth. May every day leave you with more hope than yesterday and more reasons to keep moving forward.'
    },
    {
      id: 'leigh',
      name: 'Leigh',
      emoji: '🦋',
      password: 'flutter',
      toName: 'Leigh',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/d3/e3/1b/d3e31bd010e7d408fcbd8b2bbb097031.jpg',
      message: 'Like a butterfly carried by the breeze, I hope this month takes you somewhere beautiful. May your days feel light, your heart stay hopeful, and your smile find its way back, even on the busiest days.'
    },
    {
      id: 'my-yelo',
      name: 'My Yelo',
      emoji: '🧸',
      password: 'honeybun',
      toName: 'My Yelo',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/26/d5/3c/26d53c40f5ddd78980b69aa9d72b1453.jpg',
      message: 'Kung may isang pangalang<br>&nbsp;nais kong ulit-ulitin,<br>&nbsp;iyon ay sa\'yo.<br><br>&nbsp;Kung may isang kuwentong<br>&nbsp;nais kong isulat habang-buhay,<br>&nbsp;iyon ay tungkol sa\'yo.<br><br>&nbsp;Dahil kahit anong gulo<br>&nbsp;ang ihain ng mundo,<br>&nbsp;ikaw pa rin ang payapang<br>&nbsp;pinipili ng puso.'    },
    {
      id: 'sky-and-sai',
      name: 'Sky & Sai',
      emoji: '☁️',
      password: 'cloudies',
      toName: 'Sky and Sai',
      heartImage: 'https://i.pinimg.com/736x/e8/b3/5f/e8b35f9e31f2065870c87573536ec0d3.jpg',
      stampImage: 'https://i.pinimg.com/736x/6d/92/a5/6d92a54c27b66f08b48f66a6dcd7891b.jpg',
      message: 'Like clouds drifting across a peaceful sky, I hope this month carries both of you toward brighter days. Wishing you laughter, good memories, and many quiet moments you\'ll always remember. Your Ate loves you both so much!'
    },
    {
      id: 'tita-aia',
      name: 'Tita Aia',
      emoji: '🌼',
      password: 'daisy08',
      toName: 'Tita Aia',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/66/ed/c4/66edc46a1c78af5a90de636ce31cb2b9.jpg',
      message: 'Like a daisy greeting the morning sun, I hope you welcome this month with hope and joy. May each day bring gentle blessings, kind people, and little reasons to smile.'
    },
    {
      id: 'tito-asher',
      name: 'Tito Asher',
      emoji: '🌿',
      password: 'mintleaf',
      toName: 'Tito Asher',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/8e/3a/be/8e3abe979831c14d25222d0c4576c939.jpg',
      message: 'Tulad ng sariwang dahon ng mint, nawa’y maging presko at magaan ang simula ng bagong buwan para sa iyo. Sana’y mapuno ito ng kapayapaan, mabubuting pagkakataon, at mga araw na magpapasaya sa puso mo.'
    },
    {
      id: 'tito-basti',
      name: 'Tito Basti',
      emoji: '🌞',
      password: 'peachpie',
      toName: 'Tito Basti',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/ea/6c/2a/ea6c2acc518bd74afc662671c34ee375.jpg',
      message: 'Like a warm peach pie shared around the table, I hope this month brings comfort, laughter, and time with the people who matter most. Wishing you many good days ahead.'
    },
    {
      id: 'tito-cool',
      name: 'Tito Cool',
      emoji: '❄️',
      password: 'snowpop',
      toName: 'Tito Cool',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/ea/6c/2a/ea6c2acc518bd74afc662671c34ee375.jpg',
      message: 'Like the cool air after a long day, I hope this month gives you peace, clarity, and a chance to slow down every now and then. Wishing you a calm heart and brighter days ahead.'
    },
    {
      id: 'zen',
      name: 'Zen',
      emoji: '🌸',
      password: 'mochii',
      toName: 'Zen',
      heartImage: 'https://i.pinimg.com/736x/b4/1d/f6/b41df657ded5791916cdbf5577b3f35b.jpg',
      stampImage: 'https://i.pinimg.com/736x/ad/48/c4/ad48c400acb64e07b28f147c522c0f4a.jpg',
      message: 'Like soft mochi, may this month remind you that gentleness has its own quiet strength. I hope each day brings small joys, peaceful moments, and reasons to keep smiling.'    }
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