<?php include 'components/navbar.php'; ?>


    <section class="datos">
      <div class="flex container">

          <form class="form form-step-1" action="index.html" method="post">

            <!-- progress bar -->
            <div class="container-prog-bar">
              <div class="steps-container flex">
                <span class="steps step-actual">1</span>
                <span class="steps">2</span>
                <span class="steps">3</span>
                <span class="steps">4</span>
              </div>
              <div class="prog-bar">
                <div class="loaded-prog-bar"></div>
              </div>
              <!-- Go back -->
              <div class="back-step">
                <small> &#xFFE9; Regresar</small>
              </div>
              <h1 class="title emphasis">te queremos<span class="orange">  conocer</span></h1>
            </div>
            <!-- End progress bar -->


            <div class="form-fields">
              <label for="name">Nombre</label>
              <input type="text" name="name" required>
              <img src="./assets/img/icons/ic_lock_24px.png" alt="locked">
            </div>
            <div class="form-fields">
              <label for="surname">Apellidos</label>
              <input type="text" name="surname" required>
              <img src="./assets/img/icons/ic_lock_24px.png" alt="locked">
            </div>
            <div class="flex btn-container">
              <input type="submit" class="btn btn2" name="" value="Enviar">
            </div>
          </form>

        <!-- Floating astronaut -->
        <div class="astronaut-container">
          <img src="./assets/img/bgd/Group_4033.png" alt="astronaut">
        </div>
      </div>
    </section>



<?php include 'components/footer.php'; ?>
