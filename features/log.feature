@log
Feature: Bejelentkezés az outlook.com oldalra

	Az outlook.com oldalra bejelentkezik az előre megadott email és jelszó párossal.

	Scenario: Sikeres bejelentkezés az outlook.com felületére
		Given Böngésző megnyitása
		When Betöltődik az outlook.com
		And Bejelentkezés gomb-ra kattintás
		And "<username>" beírása és továbblépés
		And "<pwd>" jelszó beírása és továbblépés
		And Ellenőrzés
		Then "<succes>" bejelentkezés

		Examples: 
			| username				| pwd				| succes		|
			| tesztlesz@outlook.hu	| leszteszt12345	| Sikeres		|
			| tesztlesz@outlook.hu	| leszteszt123456	| Sikertelen	|