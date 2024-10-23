var extraChars = 2;

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
$("#art").click(function(){
    if($("#art-window").hasClass("window-hide")){
        $("#art-window").removeClass("window-hide");
        $("#art-window").removeAttr("style");
    }
});

$("#art1").click(function(){
    if($("#art1-window").hasClass("window-hide")){
        $("#art1-window").removeClass("window-hide");
        $("#art1-window").removeAttr("style");
    }
});

$("#art2").click(function(){
    if($("#art2-window").hasClass("window-hide")){
        $("#art2-window").removeClass("window-hide");
        $("#art2-window").removeAttr("style");
    }
});

$("#readme").click(function(){
    if($("#readme-window").hasClass("window-hide")){
        $("#readme-window").removeClass("window-hide");
        $("#readme-window").removeAttr("style");
    }
});

//Window Controls
$("#art-close").click(function(){
    $("#art-window").addClass("window-hide");
})
$("#art1-close").click(function(){
    $("#art1-window").addClass("window-hide");
})
$("#art2-close").click(function(){
    $("#art2-window").addClass("window-hide");
})
$("#readme-close").click(function(){
    $("#readme-window").addClass("window-hide");
})

// Window Focus
$("#art-window").mousedown(function(){
    if(!$("#art-window").hasClass("focus")){
        $(".focus").removeClass("focus");
        $("#art-window").addClass("focus");
    }
});

$("#art1-window").mousedown(function(){
    if(!$("#art1-window").hasClass("focus")){
        $(".focus").removeClass("focus");
        $("#art1-window").addClass("focus");
    }
});

$("#readme-window").mousedown(function(){
    if(!$("#readme-window").hasClass("focus")){
        $(".focus").removeClass("focus");
        $("#readme-window").addClass("focus");
    }
});

// Default Window Positions
var characterWindowWidth = $("#art-window").width();
var characterWindowLeft = $("#art-window").position().left;
for(var i = 1; i <= extraChars; i++){
    $("#art" + i + "-window").css("left", characterWindowWidth + characterWindowLeft);
    characterWindowWidth = $("#art" + i + "-window").width();
    characterWindowLeft = $("#art" + i +"-window").position().left;
}



var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

// Make the DIV element draggable:
if(!isMobile){
    dragElement(document.getElementById("readme-window"));
    dragElement(document.getElementById("art-window"));
    dragElement(document.getElementById("art1-window"));
    dragElement(document.getElementById("art2-window"));
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