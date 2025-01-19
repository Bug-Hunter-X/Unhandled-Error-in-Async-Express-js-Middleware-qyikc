const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // The error is not handled correctly in this case, it will crash the app
    console.error(error);
  });
});

async function someAsyncOperation() {
  // Simulate an operation that can fail
  const success = Math.random() < 0.5; // 50% chance of failure
  if (!success) {
    throw new Error('Something went wrong!');
  }
  await new Promise(resolve => setTimeout(resolve, 1000));
  return true;
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});