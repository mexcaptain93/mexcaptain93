<?php



// Main part

$m_shop = '793309384';
$m_orderid = hexdec(uniqid());
$m_amount = number_format($_POST['m_amount'], 2, '.', '');
$m_curr = 'USD';
$m_desc = base64_encode($_POST['m_desc']);
$m_key = 'v8amQhdTqTeOkTXN';

$arHash = array(
	$m_shop,
	$m_orderid,
	$m_amount,
	$m_curr,
	$m_desc
);


$arHash[] = $m_key;


$sign = strtoupper(hash('sha256', implode(':', $arHash)));

echo 'https://payeer.com/merchant/?m_shop=' . $m_shop . '&m_orderid=' . $m_orderid .'&m_amount=' . $m_amount . '&m_curr=USD&m_desc=' . $m_desc . '&m_sign=' . $sign .'&lang=en';
