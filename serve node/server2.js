
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';
import  schema  from './src';
//import { schema } from './src/schema';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import fileUpload from 'express-fileupload';

var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');


const myGraphQLSchema = schema;
const PORT = 5000;
const server = express();

//mongoose.connect("mongodb://localhost:27017/smart-syndic");
mongoose.connect("mongodb://root:root@ds119160.mlab.com:19160/smart-syndic");


server.use('*', cors({ origin: 'http://192.168.1.22:8080'}));

 server.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema}));
server.use('/graphiql', bodyParser.json(), graphiqlExpress({ endpointURL: '/graphql'}));
server.use(fileUpload());
server.use('/public', express.static(__dirname + '/public'));
server.post('/upload', (req, res, next) => {
  console.log(req);
  let imageFile = req.files.file;

  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({file: `public/${req.body.filename}.jpg`});
  });

})

server.listen(PORT, () =>
  console.log(`Your GraphQL server is running on port ${PORT}`)
);
