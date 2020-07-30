export class Valida {
  textField(fields){
    const regExp = /^([A-Zñáéíóú]+){5}$/i;
    let counter = 0;
    let res = "";

    fields.forEach((item, i) => {
      if ( regExp.test(item.value) ) {
        counter++;
      }
    });
    counter === fields.length ? res = "ok" : res = "wrong";
    return res;
  }

  numberField(field){
    const regExp = /^([0-9]+){10}$/;
    let res = "";
    regExp.test(field) ? res = "ok" : res = "wrong";
    return res;
  }
}
