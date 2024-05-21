<?php
// Kiểm tra nếu request là POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy dữ liệu từ AJAX
    $name = $_POST['name'];
    $title = $_POST['title'];
    $category = $_POST['category'];
    $description = $_POST['description'];

    $message = "<b style=\"color:red;\" >📌Hỗ trợ khách hàng</b>\n\n";
    $message .= "Tên: " . $name . "\nTieu de: " . $title . "\nDanh muc: " . $category . "\nNoi dung: " . $description . "\n" . "\n";
    
    $data = [
        'chat_id' => '-957996485',
        'text' => $message,
        'parse_mode' => 'html'
    ];

    $botToken = '6791202442:AAG-KRwbCj9Ig9CyCJDIxAZi6Vr8TMvtAKI';
    $url = 'https://api.telegram.org/bot'. $botToken . "/sendMessage?" . http_build_query($data);
    file_get_contents($url);
} 
