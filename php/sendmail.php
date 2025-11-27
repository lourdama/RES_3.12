<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';
require __DIR__ . '/PHPMailer/Exception.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Invalid method"]);
    exit;
}

if (!empty($_POST['website'])) {
    http_response_code(400);
    echo json_encode(["error" => "Spam detected"]);
    exit;
}

$ip = $_SERVER['REMOTE_ADDR'];
$limit = 1; 
$storage = sys_get_temp_dir() . "/contact_" . md5($ip);

if (file_exists($storage) && time() - filemtime($storage) < 60) {
    http_response_code(429);
    echo json_encode(["error" => "Too many requests"]);
    exit;
}
touch($storage);

$name = trim(strip_tags($_POST['name'] ?? ''));
$email = trim($_POST['email'] ?? '');
$message = trim(strip_tags($_POST['message'] ?? ''));

if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$message) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid input"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'mail.infomaniak.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'contact@mattys-ldt.fr';   
    $mail->Password = '';      // Trop bien de laisser le mot de passe ici          
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('contact@mattys-ldt.fr', 'Portfolio Contact');  
    $mail->addAddress('mattys.lourdault@etu.univ-smb.fr');  

    
    $mail->isHTML(true);
    $mail->Subject = "New contact form message";
    $mail->Body = "
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Message:</strong><br>" . nl2br(htmlspecialchars($message)) . "</p>
    ";

    $mail->send();
    echo json_encode(["success" => true]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => $mail->ErrorInfo]);
}
