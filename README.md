**API Exercise**
----

* **URL**

  /posts  
  /users

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

  

* **Success Response:** <br />
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

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._>
