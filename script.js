var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all" );
request.send();
request.onload=function() {
var res = JSON.parse(request.response);
 console.log(res);
for(i=0;i<res.length;i++){
    console.log(res[i].name +  "  " + res[i].capital +  "  " + res[i].  flag +" " +res[i].subregion 
    +"  " +res[i]. population+"  " +res[i].region);
    

}
};


var obj1={
    name:"karthikeyan",
    age: 22
}
var obj2={
    age: 22,
    name:"karthikeyan"
    
}

console.log(JSON.stringify(obj1)===JSON.stringify(obj2));