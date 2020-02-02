$(document).ready(function () {
  $(function () {
    $("#accordion").accordion({

    });

    $("#accordion .ui-accordion-content").css({
      "background-color": "white"
    });
    $("#accordion .ui-accordion-content").css({
      "height": ""
    });

    $(".ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active").css({
      "color": "#046529"
    });
    $(".ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default, .ui-button, html .ui-button.ui-state-disabled:hover, html .ui-button.ui-state-disabled:active").css({
      "background": "white"
    });

  });

  var geklikt = false;
  var player = videojs('video1', {

  });

  $(".toggle").click(function () {
    event.preventDefault();
    if ($(this).is("#toggle1")) {
      player = videojs('video1', {

      });
    }

    if ($(this).is("#toggle2")) {
      player = videojs('video2', {

      });
    }

    if ($(this).is("#toggle3")) {
      player = videojs('video3', {

      });
    }

    if (geklikt == false) {
      player.play();
      geklikt = true;
      $(this).css({
        "background-image": "url(img/pause@2x.png)"
      });

    } else {
      player.pause();
      geklikt = false;
      $(this).css({
        "background-image": "url(img/play@2x.png)"
      });
    }
    console.log(geklikt);
  });

  $(".rewind").click(function () {
    player.currentTime(player.currentTime() - 10);
  });

  $(".buttonHeader1").click(function () {
    $("#toggle").toggle("slide");
  });

  $(".buttonHeader2").click(function () {
    $("#toggle").toggle("slide");
  });
});