function changePage(target) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(target).classList.add('active');
}

document.getElementById('portfolioButton').addEventListener('click', () => changePage('portfolioPage'));
document.getElementById('homeButton').addEventListener('click', () => changePage('homePage'));

if (typeof feather !== 'undefined') {
  feather.replace();
}
