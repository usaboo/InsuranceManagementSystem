
const express = require("express");
var mysql = require('mysql')
var bodyParser = require('body-parser')
var uuid = require('uuid');
 
const PORT = process.env.PORT || 3001;

var db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database: 'nodemysql' 
})

db.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log('connection was successful');
    }
})

const app = express();
app.use(express.urlencoded({extended : true}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())




app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


app.post("/createuser",(req,res) =>{
    // comes in as firstname, lastname, username, email, contact, password
    //for debugging -console.log(req.body);
    let sql1 = 'SELECT * FROM USERS WHERE Username = ?'
    db.query(sql1,req.body.values[2],(err,result,fields)=>
    {
        // for deugging - console.log(result)
        if(result.length>0)
        {
            console.log('Sorry this username has been taken')
            res.send('Sorry this username has been taken')
        }
        else
        {
            let sql2 = 'INSERT INTO USERS(Fname, Lname,Username,Email,Contact, Password) VALUES (?,?,?,?,?,?)'
            db.query(sql2, [req.body.values[0], req.body.values[1], req.body.values[2], req.body.values[3], parseInt(req.body.values[4]), req.body.values[5]],(errs,results,fieldss)=>
            {
                if(errs)
                {
                    console.log(errs)
                    res.send('Sorry server error')
                }
                else
                {
                    console.log('User created successfully')
                    res.send('User created successfully')
                }
            })
        };
    });    
});


app.post('/makepayment',(req,res)=>{
    console.log(req.body.values)
    let today = new Date().toLocaleDateString()
    let username = req.body.values[4].Username
    let cardname = req.body.values[0]
    let cardnumber = req.body.values[1]
    let cardexp = req.body.values[2]
    let sendemail = req.body.values[3]
    let paymentid = uuid.v1()
    let payplan = req.body.values[5]
    let paymentamt = req.body.values[6]
    let sql = 'INSERT INTO payments (Cardnumber,Cardname,Expiry,Email,Username,PaymentID,paymentamt,paymentdate,plan) VALUES(?,?,?,?,?,?,?,?,?)'
    db.query(sql,[cardnumber,cardname,cardexp,sendemail,username,paymentid,paymentamt,today,payplan],(err,result,fields)=>{
        if(err) 
        {
            console.log(err);
        }
        else
            if(result)
            {
                res.send('success')
                console.log('successfully inserted')
            }
    })

})

app.post("/login",(req,res)=>{
    //comes in as username, password
    console.log(req.body)
    console.log(req.body.values.var1)
    let sql = 'SELECT * from Users where Username = ? and Password = ?'
    db.query(sql,[req.body.values.var1 , req.body.values.var2],(err,result,fields)=>{
        if(err) 
        {
            console.log(err);
        }
        else
        {  
            if(result)
            {
                console.log(result)
                res.send(result)
            }
        } 
    })
})

app.post("/adminlogin",(req,res)=>{
    //comes in as username, password
    console.log(req.body)
    console.log(req.body.values.var1)
    let sql = 'SELECT * from Users where Username = ? and Password = ? and admin = 1'
    db.query(sql,[req.body.values.var1 , req.body.values.var2],(err,result,fields)=>{
        if(err) 
        {
            console.log(err);
        }
        else
        {  
            if(result)
            {
                console.log(result)
                res.send(result)
            }
        } 
    })
})

app.post("/fetchdat",(req,res)=>{
    console.log(req.body)
    let sql = 'SELECT * from payments where Username = ?'
    db.query(sql, [req.body.values],(err,result,fields)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if (result)
            {
                res.send(result)
            }
        }
    })
})

app.post("/alldata",(req,res)=>{
    console.log(req.body)
    let sql = 'SELECT * from payments'
    db.query(sql,(err,result,fields)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if (result)
            {
                console.log(result)
                res.send(result)
            }
        }
    })
})


app.post("/delplan",(req,res)=>{
    console.log(req.body.values)
    let sql = 'DELETE from payments where PaymentID = ?'
    db.query(sql,[req.body.values],(err,result,fields)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            if (result)
            {
                console.log(result)
                res.send(result)
            }
        }
    })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});