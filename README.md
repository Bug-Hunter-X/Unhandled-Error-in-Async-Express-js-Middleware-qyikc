# Unhandled Error in Async Express.js Middleware
This repository demonstrates a common error in Express.js applications: improper error handling within asynchronous middleware.  When asynchronous operations throw errors, if not handled correctly, the entire server can crash.  This example shows the problem and a solution.

## Bug
The `bug.js` file showcases an Express.js server with an asynchronous route handler.  The `someAsyncOperation` function simulates an operation that can fail randomly. If it fails, an error is thrown but not caught properly, leading to the server's crash.

## Solution
The `bugSolution.js` file demonstrates the correct way to handle such errors using `try...catch` blocks and centralized error handling middleware.
