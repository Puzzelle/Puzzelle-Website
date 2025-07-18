document.addEventListener('DOMContentLoaded', function() {
  const btnEn = document.getElementById('lang-en');
  const btnZh = document.getElementById('lang-zh');
  function setLang(lang) {
    document.querySelectorAll('[data-lang-en], [data-lang-zh]').forEach(el => {
      if (lang === 'en') {
        if (el.dataset.langEn) el.textContent = el.dataset.langEn;
      } else {
        if (el.dataset.langZh) el.textContent = el.dataset.langZh;
      }
    });
    btnEn.classList.toggle('active', lang === 'en');
    btnZh.classList.toggle('active', lang === 'zh');
    localStorage.setItem('lang', lang);
  }
  btnEn.addEventListener('click', () => setLang('en'));
  btnZh.addEventListener('click', () => setLang('zh'));
  // 默认语言
  const savedLang = localStorage.getItem('lang') || 'en';
  setLang(savedLang);
}); 