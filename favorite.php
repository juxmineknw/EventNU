<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Start your development with Meyawo landing page.">
    <meta name="author" content="Devcrud">
    <title>EventNU</title>
    <!-- font icons -->
    <link rel="stylesheet" href="assets/vendors/themify-icons/css/themify-icons.css">
    <!-- meyao -->
    <link rel="stylesheet" href="assets/css/meyawo.css">
    <!-- font-awesome icons-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- Bootstrap icons-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css">
    <!-- Material icons-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

</head>

<body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">

    <!-- Page Navbar -->
    <nav class="custom-navbar" data-spy="affix" data-offset-top="20">
        <div class="container">
            <a class="logo" href="index.html">EventNU</a>
            <ul class="nav">
                <li class="item">
                    <a class="link" href="index.php">Home</a>
                </li>
                <li class="item">
                    <a class="link" href="calendar.php">Calendar</Details></a>
                </li>
                <li class="item">
                    <a class="link" href="favorite.php">Favorite</a>
                </li>
                <li class="item">
                    <a class="link" href="layout.php">Layout</a>
                </li>
                <li class="item">
                    <a class="link" href="setting.php">Setting</a>
                </li>
                <li class="item ml-md-3">
                    <a href="components.html" class="btn btn-primary">Components</a>
                </li>
            </ul>
            <a href="javascript:void(0)" id="nav-toggle" class="hamburger hamburger--elastic">
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </a>
        </div>
    </nav><!-- End of Page Navbar -->
    
    <!-- Favorite Section -->
    <section class="favorite-section" style="margin-top: 70px;">
        <h3 class="section-title">Favorite</h3> 
        <div class="event-grid">
            <div class="event-card">
                <div class="event-picture-container">
                    <div class="icon-container">
                        <i class="fas fa-bell" onclick="toggleBell(this)" title="Notifications"></i>
                        <i class="fas fa-star" onclick="toggleStar(this)" title="Favorite"></i>
                    </div>
                    <img src="assets/imgs/chrismas.jpeg" alt="Event Image" class="event-picture">
                </div>
                <div class="event-details">
                    <p class="event-date">Date: <span class="event-date-red">12 Jan 2025</span></p>
                    <p class="event-title">Event Title</p>
                    <p class="event-description">This is a short description of the event.</p>
                    <p class="event-location"><span class="icon pin"></span> Location: Naresuan University</p>
                </div>
            </div>
            <div class="event-card">
                <div class="event-picture-container">
                    <div class="icon-container">
                        <i class="fas fa-bell" onclick="toggleBell(this)" title="Notifications"></i>
                        <i class="fas fa-star" onclick="toggleStar(this)" title="Favorite"></i>
                    </div>
                    <img src="assets/imgs/chrismas.jpeg" alt="Event Image" class="event-picture">
                </div>
                <div class="event-details">
                    <p class="event-date">Date: <span class="event-date-red">12 Jan 2025</span></p>
                    <p class="event-title">Event Title</p>
                    <p class="event-description">This is a short description of the event.</p>
                    <p class="event-location"><span class="icon pin"></span> Location: Naresuan University</p>
                </div>
            </div>
            <div class="event-card">
                <div class="event-picture-container">
                    <div class="icon-container">
                        <i class="fas fa-bell" onclick="toggleBell(this)" title="Notifications"></i>
                        <i class="fas fa-star" onclick="toggleStar(this)" title="Favorite"></i>
                    </div>
                    <img src="assets/imgs/chrismas.jpeg" alt="Event Image" class="event-picture">
                </div>
                <div class="event-details">
                    <p class="event-date">Date: <span class="event-date-red">12 Jan 2025</span></p>
                    <p class="event-title">Event Title</p>
                    <p class="event-description">This is a short description of the event.</p>
                    <p class="event-location"><span class="icon pin"></span> Location: Naresuan University</p>
                </div>
            </div>
            <div class="event-card">
                <div class="event-picture-container">
                    <div class="icon-container">
                        <i class="fas fa-bell" onclick="toggleBell(this)" title="Notifications"></i>
                        <i class="fas fa-star" onclick="toggleStar(this)" title="Favorite"></i>
                    </div>
                    <img src="assets/imgs/chrismas.jpeg" alt="Event Image" class="event-picture">
                </div>
                <div class="event-details">
                    <p class="event-date">Date: <span class="event-date-red">12 Jan 2025</span></p>
                    <p class="event-title">Event Title</p>
                    <p class="event-description">This is a short description of the event.</p>
                    <p class="event-location"><span class="icon pin"></span> Location: Naresuan University</p>
                </div>
            </div>
            <div class="event-card">
                <div class="event-picture-container">
                    <div class="icon-container">
                        <i class="fas fa-bell" onclick="toggleBell(this)" title="Notifications"></i>
                        <i class="fas fa-star" onclick="toggleStar(this)" title="Favorite"></i>
                    </div>
                    <img src="assets/imgs/chrismas.jpeg" alt="Event Image" class="event-picture">
                </div>
                <div class="event-details">
                    <p class="event-date">Date: <span class="event-date-red">12 Jan 2025</span></p>
                    <p class="event-title">Event Title</p>
                    <p class="event-description">This is a short description of the event.</p>
                    <p class="event-location"><span class="icon pin"></span> Location: Naresuan University</p>
                </div>
            </div>
            <div class="event-card">
                <div class="event-picture-container">
                    <div class="icon-container">
                        <i class="fas fa-bell" onclick="toggleBell(this)" title="Notifications"></i>
                        <i class="fas fa-star" onclick="toggleStar(this)" title="Favorite"></i>
                    </div>
                    <img src="assets/imgs/chrismas.jpeg" alt="Event Image" class="event-picture">
                </div>
                <div class="event-details">
                    <p class="event-date">Date: <span class="event-date-red">12 Jan 2025</span></p>
                    <p class="event-title">Event Title</p>
                    <p class="event-description">This is a short description of the event.</p>
                    <p class="event-location"><span class="icon pin"></span> Location: Naresuan University</p>
                </div>
            </div>
        </div>
    </section>
    <!-- End Favorite Section -->


    <!-- footer -->
    <div class="container">
        <footer class="footer" style="margin-top: 50px">
            <p class="mb-0">
                <script>document.write(new Date().getFullYear())</script>
                <a href="https://www.nu.ac.th/">Naresuan University</a>
            </p>
            <div class="social-links text-right m-auto ml-sm-auto">
                <a href="https://www.facebook.com/nu.university" class="link"><i class="ti-facebook"></i></a>
                <a href="https://www.nu.ac.th/" class="link"><i class="ti-google"></i></a>
                <a href="https://www.nu.ac.th/?page_id=5013" class="link"><i class="ti-email"></i></a>
                <a href="https://www.google.com/maps?q=Naresuan+University" class="link" target="_blank"><i
                        class="ti-location-pin"></i>
            </div>
        </footer>
    </div> <!-- end of page footer -->

    <!-- core  -->
    <script src="assets/vendors/jquery/jquery-3.4.1.js"></script>
    <script src="assets/vendors/bootstrap/bootstrap.bundle.js"></script>

    <!-- bootstrap 3 affix -->
    <script src="assets/vendors/bootstrap/bootstrap.affix.js"></script>

    <!-- Meyawo js -->
    <script src="assets/js/meyawo.js"></script>
    <!-- event date -->
    <script src="assets/js/date.js"></script>
    <!-- select faclty -->
    <script src="assets/js/faculty.js"></script>
    <!-- star -->
    <script src="assets/js/star.js"></script>

</body>

</html>