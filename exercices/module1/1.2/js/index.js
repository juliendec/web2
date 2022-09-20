
function addDateTime(message){
    const dateTimeNow = new Date();
    console.log(dateTimeNow.toLocaleDateString() + " " + dateTimeNow.toLocaleTimeString() + " : " + message);
    alert(dateTimeNow.toLocaleDateString() + " " + dateTimeNow.toLocaleTimeString() + " : " + message);
}

myMessage = "This is the best moment to have a look at this website !";
addDateTime(myMessage)


