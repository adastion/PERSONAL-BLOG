const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(function (item) {
  item.addEventListener('input', function(event) {
    let $this = event.target;

    $this.style.height = '32px';
    $this.style.height = $this.scrollHeight + 'px';
  });
});