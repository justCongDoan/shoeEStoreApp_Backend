const express = require('express');
const productRouter = require('./router/productRoutes');
const orderRouter = require('./router/orderRoutes');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/products', productRouter);
app.use('/orders', orderRouter);


app.get('/', (req, res) => {
	res.send("<h2>Hello world :))</h2>");
});

app.listen(PORT, () => {
    console.log('API is listening on port ', PORT);
});