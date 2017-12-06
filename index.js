const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.plugin(require('mongoose-unique-validator'));

const router          = require('./config/routes');
const expressJWT = require('express-jwt');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { port, dbURI, env, secret } = require('./config/environment');
const customResponses = require('./lib/customResponses');
const errorHandler = require('./lib/errorHandler');

mongoose.connect(dbURI, { useMongoClient: true });

if('test' !== env) app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

app.use(customResponses);

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));
app.use('/api', router);
app.use('/api', expressJWT({ secret: secret })
  .unless({
    path: [
      { url: '/api/register', methods: ['POST'] },
      { url: '/api/login', methods: ['POST'] },
      { url: '/api/users', methods: ['GET'] }
    ]
  })
);

app.use(errorHandler);
app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name !== 'UnauthorizedError') return next();
  console.log('THIS IS THE JWT ERROR', err);
  return res.status(401).json({ message: 'You must be logged in to view this content' });
}

app.listen(port, () => console.log(`Express is listening on port ${port}`));

module.exports = app;
