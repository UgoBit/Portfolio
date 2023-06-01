<?php
include ('haut.php');
include ('menu.php');?>

<section id="contact">
	<div class="container">
			<div class="title">
			<h6>Besoin d'informations ? Une question ?</h6>
			<h3>Contactez-moi</h3>
		</div>
		<form action="traitement.php" method="post">
			<input type="text" name="name" placeholder="Entrer votre nom" required="">
			<input type="email" name="email" placeholder="Entrer votre email" required="">
			<input type="text" name="subject" placeholder="Entrer Le Sujet" required="">
			<input type="text" name="number" placeholder="Entrer votre numero de téléphone" required="">
			<textarea name="message" placeholder="Entrer votre message"></textarea>
			<input type="hidden" name="recaptcha-response" id="recaptchaResponse">
			
			<button type="submit">Envoyer</button>
		</form>

		<script src="https://www.google.com/recaptcha/api.js?render=6LfQ5lQgAAAAANoIJLGIKdqKCE_4XJhNp8qYSx-3"></script>
		<script>
			grecaptcha.ready(function() {
				grecaptcha.execute('6LfQ5lQgAAAAANoIJLGIKdqKCE_4XJhNp8qYSx-3', {action: 'submit'}).then(function(token) {
					document.getElementById("recaptchaResponse").value = token
				});
			});
		</script>

		<?php

		if ($_POST['envoi-response']=='1') {
			echo "<p>L'email a bien été envoyé.</p>";
		}
		?>
		</div>
</section>


<?php include ('footer.php');?>