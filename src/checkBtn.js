import $ from 'jquery';
export  function checkBtn() {
    $('button[name="check"]').click(function (event) {
        event.preventDefault();
        console.log(this);
        // post/game-post.php
        $.post( "post/game-post.php",{check:""}, function( data ) {
            console.log(data)
            $("td").removeClass("wrong")
            var wrongCells=JSON.parse(data);
            for (var i = 0; i < wrongCells.length; i++) {

                $("button[value='"+wrongCells[i]+"']").parent().addClass("wrong")
            }

        });
    })


}