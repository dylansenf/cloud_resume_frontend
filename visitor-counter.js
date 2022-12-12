function visitorCounter(){
    fetch("https://1l3wz1uv5a.execute-api.us-east-1.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => {
        document.getElementById("visitor-counter").innerHTML=body
    })
}