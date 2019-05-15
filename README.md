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

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 422 UNPROCESSABLE ENTRY <br />
    **Content:** `{ error : "Email Invalid" }`

* **Sample Call:**

  <_Just a sample call to your endpoint in a runnable format ($.ajax call or a curl request) - this makes life easier and more predictable._> 

* **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._> 
