import * as express from 'express';
import Stuff from '../models/Boxers';
let router = express.Router();

router.get('/api/stuff', (req, res, next)=>{
  Stuff.find().then((stuff)=>{
    res.send(stuff);
  });
});

export = router;
