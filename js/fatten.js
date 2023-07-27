var canvas = document.getElementById("starfield");


// get dimensions of body element
var w = document.body.offsetWidth;
var h = document.body.offsetHeight;

// detect device pixel ratio
if (window.devicePixelRatio) {
    var dpr = window.devicePixelRatio;

    // set dimensions of the canvas element to match the body
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";

    // adjust width and height variables according to the detected pixel ratio
    w = w * dpr;
    h = h * dpr;
}

// set drawing dimensions of canvas: if the pixel ratio is 1, this will match
// the size of the canvas element, but if it's higher (common values will be 2
// and 3), the canvas will allow for more detail (matching the physical pixels
// of the device but not the virtual pixels of the page)
canvas.setAttribute("width", w);
canvas.setAttribute("height", h);

// prepare a two-dimensional drawing context
var c = canvas.getContext("2d");

// randomness generator
rand = function() { return (Math.random() - 0.5) * (Math.random() - 0.5) * Math.random() };

// compute center
var cx = w / 2;
var cy = h / 2;

// randomly generate stars around center
var count = 170;
var stars = [];
for (var i = 0; i < count; i++) {
    var sx = cx + rand() * w;
    var sy = cy + rand() * h;
    var s = [sx,sy];
    stars.push(s);
}

// main loop
var fps = 60;
setInterval(function() {
    c.clearRect(0, 0, w, h);

    // iterate over stars
    for (var i = 0; i < stars.length; i++) {
        var x = stars[i][0];
        var y = stars[i][1];

        // compute radius depending on euclidean distance from center
        var r = 0.005 * (Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2)));
        //var r = 0.005 * (Math.abs(x - cx) + Math.abs(y - cy));

        // draw star
        c.beginPath();
        c.arc(x, y, r, 0, 2 * Math.PI, false);
        c.fillStyle = "white";
        //var brightness = Math.random() * 255;
        //c.fillStyle = "rgb(" + brightness + "," + brightness + "," + brightness + ")";
        c.fill();

        // update star
        var nx = x + (x - cx) * 0.025;
        var ny = y + (y - cy) * 0.025;
        stars[i] = [nx,ny];

        // reset star if out of bounds
        if (x < -100 || x > w + 100 || y < -100 || y > h + 100) {
            x = cx + rand() * w/10;
            y = cy + rand() * w/10;
            stars[i] = [x,y];
        }
    }
}, 1000 / fps);



var click = new Audio("muse/hover.ogg");
click.volume = .25;
$("a").click(function(){
    click.currentTime = 0;
    click.play();
});
$(".btn").click(function(){
    click.currentTime = 0;
    click.play();
});

//Icon controls to switch active window
$("#fatten-exe").click(function(){
    if($("#fatten-window").hasClass("window-hide")){
        $("#fatten-window").find("#range22").val(0);
        $("#fatten-window").find("#range22").change();
        $("#fatten-window").removeClass("window-hide");
        $("#fatten-window").removeAttr("style");
    }
});

$("#art").click(function(){
    if($("#art-window").hasClass("window-hide")){
        $("#art-window").removeClass("window-hide");
        $("#art-window").removeAttr("style");
    }
});

$("#readme").click(function(){
    if($("#readme-window").hasClass("window-hide")){
        $("#readme-window").removeClass("window-hide");
        $("#readme-window").removeAttr("style");
    }
});

//Window Controls
$("#fatten-close").click(function(){
    $("#fatten-window").addClass("window-hide");
});
$("#art-close").click(function(){
    $("#art-window").addClass("window-hide");
})
$("#readme-close").click(function(){
    $("#readme-window").addClass("window-hide");
})

// Window Focus
$("#fatten-window").mousedown(function(){
    if(!$("#fatten-window").hasClass("focus")){
        $(".focus").removeClass("focus");
        $("#fatten-window").addClass("focus");
    }
});
$("#art-window").mousedown(function(){
    if(!$("#art-window").hasClass("focus")){
        $(".focus").removeClass("focus");
        $("#art-window").addClass("focus");
    }
});
$("#readme-window").mousedown(function(){
    if(!$("#readme-window").hasClass("focus")){
        $(".focus").removeClass("focus");
        $("#readme-window").addClass("focus");
    }
});

//Fatten Game
$("#fatten-window").find("#range22").change(function(){
    //Update lbs
    var rangeVal = $(this).val();
    var lbs = "150";
    var img = "a1";
    switch(rangeVal){
        case "0":
            lbs = "150";
            break;
        case "1":
            lbs = "250";
            break;
        case "2":
            lbs = "350";
            break;
        case "3":
            lbs = "450";
            break;
        case "4":
            lbs = "550";
            break;
        default:
            lbs = "???";
    }
    $("#curr-weight").html(lbs);
    //Update picture
    $("#fatyote").fadeOut(200, "linear", function(){
             $("#fatyote").attr("src","img/fatten/a" + rangeVal + ".png")
         });
    
    $("#fatyote").fadeIn(200, "linear",);
    //$("#fatyote").attr("src","img/fatten/a" + rangeVal + ".png");

    // var $pixel = $('#fatyote').PixelFlow();
    
});

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

// Make the DIV element draggable:
if(!isMobile){
    dragElement(document.getElementById("fatten-window"));
    dragElement(document.getElementById("art-window"));
    dragElement(document.getElementById("readme-window"));
}


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}