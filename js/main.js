import { Event } from './Event.js';
import { Valida } from './Valida.js';


/* ============================================================
 General
 ============================================================ */

 /*All submits button disabled before validating*/
$('input[type="submit"]').attr('disabled', true).css('opacity', '50%');

/*Event for validating and set submits buttons enabled*/
$(".form div input").keyup(function(event) {
  let validaCampos = $('.form').serializeArray();
  let counter = 0;

  validaCampos.forEach((item, i) => {
    if (item.value !== "") {
      counter++;
    }
  });

  if (counter === validaCampos.length) {
    $(this).parent().parent().find('.btn').css({'transition':'all .3s ease', 'opacity':'100%'}).attr('disabled', false);
  }
  else {
    $(this).parent().parent().find('.btn').css({'transition':'all .3s ease', 'opacity':'50%'}).attr('disabled', true);
  }
});



/* ============================================================
 register.html
 ============================================================ */
/*Validating fields*/
$(".form-step-1").submit(function(event) {
  event.preventDefault();
  const fields = $(this).serializeArray();
  const valida = new Valida();
  const evt = new Event();

  if ( valida.textField(fields) === "ok" ) {
    evt.successAnimate();
  }
  else {
    evt.errorDialog("Sólo letras y más de 5 caracteres");
  }

});
