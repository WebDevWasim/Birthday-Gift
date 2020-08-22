$(document).ready(function () {
  let isFirst = true;

  $("#pause").hide();
  $("#play").hide();
  $("#info").hide();

  $("#infoModal").modal("show");

  closeModal = () => {
    $("#infoModal").modal("hide");
    if (isFirst) {
      isFirst = false;
      document.getElementById("audioID").play();
      $("#info").show();
      $("#pause").show();
    }
  };

  pauseMusic = () => {
    document.getElementById("audioID").pause();
    $("#play").show();
    $("#pause").hide();
  };

  playMusic = () => {
    document.getElementById("audioID").play();
    $("#play").hide();
    $("#pause").show();
  };
});
