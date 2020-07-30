export class Event {
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

  successAnimate(){
    let success = `
        <div class="success-next">
          <img src="./assets/img/bgd/rocket-removebg-preview.png" alt="">
        </div>`;
    $("body").append(success);
    setTimeout( ()=>{
      $(".success-next").css({'transition':'all .9s ease', 'left':'300vh'});
    }, 100);
  }
}
