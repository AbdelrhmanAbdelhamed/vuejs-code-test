# VueJs Code Test


## ℹ️ About The Code Test:
- Create a VueJs single page application for a simple CRUD system to manage a list of users.
- Only registered users are allowed to use the users CRUD system.
-----

## ✔️ Code Test Goals:
1. ### 🛂 Login Page:
    - Should be the main application page.
    - After successful login user should be redirected to the homepage.

2. ### 🏠 Homepage (Listing Component):
    - The listing component should be in a standalone and generic.
    - The listing component should contain an actions column.
    - The listing component should have slots to add actions buttons in the actions column, ex. Edit Button and a Delete Button.
    - The listing component should have a *scoped-slot* so that it could be used in displaying data in a custom template.
    - The listing component should support pagination.
    - The listing component should support caching pagination data.

3. ### 📝 Technical Notes:
    - Update customer should reflect dynamically in the listing without the need to reload/refetch.
    - Update form should be displayed in the same listing page.
    - Delete customer should reflect dynamically in the listing without the need to reload/refetch.
    - Delete confirmation should be displayed in the same listing page.
-----

## 🔨 Frameworks:
- Usage of VueJS third-party frameworks like *Vuetify*, *iView*, ... etc is not allowed.
- Usage of CSS third-party frameworks that relays on *jQuery* like *Foundation*, *Bootstrap*, *Semantic*
UI, ..... etc is not allowed.
- Usage of CSS third-party *jQuery-Free* frameworks like *Bulma*, *Materialize* CSS, ..... etc is highly
preferred.
-----

## 🕵️ Pro-Tips:
- Display the customer image in the listing component using the *scoped-slot*.
- Display update customer form in a modal/dialog.
- Display delete confirmation in a modal/dialog.
- Using *LocalStorage* to handle user login and sync it with *Vuex*.
- Usage of CSS third-party *jQuery-Free* framework to make your application look nice is a plus. [*We highly recommend using* [*Bulma*](https://bulma.io/)]
-----

## 🚧 Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
-----

## 🖥️ API Endpoints:
### Login:
- Endpoint: `https://reqres.in/api/login`
- Method: `POST`
- Payload:
```json
{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
```
- Response:
```json
{
    "token": "QpwL5tke4Pnpja7X4"
}
```

### Customer Listing:
- Endpoint: `https://reqres.in/api/users`
- Method: `GET`
- Query:
```json
{
    "page": 2
}
```
- Pagination Example: `https://reqres.in/api/users?page=2`
- Example Response:
```json
{
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        }
    ]
}
```

### Update Customer:
- Endpoint: `https://reqres.in/api/users/$user_id`
- Method: `PUT`
- Payload:
```json
{
    "name": "new name",
    "job": "new job"
}
```
- Response:
```json
{
    "name": "new name",
    "job": "new job",
    "updatedAt": "2019-11-11T17:27:16.012Z"
}
```

### Delete Customer:
- Endpoint: `https://reqres.in/api/users/$user_id`
- Method: `DELETE`
