<?php

  if (isset($_POST["sendsms"])) {
    echo json_encode($_POST);
  }


function verify(){
  $number = $_POST["number"];
  $code = rand(1000, 9999);

  include('httpPHPAltiria.php');

  $altiriaSMS = new AltiriaSMS();
  $altiriaSMS->setUrl("http://www.altiria.net/api/http");

  // domainId solo es necesario si el login no es un email
  $altiriaSMS->setDomainId(''); //bug fix
  $altiriaSMS->setLogin('octaviogd@live.com.mx');
  $altiriaSMS->setPassword('9bg53gxy');

  $altiriaSMS->setDebug(true);

  $sDestination = $number;

  $response = $altiriaSMS->sendSMS($sDestination, "Tu código de verificación para AtomicLabs es:".$code);

  if (!$response)
    echo "El envío ha terminado en error";
  else
    echo $response;
}
