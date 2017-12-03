$(function(){
    player1();
    function player1() {
    $("#s1,#s2,#s3,#s4,#s5,#s6,#s7,#s8,#s9").click(function(){
        $(this).text("X");
        $(this).css("pointer-events","none");
        $("#turn").text("Player 2's turn");
        player2();
        if( $("#s1").text() == 'X' && $("#s2").text() == 'X' && $("#s3").text() == 'X' || 
            $("#s1").text() == 'X' && $("#s4").text() == 'X' && $("#s7").text() == 'X' || 
            $("#s7").text() == 'X' && $("#s8").text() == 'X' && $("#s9").text() == 'X' || 
            $("#s2").text() == 'X' && $("#s6").text() == 'X' && $("#s9").text() == 'X' ||
            $("#s1").text() == 'X' && $("#s5").text() == 'X' && $("#s9").text() == 'X' || 
            $("#s2").text() == 'X' && $("#s5").text() == 'X' && $("#s8").text() == 'X' ||
            $("#s4").text() == 'X' && $("#s5").text() == 'X' && $("#s6").text() == 'X' ||
            $("#s3").text() == 'X' && $("#s5").text() == 'X' && $("#s7").text() == 'X')
        {
            $("#demo").text("Player 1 WON");
            $("#turn").text("Game Over").css("color","red");
            return;

        }
    });
}
    function player2(){
        $("#s1,#s2,#s3,#s4,#s5,#s6,#s7,#s8,#s9").click(function(){
            $(this).text("O");
            $(this).css("pointer-events","none");
            $("#turn").text("Player 1's turn")
            player1();
            if($("#s1").text() == 'O' && $("#s2").text() == 'O' && $("#s3").text() == 'O' || 
               $("#s1").text() == 'O' && $("#s4").text() == 'O' && $("#s7").text() == 'O' || 
               $("#s7").text() == 'O' && $("#s8").text() == 'O' && $("#s9").text() == 'O' || 
               $("#s2").text() == 'O' && $("#s6").text() == 'O' && $("#s9").text() == 'O' ||
               $("#s1").text() == 'O' && $("#s5").text() == 'O' && $("#s9").text() == 'O' || 
               $("#s2").text() == 'O' && $("#s5").text() == 'O' && $("#s8").text() == 'O' ||
               $("#s4").text() == 'O' && $("#s5").text() == 'O' && $("#s6").text() == 'O' ||
               $("#s3").text() == 'O' && $("#s5").text() == 'O' && $("#s7").text() == 'O')
            {
                $("#demo").text("Player 2 WON");
                $("#turn").text("Game Over").css("color","red");
                return;
            }
        });
    }
});