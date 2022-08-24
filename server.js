const express = require("express");
const app = express();

require("./seed/storeData")()
const route = require("./routes/route");

app.use(express.json());
app.use(route);
const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Your server is listening on http://localhost:${PORT}`);
});
