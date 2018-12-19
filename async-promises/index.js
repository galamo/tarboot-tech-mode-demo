console.log("starting script");

let user = { name: "gal", age: 30 };
let user2 = { name: "doli", age: 29 };

const loadUsers = () => {
  setTimeout(() => {
    console.log([user, user2]);
    // return [user,user2]
  }, 200);
};


//const result = loadUsers();
console.log(result);

console.log("end of script");

load();
console.log("script ends2");
