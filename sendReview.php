<?php
    $name = $_POST['name'];
    $location = $_POST['location'];
    $message = $_POST['message'];

    $email_from = 'Website User';
    
    $email_subject = 'New Form Submission';
    
    $email_body = 'User Name: $name.\n'.
                        'User Location: $location.\n'.
                            'User Message: $message.\n';

    $to = 'comidasdaflor@gmail.com';
    $headers = 'From: $email_from \r\n';
    
    mail($to, $email_subject, $email_body, $headers);

    header('Location: /por/reviews.html');

?> 