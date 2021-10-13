const router = require('./routes');
const express = require('express');

const app = express();
const port = 4000;
app.use(router);

app.listen(port, () => {
  console.log(`Express nodeJS server listening at http://localhost:${port}`);
});
