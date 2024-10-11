// elements
var sendBtn = document.getElementById('sendBtn');
var textbox = document.getElementById('textbox');
var chatContainer = document.getElementById('chatContainer');


var user = {message:""};
var arrayOfPossibleMessage = [
    // {"message":"", "response":""}
    {"message":"how are you?", "response":"I'm great"},
    {"message":"hi.", "response":"Hello!"},
    {"message":"who are you?", "response":"I'm your assistant"},
    {"message":"what's your name?", "response":"My name is Rek"},
    {"message":"what is your name?", "response":"My name is Rek"},
    {"message":"how old are you?", "response":"I'm ageless "},

]

setTimeout(function(){
    chatbotSendMessage("Hi, I'm Rek What is your name?");
},1000);



function sendMessage(messageText){

    var messageElement = document.createElement('div'); // this creates <div> 
    messageElement.classList.add('w-50', 'float-right', 'shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";
    messageElement.innerHTML = "<span style="+"margin-top: 10px; padding: 10px"+">"+ messageText +"</span>"
    
    messageElement.animate([{easing:"ease-in", opacity:0.4}, {opacity:1.0}], {duration: 100});
    
    chatContainer.appendChild(messageElement);
}

function chatbotSendMessage(messageText){
    
    var messageElement = document.createElement('div'); // this creates <div>
    messageElement.classList.add('w-50', 'float-left', 'shadow-sm');
    messageElement.style.margin = "10px";
    messageElement.style.padding = "5px";
    messageElement.innerHTML = "<span style="+"margin-top: 10px; padding: 40px"+">"+ messageText +"</span>"
    
    messageElement.animate([{easing:"ease-in", opacity:0}, {opacity:1}], {duration: 1000});


    chatContainer.appendChild(messageElement);
}

// this callback function will grab the text from the user 
sendBtn.addEventListener('click', function(e){
    if (textbox.value == ""){
        return;
    }

    let messageText = textbox.value;
    sendMessage(messageText);
    textbox.value = "";
    user.message = messageText; // possible user message
    processMessag();

});

function processMessag(){
    // array of results

    var result = arrayOfPossibleMessage.filter(val=> val.message.includes(user.message.toLowerCase()));
    if (result.length > 0){
        
                var response = result[0].response;
                setTimeout(function(){
                    chatbotSendMessage(response);
                },500);
            }
    else{
        setTimeout(function(){
            chatbotSendMessage("I don't understand.")
        })
    }
}