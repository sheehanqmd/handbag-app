const express = require("express");
const app = express();
const hbController = require("./controllers/hbController");

app.use(express.json());

app.get("/api/hbs/", hbController.getHb);
app.get("/api/hbs/:image", hbController.getHb);
// app.get("/api/hbs/:price", hbController.getHb);
app.post("/api/hbs/", hbController.postHb);
app.delete("/api/hbs/:description", hbController.deleteHb);
app.put("/api/hbs/", hbController.putHb);



const SERVER_PORT = 4545;
app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`);
});