# INLÄMNING 3 - Express API - Rick And Morty characters

This is a school assignment where i built an API with express and typescript, the client side is built with React typescript.

The API consists of 5 endpoints that handle data about Rick and Morty characters.

To run the server:

```
cd /server
npm install
npm run build
npm run start
```

To run the client:

```
cd /client
npm install
npm start
```

### `GET <localhost>/api/characters`

Returns all characters in `RickAndMortyData.json`

#

### `GET <localhost>/api/characters/id/{ID}`

Returns a character object with the id

#

### `POST <localhost>/api/characters`

To post a new character

```json
    "name": "name",
    "gender": "gender",
    "status": "status",
    "species": "species",
    "type": "type",
    "image": "imgURL"
```

### `PUT <localhost>/api/characters/{ID}`

Updates the character with the id

```json
    "name": "updated name",
    "gender": "updated gender",
    "status": "updated status",
    "species": "updated species",
    "type": "updated type",
    "image": "updated imgURL"
```

#

### `DELETE <localhost>/api/characters/{ID}`

Deletes the character with the id

#

Requirements:

# Krav för godkänt:

- [x] Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [x] Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [x] Datan som API:et hanterar sparas lokalt i serverfilen
- [x] APIét ska svara med 404 om datan saknas.
- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [x] Uppgiften lämnas in i tid!

# Krav för väl godkänt:

- [x] Alla punkter för godkänt är uppfyllda
- [x] All data skall vara sparad i en JSON-fil istället för i serverfilen
- [x] Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [x] Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och
      presentera datan, redigeringsformulär skall fyllas i med befintlig information.
- [x] Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
