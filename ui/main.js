//Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store , it in variable
    request.onreadystatechange = function() {
        if(request.readystate === XMLHttpRequest.DONE) {
            //Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
};
    //Make the request    
    request.open('GET','http://srm143.imad.hasura-app.io/counter', true);
    request.send(null);
};
    
//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var Submit = document.getElementById('submit_btn');
submit.onclick = function () {
    //Maker a reqwuest to the server and send the name 
    
    //Capture a list of names and render it as a list
    var names = ['name1', 'name2', 'name3'];
    
}
