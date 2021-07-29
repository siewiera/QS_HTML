<!-- <?php include 'mail.php'; ?> -->
<!DOCUMENT html>
<html lang="pl">

<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,400,700,900" rel="stylesheet">
</head>

<body id="qs">
    <!-- <img src="image/qs2.png"> -->
    <!--alert messages start-->
    <?php echo $alert; ?>
    <!--alert messages end-->
    <div id="section">
        <div id="back">
            <a id="undo" href="index.html">&lt;</a>
        </div>

        <div id="contact-section">
            <div id="contact-info">
                <div><a class="company-name">Quick Serwis</a></div>
                <div>
                    <p class="adres">Konary 50, 55-340 Konary</a>
                </div>
                <div>
                    <p class="email-adres">quickserwis@gmail.com</a>
                </div>
                <div><a class="phone-number">720-800-163</a></div>
                <div><a class="phone-number2">720-800-433</a></div>
            </div>


            <div id="contact-form">
                <h2>Kontakt</h2>
                <div id="contact" action="" method="post">
                    <div id="box">
                        <input type="text" name="name" class="name" required />
                        <span>Imię</span>
                    </div>
                    <div id="box">
                        <input type="email" name="email" class="email" required />
                        <span>Email</span>
                    </div>
                    <div id="box2">
                        <textarea name="message" rows="5" class="message" required></textarea>
                        <span>Opis problemu</span>
                    </div>
                    <input type="submit" name="submit" value="Wyślij" />

                </div>

            </div>
        </div>
    </div>
    <video id="bg" autoplay="autoplay" loop="loop">
        <!-- <source src="video/tlo2.webm" type="video/webm" /> -->
        <source src="video/tlo2.mp4" type="video/mp4" />
    </video>
    <script type="text/javascript">
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
    </script>

</body>

</html>