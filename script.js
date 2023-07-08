$(document).ready(function(){
    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('navbar').toggleClass('nav-toggle');
    }
    );
  
    $(window).on('load scroll',function(){
      
    });
  
    $('#login').click(function(){
      $('.login-form').addClass('popup');
  
    }
      );
  
      $('.login-form').click(function(){
        $('.login-form').addClass('popup');
    
      }
        );
        $(window).on('load scroll',function(){
          $('')
        });
  
  
  }
  );
  