$(window).on('load', function () {

    var src = $('video').attr('src');









    var promise = document.querySelector('video').play();

    if (promise !== undefined) {
        promise.then(_ => {
            video.play();
        }).catch(error => {
            $('video').attr('data-src');
            console.log('click');
        });
    }


    // $('.preloader').css('top', '-15%');

    // setTimeout(function(){
    //     $('.preloader').css('top', '-150%');
    // }, 4000);
    // setTimeout(function(){
        // var video = document.getElementsByTagName('video')[0];
        // video.play();
    // }, 4500);
});

$(document).on('click', '.next', function(){
    var next = $('.background').find('.active').next();
    if(next.index() > 0){   
        $('.background').find('.active').css('margin-left', '-100%');   
        $('.background').find('.active').removeClass('active');
        next.addClass('active');
    }
});
$(document).on('click', '.prev', function(){
    var prev = $('.background').find('.active').prev();
    if(prev.index() >= 0){   
        $('.background').find('.active').prev().css('margin-left', '0%');
        $('.background').find('.active').removeClass('active');
        prev.addClass('active');
    }
});

setInterval(function(){
    var video = $('.slider.active').find('video').get(0) == undefined ? true : false;
    if(video){
        var current = $('video').get(0).currentTime;
        var duration = $('video').get(0).duration;
    }else{
        var current = $('.slider.active').find('video').get(0).currentTime;
        var duration = $('.slider.active').find('video').get(0).duration;
    }
    var procent = current / duration;
    procent = procent * 100;

    if (!video) {
        $('.slider.active').find('.progress_header__second').css('width', procent+'%');
        
        var slide = duration - current;
        if(slide < 0.2){
            var next = $('.background').find('.active').next();
            var stop = next.index() >= 0 ? true : false;
            $('.slider.active').find('video').get(0).currentTime = 0;  
            if(stop){   
                $('.background').find('.active').css('margin-left', '-100%');   
                $('.background').find('.active').removeClass('active');
                next.addClass('active');
            }else{
                $('.background').find('.slider').css('margin-left', '0');
                $('.background').find('.slider').removeClass('active');
                $('.background').find('.slider').eq(0).addClass('active');
            }
        }
    }else{
        var videoEl = document.getElementsByTagName('video')[0];
        $('.current').html(secondsToTime(current));
        $('.duration').html(secondsToTime(duration));
        $('.progress_header__second').css('width', procent+'%');
        // $('.progress_header__first').attr('value', procent);
    }
}, 200);

// $(document).on('mousedown', '.timeline .progress_header__second span', function(e){
//     console.log('down');

// });
// $(document).on('mouseup', '.timeline .progress_header__second span', function(e){
//     console.log('up');
// });
$(document).on('click', '.video_v .blackout', function(){
   var video = document.getElementsByTagName('video')[0];

   if (!video.paused) {
       $('.mute').removeClass('on');
       $('.mute').find('div').addClass('paused');
   }else{
        
        $('.mute').find('div').removeClass('paused');
        $('.mute').addClass('on');
   }
});

$(document).on('click', '.slider', function(e){
    var url = $( this ).attr('href');
    if (!$(e.target).hasClass('not-video')) {
        $(location).attr('href', url);
    }
});
$(document).on('click', '.mute', function(e){
    var videoEl = document.getElementsByTagName('video')[0];
    var volume = $(this);
    
    volume.toggleClass('on');
    if (volume.is('.on')) $('video').prop("volume", 1);
    else $('video').prop("volume", 0);
});

var   timeout;
var   wait = 6000; // ms, сколько можно не двигать мышь

function alive(){ // убрать напоминалку и выставить таймер
    clearTimeout(timeout);
    $('.back').css('opacity', '1');
    $('footer.video_view').css('opacity', '1');
    $('.cursor').css('opacity', '1');
    timeout = setTimeout(remind, wait);
}

function remind(){
    $('.back').css('opacity', '0');
    $('footer.video_view').css('opacity', '0');
    $('.cursor').css('opacity', '0');

}

// поехали!
document.addEventListener( 'mousemove', alive);
timeout = setTimeout(remind, wait);

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value




// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}





// рассчет отображаемого времени
function secondsToTime(time){
    var h = Math.floor(time / (60 * 60)),
        dm = time % (60 * 60),
        m = Math.floor(dm / 60),
        ds = dm % 60,
        s = Math.ceil(ds);
    if (s === 60) {
        s = 0;
        m = m + 1;
    }
    if (s < 10) {
        s = '0' + s;
    }
    if (m === 60) {
        m = 0;
        h = h + 1;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (h === 0) {
        fulltime = m + ':' + s;
    } else {
        fulltime = h + ':' + m + ':' + s;
    }
    return fulltime;
}