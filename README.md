<h1 align="center">
    <a href="#"> Food Explorer - API Restful</a>
</h1>

<p align="center">
	
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="welcome!" />
	
  <img src="https://img.shields.io/github/languages/count/exodogurgel/food-explorer-backend" alt="languages" />
	
  <img alt="Github License" src="https://img.shields.io/github/license/exodogurgel/food-explorer-backend" />


</p>


<h4 align="center"> 
	 Status: Finished
</h4>

<p align="center">
 <a href="#-about">About</a> •
 <a href="#-features">Features</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-tech-stack">Tech Stack</a> • 
 <a href="#-author">Author</a> • 
 <a href="#-license">License</a>
</p>

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="foodexplorer" title="#foodexplorer" src=".github/Capa.png" width="100%">

</p>

---

## 💻 About

API Restful - The application that we will develop is a digital menu for a fictional restaurant, known as foodExplorer.

In this challenge, the following topics were addressed:

- Express;
- Routes and http method;
- Params;
- Controllers;
- Middleware;
- SQL;
- Migrations;
- Query Builder;
- Knex;
- JWT;
- Disk Storage;
- Cors;
---

## ⚙️ Features

- [x] A structured project, with a good organization of folders, division of components in the front-end, etc.
- [x] A README.md file with specifications on how to run the project in a dev environment.
- [x] Users must authenticate themselves to enter the application through the login screen, you can apply what you learned in JWT authentication classes. Authentication must be validated with a password.
- [x] The admin will upload images to register the dishes.
- [x] Finally, deploy your application.
- [x] Give your functions and variables meaningful names: work with Clean Code concepts a bit.
- [x] The admin, restaurant and users data will be stored in a database.
- [x] Possibility to search by dish name, ingredients or favorite dish
- [x] It is essential that your interface consumes its own API.
- [x] Interesting to make the application responsive: use the concept of Mobile First that was learned in class.
- [x] It's up to you where to apply animations, transitions, and transformations.
- [x] It meets the model proposed in Figma and contains elements indicative of action and state.
opcionais
- [x] The user can add items to the cart by clicking the add button. The amount is controlled by the “-” and “+” buttons;
- [x] By clicking on the my order button, the user will be redirected to a screen where he will see his order, the sum and the payment methods;
- [x] The user will be able to delete a dish from the cart and the total amount of the order should be updated automatically;
- [x] The user can mark a dish as a favorite, just click on the heart that appears next to each one;
- [x] The admin will view and control the status of each order, through a select field. Orders will appear in a table when you click Orders;
---

## 🚀 How it works

This project is divided into three parts:
1. Backend (food-explorer-backend folder) 
2. Frontend (food-explorer-frontend folder)

### Pre-requisites
Before you begin, you will need to have the following tools installed on your machine: [Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/). In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)


#### 🎲 Running the Server (Backend)

```bash
# Clone this repository
$ git clone git@github.com:exodogurgel/food-explorer-backend.git

# Access the project folder in your terminal
$ cd food-explorer-backend

# Install the dependencies
$ npm install

# run the migration and seed
$ npm migrate
$ npm seed

# Run the application in development mode
$ npm run dev

# Admin login
$ email: admin@email.com
$ password: 090807

# The Server will start at port: 3333 - go to http://localhost:3333
```
---

## 🛠 Tech Stack

The following tools were used in the construction of the project:
- [Express](https://expressjs.com/)
- [CORS](https://expressjs.com/en/resources/middleware/cors.html)
- [KnexJS](http://knexjs.org/)
- [SQLite](https://github.com/mapbox/node-sqlite3)
- [Node](https://github.com/node)
- [Multer](https://github.com/expressjs/multer)

---

## 💻  **Project** 
The application that we will develop is a digital menu for a fictional restaurant, known as foodExplorer.
---
## 🦸 Author

<a href="https://blog.rocketseat.com.br/author/exodo/">
 <img style="border-radius: 50%;" src="https://github.com/exodogurgel/exodogurgel/blob/main/images/b11993be-e073-4a30-adae-2fee655ccdd5.png?raw=true" width="100px;" alt="Êxodo Gurgel"/> 
 <br />
 <sub><b>Êxodo Gurgel</b></sub></a> <a href="https://blog.rocketseat.com.br/author/exodo/" title="Rocketseat"></a> 🚀
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Exodo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/exodo-gurgel/)](https://www.linkedin.com/in/exodo-gurgel/) 
[![Gmail Badge](https://img.shields.io/badge/-exodowellis@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:exodowellis@gmail.com)](mailto:exodowellis@gmail.com)

---

## 📝 License

This project is under the license [MIT](./LICENSE).

Made with ❤️ by Êxodo Gurgel 👋🏽 [Get in Touch!](Https://www.linkedin.com/in/exodo-gurgel/)

---
