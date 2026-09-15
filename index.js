const express = require("express");

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
    const parameters = req.body.queryResult.parameters;

    const kat = Number(parameters.kat);
    const broj_nocenja = Number(parameters.broj_nocenja);

    const cena = 15 * Math.pow(kat, broj_nocenja);

    res.json({
        fulfillmentText:
            `Rezervacija je uspješna! Kategorija hotela: ${kat}, ` +
            `broj noćenja: ${broj_nocenja}. ` +
            `Ukupna cijena je ${cena} KM.`
    });
});

app.get("/", (req, res) => {
    res.send("Dialogflow hotel webhook radi!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server radi na portu ${PORT}`);
});
