$(document).ready(function(){
  $("#dude").click(function(){
    let search = $("#search").val();
    $("#search").val("");
    // $.ajax({
    //   url: `http://api.giphy.com/v1/gifs/search?api_key=aMjM7gMM6IjPlrZfc3xF7gk59GOgfscP&q=${search}&limit=5`,
    //   type: `GET`,
    //   data: {
    //     format: "json"
    //   },
    //   success: function(response) {
    //     console.log("did shit");
    //     for (var i = 0; i < 5; i++) {
    //       $(".output").prepend(`<img src="${response.data[i].images.original.url}">`);
    //     }
    //   },
    //   error: function() {
    //     alert("HOW FUCKING DARE YOU");
    //   }
    // });
    $.get(`http://api.giphy.com/v1/gifs/search?api_key=aMjM7gMM6IjPlrZfc3xF7gk59GOgfscP&q=${search}&limit=15`).then(function(response){
      console.log("did shit");
      for (var i = 0; i < 15; i++) {
        $(".output").prepend(`<img src="${response.data[i].images.original.url}">`);
      }
    }).fail(function(error){
      alert("OMG YOU SUCK");
    });
  });
    $("#button2").click(function() {
      let para = $(".para-input").val();
      let words = $(".words-input").val();
      console.log(para)
      console.log(words)
      $.get(`http://dinoipsum.herokuapp.com/api?format=html&paragraphs=${para}&words=${words}`).then(function(response){
        console.log(response);
        $(".output2").append(`<p>${response}</p>`);
      }).fail(function(error){
        console.log("bad");
        alert("crap");
      })
    })
});
