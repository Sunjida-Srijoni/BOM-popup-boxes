function welcomeMessage(){
    var h1 = document.createElement("h1");
    let text;

    var name = prompt("Enter your name: ");
    if(name == null || name == ""){
        text = "no name found";

    }
    else{
        text = name;
    }

    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}

welcomeMessage();