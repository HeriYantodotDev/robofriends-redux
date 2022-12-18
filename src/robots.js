// const generateFirstName = function() {
//     //200 names
//     const popularFirstName = ["James", "Robert", "John", "Michael", "David", "William", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua", "Kenneth", "Kevin", "Brian", "George", "Timothy", "Ronald", "Edward", "Jason", "Jeffrey", "Ryan", "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon", "Benjamin", "Samuel", "Gregory", "Alexander", "Frank", "Patrick", "Raymond", "Jack", "Dennis", "Jerry", "Tyler", "Aaron", "Jose", "Adam", "Nathan", "Henry", "Douglas", "Zachary", "Peter", "Kyle", "Ethan", "Walter", "Noah", "Jeremy", "Christian", "Keith", "Roger", "Terry", "Gerald", "Harold", "Sean", "Austin", "Carl", "Arthur", "Lawrence", "Dylan", "Jesse", "Jordan", "Bryan", "Billy", "Joe", "Bruce", "Gabriel", "Logan", "Albert", "Willie", "Alan", "Juan", "Wayne", "Elijah", "Randy", "Roy", "Vincent", "Ralph", "Eugene", "Russell", "Bobby", "Mason", "Philip", "Louis", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen", "Lisa", "Nancy", "Betty", "Margaret", "Sandra", "Ashley", "Kimberly", "Emily", "Donna", "Michelle", "Carol", "Amanda", "Dorothy", "Melissa", "Deborah", "Stephanie", "Rebecca", "Sharon", "Laura", "Cynthia", "Kathleen", "Amy", "Angela", "Shirley", "Anna", "Brenda", "Pamela", "Emma", "Nicole", "Helen", "Samantha", "Katherine", "Christine", "Debra", "Rachel", "Carolyn", "Janet", "Catherine", "Maria", "Heather", "Diane", "Ruth", "Julie", "Olivia", "Joyce", "Virginia", "Victoria", "Kelly", "Lauren", "Christina", "Joan", "Evelyn", "Judith", "Megan", "Andrea", "Cheryl", "Hannah", "Jacqueline", "Martha", "Gloria", "Teresa", "Ann", "Sara", "Madison", "Frances", "Kathryn", "Janice", "Jean", "Abigail", "Alice", "Julia", "Judy", "Sophia", "Grace", "Denise", "Amber", "Doris", "Marilyn", "Danielle", "Beverly", "Isabella", "Theresa", "Diana", "Natalie", "Brittany", "Charlotte", "Marie", "Kayla", "Alexis", "Lori"
//     ];
//     return popularFirstName[Math.floor(Math.random() * 200)];
// }

// const generateLastName = function() {
//     //100 names
//     const popularLastName = ["Smith",  "Johnson",  "Williams",  "Brown",  "Jones",  "Garcia",  "Miller",  "Davis",  "Rodriguez",  "Martinez",  "Hernandez",  "Lopez",  "Gonzales",  "Wilson",  "Anderson",  "Thomas",  "Taylor",  "Moore",  "Jackson",  "Martin",  "Lee",  "Perez",  "Thompson",  "White",  "Harris",  "Sanchez",  "Clark",  "Ramirez",  "Lewis",  "Robinson",  "Walker",  "Young",  "Allen",  "King",  "Wright",  "Scott",  "Torres",  "Nguyen",  "Hill",  "Flores",  "Green",  "Adams",  "Nelson",  "Baker",  "Hall",  "Rivera",  "Campbell",  "Mitchell",  "Carter",  "Roberts",  "Gomez",  "Phillips",  "Evans",  "Turner",  "Diaz",  "Parker",  "Cruz",  "Edwards",  "Collins",  "Reyes",  "Stewart",  "Morris",  "Morales",  "Murphy",  "Cook",  "Rogers",  "Gutierrez",  "Ortiz",  "Morgan",  "Cooper",  "Peterson",  "Bailey",  "Reed",  "Kelly",  "Howard",  "Ramos",  "Kim",  "Cox",  "Ward",  "Richardson",  "Watson",  "Brooks",  "Chavez",  "Wood",  "James",  "Bennet",  "Gray",  "Mendoza",  "Ruiz",  "Hughes",  "Price",  "Alvarez",  "Castillo",  "Sanders",  "Patel",  "Myers",  "Long",  "Ross",  "Foster",  "Jimenez",  
//     ];
//     return popularLastName[Math.floor(Math.random() * 100)]
// }

// const generateUserName = function(firstName,lastName) {
//     return firstName + "_" + lastName;
// }

// const generateEmail = function(userName) {
//     return userName + "@gmail.com";
// }


// const generateRobots = function(totalName) {
//     let robots =[];
//     for (let i=0; i< totalName; i++) {
//         const firstName = generateFirstName();
//         const lastName = generateLastName();
//         const userName = generateUserName(firstName,lastName);
//         const email = generateEmail(userName);
//         robots.push(
//             {
//                 id: i+1,
//                 name: firstName + " " + lastName,
//                 userName: userName,
//                 email: email,
//             }
//         )

//     }
//     return robots
// }

// export {generateRobots};

const generateRobots = {
    popularFirstName : ["James", "Robert", "John", "Michael", "David", "William", "Richard", "Joseph", "Thomas", "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Joshua", "Kenneth", "Kevin", "Brian", "George", "Timothy", "Ronald", "Edward", "Jason", "Jeffrey", "Ryan", "Jacob", "Gary", "Nicholas", "Eric", "Jonathan", "Stephen", "Larry", "Justin", "Scott", "Brandon", "Benjamin", "Samuel", "Gregory", "Alexander", "Frank", "Patrick", "Raymond", "Jack", "Dennis", "Jerry", "Tyler", "Aaron", "Jose", "Adam", "Nathan", "Henry", "Douglas", "Zachary", "Peter", "Kyle", "Ethan", "Walter", "Noah", "Jeremy", "Christian", "Keith", "Roger", "Terry", "Gerald", "Harold", "Sean", "Austin", "Carl", "Arthur", "Lawrence", "Dylan", "Jesse", "Jordan", "Bryan", "Billy", "Joe", "Bruce", "Gabriel", "Logan", "Albert", "Willie", "Alan", "Juan", "Wayne", "Elijah", "Randy", "Roy", "Vincent", "Ralph", "Eugene", "Russell", "Bobby", "Mason", "Philip", "Louis", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen", "Lisa", "Nancy", "Betty", "Margaret", "Sandra", "Ashley", "Kimberly", "Emily", "Donna", "Michelle", "Carol", "Amanda", "Dorothy", "Melissa", "Deborah", "Stephanie", "Rebecca", "Sharon", "Laura", "Cynthia", "Kathleen", "Amy", "Angela", "Shirley", "Anna", "Brenda", "Pamela", "Emma", "Nicole", "Helen", "Samantha", "Katherine", "Christine", "Debra", "Rachel", "Carolyn", "Janet", "Catherine", "Maria", "Heather", "Diane", "Ruth", "Julie", "Olivia", "Joyce", "Virginia", "Victoria", "Kelly", "Lauren", "Christina", "Joan", "Evelyn", "Judith", "Megan", "Andrea", "Cheryl", "Hannah", "Jacqueline", "Martha", "Gloria", "Teresa", "Ann", "Sara", "Madison", "Frances", "Kathryn", "Janice", "Jean", "Abigail", "Alice", "Julia", "Judy", "Sophia", "Grace", "Denise", "Amber", "Doris", "Marilyn", "Danielle", "Beverly", "Isabella", "Theresa", "Diana", "Natalie", "Brittany", "Charlotte", "Marie", "Kayla", "Alexis", "Lori"],
    popularLastName : ["Smith",  "Johnson",  "Williams",  "Brown",  "Jones",  "Garcia",  "Miller",  "Davis",  "Rodriguez",  "Martinez",  "Hernandez",  "Lopez",  "Gonzales",  "Wilson",  "Anderson",  "Thomas",  "Taylor",  "Moore",  "Jackson",  "Martin",  "Lee",  "Perez",  "Thompson",  "White",  "Harris",  "Sanchez",  "Clark",  "Ramirez",  "Lewis",  "Robinson",  "Walker",  "Young",  "Allen",  "King",  "Wright",  "Scott",  "Torres",  "Nguyen",  "Hill",  "Flores",  "Green",  "Adams",  "Nelson",  "Baker",  "Hall",  "Rivera",  "Campbell",  "Mitchell",  "Carter",  "Roberts",  "Gomez",  "Phillips",  "Evans",  "Turner",  "Diaz",  "Parker",  "Cruz",  "Edwards",  "Collins",  "Reyes",  "Stewart",  "Morris",  "Morales",  "Murphy",  "Cook",  "Rogers",  "Gutierrez",  "Ortiz",  "Morgan",  "Cooper",  "Peterson",  "Bailey",  "Reed",  "Kelly",  "Howard",  "Ramos",  "Kim",  "Cox",  "Ward",  "Richardson",  "Watson",  "Brooks",  "Chavez",  "Wood",  "James",  "Bennet",  "Gray",  "Mendoza",  "Ruiz",  "Hughes",  "Price",  "Alvarez",  "Castillo",  "Sanders",  "Patel",  "Myers",  "Long",  "Ross",  "Foster",  "Jimenez"],
    
    generateFirstName : function() {
        return this.popularFirstName[Math.floor(Math.random() * 200)];
    },

    generateLastName: function() {
        return this.popularLastName[Math.floor(Math.random() * 100)]
    },
    generateUserName: function(firstName,lastName) {
        return firstName + "_" + lastName;
    },
    generateEmail: function(userName) {
        return userName + "@gmail.com";
    },
    generate: function(totalName) {
        let robots =[];
        for (let i=0; i< totalName; i++) {
            const firstName = this.generateFirstName();
            const lastName = this.generateLastName();
            const userName = this.generateUserName(firstName,lastName);
            const email = this.generateEmail(userName);
            robots.push(
                {
                    id: i+1,
                    name: firstName + " " + lastName,
                    userName: userName,
                    email: email,
                }
            )

        }
        return robots
    }
}

export default generateRobots;