import $ from 'jquery';

export function solveBtn() {
    $('button[name="solve"]').click(function (event) {
        event.preventDefault();
        console.log(this);
        $.post("post/game-post.php", {solve: ""}, function (data) {
            $('.controls').hide();
            $('.messageDiv').html('<p><button name="yes">Yes</button> <button name="no">No</button></p>\n' +
                '<p class="message">Are you sure you want to solve?</p>').show()

            $('button[name="yes"]').click(function (event) {
                event.preventDefault();
// post/game-post.php
                $.post("post/game-post.php", {yes: ""}, function (data) {
                    console.log(data)
                    $("td").removeClass("wrong")
                    var btns = $.parseJSON(data)
                    var arr = []
                    for (let i in btns) {
                        let o = {};
                        o[i] = btns[i];
                        arr.push(o)
                    }

                    for (var i = 1; i <= arr.length; i++) {
                        for (var j = 1; j <= Object.keys(btns[i]).length; j++) {
                            console.log('button[value="' + i + ',' + j + '"]')
                            var btn = $('button[value="' + i + ',' + j + '"]')
                            switch (btns[i][j]) {
                                case -4:
                                    btn.html('•')
                                    btn.parent('td').removeClass("light").addClass("unshaded")
                                    break;
                                case -3:
                                    btn.html('<img src="images/light.png" width="43" height="75" alt="Light">')
                                    btn.parent('td').removeClass("unshaded").addClass("light")
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                    $(".messageDiv").html('<p class="message">Solution is correct!</p>\n' +
                        '<p><button name="clear">Clear</button></p>');
                    $('button[name="clear"]').click(function (event) {
                        event.preventDefault();
                        $.post("post/game-post.php", {clear: ""}, function (data) {
                            $('.messageDiv').html('<p><button name="yes">Yes</button> <button name="no">No</button></p>\n' +
                                '<p class="message">Are you sure you want to clear?</p>')
                            $('button[name="yes"]').click(function (event) {
                                event.preventDefault();
// post/game-post.php
                                $.post("post/game-post.php", {yes: ""}, function (data) {

                                })
                                $("td").removeClass("wrong");
                                var btns = $('button[name="cell"]');
                                for (var i = 0; i < btns.length; i++) {
                                    if (btns[i].innerHTML != "&nbsp;") {
                                        btns[i].innerHTML = "&nbsp;"
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

                });
            });
            $('button[name="no"]').click(function (event) {
                $(".controls").show();
                $(".messageDiv").html("").hide()
            });

        })
    });

}