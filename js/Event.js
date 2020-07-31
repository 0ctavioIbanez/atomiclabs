export class Event {
  constructor(step = ""){
    this.step = step;
  }

  //Bubble error animation
  errorDialog( type ){
    let error = `
      <div class="error">
        <p>${type}</p>
      </div>`;
    $("body").append(error);
    $(".error").fadeIn("fast").
    css({'transition':'all .3s ease',
         'width':'30rem','height':'30rem',
         'top':'calc(50% - 15rem)', 'left':'calc(50% - 15rem)',
          'padding-top':'12rem'});

    setTimeout(()=>{
      $(".error p").fadeOut();
      $(".error").css({'top':'-200%'});
    }, 1500);
  }

  //Rocks animation
  successAnimate(){
    let success = `
        <div class="success-next">
          <div class="fire"></div>
          <img src="./assets/img/bgd/rocket-removebg-preview.png" alt="">
        </div>`;
    $("body").append(success);
    setTimeout( ()=>{
      $(".success-next").css({'transition':'all .9s ease', 'left':'200rem'});
    }, 200);
  }

  //Increase the progress of bar and load new form
  updateBar(step){
    if (this.step == 1) {
      $(".datos .flex").load("components/step-2.html", () => {
        $(".prog-bar .loaded-prog-bar").css({'transition':'all .3s ease', 'width':'37.5%'});
      });
    }
    else if (this.step == 2) {
      $(".datos .flex").load("components/step-3.html", () => {
        $(".prog-bar .loaded-prog-bar").css({'transition':'all .3s ease', 'width':'62.5%'});
      });
    }
    else if (this.step == 3) {
      $(".datos .flex").load("components/step-4.html", () => {
        $(".prog-bar .loaded-prog-bar").css({'transition':'all .3s ease', 'width':'87.5%'});
      });
    }
    else if (this.step == 4){
      $(".datos .flex").load("components/step-finish.html", () => {
        $(".prog-bar .loaded-prog-bar").css({'transition':'all .3s ease', 'width':'100%'});
      });
    }
  }

  animateSendCode(){
      let airplane = `
        <div class="sending-code">
          <div class="">
            <img src="./assets/img/bgd/airplane.png" alt="">
            <p>Te estamos enviando el código</p>
          </div>
        </div>
        `;
      $("body").append(airplane).fadeIn("fast");
      setTimeout(() => {
        $(".sending-code").fadeOut("fast");
      }, 1500);
  }

  animateVerified(){
    let verified = `<div class="sending-code">
                      <div class="">
                        <img src="./assets/img/icons/checkmark.png" alt="">
                        <p>Te estamos enviando el código</p>
                      </div>
                    </div>`;
    $("body").append(verified).fadeIn("fast");
    setTimeout(() => {
      $(".sending-code").fadeOut("fast");
    }, 1500);
  }

  sendEmail(){
    const data = new FormData();
  }
}
