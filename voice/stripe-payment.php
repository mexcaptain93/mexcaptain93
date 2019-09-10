<?php

require_once('libs/stripe-php/init.php');

\Stripe\Stripe::setApiKey('sk_live_uTUP3WwmORnkuoJ5Dhip5WOy00JoGeIzPN');

$session = \Stripe\Checkout\Session::create([
    'success_url' => 'https://voicetaglab.com/',
    'cancel_url' => 'https://voicetaglab.com/',
    'payment_method_types' => ['card'],
    'line_items' => [[
        'amount' => $_POST['amount'] * 100,
        'currency' => 'usd',
        'name' => $_POST['os3'],
        'quantity' => 1,
    ]],

]);

$intent_id = $session->payment_intent;
$session_id = $session->id;

\Stripe\PaymentIntent::update($intent_id,
	[
	'metadata' => 
		[
			$_POST['on1'] => $_POST['os1'],
			$_POST['on2'] => $_POST['os2'],
			$_POST['on3'] => $_POST['os3'],
			$_POST['on4'] => $_POST['os4'],
			$_POST['on5'] => $_POST['os5'],
		],
	]
);

if ($session_id) {

    echo 
"<script src='https://js.stripe.com/v3/'></script>
<script>
  var stripe = Stripe('pk_live_J4UT4z5TCQJMHSsi3UdegDZT');
    stripe.redirectToCheckout({
      sessionId: '$session_id'
    }).then(function (result) {
  });
</script>";

} else {

    echo 'No Session ID!';

}