<?php //Skrypt PHP, wykonujący obliczenia.

$Liczba1= $_POST['liczba1']; // Zmienna globalna pobierana z okienka liczba1
$Liczba2= $_POST['liczba2']; // Zmienna globalna pobierana z okienka liczba2

$WynikMnozenie= $Liczba1*$Liczba2; //Wynik Mnozenia zmiennych
$WynikDzielenie= $Liczba1/$Liczba2; // Wynik Dzielenia zmiennych 
$WynikDodawanie= $Liczba1+$Liczba2; //Wynik dodawania zmiennych
$WynikOdejmowanie=$Liczba1-$Liczba2; //Wynik odejmowania zmiennych

?> <!-- Koniec skryptu PHP -->
<!DOCTYPE html>
<html>
	<head>
	<link href="patryk.css" rel="stylesheet" > <!-- Deklaracja CSS -->
		<meta author="Patryk Maternicki"> <!-- Deklaracja Autora -->
	</head> 	
		<body>
		<?php
				echo "<div id='menu'>"; // Deklaracja stylu CSS elementu HTML
				echo "<div class='tekst1'><center>"; // Deklaracja stylu tekstu elementu HTML
				echo "Wynik Obliczenia;"; 
				echo "</div></center>";
				echo "</div>";
				echo "<br>";
				echo "<div id='menu'>";
				echo "<div class='tekst2'>";
				echo "<center>";
				echo "Wynik mnozenia";
				echo "<br>";
				echo "'$WynikMnozenie'"; // Wynik Zmiennej $WynikMnozenie
				echo "<br>";
				echo "Wynik dzielenia";
				echo "<br>";
				echo "'$WynikDzielenie'"; // Wynik Zmiennej $WynikDzielenie
				echo "<br>";
				echo "Wynik dodawania";
				echo "<br>";
				echo "'$WynikDodawanie'"; // Wynik Zmiennej $WynikDodawanie
				echo "<br>";
				echo "WYnik odejmowania"; 
				echo "<br>";
				echo "'$WynikOdejmowanie'"; // Wynik Zmiennej $WynikOdejmowanie
				echo "</div>";
				echo "</div>";
?> <!-- Koniec  Skryptu PHP -->
</body>
</html>

