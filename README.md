# BASIC API

Everyone needs an API these days, am I right? So, this is a basic API (as the name says) with a nice M(V)C structure.

Built with Express and Mongoose, and ES6 Native Promises. 

No more Mongoose Callbacks


**'Cause if you liked it, then you should have put a star on it.**

http://okbel.github.io/basicAPI/


----------

### Using Git
1. Clone this repository: ``$ git clone https://github.com/okbel/basicAPI.git``
2. Install the dependencies in the repository folder: ``$ npm install``
3. Run MongoDB: ``$ sudo mongod``
4. Run the server instance: ``$ npm start``
5. Enjoy!

### Endpoints

#### Posts
GET: ``http://localhost:3000/posts/``

#### Post by ID
GET: ``http://localhost:3000/posts/:id``

#### Show Hidden Posts
GET: ``http://localhost:3000/posts?showHidden=1``

#### Add Post
POST: ``http://localhost:3000/posts``

> *Parameters:*
> - title
> - author
> - body

(Check Schema)

#### Delete a Post
DEL: ``http://localhost:3000/posts/:id``

#### Edit a Post
PUT: ``http://localhost:3000/posts/:id``

> *Parameters:*
> - title
> - author
> - body
(Check Schema)

***

Theres a couple of TODOs, I will add more validations and make it a bit more secure. 

TODOS: 
- Validations
- Security
- Tasks to generate Models and its Controller

Enjoy,
**B.**



