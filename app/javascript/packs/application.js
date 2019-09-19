// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import Rails from 'rails-ujs'
Rails.start()


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("ftco-navbar").classList.remove('bg-transparent')
    document.getElementById("ftco-navbar").classList.add('bg-dark')
    document.getElementById("ftco-navbar").style.transition = "0.5s"

  } else {
    document.getElementById("ftco-navbar").classList.add('bg-transparent')
    document.getElementById("ftco-navbar").classList.remove('bg-dark')
  }
}


$(document).on('turbolinks:load',function(){

     $('.envoi').off("click").on("click",function(){


                    var id = $(this).attr('id');


                   
                              window.location.replace('/recrutements/new?data_value='+id)

               })



     $('.demand').off("click").on("click",function(){


                    var id = $(this).attr('id');


                  
                              window.location.replace('/requests/new?data_value='+id)



               })





     $('.lasa').off("click").on("click",function(){


                    var id = $(this).attr('id');



                              window.location.replace('/events/new?data_value='+id)


               

         });

     $('.requete').off("click").on("click", function(){
          var id = $(this).data('requestid')
          var recrutements = $(this).data('id')
          window.location.replace('/requests/'+id+'/edit?data_value='+recrutements)
     })


     $('.club_edit').off("click").on("click", function(){
          var id = $(this).data('quarterid')
          var quarter = $(this).data('quarterid')
          window.location.replace('/clubs/'+id+'/edit?data_value='+quarter)
     })


})