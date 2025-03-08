const tombolKejutan = document.getElementById('tombol-kejutan');
const kejutan = document.getElementById('kejutan');

tombolKejutan.addEventListener('click', function() {
  kejutan.classList.remove('hidden');
  tombolKejutan.classList.add('hidden');
});