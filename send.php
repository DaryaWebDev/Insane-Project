<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if(isset($_POST["subs"])){
    $email = $_POST['email'];

    $title = "Подписка на рассылку";
    $body = "
    <h2>Оформление подписки</h2>
    <b>На мэйл:</b> $email
    ";
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    try {
        $mail->isSMTP();   
        $mail->CharSet = "UTF-8";
        $mail->SMTPAuth = true;
        $mail->SMTPDebug = 2;
        $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

        
        $mail->Host       = 'daryadev.ru'; // SMTP сервера вашей почты
        $mail->Username   = 'enyanews@daryadev.ru'; // Логин на почте
        $mail->Password   = '2O0t1P0i'; // Пароль на почте
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;
        $mail->setFrom('enyanews@daryadev.ru', 'Darya Selivanova'); // Адрес самой почты и имя отправителя

        // Получатель письма
        $mail->addAddress('feral2015@mail.ru');  

        // Отправка сообщения
        $mail->isHTML(true);
        $mail->Subject = $title;
        $mail->Body = $body;    


    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }

    // Отображение результата
    header('Location: sub.html');
}


if(isset($_POST["messa"])){
    // Переменные, которые отправляет пользователь
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Формирование самого письма
    $title = "Новое сообщение, Enya News";
    $body = "
    <h2>Сообщение от Enya News</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Email:</b> $email<br><br>
    <b>Текст сообщения:</b><br> $message
    ";

    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    try {
        $mail->isSMTP();   
        $mail->CharSet = "UTF-8";
        $mail->SMTPAuth = true;
        $mail->SMTPDebug = 2;
        $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

        
        $mail->Host       = 'daryadev.ru'; // SMTP сервера вашей почты
        $mail->Username   = 'enyanews@daryadev.ru'; // Логин на почте
        $mail->Password   = '2O0t1P0i'; // Пароль на почте
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;
        $mail->setFrom('enyanews@daryadev.ru', 'Darya Selivanova'); // Адрес самой почты и имя отправителя

        // Получатель письма
        $mail->addAddress('feral2015@mail.ru');  

        // Отправка сообщения
        $mail->isHTML(true);
        $mail->Subject = $title;
        $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }

    // Отображение результата
    header('Location: thank.html');
}
?>