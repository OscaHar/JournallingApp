# Uppgiften uppdelad i mindre delar och problem

### Uppgift:

1. Skapa ett loggmeddelande
   - Starta Appen
     - Skriv en kort text på max 40 tecken
     - Spara/Logga knapp
     - Meddelande sparas i backend med texten, datum, klockslag
2. Återblick
   - Starta Appen
     - Välj Återblick
       - Nu visas en kronologisk lista över händelser med den senaste överst

<p align="center">======================================</p>

Ska kunna logga in - start sida, index route, hårdkodad användare

- Start sida med "logga in" knapp (EventListener, "Click")
  - Ska ta mig till en annan sida, note route, där ska alla anteckningar visas

#

För att lägga till flera anteckningar (Note route)

- Knapp för nya texter (EventListener, "Click")
  - **Om** ny anteckning
    - Min 1 bokstav/siffra
    - Max 40 bokstäver/siffror
  - DOM manipulation - ta fram text ruta, spara knapp
  - **Om** spara, använd JS Date() för att hitta datum och tid
    - getTime() (för att sortera i kronologisk ordning(
      ```javascript
      a.getTime() - b.getTime();
      ```
      )
    - get Year, Month, Date, Hour, Minute
  - Lägg till den nya anteckningen på Airtable
  - Ändra tillbaka DOM manipulation

#

Kolla på alla notes (Note route)

- Hämta all notes från Airtable
- Visa de i kronologisk ordning
  - Sortera beroende på datum och tid
    - Använda getTime() och jämför alla
    - **For loops**

^^ Är grundfunktionen, det minsta vi behöver göra. Vad mer bör en journal app / antecknings app ha?

- Ta bort en anteckning?
- Öppna en specifik anteckning
- Redigera en specifik anteckning
