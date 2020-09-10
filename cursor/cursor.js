$(document).ready(function() {
	$(".hamburger-menu-button").click(function() {
		$(".main-box").toggleClass("main-box-clicked");
		$(".hamburger-box").toggleClass("hamburger-box-clicked");
	});

	var cursor = $(".cursor");

	$(window).mousemove(function(e) {
		cursor.css({
			top: e.clientY - cursor.height() / 2,
			left: e.clientX - cursor.width() / 2
		});
	});

	$(window)
		.mouseleave(function() {
			cursor.css({
				opacity: "0"
			});
		})
		.mouseenter(function() {
			cursor.css({
				opacity: "1"
			});
		});

	var video = $('.slider.active').find('video').get(0) == undefined ? true : false;
    // if(video){
		$(".link")
		.mouseenter(function() {
			cursor.css({
				border: 'none',
				background: 'rgba(255, 255, 255, 0.2)',
				transform: "scale(.8)",
				opacity: '0.2'
			});
			if (video) {
				v();
			}
			

			// $('.cursor').removeClass('stop');
			$('.cursor').addClass('none_play');
		})
		.mouseleave(function() {
			cursor.css({
				border: '2px solid #ffffff',
				background: 'none',
				transform: "scale(1)",
				opacity: '0.2',
				// transition: '.5s'
			});
			if (video) {
				v();
			}else{
				$('.cursor').addClass('play');
			}
			$('.cursor').removeClass('none_play');
			
			// $('.cursor').removeClass('none_play');
		});
	// }else{

	
	// 	$(".link")
	// 		.mouseenter(function() {
	// 			cursor.css({
	// 				border: 'none',
	// 				background: 'rgba(255, 255, 255, 0.2)',
	// 				transform: "scale(1.5)",
	// 				opacity: '0.2'
	// 			});
	// 			v();
	// 			// $('.cursor').removeClass('stop');
	// 			$('.cursor').addClass('none_play');
	// 		})
	// 		.mouseleave(function() {
	// 			cursor.css({
	// 				border: '2px solid #ffffff',
	// 				background: 'none',
	// 				transform: "scale(1)",
	// 				opacity: '0.2',
	// 				// transition: '.5s'
	// 			});
	// 			v();
	// 			// $('.cursor').removeClass('stop');
	// 			$('.cursor').removeClass('none_play');
	// 		});
	// }
	// $(".not-video")
	$(".not-video_cursor")
		.mouseenter(function() {
			v();
			// $('.cursor').removeClass('stop');
      		// $('.cursor').addClass('none_play');
		})
		.mouseleave(function() {
			v();
			// $('.cursor').removeClass('stop');
      		// $('.cursor').removeClass('none_play');
		});

	$(".not-video_view")
		.mouseenter(function() {
			v();
			// $('.cursor').removeClass('stop');
			// $('.cursor').addClass('none_play');
		});

	// $(window)
	// 	.mousedown(function() {
	// 		cursor.css({
	// 			transform: "scale(1)"
	// 		});
	// 	})
	// 	.mouseup(function() {
	// 		cursor.css({
	// 			transform: "scale(.2)"
	// 		});
	// 	});
});
function v(){
	var video = $('.slider.active').find('video').get(0) == undefined ? true : false;
    if(video){
        var current = $('video').get(0).currentTime;
        var duration = $('video').get(0).duration;

		if ($('video')[0].paused) {  // если видео остановлено, запускаем

			
			$('.cursor').removeClass('none_play');
			$('.cursor').removeClass('stop');
			$('.cursor').addClass('play');
		} else {
			$('.cursor').removeClass('none_play');
			$('.cursor').removeClass('play');
			$('.cursor').addClass('stop');
		}
	}else{

	}
}