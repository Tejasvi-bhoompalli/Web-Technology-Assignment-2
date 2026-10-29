
$(document).ready(function () {
    $("#regForm").submit(function () {
        return confirm("Are you sure you want to submit?");
    });
});


submit.php


<?php
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: index.html");
    exit;
}

function clean($value) {
    return htmlspecialchars(trim($value), ENT_QUOTES, "UTF-8");
}

$name = clean($_POST["name"] ?? "");
$email = clean($_POST["email"] ?? "");
$phone = clean($_POST["phone"] ?? "");
$course = clean($_POST["course"] ?? "");
$address = clean($_POST["address"] ?? "");

if (!$name || !$email || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || !preg_match('/^[0-9]{10}$/', $phone) || !$course || !$address) {
    exit("Invalid details. Please go back and check the form.");
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Application Successful</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Application Submitted!</h1>
        <p>Your registration was successful.</p>

        <p><b>Name:</b> <?= $name ?></p>
        <p><b>Email:</b> <?= $email ?></p>
        <p><b>Phone:</b> <?= $phone ?></p>
        <p><b>Course:</b> <?= $course ?></p>
        <p><b>Address:</b> <?= nl2br($address) ?></p>

        <button onclick="location.href='index.html'">
            Back to Home
        </button>
    </div>
</body>
</html>