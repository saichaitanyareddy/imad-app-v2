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
};
    request.open('GET','http://http://saichaitanyareddy.imad.hasura-app.io/counter',true);
    request.send(null);
  
    var name=document.getElementById('name');
    var name=nameInput.value;
    var submit=document.getElementById('submit_btn');
    submit.onclick= function() {
   var name=['name1','name2','name3'];
   var list='';
  for(var i=0;i<names.lenth;i++) {
      list +- '<li>'+names[i]+'</li>';
       }
       var ul=document.getElementById('namelist');
       ul.innerHTML=list;
};
