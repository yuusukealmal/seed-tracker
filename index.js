const express = require("express");
const path = require("path");
const axios = require("axios");
const { randomDevice, randomHex } = require("./utils");

const app = express();
const PORT =  3001;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

app.get("/download", (req, res) => {
    res.status(405).json({ error: "Method Not Allowed" });
});

app.post("/download", async (req, res) => {
    try {
        const BASE_URL = "https://nyanko-save.ponosgames.com";
        const device = randomDevice();
        const hex = randomHex(32);

        const { account, password, cc, gv } = req.body;

        const client = axios.create({
            headers: {
                "Content-Type": "application/json",
                "Accept-Encoding": "gzip",
                "Connection": "keep-alive",
                "User-Agent": device["User-Agent"]
            }
        });

        const data = {
            clientInfo: {
                client: { countryCode: cc.replace("jp", "ja"), version: gv },
                device: { model: device["model"] },
                os: { type: "android", version: device["version"] }
            },
            nonce: hex,
            pin: password
        };

        const url = `${BASE_URL}/v2/transfers/${account}/reception`;

        const response = await client.post(url, data, { responseType: "arraybuffer" });

        res.status(200).send(response.data);
    } catch (error) {
        console.error("Request failed:", error.message);
        res.status(500).json({ error: "Server error" });
    }
});

app.all("*", (req, res) => {
    res.status(404).json({ error: "Page Not Found" });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

module.exports = app;