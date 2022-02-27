$(document).ready(function(){
  
    $('li').on('click', function(){
        var item = $(this).text()//.replace(/ /g, "-");
        $.ajax({
          type: 'PUT',
          url: '/submit/' + item,
          success: function(data){
            //do something with the data via front-end framework
            window.location.assign('/results');
          }
        });
    });
  
  });