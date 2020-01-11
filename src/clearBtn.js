import $ from 'jquery';

export function clearBtn() {
    $('button[name="clear"]').click(function (event) {
        event.preventDefault();
        console.log(this);
        $.post("post/game-post.php", {clear: ""}, function (data) {

            $('.controls').hide();

            $('.messageDiv').html('<p><button name="yes">Yes</button> <button name="no">No</button></p>\n' +
                '<p class="message">Are you sure you want to clear?</p>')
            $(".messageDiv").show()
            $('button[name="yes"]').click(function (event) {
                event.preventDefault();
                $.post("post/game-post.php", {yes: ""}, function (data) {

                })
// post/game-post.php
                $("td").removeClass("wrong");
                var btns = $('button[name="cell"]');
                for (var i = 0; i < btns.length; i++) {
                    if (btns[i].innerHTML != "&nbsp;") {
                        btns[i].innerHTML="&nbsp;"
                    }
                }
                $(".controls").show();
                $(".messageDiv").html("").hide()
            });
            $('button[name="no"]').click(function (event) {

                $(".controls").show();
                $(".messageDiv").html("").hide()
            });

        });


    })


}