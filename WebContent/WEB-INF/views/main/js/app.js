$(function () {
	$.ajax({
		url: 'http://localhost:8282/books/',
		type: 'GET',
		dataType: "json",
		success: function (data) {
			var books = data;
			var size = data.length;
			console.log(data.length);
			console.log(size);
			console.log(books);
			for (var i = 0; i < size; i++) {
				console.log(data[i]);
				$("ul.main").append('<li>' + data[i].title + '</li>' + '<button value="'+ data[i].id +'" type="button">Details</button>' + '<div class="button' + data[i].id +'">' + '<li>Author:' + data[i].author + '</li>' + '<li>Publisher: ' + data[i].publisher + '</li>' + '<li>Type: ' + data[i].type + '</li>' +'</div>');
				// dodawanie tabeli z książkami
				//  var x = $("table").append('<tr><td>'+ data[i].id +'</td>' + '<td>'+ data[i].isbn +'</td>' + '<td>'+ data[i].title +'</td>' + '<td>'+ data[i].author +'</td>' + '<td>'+ data[i].publisher +'</td>' + '<td>'+ data[i].type +'</td></tr>');				

		}
            var btn = $("button");
            for(var i = 0; i < btn.length; i++){
                btn[i].addEventListener('click', function(){
                	var id = this.value;
                    info(id);
                });
            }
            function info(id){
                $.ajax({
                    url: 'http://localhost:8282/books/' + id,
                    type: 'GET',
                    dataType: "json",
                    success: function (data) {
                    	var view = $('.button' + id);
                    	if(view.css('display') == 'block'){
                    		view.css('display', 'none');
						}else {
                            view.css('display', 'block');
                        }
                    }
                });
			}

            $( "form" ).on( "submit", function( event ) {
                event.preventDefault();
                console.log("FORM PRZECHWYCONY");
                console.log( $( this ).serialize() );

                // $.ajax({
                //             url: 'http://localhost:8282/books/',
                //             type: 'POST',
                //             dataType: "json",
					// 		data: $( this ).serialize(),
                //             success: function (data) {
                //                 var view = $('.button' + id);
                //                 if(view.css('display') == 'block'){
                //                     view.css('display', 'none');
                //                 }else {
                //                     view.css('display', 'block');
                //                 }
                //             }
                //         });
                // if (confirm("CZY NA PEWNO?")) {
                //     alert('wybrałeś tak!'); //tutaj ajax z delete
                // } else {
                //     alert('wybrałeś nie');
                // }


            });
	}
	});
});
