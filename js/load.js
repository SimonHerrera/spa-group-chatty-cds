"use strict";
var Chatty = (function (chatty){



  $.ajax({
    url:"./data/startMsg.json"
  }).done(loadChatty);

  function loadChatty (data) {
    // var loadJsonArr = JSON.parse(this.responseText);
    chatty.initialMessages(data.startMsg);
  }

//No longer needed with ajax loading json
  // var infoRequest = new XMLHttpRequest();
  // infoRequest.addEventListener("load", loadChatty);
  // infoRequest.open("GET", "/data/startMsg.json");
  // infoRequest.send();

  chatty.getLoadArray = function () {
    return loadArray;
  };



  return chatty;

}(Chatty || {}));

