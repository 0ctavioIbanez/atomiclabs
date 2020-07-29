import { Events } from './Events.js';

$(".form-meet").submit(function(event) {
  event.preventDefault();
  let fields = $(this).serializeArray();
  console.log(fields);
  if (fields[0].value == "") {
    const error = new Events();
    error.errorAlert("Esta es una prueba");
  }
  else if (fields[1].value == "") {
    alert("-Vacio");
  }
  else {
    console.log("lleno");
  }
});
