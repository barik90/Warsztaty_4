$(function () {
	//<link rel="stylesheet" href="css/style.css">
	$.ajax({
		// http://localhost:8282/books/
		// url: 'https://swapi.co/api/people/4/',
		url: 'http://localhost:8282/books/',
		type: 'GET',
		dataType: "json",
		success: function (data) {
			var books = data;
			var size = data.length;
			console.log(data.length);
			console.log(size);
;			console.log(books);
			// console.log(books.title.length);
			// var size = books.lenght;
			 for(var i = 0; i < size; i++){
				 console.log(data[i]);
				 var x = $("table").append('<tr><td>'+ data[i].id +'</td>' + '<td>'+ data[i].isbn +'</td>' + '<td>'+ data[i].title +'</td>' + '<td>'+ data[i].author +'</td>' + '<td>'+ data[i].publisher +'</td>' + '<td>'+ data[i].type +'</td></tr>');
			 }
			// console.log(data[1].lenght);

			// $("td").text( data.birth_year );

			//  for (var i=0; i<3; i++) {
			// 	 console.log("tak");
			//  	console.log(data.id[i]);
			//  }
			// var c = data;
			// console.log(c);
		}
	});

	/*
		$( "form" ).on( "submit", function( event ) {
		  event.preventDefault();
		  console.log("FORM PRZECHWYCONY");
		  console.log( $( this ).serialize() );
	
		  if (confirm("CZY NA PEWNO?")) {
				alert('wybrałeś tak!'); //tutaj ajax z delete
		  } else {
				alert('wybrałeś nie');
		  }
	*/
	/*
				$.ajax({
				url: 'https://swapi.co/api/people/4',
				type: 'PUT', //POST
				data: $( this ).serialize(), //dane z POST
				success: function(data) { 
					console.log(data);
				}
			});
	
			$.ajax({
				url: 'https://swapi.co/api/people/4',
				type: 'DELETE',
				success: function(data) { 
					console.log(data);
				}
			});
	
	
		});
	*/
	/*
	
	*/

});
