export class Valida {
  textField(fields){
    const regExp = /^[a-zA-Z ]+$/;
    let counter = 0;

    fields.forEach((item, i) => {
      if ( regExp.test(item.vaue) ) {
        counter++;
      }
    });
    counter === fields.length ? console.log("Bien") : console.log("mal");
  }
}
