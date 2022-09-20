const express = require('express');
const app = express();
const body_Parser = require('body-parser');
const path = require('path');
const dates = require(__dirname+'/date');
app.use('/public',express.static(path.join(__dirname,'\public')));
console.log(__dirname);



app.use(body_Parser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.engine('ejs', require('ejs').__express);
var items = [];
var workItems = [];

app.get('/',function(req,res){
    console.log(items);
    var date = new Date();
   
   
    var today1 = dates.getDate();
    day = date.getDay();
    var kindofDay = '';
    var today=''

    if(day === 6 || day === 0){
        kindofDay = 'weekend';
    
    }
    else{
        kindofDay = 'weekday';
    }

    switch(day){
    
    case 0:
        today='Sunday';
        break;
    
    case 1:
        today='Monday';
        break;

    case 2:
        today = 'Tuesday';
        break;

    case 3:
        today = 'Wednesday';
        break;
    
    case 4:
        today = 'Thursday';
        break;
    
    case 5:
        today = 'Friday';
        break;

    case 6:
        today = 'Saturday';
        break;
    }

    res.render('list',{dayType : kindofDay , NameDay : today1,data:items});
    console.log(items);
});

app.post('/',function(req,res){
    var member = req.body.mem;
    console.log('list',req.body.list)

    if(req.body.list == 'Work'){
        workItems.push(member);
        res.redirect('/work')
    }
    else{
        items.push(member);
        res.redirect('/');
    }
   
});

app.get('/work', function(req,res){
    res.render('list',{NameDay : 'Work List',data:workItems,dayType : 'Work List'});
});

app.get('/about',(req,res)=> {
    res.render('about');
})





app.listen(8000 ,function(){
    console.log('Started running on the portal 8000');
})