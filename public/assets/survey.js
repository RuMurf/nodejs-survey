$(document).ready(function(){
  
    //when a list item is clicked send a PUT request with the value of the list item as a parameter
    $('li').on('click', function(){
        var item = $(this).text()
        $.ajax({
          type: 'PUT',
          url: '/submit/' + item,
          success: function(data){
            //redirect to the results page
            window.location.assign('/results');
          }
        });
    });
  
  });