(function(){
  // JavaScript Way
  /*
  var contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(event) {
    // Obsolete way
    // return false;
    event.preventDefault();
  });
  */
  // jQuery Way
  //Variable declaration
  var contactForm = $('#contactForm');
  var name = $('#name')
  var email = $('#email')
  var message = $('#message')
  //create a function called event
  contactForm.submit(function (event) {
  var cont = document.createElement('cont');
    cont.innerHTML = `A reply has been sent to your email:${email.val()}`;
    //sweet alert modal box
    swal({
      icon: "success",
      title: `Hello ${name.val()}`,
      text: `we received your message:${message.val()}`,
      content: cont,
    });
    event.preventDefault();
    console.log(name.val(), email.val(), message.val());
    $("#contactForm")[0].reset();
  });
}());
