//define functions here



function getIt() {
  $('p').bind('click', function() {
    alert('Hey!');
  }
);

}

function frameIt() {
  $('img').addClass("tasty");
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if(key.which == 71){
        alert('s was pressed');
   }
  });
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.');
})
}

$(document).ready(function(){


});