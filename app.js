const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Udah beres ni belajar dari sini <a href="https://aws.amazon.com/getting-started/learning-path-devops-engineer/">https://aws.amazon.com/getting-started/learning-path-devops-engineer/</a>'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
