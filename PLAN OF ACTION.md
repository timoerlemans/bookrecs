# Plan van Aanpak

### Wat wil ik maken?
	- Een zoekmachine voor boekaanbevelingen
	- Je zoekt naar een boek en krijgt dan aanbevelingen welk boek daarbij past

### Waarom wil ik dit maken?
	- Omdat mensen vaak de vraag stellen welk boek lijkt op een boek dat ze al hebben gelezen, of op zoek zijn naar boekentips in een bepaald genre.
	- Ik hier zelf ook nog wat aan heb
	- Dit me een leuk hobbyproject lijkt dat echt toegevoegde waarde kan opleveren in plaats van een simpele todo list of iets dergelijks
	- Een kans om me te verdiepen in een nieuwe stack
	- Mogelijk mezelf ontwikkelen tot Full Stack JavaScript Developer


### Hoe wil ik dit realiseren?
	- De front-end is vrij simpel. Een lijst met boeken, en als je een boek aanklikt krijg je een lijst met boeken die je waarschijnlijk ook leuk vindt als je dat boek leuk vindt.
	- Een database waarin de boeken opgeslagen worden.
	- Een API die de front-end aan kan roepen, de data uit de database haalt en parsed, en deze informatie teruggeeft aan de front-end
	
	
### Welke stack wil ik hier voor gebruiken?
- Front-end: React (met een framework als Tailwind?)
- Database: MongoDB
- API: Node.js / Express / GraphQL?

### Hoe wil ik dit aanpakken?
- Ik heb nu een simpele Markdown file waarin ik een lijst met boeken en series heb beschreven. Voornamelijk in de scifi en fantasy grenres.
- Ik heb al een begin gemaakt aan het opzetten van de API, met bijbehorende interfaces voor de data die ik nodig heb. Doordat ik deze interfaces al opgesteld heb, hoop ik vrij makkelijk de tabellen in de database te kunnen opmaken en ook het schema van de GraphQL op te kunnen zetten.
- De front-end hou ik in het begin simpel. Een (zoekbare) lijst met boeken waarbij je een item uit kan klappen en daarin informatie krijgt over dat boek en de aanbevelingen.

### Wat moet ik nog uitzoeken?
- Of GraphQL hier de meest geschikte tool voor is, of dat ik toch beter een 'old school' REST API kan bouwen
- MongoDB is noSQL volgens mij, dus hoe zit het met de datastructuur?
- Op zoek gaan naar een front-end framework dat me veel werk uit handen neemt, zoals Tailwind. Ik wil zo min mogelijk tijd kwijt zijn aan styling en me vooral richten op de data.
- Welke license hier het meest geschikt voor is, het wordt immers open-source
