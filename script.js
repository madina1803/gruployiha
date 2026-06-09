function changeLang(lang) {
    const btn = document.querySelector('.lang-btn');
    
    if (lang === 'UZ') btn.textContent = ' UZ ▾';
    if (lang === 'RU') btn.textContent = ' RU ▾';
    if (lang === 'EN') btn.textContent = ' EN ▾';
}