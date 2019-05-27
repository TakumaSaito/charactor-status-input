$(function() {
    $('.maincontent').prepend("<p>キャラクター能力値 (http://cthuwebdice.session.jp/chara/ のtxt出力結果): </p><textarea id=\"input_status\"></textarea><br/><input type=\"button\" id=\"inputButton\" value=\"入力\"><br/>");
    $('#inputButton').on('click', statusParse);
});

function statusParse() {
    var allStatus = $('#input_status').val();
    var statusArray = allStatus.split("\n");
    var str = statusArray[0].substr(statusArray[0].indexOf(":")+1);
    var con = statusArray[1].substr(statusArray[1].indexOf(":")+1);
    var pow = statusArray[2].substr(statusArray[2].indexOf(":")+1);
    var dex = statusArray[3].substr(statusArray[3].indexOf(":")+1);
    var app = statusArray[4].substr(statusArray[4].indexOf(":")+1);
    var siz = statusArray[5].substr(statusArray[5].indexOf(":")+1);
    var int = statusArray[6].substr(statusArray[6].indexOf(":")+1);
    var edu = statusArray[7].substr(statusArray[7].indexOf(":")+1);
    var san = statusArray[11].substr(statusArray[11].indexOf(":")+1);

    $('#NA1').val(str); $('#NA1').trigger('change');
    $('#NA2').val(con); $('#NA2').trigger('change');
    $('#NA3').val(pow); $('#NA3').trigger('change');
    $('#NA4').val(dex); $('#NA4').trigger('change');
    $('#NA5').val(app); $('#NA5').trigger('change');
    $('#NA6').val(siz); $('#NA6').trigger('change');
    $('#NA7').val(int); $('#NA7').trigger('change');
    $('#NA8').val(edu); $('#NA8').trigger('change');
    $('input[name=\"SAN_Left\"]').val(san); $('input[name=\"SAN_Left\"]').trigger('change');
}
