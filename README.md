
# User CRUD operation using React FE and Nodejs BE.

## Backend Setup

Install backend with npm

```bash
  cd server
  npm install
  npm start
```
Nodejs server will be hosted on  
```bash
  http://localhost:8001/
```


    
## Database Setup

1. Download and install xampp server from https://www.apachefriends.org/download.html
2. Open xampp > click on ```start``` button next to Apache and MySQL.
3. Open http://localhost/phpmyadmin/
4. import ```userdb.sql``` database from this repo.





    
## Frontend Setup

Install with npm

```bash
  cd client
  npm install
  npm start
```
and open 
```bash
  http://localhost:3000/
```


    
## Usage
1. http://localhost:3000/ opens a dashboard pages which fetches list of user from Database.
2. http://localhost:3000/add redirects to create user page to add new user into Database.
3. http://localhost:3000/update redirects to update user page.

