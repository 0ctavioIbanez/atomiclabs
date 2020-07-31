          <form class="form form-step-2" action="index.html" method="post">

            <!-- progress bar -->
            <div class="container-prog-bar">
              <div class="steps-container flex">
                <span class="steps step-checked">&#x2713;</span>
                <span class="steps step-checked">&#x2713;</span>
                <span class="steps step-actual">3</span>
                <span class="steps">4</span>
              </div>
              <div class="prog-bar">
                <div class="loaded-prog-bar"></div>
              </div>
              <!-- Go back -->
              <div class="back-step">
                <small class="back" step="2"> &#xFFE9; Regresar</small>
              </div>

              <!-- title -->
              <div class="flex step-number-container">
                <span class="step-number">3</span><h1 class="title emphasis">código de <span class="orange"> verificación</span></h1>
              </div>
            </div>
            <!-- End progress bar -->

            <p class="bold">Te enviamos un SMS al número:</p>
            <!-- Phone number printed by session  -->
            <span class="mb-3 flex wth-100">
              <div class="">
                <?php
                  if(isset($_SESSION['code'][0])){
                    echo $_SESSION['number'][0];
                  }
                ?>
              </div>
              <div class="step-number-edit" step="2">
                <img src="./assets/img/icons/Group _4026.png" step="2" alt="edit">
              </div>
            </span>
            <p class="mb-3">Ingresa el código de verificación</p>

            <!-- form fields -->
            <div class="form-fields">
              <label for="cellphone">Código de verificación</label>
              <input type="text" name="code" required placeholder="1234">
            </div>
            <p>¿No recibiste el código? <a href="#" class="bold">Reenviar código</a></p>
            <div class="flex btn-container">
              <input type="submit" class="btn btn2" name="form3" value="Validar código" disabled>
            </div>
          </form>

          <!-- astronaut image -->
          <div class="astronaut-container">
            <img src="./assets/img/bgd/Group_4034.png" alt="astronaut">
          </div>
