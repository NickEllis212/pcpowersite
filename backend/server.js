import express from 'express';
import data from './data.js'
import * as path from 'path';

const app = express();

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.get('/api/products', (req, res) =>{
    res.send(data.products);
});


const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`);
});

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production'){

  app.use(express.static(__dirname+'/frontend/build'))

  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))

  })

}
else{
  app.get('/', (req, res) => {
    res.send('Server is ready');
});

}


