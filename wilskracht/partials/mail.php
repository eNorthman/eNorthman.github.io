<?php
// process.php

$errors = array();  // array to hold validation errors
$data = array();        // array to pass back data

// validate the variables ========
if (empty($_POST['name']))
  $errors['name'] = 'Name is required.';

if (empty($_POST['email']))
  $errors['email'] = 'email is required.';

if (empty($_POST['comment']))
  $errors['comment'] = 'comment is required.';

// return a response ==============

// response if there are errors
if ( ! empty($errors)) {

  // if there are items in our errors array, return those errors
  $data['success'] = false;
  $data['errors']  = $errors;
} else {

  // if there are no errors, return a message
  $data['success'] = true;
  $data['messageSuccess'] = 'Uw mail is succesvol verzonden, wij zullen zo snel mogelijk contact met u opnemen.';
  $email_subject = 'wilskracht';
  $email_to = 'eric_vd_helm@hotmail.com';
  $name = $_POST['name']; // required
  $email_from = $_POST['email']; // required
  $message = $_POST['comment']; // required
  $email_message = "Form details below.\n\n";
  $email_message .= "Name: ".$name."\n";
  $email_message .= "Email: ".$email_from."\n";
  $email_message .= "Message: ".$message."\n";
  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  @mail($email_to, $email_subject, $email_message, $headers);
}

// return all our data to an AJAX call
echo json_encode($data);
?>