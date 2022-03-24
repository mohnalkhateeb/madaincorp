(function() {
   
    // url
   var url = "http://www.filltext.com/?callback=?";
    
   // options
   var options = {  
     'FirstName': '{firstName}',
     'LastName': '{lastName}',
     'Category':'["category1","category2","category13"]',
   }
   
   // display headers from options
   var header = "";
   for( var name in options ) header +='<th class="head">' + name + '</th>'; 
   $("header").html(header);
    
   // get x items
   options.rows = 5;
   options.pretty = true;
    
   // fetch
   $.getJSON( url,options)
   .done(function( data ) { 
     
     // show json in results
     $("#result").html("<p>JSON</p>" + JSON.stringify(data));
     
     //console.log(data); 
     
     // add each row of items
     var html = "";
     $.each( data, function( i, item ) {
       html += "<tr>";
       for( var prop in item ) {
         if ( prop != "_" )
           html += "<td #nowrap>" + item[prop] + "</td>"; 
       }
      html += "</tr>";
     });
     
     // display
     $("#tbody").appendchild(html);
   });
});
