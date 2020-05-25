# Development 4: Opdracht Werkstuk

## Short
Bij het opstarten van de website zijn worden alle video's getoond samen met alle categoriën en alle genres.
Men kan filteren op basis van 2 verschillende filter functies.
- Ofwel filteren op doelgroep 
    - Volwassenen of familie
- Ofwel filteren op genre
    - Theater, dans, muziektheater, concert, Multidisciplinair, Literatuur, comedy, figurentheater, Opera of circus

Bij het klikken op één van deze knoppen verschijnen alle video's die dezelfde genre of category bevatten als aangeduid.

Spijtig genoeg is het mij niet gelukt om verschillende genres aan te duiden en te displayen.
Ik had de toggle functie gebuikt voor dit porbleem proberen op te lossen maar dat is spijtig genoeg niet gelukt.

Mijn oprechte excuses voor het onderdoende design, Front-end is spijtig genoeg niet mijn beste kwaliteit..


UPDATE 

Bij het nogmaals proberen verder werken is het gelukt om meerdere genres aan te klikken en te laten zien. 
Nu onstaat het probleem dat ik ze niet meer kan wegklikken. Heb nogmaals met toggle en for loops proberen werken maar krijg steeds niet het gewenste resultaat. 
Moest alles duidelijk zijn en u ziet niet in wat u nog aan mij zou moeten vragen, zou u toch niet eventueel even willen bellen want ik heb het gevoel dat ik heel dicht bij zat en wil graag weten hoe ik het gewenste resultaat zou kunnen behalen. 
Dit is natuurlijk vrijblijvend en enkel toepasbaar als u tijd overheeft.

Bedankt



BESCHRIJVING

Voor het maken van deze site hebben we een functies nodig die 
    - Gewenste data oproepen 
    - Gewenste data verwerken
    - Gewenste data plaatsen in HTML

Beknopt verloop van functionaliteiten van webpagina:
Bij het opstarten van de pagina haalt de website alle data op van de entries en geeft deze allemaal weer op de html pagina.
Wanneer de gebruiker op een button duwt van de categoriën zal een functie kijken welke categoriën allemaal zijn aangeduid.
Als dit er maar 1 is zal hij kijken of er ook één of meerdere genres werden aangeduid door de gebruiker.
Dit zal hij allemaal uit de entries halen en een nieuwe functie aanroepen die deze wegschrijft in de HTML van de website.

Verloop functies:
-De eerste functie start bij het opstarten van de website.
Deze zal alle data van de json file pushen naar een lege array die daarna zal getoond zal worden op de HTML pagina.
-Daarna krijgt de gebruiker de mogelijkheid om categoriën en genres aan te duiden.
De functie zal luisteren naar welke buttons aangeklikt worden door de gebruiker.
Dit kan de functie in javascript doen door de state van de button is CSS.
Bij het klikken op een button die niet in gebruik is zal de button in CSS een active state krijgen waardoor hij de indruk geeft dat de knop "aan" staat.
-Daarna zal de functie de huidige entries data erbij halen. Hier zal hij de doelgroep en de genre die zijn aangeklikt onthouden en vergelijken met de doelgroep en genres in de entries json adhv een for loop die elke categorie en genre zal vergelijken met de aangeduide. 
-De gene die overeenkomen zal hij overschrijven naar de lege arraylist die hij na het overlopen van alle data zal uitschrijven in de HTML.
- Bij het terugklikken op de knop om de data die in de HTML staat er uit te halen, zoals bijvoorbeeld alle filmpjes van circus eruit te halen, zal de functie opnieuw aangeroepen worden. Ditmaal zal hij merken dat het circus element niet is aangeduid.
Dit merkt hij door de CSS, doordat de knop geen active state meer heeft weet javascript dat de knop niet is aangeduid. 
Hierdoor doet hij de volledige zelfde functie als ervoor maar neemt hij het genre circus niet meer op waardoor het niet meer gedisplayed zal worden. 
-Als er niets geselecteerd wordt(kan gezien worden met een if functie) zal alles getoond worden in de HTML, hetzelfde effect dus wanneer alles geselecteerd zou worden.
-Wanneer één of meerdere buttons geselecteerd zijn, verschijnt er een "Filters wissen functie". Deze zal alle buttons een niet active state geven waardoor de functie opnieuw wordt uitgevoerd en zal zien dat er geen buttons worden aangeduid en alles dus zal weergeven.  