document.addEventListener('DOMContentLoaded', function() {
  // 游戏数据
  const games = {
    cryptogram: {
      banner: 'static/image/cryptogram/banner.png',
      logo: 'static/image/cryptogram/logo.png',
      title: { en: 'Cryptogram', zh: 'Cryptogram' },
      brief: {
        en: 'Crack the code and challenge your mind with creative ciphers!',
        zh: '破解密码，挑战你的思维极限！'
      },
      features: [
        { en: 'Unique puzzles every day', zh: '每日独特谜题' },
        { en: 'Hints and tips for beginners', zh: '新手友好的提示系统' },
        { en: 'Minimalist design', zh: '极简设计' }
      ],
      screenshots: [
        'static/image/cryptogram/screenshot1.png',
        'static/image/cryptogram/screenshot2.png',
        'static/image/cryptogram/screenshot3.png'
      ],
      desc: {
        en: 'Cryptogram is a brain-teasing puzzle game where you decipher secret codes. Each puzzle offers a new challenge, perfect for players who love word games and logic!',
        zh: 'Cryptogram是一款烧脑的解密游戏，每一关都需要你破解不同的密码。丰富的谜题，适合喜欢文字和逻辑挑战的玩家！'
      },
      downloads: {
        en: '100K+ downloads',
        zh: '10万+下载',
        google: 'https://play.google.com/store/apps/details?id=cryptogram.cypher.decrypt.code.word.puzzle.number', // Google Play 下载链接
        apple: 'https://apps.apple.com/us/app/cryptogram-word-puzzle-master/id6670599725'   // App Store 下载链接
      },
      tag: { en: 'Puzzle', zh: '益智' },
      action: { en: 'Play Now', zh: '立即试玩' }
    },
    mathcross: {
      banner: 'static/image/mathcross/banner.png',
      logo: 'static/image/mathcross/logo.png',
      title: { en: 'Mathcross', zh: 'Mathcross' },
      brief: {
        en: 'Combine numbers and logic in this fun math puzzle adventure!',
        zh: '数字与逻辑的趣味益智之旅！'
      },
      features: [
        { en: 'Challenging math puzzles', zh: '富有挑战的数学谜题' },
        { en: 'Fun for all ages', zh: '老少皆宜' },
        { en: 'Clean and colorful UI', zh: '清新多彩的界面' }
      ],
      screenshots: [
        'static/image/mathcross/screenshot1.png',
        'static/image/mathcross/screenshot2.png',
        'static/image/mathcross/screenshot3.png'
      ],
      desc: {
        en: 'Mathcross is a fun and educational puzzle game that combines numbers and logic. Solve unique math challenges and improve your skills while having fun!',
        zh: 'Mathcross是一款结合了数字与逻辑的趣味益智游戏。独特的数学挑战，寓教于乐，提升你的思维能力！'
      },
      downloads: {
        en: '8K+ downloads',
        zh: '8千+下载',
        google: 'https://play.google.com/store/apps/details?id=cross.math.puzzle.games.number.puzzles.free&hl=en_US', // Google Play 下载链接
        apple: '#'   // App Store 下载链接
      },
      tag: { en: 'Math', zh: '数学' },
      action: { en: 'Play Now', zh: '立即试玩' }
    }
  };
  // 获取URL参数
  function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
  }
  const gameKey = getQueryParam('game') || 'cryptogram';
  const game = games[gameKey] || games['cryptogram'];
  // 填充内容
  document.getElementById('game-banner').src = game.banner;
  document.getElementById('game-logo').src = game.logo;
  document.getElementById('game-title').textContent = game.title.en;
  document.getElementById('game-brief').textContent = game.brief.en;
  document.getElementById('game-desc').textContent = game.desc.en;
  document.getElementById('game-downloads').textContent = game.downloads.en;
  document.getElementById('game-tag').textContent = game.tag.en;
  // document.getElementById('game-action').textContent = game.action.en;
  // 特性
  const featuresList = document.querySelector('.game-features');
  featuresList.innerHTML = '';
  game.features.forEach(f => {
    const li = document.createElement('li');
    li.textContent = f.en;
    li.setAttribute('data-lang-en', f.en);
    li.setAttribute('data-lang-zh', f.zh);
    featuresList.appendChild(li);
  });
  // 截图
  const screenshotsList = document.querySelector('.screenshots-list');
  screenshotsList.innerHTML = '';
  game.screenshots.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    screenshotsList.appendChild(img);
  });
  // 多语言切换
  function setLang(lang) {
    document.getElementById('game-title').textContent = game.title[lang];
    document.getElementById('game-brief').textContent = game.brief[lang];
    document.getElementById('game-desc').textContent = game.desc[lang];
    document.getElementById('game-downloads').textContent = game.downloads[lang];
    document.getElementById('game-tag').textContent = game.tag[lang];
    // document.getElementById('game-action').textContent = game.action[lang];
    // 特性
    featuresList.querySelectorAll('li').forEach((li, i) => {
      li.textContent = game.features[i][lang];
    });
  }
  // 监听语言切换
  const btnEn = document.getElementById('lang-en');
  const btnZh = document.getElementById('lang-zh');
  btnEn.addEventListener('click', () => setLang('en'));
  btnZh.addEventListener('click', () => setLang('zh'));
  // 默认语言
  const savedLang = localStorage.getItem('lang') || 'en';
  setLang(savedLang);
  // 设置商店下载链接和显示隐藏
  const googleLink = document.querySelector('.google-link');
  const appleLink = document.querySelector('.apple-link');
  if (googleLink) {
    if (game.downloads.google && game.downloads.google !== '#') {
      googleLink.href = game.downloads.google;
      googleLink.style.display = '';
    } else {
      googleLink.style.display = 'none';
    }
  }
  if (appleLink) {
    if (game.downloads.apple && game.downloads.apple !== '#') {
      appleLink.href = game.downloads.apple;
      appleLink.style.display = '';
    } else {
      appleLink.style.display = 'none';
    }
  }
}); 