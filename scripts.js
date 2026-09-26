// 1. Efeito suave nos botões que você já tem
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
  });
});

// 2. Bolinha piscando já tá no CSS, JS não precisa
// 3. Esconder topo quando rolar
let ultimoScroll = 0;
window.addEventListener('scroll', () => {
  const topo = document.querySelector('.topo');
  if(window.scrollY > ultimoScroll) topo.style.top = '-70px';
  else topo.style.top = '0';
  ultimoScroll = window.scrollY;
});