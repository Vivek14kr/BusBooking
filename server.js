const app = require ('./index');

const connect = require ('./configs/db');

const PORT = process.env.PORT || 2344

app.listen (PORT, async (req, res) => {
  await connect ();
  console.log ('listening to 2344');
});