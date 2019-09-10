<?php

$c = true;

$project    =    'Voice Tag Manager';
$to         =    'voicetaglab@gmail.com';
$subject    =    'New order';
    
$message = '';

var_dump($_POST);

foreach ( $_POST as $key => $value ) {
            $message .= "
            " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
                <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
                </tr>
            ";
}
    

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project).' <'.$to.'>' . PHP_EOL .
'Reply-To: '.$to.'' . PHP_EOL;

mail($to, adopt($subject), $message, $headers );