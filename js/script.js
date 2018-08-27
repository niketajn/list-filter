$( document ).ready(function() {
  var filterEmail = "";
  $("#filter-email").on('change',function(){
      filterEmail=$(this).val();
      filterEmail=filterEmail.toLowerCase();
      refreshList();
  });

    function refreshList(){

          if (filterEmail!==""){

            
              
             $('#list-group').empty();

              $.each(commentdata, function( index, value ) {
          
                if(value.email.toLowerCase().includes(filterEmail)){

                  var anchortag = $("<a></a>");
                  anchortag.addClass('list-group-item');

                  var h4 = $("<h4></h4>");
                  h4.addClass('list-group-item-heading');
                  h4.html(value.body);
                  $(anchortag).append(h4);

                  var p = $("<p></p>");
                  p.addClass('list-group-item-text');
                  p.html(value.name);
                  $(anchortag).append(p);

                  var span = $("<span></span>");
                  span.addClass('pull-right');
                  span.html(value.email);
                  $(p).append(span);


                  $('#list-group').append(anchortag);
                }

            });
            
        } else{
            $('#list-group').empty();
            $.each(commentdata, function( index, value ) {
            
              var anchortag = $("<a></a>");
              anchortag.addClass('list-group-item');

              var h4 = $("<h4></h4>");
              h4.addClass('list-group-item-heading');
              h4.html(value.body);
              $(anchortag).append(h4);

              var p = $("<p></p>");
              p.addClass('list-group-item-text');
              p.html(value.name);
              $(anchortag).append(p);

              var span = $("<span></span>");
              span.addClass('pull-right');
              span.html(value.email);
              $(p).append(span);


              $('#list-group').append(anchortag);
        
            });
                }
                  }

               refreshList()
            });