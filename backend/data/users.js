/*
we're going to prepare our data because we want to have what we call a database seeder,
database seeder is a script that we can run and it will seed the database.
We'll just add some some dummy data for users
and the seeder script will take these users and insert them into the database.
*/
/*
since we're using MongoDB or just about any database, when you insert a record, 
it automatically creates the ID, So we don't need these IDs in the Users, so let's just go ahead and get rid of these IDs.
*/
/*
remember we can't just store the plain password.
And we want this seeder to work like as if a real user was registering.
So the password would be hashed in that case.
Now to hash passwords, we're going to be using a package called bcryptjs.
*/
import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Jane Doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;