import { Event } from './Event.js';
import { Valida } from './Valida.js';


/* ============================================================
 General
 ============================================================ */




/* ============================================================
 register.html
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
    .css({'transition':'all .3s ease', 'opacity':'100%'}).attr('disabled', false);
  }
  else {
    $("input[type='submit']")
    .css({'transition':'all .3s ease', 'opacity':'50%'}).attr('disabled', true);
  }
});


/*Step 1 form*/
$(".form-step-1").submit(function(event) {
  event.preventDefault();
  const fields = $(this).serializeArray();
  const valida = new Valida();
  const evt = new Event(1);

  if ( valida.textField(fields) === "ok" ) {
    evt.successAnimate();
    evt.updateBar();
  }
  else {
    evt.errorDialog("Sólo letras y más de 5 caracteres");
  }
});


//Form step 2 | Destructuring necessary
$(".datos .flex").click(function(event) {
  let getClass = event.target.getAttribute("name");
  if (getClass === "form2") {
    event.preventDefault();

    const valida = new Valida();
    const evt = new Event(2);
    evt.animateSendCode();
    let field = $('input[type="text"]').val();

    if ( valida.numberField(field) === "ok" ) {
      valida.sendSMS(field);
      $('sending-code').fadeOut();
      evt.successAnimate();
      evt.updateBar();
    }
    else {
      evt.errorDialog("Ingresa tu número a 10 dígitos");
    }
  }
});


//Form step 3-1 | Destructuring necessary
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
 Some animations
 ============================================================ */
// Terms and conditions
$("body").click(function(event) {
  let target = event.target.getAttribute("id");
  if (target === "terms") {
    $(".terms-container").fadeIn("fast");
  }
  else if (target === "close") {
    $("#close").parent().parent().fadeOut("fast");
  }
  else if (target === "agree-terms") {
    $("input[type='submit']").attr('disabled', false);
  }
  else if (target === "btn-submit") {
    event.preventDefault();
    const evt = new Event(4);
    evt.successAnimate();
    evt.updateBar();
    evt.sendEmail();
  }
});


/*Index: more info*/
$(".more-info").click(function(event) {
  let height = $(window).height();
  $(window).scrollTop(height);
});
