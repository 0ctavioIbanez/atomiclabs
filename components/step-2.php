          <form class="form form-step-2" action="index.html" method="post">

            <!-- progress bar -->
            <div class="container-prog-bar">
              <div class="steps-container flex">
                <span class="steps step-checked">&#x2713;</span>
                <span class="steps step-actual">2</span>
                <span class="steps">3</span>
                <span class="steps">4</span>
              </div>
              <div class="prog-bar">
                <div class="loaded-prog-bar"></div>
              </div>

              <!-- Go back -->
              <div class="back-step">
                <small class="back" step="1"> &#xFFE9; Regresar</small>
              </div>

               <!-- title -->
               <div class="flex step-number-container">
                 <span class="step-number">2</span><h1 class="title emphasis">valida tu<span class="orange"> celular</span></h1>
               </div>
            </div>
            <!-- End progress bar -->

            <p class="mb-3"><span class="bold">Necesitamos validar tu número para continuar</span></p>
            <p class="mb-3">Ingresa tu número a 10 dígitos y te enviaremos un código SMS</p>

            <!-- Field and button -->
            <div class="form-fields">
              <label for="cellphone">Número de Celular</label>
              <input type="text" name="cellphone" required placeholder="55 1234 5678">
            </div>
            <div class="flex btn-container">
              <input type="submit" class="btn btn2" name="form2" value="Continuar" disabled>
            </div>
          </form>

          <!-- Astronaut image -->
          <div class="astronaut-container">
            <img src="./assets/img/bgd/Group_4034.png" alt="astronaut">
          </div>
