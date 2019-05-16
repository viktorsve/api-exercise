const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
  res.send({"CANNOT": "GET"});
});

router.get("/users", (req, res) => {
  res.status(201).send( [{
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

router.get("/posts", (req, res) => {
  res.send(
    {
      "title": "string",
      "body": "string",
      "userId": 0
    }
  )
})

router.post("/posts/:userId", (req, res) => {
  res.send(
    [
      {
        "title": "string",
        "body": "string",
        "userId": parseInt(req.params.userId),
        "id": 1,
        "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    ]
  )
})

router.delete("/posts/:userId", (req, res) => {

})

module.exports = router;
