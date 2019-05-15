const express = require("express");
const app = express();
const middleware = require('./middlewares');

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3000;



app.get("/users", (req, res) => {
  res.send( [{
   "name": "string",
   "username": "string",
   "email": "string",
   "address": {
     "street": "string",
     "suite": "string",
     "city": "string",
     "zipcode": "string",
     "geo": {
       "lat": 0,
       "lng": 0
     }
   }
 }]);
});

app.post("/posts", (req, res) => {
  res.send(
    [
      {
        "title": "string",
        "body": "string",
        "userId": 1,
        "id": 1,
        "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    ]
  )
})

app.use(middleware.notFound);

// Start up server and begin listen to requests
app.listen(port, () => {
  console.info(`Server is listening on port ${port}.`);
});
