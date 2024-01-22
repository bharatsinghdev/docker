import express from "express"
import mysql from "mysql2"

const app = express()

app.use(express.json())
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
});


connection.query(
    `
    CREATE TABLE Persons
     (
      PersonID int,
      LastName varchar(255),
      FirstName varchar(255),
      Address varchar(255),
      City varchar(255) 
    );`,
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);


// connection.query(
//     `
//     INSERT INTO Persons (PersonID, LastName, FirstName, Address, City) VALUES 
//         (1, 'Johnsson', 'Anna', '123 Main St', 'New York'),
//         (2, 'Williams', 'Mary', '456 Park Ave', 'Miami'), 
//         (3, 'Jones', 'John', '789 Church St', 'Boston'),
//         (4, 'Brown', 'Paul', '246 5th Ave', 'Chicago'),
//         (5, 'Davis', 'Jennifer', '135 Maple St', 'Houston'),
//         (6, 'Miller', 'Michael', '321 River Rd', 'Detroit'),
//         (7, 'Wilson', 'William', '876 Forest Ave', 'Seattle'),  
//         (8, 'Moore', 'James', '159 Harrison Ct', 'San Francisco'),
//         (9, 'Taylor', 'Sarah', '243 Oak St', 'Los Angeles'),
//         (10, 'Anderson', 'Jessica', '135 Jefferson Way', 'Washington'),
//         (11, 'Thomas', 'Christopher', '987 Hilltop Rd', 'Phoenix'),
//         (12, 'Jackson', 'Matthew', '791 Park Dr', 'Salt Lake City'),
//         (13, 'White', 'Amanda', '631 Main St', 'Oklahoma'), 
//         (14, 'Harris', 'Daniel', '459 12th Ave', 'Louisville'),
//         (15, 'Martin', 'Mark', '234 Highland Ct', 'Las Vegas'), 
//         (16, 'Thompson', 'Samantha', '123 Sesame St', 'Portland'),
//         (17, 'Garcia', 'Linda', '890 Evergreen Ter', 'San Diego'),
//         (18, 'Martinez', 'Maria', '1945 Harbor Blvd', 'Orlando'),
//         (19, 'Robinson', 'Patricia', '556 Washington Blvd', 'Denver'),
//         (20, 'Clark', 'Nancy', '1870 Oak St', 'Kansas')
//     `,
//     function (err, results, fields) {
//         console.log(results); // results contains rows returned by server
//         console.log(fields); // fields contains extra meta data about results, if available
//     }
// );



connection.query(
    'SELECT * FROM `table` WHERE `name` = "New York" AND `age` > 45',
    function (err, results, fields) {
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
    }
);

app.get("/", (req, res) => {
    console.log(res.body)
    return res.send(connection);
})

app.listen(8002, () => {
    console.log("working cool")
})