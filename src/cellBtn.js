import $ from 'jquery';
export  function clickCellBtn() {
    $('button[name="cell"]').click(function (event) {
        event.preventDefault();
        console.log(this.value);
        var clickBtn=$(this);
        // post/game-post.php
        $.post( "post/game-post.php",{cell:this.value}, function( data ) {
            console.log(data)
            switch (data) {
                case "-1":
                    clickBtn.html("&nbsp;")
                    break;
                case "-2":

                    break;
                case "-3":
                    clickBtn.html('<img src="images/light.png" width="43" height="75" alt="Light">')
                    clickBtn.parent('td').removeClass("unshaded").addClass("light")
                    break;
                case "-4":
                    clickBtn.html("•")
                    clickBtn.parent('td').removeClass("light").addClass("unshaded")
                    break;

            }
        });
    })

    
  }