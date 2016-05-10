"use strict";
var Chatty = (function (chatty){

//new jquery section
  $("#dark-toggle").click(function (){    //listen and when click on '#dark-toggle'
    $("#color-theme").toggleClass("theme");   //in body '#color-theme' toggle class 'theme' on/off
    $border.toggleClass("msg-white");  //in messages area '#display-messages' toggle class 'large' on/off
  });

  $("#large-toggle").click(function () {  //listen and when click on '#large-toggle'
    $("#color-theme").toggleClass("large"); //in body '#color-theme' toggle class 'large' on/off
  });

//Skipped now with jquery - how to do this in vanilla js below
  // var darkTheme = document.getElementById('color-theme');
  var $border = $('#display-messages'); //neede for another var
  // var largeTheme = document.getElementById('color-theme');

  // document.getElementById("dark-toggle").addEventListener("click", function() {
  //   darkTheme.classList.toggle("theme");
  //   });
  // document.getElementById("dark-toggle").addEventListener("click", function() {
  //   border.classList.toggle("msg-white");
  //   });
  // document.getElementById("large-toggle").addEventListener("click", function() {
  //   largeTheme.classList.toggle("large");
  // });

  // function that fills the DOM with initial JSON messages, it is called in the load.js file after the load event is completed
  chatty.initialMessages = function (initialMessageArray) {
    $(initialMessageArray).each(function(index, currentMessage) {
       Chatty.addMessage("display-messages", currentMessage);
    });
    //old for loop
    // for (var i =0; i < initialMessageArray.length; i++){
    //   Chatty.addMessage("display-messages", initialMessageArray[i]);
    // }
  };

  // added functionality to user input message field
  // var userInputText = document.getElementById("user-message-input");
   var $userInputText = $("#user-message-input");

  // userInputText.addEventListener("keyup", addUserMessage);
      $userInputText.keyup(addUserMessage);

  function addUserMessage (key){
    if (key.which === 13){
      Chatty.addMessage("display-messages", $userInputText.val());  //id passed, message passed
      $clearAllButton.attr("disabled", false);
      $userInputText.val("");
    }
  }

//functionality for the Clear Message Board button
  // var clearAllButton = document.getElementById("clear-msg");
  var $clearAllButton = $("#clear-msg");    //clearAllButton == '#clear-msg'

  // clearAllButton.addEventListener("click", clearAllMessages);
  $clearAllButton.click(clearAllMessages);//when clearAllButton clicked -  run this function

  function clearAllMessages() {
    Chatty.removeAllMessagesInArray();
    $border.html("");   //OR.empty();
    $clearAllButton.attr("disabled", true);
  }

  // functionality for the individual message delete buttons
  //
  $border.on("click", deleteButtons);

  function deleteButtons (event) {
    if (event.target.className === "deleteButton") {
      // var idToDelete = event.target.parentNode.id //skipped and just passed in line below
      Chatty.deleteSingleMessageFromDOM(event.target.parentNode.id);
      if ($border.html() === "") {
        $clearAllButton.attr("disabled", true);
      }
    }
  }

  return chatty;

}(Chatty || {}));
