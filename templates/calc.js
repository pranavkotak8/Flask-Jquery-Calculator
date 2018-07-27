$(document).ready(function(){

	$('#ac').click(function(){
		$('#ac').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val('');
		});
	});

	$('#plus').click(function(){
		$('#plus').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#-').click(function(){
		$('#-').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#x').click(function(){
		$('#x').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + '*' );
		});
	});

	$('#7').click(function(){
		$('#7').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#8').click(function(){
		$('#8').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#9').click(function(){
		$('#9').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#divide').click(function(){
		$('#divide').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#4').click(function(){
		$('#4').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#5').click(function(){
		$('#5').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#6').click(function(){
		$('#6').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#dot').click(function(){
		$('#dot').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#1').click(function(){
		$('#1').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#2').click(function(){
		$('#2').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#3').click(function(){
		$('#3').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#0').click(function(){
		$('#0').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( $('#text').val() + $(this).val() );
		});
	});

	$('#equals').click(function(){
		$('#equals').addClass('btn-click').delay(100).queue(function(){
			$(this).removeClass('btn-click').dequeue();
			$('#text').val( eval( $('#text').val() ) );
		});
	});

	$(".circle").click(function(e){

		e.preventDefault();
		$(".circle").removeClass("animated zoomIn").addClass("animated rubberBand").one("webkitAnimationEnd MSAnimationEnd oanimationend animationend", function(){
			$(this).removeClass("animated rubberBand");	
			window.open("home.html", "_self")
		});

	});

});