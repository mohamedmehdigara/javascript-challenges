
const myObj = { name: 'John', age: 35 };

const addEventing = function(myObj){



myObj.on("ageChange", function () {
  console.log("age changed");
});

myObj.trigger("ageChange"); // logs 'age changed'
}

module.exports = addEventing