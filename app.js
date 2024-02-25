const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');
require('dotenv').config();
const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('657435660ea601d32c7811ff')
    .then(user => {
      console.log('usr',user._id.toString());
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://surya_pratap:y8aKvf0vlDquDUBA@cluster0.t0p5yri.mongodb.net/shop?retryWrites=true&w=majority')
.then(result =>{
  User.findOne().then(user =>{
    if(!user){

      const user = new User({
        name: 'aman',
        email: 'aman@gmail.com',
        cart:{
          items: []
        }
      });
    
      user.save();
    }
  });

    app.listen(3000, ()=>{
      console.log('listening');
        });
}
)
.catch(err => console.log(err));
