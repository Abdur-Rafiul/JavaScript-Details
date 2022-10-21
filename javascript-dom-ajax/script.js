// Write your code here
var request = new XMLHttpRequest();
request.open(`GET`,`https://jsonplaceholder.typicode.com/posts`,true);
request.send();
request.onreadystatechange=function handleRequest(){
    console.log(request.responseText);
}
