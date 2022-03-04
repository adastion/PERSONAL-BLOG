const btnModal = document.querySelectorAll( '[data-modal');
const body = document.body;
const closeModal = document.querySelectorAll('.close');


btnModal.forEach( function(item) {
    item.addEventListener('click', function(event) {
      let $this = event.currentTarget;
      let modalId = $this.getAttribute('data-modal');
      let modal = document.getElementById(modalId); 
      
      modal.classList.add('show');
      body.classList.add('not-scroll');
    });
});

closeModal.forEach( function(item) {
    item.addEventListener('click', function(event) {
      let currentModal = event.currentTarget.closest('.modal');
      
      currentModal.classList.remove('show');
      body.classList.remove('not-scroll');
    });
});