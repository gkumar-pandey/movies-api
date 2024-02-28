Welcome to the Movie API documentation, your go-to resource for comprehensive information about movies. This documentation empowers developers to seamlessly create, manage, and access movie data, covering various aspects such as authentication, user reviews, and more. Explore the versatile capabilities of the Movie API to enhance your applications with rich and dynamic cinematic content.

### API Endpoints

These API provides comprehensive set of features to manage , authentication, Movies data , user rating and reviews on the platform

#### [Authentication Management](#auth-management)

1. [**User Signup**](#post-user-signup) : This endpoint enables the creation of new user accounts, allowing users to sign up for your application with ease.
2. [**User Login**](#post-user-login) : Users can securely log in to their accounts using this endpoint, gaining access to personalized app features and content.

#### [**User Management**](#user-management-1)

1. **[Changing Password](#post-changing-password) :** Enhance account security by providing users with the ability to change their passwords securely.
2. **[Update profile picture](#post-updating-profile-picture) :** Users can update their profile pictures, adding a personal touch to their profiles.
3. **[Updating Contact Details](#post-updating-contact-details) :** Keep user information up-to-date with this endpoint, allowing users to modify their contact details as needed.
4. **[Finding Users by Phone Number](#get-finding-user-by-phone-number) :** Users can search for other users by phone number, making it easier to connect within the app.
5. **[Adding Ratings and Reviews](#post-adding-rating-and-reviews) :** Users can share their thoughts and experiences by adding ratings and reviews for various app content.
6. **[Fetching Top 3 User Reviews with User Details](#get-fetching-top-3-user-reviews-with-user-details):** Access the top 3 user reviews along with user details, providing valuable insights into popular content.

#### Movies Management

1. **Create a Movie :** Allow to add new movie information with essential details such as name, movie realease year, actors, director name and more.
2. **Update a movie :** Allow user to update movie information .
3. **Delete a movie :** Allow user to delete a movie by movie id
4. **Search a movie by movie name :** Allow user to get movie by movie name.
5. **Search a movies by director name :** Allow users to retrieve all movies of director by his name.
6. **Search movies by actor name :** Allow users to get all movies of actor by his name.

## API Base URL

```javascript

https://movies-api-sage-sigma.vercel.app/

```

## Auth Management

User Management allows you to securely create, update, retrieve, and manage user authentication and account details, providing seamless integration of authentication-related features into your application.

## `POST` User signup

```js
https://movies-api-sage-sigma.vercel.app/api/v1/auth/signup
```

- **Endpoint** : `POST /api/v1/auth/signup`
- **Description** : This endpoint enables the creation of new user accounts, allowing users to sign up for your application with ease.

### Body

```js
{
    "username":"testuser",
    "password":"testpassword",
    "email":"test@gmail.com"
}
```

### Example

#### Request

```js
POST /api/v1/auth/signup HTTP/1.1
Host: movies-api-sage-sigma.vercel.app
Content-Length: 90

{
    "username":"testuser",
    "password":"testpassword",
    "email":"test@gmail.com"
}
```

#### Response

```js
{
    "message": "signup successfully",
    "user": {
        "email": "test@gmail.com",
        "username": "testuser",
        "_id": "65de8a3aa9759bf4a098d8a8",
        "createdAt": "2024-02-28T01:19:54.686Z",
        "updatedAt": "2024-02-28T01:19:54.686Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRlOGEzYWE5NzU5YmY0YTA5OGQ4YTgiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzA5MDgzMTk0LCJleHAiOjE3MDkxNjk1OTR9.VF7B24b6e_zjwsRQgiK69K3QlbSAcafakO8hT0rZ740"
}
```

## `POST` User Login

```js
https://movies-api-sage-sigma.vercel.app/api/v1/auth/login
```

- **Endpoint** : `POST /api/v1/auth/login`
- **Description** : Users can securely log in to their accounts using this endpoint, gaining access to personalized app features and content.

### Body

```js
{
    "email":"test@gmail.com",
    "password":"testpassword"
}
```

### Example

#### Request

```js
POST /api/v1/auth/login HTTP/1.1
Host: movies-api-sage-sigma.vercel.app
Content-Length: 63

{
    "email":"test@gmail.com",
    "password":"testpassword"
}
```

#### Response

```js
 {
    "message": "Login successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRlOGEzYWE5NzU5YmY0YTA5OGQ4YTgiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzA5MDgzMjk1LCJleHAiOjE3MDkxNjk2OTV9.Gu48EhWYglUy3sXrQHegBNgk0AOZwAS6FUcgDIxelfQ",
    "user": {
        "_id": "65de8a3aa9759bf4a098d8a8",
        "email": "test@gmail.com",
        "username": "testuser",
        "createdAt": "2024-02-28T01:19:54.686Z",
        "updatedAt": "2024-02-28T01:19:54.686Z",
        "__v": 0
    }
}
```

## User Management

User management provides user to change password, profile picture , contact details like phone number, address and add rating and reviews to the movies.

## `POST` Changing Password

```js
https://movies-api-sage-sigma.vercel.app/api/v1/user/password
```

- **Endpoint** : `POST /api/v1/user/password`
- **Description** : Enhance account security by providing users with the ability to change their passwords securely.

#### Request Headers

| Header        | Value                                                                                                                                                                                                         |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRlOGEzYWE5NzU5YmY0YTA5OGQ4YTgiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzA5MDgzMjk1LCJleHAiOjE3MDkxNjk2OTV9.Gu48EhWYglUy3sXrQHegBNgk0AOZwAS6FUcgDIxelfQ |

#### Body

```js
{
    "currentPassword":"testpassword",
    "newPassword":"newtestpassword"
}
```

#### Examples

**Request**

```js
POST /api/v1/user/password HTTP/1.1
Host: movies-api-sage-sigma.vercel.app
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRlOGEzYWE5NzU5YmY0YTA5OGQ4YTgiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzA5MDgzMjk1LCJleHAiOjE3MDkxNjk2OTV9.Gu48EhWYglUy3sXrQHegBNgk0AOZwAS6FUcgDIxelfQ
Content-Length: 77

{
    "currentPassword":"testpassword",
    "newPassword":"newtestpassword"
}
```

**Response**

```js
{
    "success": true,
    "message": "Password updated successfully.",
    "user": {
        "_id": "65de8a3aa9759bf4a098d8a8",
        "email": "test@gmail.com",
        "password": "newtestpassword",
        "username": "testuser",
        "createdAt": "2024-02-28T01:19:54.686Z",
        "updatedAt": "2024-02-28T01:33:35.069Z",
        "__v": 0
    }
}
```

## `POST` Updating Profile Picture

```js
https://movies-api-sage-sigma.vercel.app/api/v1/user/profile
```

- **Endpoint** : `POST /api/v1/user/profile`
- **Description** : Users can update their profile pictures, adding a personal touch to their profiles.

#### Body

```js
{
    "newProfilePicture": "<https://example.com/new-profile.jpg>"
}
```

#### Examples

**Request**

```js
POST /api/v1/user/profile HTTP/1.1
Host: movies-api-sage-sigma.vercel.app
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRlOGEzYWE5NzU5YmY0YTA5OGQ4YTgiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzA5MDgzMjk1LCJleHAiOjE3MDkxNjk2OTV9.Gu48EhWYglUy3sXrQHegBNgk0AOZwAS6FUcgDIxelfQ
Content-Length: 68

{
    "newProfilePicture": "<https://example.com/new-profile.jpg>"
}
```

**Response** 
```js
{
    "success": true,
    "message": "Profile picture updated.",
    "user": {
        "_id": "65de8a3aa9759bf4a098d8a8",
        "email": "test@gmail.com",
        "password": "newtestpassword",
        "username": "testuser",
        "createdAt": "2024-02-28T01:19:54.686Z",
        "updatedAt": "2024-02-28T01:34:52.993Z",
        "__v": 0,
        "profilePicture": "<https://example.com/new-profile.jpg>"
    }
}
```
## `POST` Updating Contact Details
```js
https://movies-api-sage-sigma.vercel.app/api/v1/user/update-contact
```
- **Endpoint** : `POST /api/v1/user/update-contact`
- **Description** : Keep user information up-to-date with this endpoint, allowing users to modify their contact details as needed.
 
#### Body
```js
{
    "phoneNumber": "7779843621",
    "address": "patna bihar"
}
```
#### Example
**Request**
```js
POST /api/v1/user/update-contact HTTP/1.1
Host: movies-api-sage-sigma.vercel.app
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRlOGEzYWE5NzU5YmY0YTA5OGQ4YTgiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzA5MDgzMjk1LCJleHAiOjE3MDkxNjk2OTV9.Gu48EhWYglUy3sXrQHegBNgk0AOZwAS6FUcgDIxelfQ
Content-Length: 65

{
    "phoneNumber": "7779843621",
    "address": "patna bihar"
}
```
**Response**
```js
{
    "message": "contact details updated",
    "success": true,
    "user": {
        "_id": "65de8a3aa9759bf4a098d8a8",
        "email": "test@gmail.com",
        "username": "testuser",
        "createdAt": "2024-02-28T01:19:54.686Z",
        "updatedAt": "2024-02-28T01:36:19.436Z",
        "__v": 0,
        "profilePicture": "<https://example.com/new-profile.jpg>",
        "address": "patna bihar",
        "phoneNumber": "7779843621"
    }
}
```
## `GET` Finding User by Phone Number
```js
https://movies-api-sage-sigma.vercel.app/api/v1/user/phone/1234567890
```
- **Endpoint** : `GET /api/v1/user/phone/:phoneNumber`
- **Description** : Users can search for other users by phone number, making it easier to connect within the app.
#### Example
**Request**
```js
GET /api/v1/user/phone/1234567890 HTTP/1.1
Host: movies-api-sage-sigma.vercel.app
``` 
**Response**
```js
{
    "success": true,
    "message": "user found",
    "user": {
        "_id": "659fc48c8c7962f12230a486",
        "email": "user@example.com",
        "password": "false",
        "username": "exampleuser",
        "profilePicture": "<https://example.com/new-profile.jpg>",
        "createdAt": "2024-01-11T10:35:56.459Z",
        "updatedAt": "2024-01-11T11:25:40.937Z",
        "__v": 0,
        "address": "123 Main St, City",
        "phoneNumber": "1234567890"
    }
}
```
## `POST` Adding Rating And Reviews
`https://movies-api-sage-sigma.vercel.app/api/v1/movies/65b169fd8e186e2f42655b59/rating`
- **Endpoint :** **`POST /api/v1/movies/:movieId/rating`**
- **Description :** Users can share their thoughts and experiences by adding ratings and reviews for various app content.
#### Body
```js
{
    "userId": "65de8a3aa9759bf4a098d8a8",
        "rating": 8.5,
        "review": "Action packed movie, Enjoyed alot!"
}
```
#### Exmaple
**Request**
```js
POST /api/v1/movies/65b169fd8e186e2f42655b59/rating HTTP/1.1
Host: movies-api-sage-sigma.vercel.app
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRlOGEzYWE5NzU5YmY0YTA5OGQ4YTgiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNzA5MDgzMjk1LCJleHAiOjE3MDkxNjk2OTV9.Gu48EhWYglUy3sXrQHegBNgk0AOZwAS6FUcgDIxelfQ
Content-Length: 123

{
    "userId": "65de8a3aa9759bf4a098d8a8",
        "rating": 8.5,
        "review": "Action packed movie, Enjoyed alot!"
}
```
**Response**
```js
{
    "success": true,
    "message": "Review and rating added",
    "movie": null
}
```

## `GET` Fetching Top 3 User Reviews with User Details
```js
https://movies-api-sage-sigma.vercel.app/api/v1/movies/65b169fd8e186e2f42655b59/reviews
```
- **Endpoint :** **`GET /api/v1/movies/:movieId/reviews`**
- **Description :** Access the top 3 user reviews along with user details, providing valuable insights into popular content.
#### Example
**Request**
```js
GET /api/v1/movies/65b169fd8e186e2f42655b59/reviews HTTP/1.1
Host: movies-api-sage-sigma.vercel.app
```
**Response**
```js
{
    "success": true,
    "reviews": [
        {
            "review": "Action packed movie, Enjoyed alot!",
            "user": {
                "_id": "65de8a3aa9759bf4a098d8a8",
                "username": "testuser",
                "profilePicture": "<https://example.com/new-profile.jpg>"
            }
        }
    ]
}
```

 
