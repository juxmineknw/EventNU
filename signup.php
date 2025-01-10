<?php
require 'db_connection.php'; 

$notificationMessage = '';
$notificationClass = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $studentId = $_POST['studentId'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $role = 'user'; // Default role

    // Check if all required fields are filled in
    if (empty($studentId) || empty($username) || empty($password) || empty($email)) {
        $notificationMessage = "Please fill in all the fields.";
        $notificationClass = "error";
    }
    // Check if email is valid
    else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $notificationMessage = "Invalid email format.";
        $notificationClass = "error";
    }
    else {
        // Hash password
        $passwordHash = password_hash($password, PASSWORD_BCRYPT);

        try {
            // Check if username or email already exists in the database
            $stmt = $pdo->prepare("SELECT COUNT(*) FROM users WHERE username = ? OR email = ?");
            $stmt->execute([$username, $email]);
            if ($stmt->fetchColumn() > 0) {
                $notificationMessage = "Username or email already exists.";
                $notificationClass = "error";
            } else {
                // Insert user data into the database
                $stmt = $pdo->prepare("INSERT INTO users (student_id, username, password_hash, email, role) VALUES (?, ?, ?, ?, ?)");
                $stmt->execute([$studentId, $username, $passwordHash, $email, $role]);

                // Success message
                $notificationMessage = "Sign up successful. <a href='login.php'>Go to login</a>";
                $notificationClass = "success";
            }
        } catch (PDOException $e) {
            $notificationMessage = "Error: " . $e->getMessage();
            $notificationClass = "error";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="th">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="assets/css/signup.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>

<body class="login-page">
    <!-- Notification Section -->
    <?php if (!empty($notificationMessage)): ?>
        <div class="notification <?php echo $notificationClass; ?> show">
            <?php echo $notificationMessage; ?>
        </div>
    <?php endif; ?>

    <div class="login-container">
        <div class="login-box">
            <div class="image-section">
                <img src="assets/imgs/bg2.png" alt="Sign Up Image">
            </div>
            <div class="form-section">
                <form method="POST" action="">
                    <input type="text" name="studentId" placeholder="Student ID" class="input-field" required><br>
                    <input type="text" name="username" placeholder="Username" class="input-field" required><br>
                    <input type="email" name="email" placeholder="Email" class="input-field" required><br>
                    <div class="password-container">
                        <input type="password" name="password" placeholder="Password" class="input-field" required><br>
                    </div>
                    <button type="submit" class="login-btn">Sign Up</button>
                </form>
                <p>Already have an account? <a href="login.php">Log In</a></p>
            </div>
        </div>
    </div>

    <script>
        // Automatically hide the notification after 5 seconds
        setTimeout(function() {
            const notification = document.querySelector('.notification');
            if (notification) {
                notification.classList.remove('show');
            }
        }, 5000);
    </script>
</body>

</html>
