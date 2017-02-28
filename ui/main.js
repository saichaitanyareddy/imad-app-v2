//counter code
var button = document.getElementById('counter');


button.onclick = function () {
    // make a request to the counter endpoint
    
    var request = new XMLHttprequest();
    //capture the response and store it in the variables
    request.onreadystatechange = function () {
        if(request.readyState===XMLHttpRequest.DONE) {
            if(request.status==200) {
                var counter=request.responseText;
                 var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://http://saichaitanyareddy.imad.hasura-app.io/counter',true);
    request.send(null);
  
    
   
};
