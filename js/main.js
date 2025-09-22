const themeToggle = document.getElementById('themeToggle');


if (themeToggle) {
  const icon = themeToggle.querySelector('i');

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');


    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('bi-sun');
      icon.classList.add('bi-moon');
    } else {
      icon.classList.remove('bi-moon');
      icon.classList.add('bi-sun');
    }
  });
}

