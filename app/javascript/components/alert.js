import swal from 'sweetalert';

function bindSweetAlertButtonDemo() {
  const swalButton = document.getElementById('sweet-alert-demo');
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', (event) => {
      event.preventDefault()
      const contactForm = document.getElementById('new_reader')

      swal({
        title: "Thank you!",
        text: "Your message has been sent",
        icon: "success",
      });

      setTimeout(function(){ contactForm.submit(); }, 1000);
    });
  }
}

export { bindSweetAlertButtonDemo };