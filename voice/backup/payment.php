<?php

$c = true;

$project    =    'Voice Tag Manager';
$to         =    'prodbylazybonesbeats@gmail.com'; //tokeav.ilya@gmail.com';
$subject    =    'New order';
    
$message = '';

foreach ( $_POST as $key => $value ) {
        if ( $key == 'form_email' or $key == 'os0' or $key == 'os1' or $key == 'os2' or $key == 'os3'  ) {
			if($key == 'form_email') {
				$key = 'Email';
			} elseif($key == 'os0') {
				$key = 'Voice';
			} elseif($key == 'os1') {
				$key = 'What you want to be said?';
			} elseif($key == 'os2') {
				$key = 'Your wishes';
			} else {
				$key = 'How many tags';
			}
            $message .= "
            " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
                <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
                </tr>
            ";
        }
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