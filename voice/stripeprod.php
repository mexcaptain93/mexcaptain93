<?php
// buy.php

// This is the NEWER version of the script, that uses version 2.x of the Stripe library, installed via Composer (https://getcomposer.org/).
// If you're using version 1.x of the Stripe library, use buy-old.php instead.
// See https://stripe.com/docs/libraries

// This page is used to make a purchase.

// Every page needs the configuration file:
require('config.inc.php');
require_once('stripe-php/init.php'); 
// Uses sessions to test for duplicate submissions:
session_start();

?><!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Buy This Thing</title>
	<script type="text/javascript" src="https://js.stripe.com/v2/"></script>
</head>
<body><?php
//\Stripe\Stripe::setApiKey('sk_test_9CZBKfugOF59bD5hFY7zbRsj');
\Stripe\Stripe::setApiKey('sk_live_uTUP3WwmORnkuoJ5Dhip5WOy00JoGeIzPN');
/*
$skucreate = \Stripe\Product::create([
  "name" => 'Anime Voice, 3 voice tags',
  "type" => "good",
  "images" => ["https://voicetaglab.com/img/about_us_5.svg"],
   "attributes" => [
            "name"
        ],
]);
*/


$skucreate = \Stripe\SKU::create([
  "product" => 'prod_FTENdTkMJapKue',
  "inventory" => ["type" => "infinite"],
  "price" => 4000,
  "currency" => 'usd',
  "image" => "https://voicetaglab.com/img/about_us_5.svg",
  "attributes" => ["name" => "Anime Voice, 3 voice tags"]

  
]);



/*
$sku = \Stripe\SKU::retrieve('sku_FSuhMZ1vY6HlsW');
$sku->delete();
*/



/*
$skucreate = \Stripe\Product::all(["limit" => 15]);
*/
/*
$skucreate = \Stripe\SKU::update(
	'sku_FSuhMZ1vY6HlsW',
	[
  "name" => 'Female 3 voice tag'
  
]);
*/
/*\Stripe\Product::update(
  'prod_FSu81r7X4mx2UW',
  [
    "attributes" => ["name"],
  ]
);*/
/*
$skucreate = \Stripe\SKU::update(
	'sku_FSuhMZ1vY6HlsW',
	[
  "price" => 4000
  
]);
*/
echo '<script type="text/javascript">Stripe.setPublishableKey(" 
pk_live_J4UT4z5TCQJMHSsi3UdegDZT");</script>';
/*echo '<script type="text/javascript">Stripe.setPublishableKey(" 
pk_test_JU7Pxu3LJ73YGrFbLeZEUejX");</script>';*/
echo "New sku added";

echo '<pre>';
//print_r($productcreate);
print_r($skucreate);
?>


</body>
</html>
