<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libs/phpmailer/Exception.php';
require 'libs/phpmailer/PHPMailer.php';
require 'libs/phpmailer/SMTP.php';

$c = true;

$email = $_POST['email'];

$project    =    'Voice Tag Manager';
$to         =    'voicetaglab@gmail.com';
$subject    =    "QUESTION ($email)";
    
$message = '';
$altmessage = '';

var_dump($_POST);

foreach ( $_POST as $key => $value ) {
    $message .= "
    " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
        </tr>
    ";
    $altmessage .= "$key - $value \n"; 
}
    

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$mail = new PHPMailer;
$mail->addAddress($to);
$mail->Subject = adopt($subject);
$mail->msgHTML($message);
$mail->AltBody = $altmessage;
$mail->setFrom('mail@voicetaglab.com', 'Voice Tag Manager');
$mail->addReplyTo('mail@voicetaglab.com', 'Voice Tag Manager');

$mail->IsSMTP(); 
$mail->SMTPDebug = 0; 
$mail->SMTPAuth = true; 
$mail->SMTPSecure = 'ssl'; 
$mail->Host = "smtp.timeweb.ru";

$mail->Port = 465; 
$mail->IsHTML(true);
$mail->Username = "mail@voicetaglab.com";
$mail->Password = "amarilnigga1";

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}