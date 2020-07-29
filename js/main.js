import { Events } from './Events.js';


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

  let fields = $(this).serializeArray();
  fields.forEach((item, i) => {
    console.log(item);
  });

});
