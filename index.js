const express = require("express");
const routes = require('./routes');
const middleware = require('./middlewares');
const app = express();


// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3000;

app.use("/", routes);


app.use(middleware.notFound);

// Start up server and begin listen to requests
app.listen(port, () => {
  console.info(`Server is listening on port ${port}.`);
});
