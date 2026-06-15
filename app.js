const express = require("express");
const { Board, Led } = require("johnny-five");

const app = express();
const board = new Board();

app.use(express.static("public"));

board.on("ready", () => {

    const ledRed = new Led(8);
    const ledYellow = new Led(9);
    const ledGreen = new Led(10);

    app.get("/red/on", (req, res) => {
        ledRed.on();
        res.send("LED Vermelho ligado");
    });

    app.get("/red/off", (req, res) => {
        ledRed.off();
        res.send("LED Vermelho desligado");
    });

    app.get("/yellow/on", (req, res) => {
        ledYellow.on();
        res.send("LED Amarelo ligado");
    });

    app.get("/yellow/off", (req, res) => {
        ledYellow.off();
        res.send("LED Amarelo desligado");
    });

    app.get("/green/on", (req, res) => {
        ledGreen.on();
        res.send("LED Verde ligado");
    });

    app.get("/green/off", (req, res) => {
        ledGreen.off();
        res.send("LED Verde desligado");
    });

    app.listen(3000, () => {
        console.log("Servidor iniciado");
    });
});
