<?php
include ('haut.php');
include ('menu.php');?>

		<section class="page-content">
			<header>
				<h1><span style="color: #9634F1;">Salut !</span> 
					<br>Je suis un développeur web junior</h1>
				<p>
					Je me présente, <span style="color: #9634F1;">Ugo Bittoni</span>, j'ai <span style="color: #9634F1;">20 ans</span> 
					et je suis actuellement en formation <span style="color: #9634F1;">CDA Java</span></p>
					
					<p>J'ai obtenu mon <span style="color: #9634F1;">Brevet de Technicien Superieur Services Informatique aux Organisations</span> option <span style="color: #9634F1;">SLAM</span> 
					(Solutions Logicielles et Applications Métier) en <span style="color: #9634F1;">jullet 2022</span> à Gap </p>

					<p>Ceci est mon portfolio, il regroupe mes deux années d'études de BTS, ainsi que des projets personels<span style="color: #9634F1;">baladez-vous</span> 
					pour avoir plus	<span style="color: #9634F1;">d'informations</span> ou juste par curiosité !
				</p>
				<a class="link" href="contact.php">Dire Hey</a>
			</header>

			<div class="presentation-image">
				<img src="./images/photo-fond.jpg" alt="Image code" />
			</div>

			<section class="projects-section">

				<h2 id="projet"><span style="color: #9634F1;">Projets</span> réalisés :</h2>
				
				<!------------- PORJET QT --------------->
				<h3>En <span style="color: #9634F1;">Qt</span> :</h3>

				<div class="projects">
					<div class="project">
						<h4>Logiciel de bibliothèque</h4>
						<p class="description">
							Le projet était de créer une bibliothèque virtuelle permetant de 
							louer, ramener ou ajouter des livres, auteurs et catégories
							via une aplication QT, reliée à une base de donnée.
						</p>
						<p class="compteRendu">
							<a href="docs/Compte_Rendu_Bibliothèque_QT.pdf" target="_blank">Compte rendu</a>
						</p>
					</div>
				</div>

				<!------------- PORJET PHP --------------->
				<h3>En <span style="color: #9634F1;">PHP</span> :</h3>
				<div class="projects">
					<div class="project">
						<h4>Inscription de producteurs</h4>
						<p class="description">
							Ce projet nous demandais d'utiliser l'API du gouvernement pour vérifier l'adresse 
							ainsi que le numero de SIREN lors de l'inscription d'un utilisateur.
						</p>
						<p class="compteRendu">
							<a href="docs/PHP_Inscription_Des_Producteurs.pdf" target="_blank">Compte rendu</a>
						</p>
					</div>
				</div>

				<!------------- PORJET EN COURS --------------->
				<h3>D'autres projets sont en <span style="color: #9634F1;">cours</span> !</h3>
				<div class="projects">
					<div class="project">
						<h4>Restez connectés :</h4>
						<p class="description">
							D'autres projets divers seronts ajoutés au fil du temps !</p>
						</p>
					</div>
				</div>
			</section>
		</section>
<?php include ('footer.php');?>