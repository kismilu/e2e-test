@sent
Feature: Email küldése

	Előre bejelentkezett email címről küld egy előre megadott email címre random subject-tel emailt. Ellenőrzi, hogy az email
	elküldésre került-e. Kitakarítja az elküldött levelek mappáját.

	@sentscen
	Scenario: Email sikeres küldése
		Given Új üzenet gombra kattintás
		When Címzett mezőjének kitöltése
		And Tárgy mezőjének kitöltése
		And Elküld gomb megnyomása
		Then "Sikeres" elküldött levél
		Then Takarítás