const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const { auth } = require('./middleware/auth');
const { User } = require('./models/User');

const port = 5000;

// application/x-www-form-urlencoded 형태의 데이터를 분석해서 가져올 수 있음
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json());
app.use(cookieParser());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myUser')  // 3강, 9강: dev/deploy 모드일 때 각각의 설정방법 설명
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use("/api/users", require('./routes/users'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));