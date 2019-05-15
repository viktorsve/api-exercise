**API Exercise**
----

* **URL**

  http://api.softhouse.rocks/posts  
  http://api.softhouse.rocks/users

* **Method:**

  `GET` | `POST` | `DELETE` | `PUT` | `PATCH`
  
*  **URL Params**

   /users/{userId}  
   /posts/{postId}

* **Data Params**

  ```
  Users:
  {  
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
  }
  ```
  ```
  Posts: 
  {
    "title": "string",
    "body": "string",
    "userId": 0
  }
  ```

* **Success Response:**

  GET /posts
  * **Code:** 200 <br />
  ```
    [
      {
        "title": "string",
        "body": "string",
        "userId": 0,
        "id": 0,
        "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
      }
    ]
  ```
  GET /users
  * **Code:** 200 <br />
  ```
  [
    {
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
      },
      "id": 0,
      "_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
  ]
  
  
* **Error Response:**

  * **Code:** default <br />
    **Content:**
    ```
    {
      "code": 0,
      "message": "string"
    }
    
* **Bugs:**

* **Sample Call:**

```
curl http://api.softhouse.rocks/posts/103 | jq

{
  "_id": "5cdbcb17f4a0350020b4816a",
  "body": "Lakers suger ännu mer",
  "title": "Oskar suger",
  "userId": 200,
  "id": 103,
  "__v": 0
}
```
```

curl -X POST "http://api.softhouse.rocks/posts" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"title\":\"Hello\",\"body\":\"string\",\"userId\":93}" | jq

{
  "_id": "5cdbe2c3f4a0350020b48188",
  "body": "string",
  "title": "Hello",
  "userId": 93,
  "id": 120,
  "__v": 0
}
```
