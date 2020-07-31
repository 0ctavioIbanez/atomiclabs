import { Event } from './Event.js';
import { Valida } from './Valida.js';


/* ============================================================
 register.html Steps
 ============================================================ */
// Enabling submit buttons
$(".datos .flex").keyup(function(event) {
  let fieldToValidate = $("form").serializeArray();
  let counter = 0;

  fieldToValidate.forEach((item, i) => {
    if (item.value !== "") {
      counter++;
    }
  });
  if (counter === fieldToValidate.length) {
    $("input[type='submit']")
      .css({
        'transition': 'all .3s ease',
        'opacity': '100%'
      }).attr('disabled', false);
  } else {
    $("input[type='submit']")
      .css({
        'transition': 'all .3s ease',
        'opacity': '50%'
      }).attr('disabled', true);
  }
});


/*Step 1 form*/
$(".form-step-1").submit(function(event) {
  event.preventDefault();
  const fields = $(this).serializeArray();
  const valida = new Valida();
  const evt = new Event(1); //this will increase and load next step according this number

  if (valida.textField(fields) === "ok") {
    evt.successAnimate();
    evt.updateBar();
  } else {
    evt.errorDialog("Sólo letras y más de 5 caracteres");
  }
});


//Step 2 form
$(".datos .flex").click(function(event) {
  let getClass = event.target.getAttribute("name");

  if (getClass === "form2") {
    event.preventDefault();

    const valida = new Valida();
    const evt = new Event(2); //this will increase and load next step according this number
    evt.animateSendCode();
    let field = $('input[type="text"]').val();

    if (valida.numberField(field) === "ok") {
      valida.sendSMS(field); // Send message
      evt.successAnimate(); // show rocks
      evt.updateBar(); // update bar and load next step
    } else {
      evt.errorDialog("Ingresa tu número a 10 dígitos");
    }
  }
});


//Form step 3 | Destructuring necessary
$(".datos .flex").click(function(event) {
  let getClass = event.target.getAttribute("name");

  if (getClass === "form3") {
    event.preventDefault();
    let codeToVerify = $('input[type="text"]').val();
    const valida = new Valida();
    valida.verifyCode(codeToVerify);
  }
});


/* ============================================================
 Terms and conditions
 ============================================================ */
$("body").click(function(event) {
  let target = event.target.getAttribute("id");
  if (target === "terms") {
    $(".terms-container").fadeIn("fast"); // show terms popup
  } else if (target === "close") {
    $("#close").parent().parent().fadeOut("fast"); // close terms popup
  } else if (target === "agree-terms") {
    $("input[type='submit']").attr('disabled', false); // Enable submit button
  } else if (target === "btn-submit") {
    event.preventDefault();
    const evt = new Event(4); // Increase progress bar and load next step
    evt.successAnimate(); // Rocks animation
    evt.updateBar(); // increase progress bar and load next step
    evt.sendEmail(); // Confirmation email
  }
});

/* ============================================================
  Previous step
 ============================================================ */
 $("body").click(function(event) {
   let target = event.target.getAttribute("class");
   if (target === "back") {
     
   }
 });

/*Index: more info (scroll down)*/
$(".more-info").click(function(event) {
  let height = $(window).height();
  $(window).scrollTop(height);
});
