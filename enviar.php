<?php

$nome = trim($_POST['nome']);/*recebe os dados digitados no campo "nome"*/
$email = trim($_POST['email']);/*recebe os dados digitados no campo "email"*/
$telefone = trim($_POST['telefone']);/*recebe os dados digitados no campo "assunto"*/
$mensagem = trim($_POST['mensagem']);/*recebe os dados digitados no campo "mensagem"*/

$formcontent="Nome: $nome \n 
Telefone: $telefone \n 
Email: $email \n 
Mensagem: $mensagem";

 $recipient = "tec2pulse@gmail.com";
 $subject = "Contato Website T2P";
 $mailheader = "From: $email \r\n"; 
  mail($recipient, $subject, $formcontent, $mailheader) or die("Ouve um erro no envio, desculpe-nos pelo transtorno!!!"); 
 echo "<script>alert(\"Mensagem enviada com sucesso!\")</script>";
echo "<script>window.location = \"contato.html\"</script>";

?>