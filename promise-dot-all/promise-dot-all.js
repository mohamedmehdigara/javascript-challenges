function all(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedPromises = 0;

    for (let i = 0; i < promises.length; i++) {
      promises[i].then(value => {
        results[i] = value;
        completedPromises++;

        if (completedPromises === promises.length) {
          resolve(results);
        }
      }).catch(reject);
    }
  });
}

module.exports = all;
