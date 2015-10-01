## BASIC API
Everyone needs an API these days, am I right? So, this is a basic API (as the name says) with a nice M(V)C structure
'Cause if you liked it, then you should have put a *star* on it. *sings*

Built with Express and Mongoose

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
GET: ``http://localhost:3000/post/:id``

#### Show Hidden Posts
GET: ``http://localhost:3000/posts?showHidden=1``

#### Add Post
POST: ``http://localhost:3000/post/add``
Check Post Schema

#### Delete a Post
PUT: ``http://localhost:3000/post/del``
_id as key, and sets the post as hidden.

#### Edit a Post
PUT: ``http://localhost:3000/post/edit``

___

Theres a couple of TODOs, I will add more validations and make it a bit more secure. 

Enjoy,
B.

