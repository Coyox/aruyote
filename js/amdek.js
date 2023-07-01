var audio = document.getElementById("audio");
audio.volume = 0.3;

$('#ref-front').on({
    'click': function(){
        $('#aru').attr('src','img/aru-f.png');
    }
});

$('#ref-back').on({
    'click': function(){
        $('#aru').attr('src','img/aru-b.png');
    }
});


$('#ref-head').on({
    'click': function(){
        $('#aru').attr('src','img/aru-h.png');
    }
});


$('#ref-side').on({
    'click': function(){
        $('#aru').attr('src','img/aru-l.png');
    }
});


function typeWriter() {
    if (i < txt.length) {
      $("#myname").html($("#myname").html() + txt.charAt(i));
      i++;
      setTimeout(typeWriter, speed);
    }
}
  
  typeWriter();