<?php
include("class.phpmailer.php"); //requires class files "class.phpmailer.php" and "class.smtp.php"
include("class.smtp.php");

$fertileEmail = 'info@fertileimagination.com';
$fertileEmailPassword = 'April1_2010';

$mail = new PHPMailer();

$mail->IsSMTP();
$mail->SMTPAuth = true;

$mail->Host = "mail.fertileimagination.com";

$mail->Username = $fertileEmail;
$mail->Password = $fertileEmailPassword;

$mail->From = $fertileEmail;
//$mail->FromName = $_POST["contact-name"];
$mail->FromName = 'Portfolio Message';
$mail->AddAddress("bryan.mcfadden@gmail.com", "Bryan McFadden");
$mail->Subject = $_REQUEST["subject"];

// construct message body
$mailmessage = 'Sender: ' . $_REQUEST["name"];
$mailmessage .= '<br>';
$mailmessage .= 'Email: ' . $_REQUEST["email"];
$mailmessage .= '<br>';
$mailmessage .= '<br>';
$mailmessage .= 'Message:';
$mailmessage .= '<br>';
$mailmessage .= $_REQUEST["message"];

$mail->Body = $mailmessage;
$mail->WordWrap = 50;
$mail->IsHTML(true);
$str1= "gmail.com";
$str2=strtolower($fertileEmail);
// chck to see if a email address is dynamic and if it is a gmail account
If(strstr($str2,$str1)){
  $mail->SMTPSecure = 'tls';
  $mail->Port = 587;
  if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
    echo "<br><br> * Please double check the user name and password to confirm that both of them are correct. <br><br>";
    echo "* If you are the first time to use gmail smtp to send email, please refer to this link :http://www.smarterasp.net/support/kb/a1546/send-email-from-gmail-with-smtp-authentication-but-got-5_5_1-authentication-required-error.aspx?KBSearchID=137388";
  } else {
    echo "Your message has been sent";
  }
} else {
  $mail->Port = 25;
  if(!$mail->Send()) {
    //echo "Mailer Error: " . $mail->ErrorInfo;
    //echo "<br><BR>* Please double check the user name and password to confirm that both of them are correct. <br>";
    http_response_code(500);
  } else {
    //echo "Your message has been sent";
    http_response_code(200);
  }
}
 ?>
