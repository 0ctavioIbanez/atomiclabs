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

  sendSMS(number){
    const data = new FormData();
    data.append('number', `52${number}`);
    data.append('sendsms', 1);

    const conf = {
      method: "POST",
      body: data
    }

    fetch("php/testAltiriaSms.php", conf)
    .then( data => { return data.json() } )
    .then( res => { console.log(res) } );
  }
}
