<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email))
{
    echo "Name and email are mandatory!";
    exit;
}

$email_from = $visitor_email;
$email_subject = "New Form submission";
$email_body = "You have received a new message from $name.\n".
    "Here is the message:\n $message  \n".

$to = "tannousmarcportfolio@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
echo "<script type=\"text/javascript\">window.alert('E-mail Sent.');window.location.href = '../contact';</script>"; 


?>