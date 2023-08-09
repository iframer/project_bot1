<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $telephone = $_POST["telephone"];
    $email = $_POST["email"];

    $to = "galymsakitzhan@mail.ru";
    $subject = "Новая заявка!";
    $message = "К вам новая заявка!\nКлиент: $name, $telephone, $email";

    $headers = "From: " . $email . "\r\n" .
        "Reply-To: " . $email . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>