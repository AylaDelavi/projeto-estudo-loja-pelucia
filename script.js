let count = 1;
  setInterval(() => {
    document.getElementById('radio' + count).checked = true;
    count++;
    if (count > 5) count = 1;
  }, 4000); // troca a cada 4 segundos