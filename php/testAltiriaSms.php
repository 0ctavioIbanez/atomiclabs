<?php
session_start();

  if (isset($_POST["sendsms"])) {
    echo json_encode($_POST);
  }
  elseif (isset($_POST['verify'])) {
    verify();
  }

function sendSMS(){
  $number = $_POST["number"];
  $code = rand(1000, 9999);
  $_SESSION['code'][0] = $code;

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

function verify(){
  $codeVerify = intval($_POST["code"]);
  $code = intval($_SESSION['code'][0]);
  if ($code === $codeVerify) {
    $res = array('status' => 'ok');
  }
  else {
    $res = array('status' => 'wrong');
  }
  echo json_encode($res);
}