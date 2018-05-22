<?php
/**
 * PHPMailer simple contact form example.
 * If you want to accept and send uploads in your form, look at the send_file_upload example.
 */
//Import the PHPMailer class into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/src/Exception.php';
require '/src/PHPMailer.php';
require '/src/SMTP.php';

header('Content-type: text/html; charset=utf-8');

if (array_key_exists('to', $_POST)) {
    $err = false;
    $msg = '';
    $email = '';
    //Apply some basic validation and filtering to the subject
    if (array_key_exists('contact-subject', $_POST)) {
        $subject = substr(strip_tags($_POST['contact-subject']), 0, 255);
    } else {
        $subject = 'No subject given';
    }
    //Apply some basic validation and filtering to the query
    if (array_key_exists('contact-message', $_POST)) {
        //Limit length and strip HTML tags
        $query = substr(strip_tags($_POST['contact-message']), 0, 16384);
    } else {
        $query = '';
        $msg = 'No message provided!';
        $err = true;
    }
    //Apply some basic validation and filtering to the name
    if (array_key_exists('contact-name', $_POST)) {
        //Limit length and strip HTML tags
        $name = substr(strip_tags($_POST['contact-name']), 0, 255);
    } else {
        $name = 'No name provided';
    }

    //Make sure the address they provided is valid before trying to use it
    if (array_key_exists('contact-email', $_POST) and PHPMailer::validateAddress($_POST['contact-email'])) {
        $email = $_POST['contact-email'];
    } else {
        $msg .= "Error: invalid email address provided";
        $err = true;
    }
    if (!$err) {
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->SMTPDebug = 2;
        $mail->Host = 'mail.fertileimagination.com';
        $mail->Port = 465;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
        $mail->Username = "info@fertileimagination.com";
        $mail->Password = "April1_2010";
        $mail->addAddress('bryan.mcfadden@gmail.com', 'Portfolio Contact Form');
        $mail->CharSet = 'utf-8';
        //It's important not to use the submitter's address as the from address as it's forgery,
        //which will cause your messages to fail SPF checks.
        //Use an address in your own domain as the from address, put the submitter's address in a reply-to
        $mail->setFrom('info@fertileimagination.com', (empty($name) ? 'Contact form' : $name));
        $mail->addReplyTo($email, $name);
        $mail->Subject = 'Contact form: ' . $subject;
        $mail->Body = "Contact form submission\n\n" . $query;
        if (!$mail->send()) {
            $msg .= "Mailer Error: " . $mail->ErrorInfo;
        } else {
            $msg .= "Message sent!";
        }
    }
}

//Section 2: IMAP
//IMAP commands requires the PHP IMAP Extension, found at: https://php.net/manual/en/imap.setup.php
//Function to call which uses the PHP imap_*() functions to save messages: https://php.net/manual/en/book.imap.php
//You can use imap_getmailboxes($imapStream, '/imap/ssl') to get a list of available folders or labels, this can
//be useful if you are trying to get this working on a non-Gmail IMAP server.
/*
function save_mail($mail)
{
    //You can change 'Sent Mail' to any other folder or tag
    $path = "{imap.gmail.com:993/imap/ssl}[Gmail]/Sent Mail";
    //Tell your server to open an IMAP connection using the same username and password as you used for SMTP
    $imapStream = imap_open($path, $mail->Username, $mail->Password);
    $result = imap_append($imapStream, $path, $mail->getSentMIMEMessage());
    imap_close($imapStream);
    return $result;
}
*/
 ?>
