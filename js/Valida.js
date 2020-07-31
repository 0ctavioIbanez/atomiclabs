import { Event } from './Event.js';

export class Valida {

  //Validate text field
  textField(fields){
    const regExp = /^([A-Zñáéíóú]+){5}$/i;
    let counter = 0;
    let res = "";

    // increase counter when a field is not empty
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
  }

  verifyCode(codeToVerify){
    const data = new FormData();
    data.append('code', codeToVerify);
    data.append('verify', 1);
    let status = "";

    const conf = {
      method: "POST",
      body: data
    }

    fetch("php/testAltiriaSms.php", conf)
    .then( data => { return data.json() } )
    .then( res => {
      this.auxiliarEvent(res);  // Send to auxiliar method due to this result can't be assignable to a global var
    });
  }

  auxiliarEvent(res){
    if (res.status === "ok") {
      const evt = new Event(3); // this will increase and load next step according this number
      evt.animateVerified();    // pop up thick animation
      evt.updateBar();          // Increase progress bar and load next step
    }
    else {
      const evt = new Event();
      evt.errorDialog("El código es incorrecto");
    }
  }
}
