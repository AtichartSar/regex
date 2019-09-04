

var name=document.getElementById('name').value;

function button1() {
    var result=name.value;
   console.log(result);
   console.log(name);
   
   
}

var re=new RegExp("^[ก-๏\s]+$");
var str="";
if(re.test(str)){
    console.log('thai');
    
}
console.log('hello');
