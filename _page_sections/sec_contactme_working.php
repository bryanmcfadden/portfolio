<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>Portfolio | Bryan McFadden - UI / UX Designer & Researcher, Code Monkey</title>
<meta name="description" content="Web portfolio of Bryan McFadden - UI / UX Designer & Researcher based in Newnan, GA.">
<!-- Crafting awesome high quality responsive websites and exceptional user experience, motivated by a big passion for the digital world. Currently open to worldwide new opportunities. -->
<meta name="keywords" content="web, ux, user experience, UX Designer, UX Developer, UI/UX designer, creative designer, portfolio, usability, UX researcher">
<meta name="viewport" content="initial-scale=1.0,width=device-width,maximum-scale=1">
<meta property="og:locale" content="en_US">
<meta property="og:type" content="website">
<meta property="og:title" content="Portfolio | Bryan McFadden - UI / UX Designer & Researcher, Code Monkey">
<meta property="og:description" content="Web portfolio of Bryan McFadden - UI / UX Designer & Researcher based in Newnan, GA.">
<meta property="og:url" content="http://portfolio.fertileimagination.com/">
<meta property="og:image" content="http://portfolio.fertileimagination.com/img/portfolio_logo.jpg">
<script src="../js/vendor/scrollreveal.min.js"></script>
<script>
  window.sr = new ScrollReveal();
</script>
<link href="http://portfolio.fertileimagination.com/favicon.ico" rel="shortcut icon" type="image/x-icon">
<link rel="stylesheet" href="../css/normalize.css">
<!-- CSS Preprocessor -->
<link rel="stylesheet" href="../css/portfolio.css" type="text/css" media="all">
<link href="https://fonts.googleapis.com/css?family=Questrial|Source+Sans+Pro|Work+Sans" rel="stylesheet">
<!-- <link rel="stylesheet" href="css/vendor/jquery.mCustomScrollbar.css" type="text/css"> -->
<!-- <script src="js/vendor/modernizr-2.8.3.min.js"></script> -->
</head>
<body style="overflow:auto;">
  <!-- ************************************************************************************ -->
  <!-- *****************************  CONTACT ME ****************************************** -->
  <!-- ************************************************************************************ -->
  <div style="padding-top:1000px;"></div>
  <!-- ************************************************************************************ -->
  <!-- ************************* CONTACT ME FORM ****************************************** -->
  <!-- ************************************************************************************ -->
  <style>
    @keyframes pulse{
      0% { box-shadow:0 0 0 5px rgba(0,0,0,0) }
      0% { box-shadow:0 0 0 5px rgba(34,152,216,0.5) }
    }
  </style>
  <div class="clear-fix" style="display:table; background: #0071bc; overflow:auto; padding-bottom:80px; width:100%; text-align:center;">
    <section>
        <div style="padding:60px 0;">
          <h2 class="contact-me">Contact Me<span></span></h2>
        </div>
        <div class="container">
        	<div id="contactForm">

            <?php
            // display form if user has not clicked submit
            if (!isset($_POST["submit"])) {
            ?>

          	<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>" target="_blank" style="padding-bottom:60px;">
          	  <div>
                <div class="three-inputs-wrapper">
                  <div class="col-md-4 col-sm-12 form-input">
                    <input class="contact-name" id="contact-name" name="contact-name" placeholder="Your Name" required="" oninvalid="this.setCustomValidity('Enter your name')" onchange="this.setCustomValidity('')" value="" type="text">
                  </div>
                  <div class="col-md-4 col-sm-12 form-input">
                    <input class="contact-email" id="contact-email" name="contact-email" placeholder="Your Email" required="" oninvalid="this.setCustomValidity('Enter a valid email')" onchange="this.setCustomValidity('')" value="" type="email">
                  </div>
                  <div class="col-md-4 col-sm-12 form-input">
                    <input class="contact-subject" id="contact-subject" name="contact-subject" placeholder="Subject" required="" oninvalid="this.setCustomValidity('Please enter a subject')" onchange="this.setCustomValidity('')" value="" type="text">
                  </div>
                </div>
                <div class="form-input">
                  <textarea style="display:inline-block;" rows="5" cols="30" class="contact-message" id="contact-message" name="contact-message" placeholder="Your message" required="" oninvalid="this.setCustomValidity('Enter your question or comment')" onchange="this.setCustomValidity('')"></textarea>
                </div>
                <div class="form-input col-sm-12 col-md-2 align-right">
                    <button type="submit" class="contact-submit" id="submit" name="submit">Send</button>
                </div>
              </div>
            </form>

            <?php
            } else {    // the user has submitted the form

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
                $mail->FromName = 'Portfolio';
                $mail->AddAddress("bryan.mcfadden@gmail.com", "Bryan McFadden");
                $mail->Subject = $_POST["contact-subject"];

                // construct message body
                $mailmessage = 'Sender: ' . $_POST["contact-name"];
                $mailmessage .= '<br>';
                $mailmessage .= 'Email: ' . $_POST["contact-email"];
                $mailmessage .= '<br>';
                $mailmessage .= '<br>';
                $mailmessage .= 'Message:';
                $mailmessage .= '<br>';
                $mailmessage .= $_POST["contact-message"];

                $mail->Body = $mailmessage;
                $mail->WordWrap = 50;
                $mail->IsHTML(true);
                $str1= "gmail.com";
                $str2=strtolower($fertileEmail);
                echo "<div>";
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
                    echo "Mailer Error: " . $mail->ErrorInfo;
                    echo "<br><BR>* Please double check the user name and password to confirm that both of them are correct. <br>";
                  } else {
                    echo "Your message has been sent";
                  }
                }
                echo "</div>";
            } ?>

          </div>
      	</div>
      </div>
    </section>
  </div>
  <div style="height:200px; padding:40px;">
    <div style="border:1px solid #2298d8; border-radius:50%; height:50px; width:50px; line-height:48px; font-size:20px; animation-name:pulse; animation-direction:alternate; animation-duration: 1.5s; animation-iteration-count: infinite; color:#2298d8; text-align:center;">
      +
    </div>
  </div>
  <!-- ============================================ JAVASCRIPT FILES ======================================================== -->
  <!-- <script src="https://code.jquery.com//jquery-3.2.1.min.js"></script> -->
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <!-- <script>window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')</script> -->
  <!-- <script src="../js/vendor/jquery.easing.1.4.1.min.js"></script> -->
  <script language="javascript">
  var contactname = {
     origin   : "left",
     distance : "32px",
     duration : 700,
     delay    : 200,
  }

  var contactemail = {
     origin   : "top",
     distance : "32px",
     duration : 700,
     delay    : 200,
  }

  var contactsubject = {
     origin   : "right",
     distance : "32px",
     duration : 700,
     delay    : 200,
  }
  var contactmessage = {
     origin   : "bottom",
     distance : "32px",
     duration : 700,
     delay    : 400,
  }
  var contactsubmit = {
     origin   : "right",
     distance : "32px",
     duration : 700,
     delay    : 400,
  }

  sr.reveal(".contact-me", {origin: "top", distance: "50px", duration: "500"});
  sr.reveal(".contact-name", contactname);
  sr.reveal(".contact-email", contactemail);
  sr.reveal(".contact-subject", contactsubject);
  sr.reveal(".contact-message", contactmessage);
  sr.reveal(".contact-submit", contactsubmit);
  </script>
</body>
</html>
