const saved = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', saved);
document.body.style.opacity = '0';
requestAnimationFrame(() => requestAnimationFrame(() => { document.body.style.opacity = '1'; }));
document.querySelectorAll('a[href]').forEach(a => {
  const href = a.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('http') || a.target === '_blank') return;
  a.addEventListener('click', e => {
    if (e.ctrlKey || e.metaKey || e.shiftKey) return;
    e.preventDefault();
    document.body.style.opacity = '0';
    setTimeout(() => { window.location.href = href; }, 250);
  });
});
