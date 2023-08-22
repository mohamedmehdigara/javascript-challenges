const addEventing = function (obj) {
  // Create an object to store event listeners
  const events = {};

  // Add the 'on' property to register event listeners
  obj.on = function (eventName, callback) {
    if (!events[eventName]) {
      events[eventName] = [];
    }
    events[eventName].push(callback);
  };

  // Add the 'trigger' property to execute all event listeners for the given event name
  obj.trigger = function (eventName, ...args) {
    if (events[eventName]) {
      events[eventName].forEach(callback => {
        callback(...args);
      });
    }
  };

  // Return the object with the added properties 'on' and 'trigger'
  return obj;
};

const obj = addEventing({ name: 'Kelsey', age: 30 });

// Now, you can use the 'on' and 'trigger' properties of the obj
obj.on("ageChange", function () {
  console.log("age changed");
});

obj.trigger("ageChange"); // logs 'age changed'

module.exports = addEventing;

