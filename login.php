<?php
require 'db_connection.php';
session_start();

// Initialize the message variable
$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $studentId = $_POST['studentId'];
    $password = $_POST['password'];

    try {
        // ตรวจสอบข้อมูลผู้ใช้
        $stmt = $pdo->prepare("SELECT user_id, password_hash, role FROM users WHERE student_id = ?"); 
        $stmt->execute([$studentId]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password_hash'])) {
            // กำหนดค่า Session
            $_SESSION['user_id'] = $user['user_id'];
            $_SESSION['role'] = $user['role'];
            $_SESSION['studentId'] = $studentId;

            // เปลี่ยนเส้นทางตาม Role
            if ($user['role'] === 'admin') {
                header("Location: admin_dashboard.php");
            } else {
                header("Location: index.php");
            }
            exit;
        } else {
            $message = "Invalid student ID or password."; // Error message
        }
    } catch (PDOException $e) {
        $message = "Error: " . $e->getMessage(); // Error from database
    }
}
?>

<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="assets/css/login.css">
</head>

<body class="login-page">
    <div class="login-container">
        <!-- รูปภาพนอกกรอบขาว -->
        <div class="image-section">
            <img src="assets/imgs/EventNu1.png" alt="Login Image">
        </div>

        <!-- กรอบขาว -->
        <div class="login-box">
            <!-- แสดงข้อความแจ้งเตือนถ้ามี -->
            <?php if (!empty($message)): ?>
                <div class="alert">
                    <?php echo $message; ?>
                </div>
            <?php endif; ?>

            <form method="POST" action="">
                <input type="text" name="studentId" placeholder="Student ID" class="input-field" required><br>
                <div class="password-container">
                    <input type="password" name="password" placeholder="Password" class="input-field" required><br>
                </div>
                <button type="submit" class="login-btn">Log In</button>
            </form>
            <p>Don't have an account? <a href="signup.php">Sign Up</a></p>
        </div>
    </div>
</body>


</html>
