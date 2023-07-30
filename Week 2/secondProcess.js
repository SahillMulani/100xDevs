function logResponseBody(jsonBody)
{
    console.log(jsonBody);
}

function callback(result)
{
    result.json().then(logResponseBody)
}

fetch("http://localhost:3000/handleSum?counter=100" , {
    method : "GET"}).then(callback);