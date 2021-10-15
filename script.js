let contagem = 0,
    item = $('.item');



item.click(function () {

    if ($(this).text() == '' && contagem % 2 === 0) {
        $(this).html('X');
        contagem++;
    } else if ($(this).text() != '' || $(this).text() == 'X') {
        $('#aviso').fadeIn();
        setInterval(function () {
            $('#aviso').fadeOut();
        }, 1500);
    } else {
        $(this).html('O');
        contagem++;
    }

    let first = item[0].textContent,
        second = item[1].textContent,
        third = item[2].textContent,
        fourth = item[3].textContent,
        fifth = item[4].textContent,
        sixth = item[5].textContent,
        seventh = item[6].textContent,
        eighth = item[7].textContent,
        nineth = item[8].textContent;


    /* X win game */
    if (first == 'X' && second == 'X' && third == 'X') {
        win('X'); reset();
    }
    if (first == 'X' && fourth == 'X' && seventh == 'X') {
        win('X'); reset();
    }
    if (nineth == 'X' && sixth == 'X' && third == 'X') {
        win('X'); reset();
    }
    if (seventh == 'X' && eighth == 'X' && nineth == 'X') {
        win('X'); reset();
    }
    if (first == 'X' && fifth == 'X' && nineth == 'X') {
        win('X'); reset();
    }
    if (third == 'X' && fifth == 'X' && seventh == 'X') {
        win('X'); reset();
    }
    if (second == 'X' && fifth == 'X' && eighth == 'X') {
        win('X'); reset();
    }
    if (fourth == 'X' && fifth == 'X' && sixth == 'X') {
        win('X'); reset();
    }

    /* O win game */
    if (first == 'O' && second == 'O' && third == 'O') {
        win('O'); reset();
    }
    if (first == 'O' && fourth == 'O' && seventh == 'O') {
        win('O'); reset();
    }
    if (nineth == 'O' && sixth == 'O' && third == 'O') {
        win('O'); reset();
    }
    if (seventh == 'O' && eighth == 'O' && nineth == 'O') {
        win('O'); reset();
    }
    if (first == 'O' && fifth == 'O' && nineth == 'O') {
        win('O'); reset();
    }
    if (third == 'O' && fifth == 'O' && seventh == 'O') {
        win('O'); reset();
    }
    if (second == 'O' && fifth == 'O' && eighth == 'O') {
        win('O'); reset();
    }
    if (fourth == 'O' && fifth == 'O' && sixth == 'O') {
        win('O'); reset();
    }

    if(contagem == 9){
        swal({
            title: 'Draw',
            icon: 'warning'
        })
        reset();
    }

    $('#contagem').html('Plays: ' + contagem);


});

$('#reset').click(function () {
    reset();
});

function reset() {
    contagem = 0;
    $('#contagem').html('Plays: ' + contagem);
    $('.item').html('');
}

function win(e) {
    swal({
        title: "Win!",
        text: 'The '+e+ ' win the game!',
        icon: "success",
    });
}