setInterval(myTimer, 1000);
 function myTimer()
 {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var second = date.getSeconds();
  // Check whether AM or PM
  var newformat = hours >= 12 ? 'PM' : 'AM'; 
  
  // Find current hour in AM-PM Format
  hours = hours % 12; 
  
  // To display "0" as "12"
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;
  // document.getElementById("demo").innerHTML=d.toLocaleTimeString() +;
  document.getElementById("demo").innerHTML =hours+ ' :' +minutes+' :'+second+' ' + newformat;
  
}