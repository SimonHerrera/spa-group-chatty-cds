"use strict";
var Chatty = (function (chatty){

  chatty.deleteSingleMessageFromDOM = function (id) {
    Chatty.removeArrayMessages(id);
    $("#"+id).remove();
    // var divToDelete = document.getElementById(id);
    // divToDelete.parentNode.removeChild(divToDelete);
  };

  return chatty;

}(Chatty || {}));
