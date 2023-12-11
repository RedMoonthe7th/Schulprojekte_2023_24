
/*Tabel*/
fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
    console.log("Hat funktioniert Teil 1")
    result.json().then((data) => {
        getHTMLForTabel(data);
        console.log(data)
    })
})

function getHTMLForTabel(data){
    let tabelHtml = "<ul>";

    /* + "<div id=''>" + index + "</div>" */
    data.forEach((element,index) =>{
        index += 1;
        tabelHtml += "<div class='column'>" + "<div class='line'>" + "<div class='tabelItem' id='index'>" + index + ".</div>" + "<div><img class='tabelItem' id='logo' src=" + element.teamIconUrl + "></div>" + "<div class='tabelItem' id='name'>" + element.teamName + "</div>" + "<div class='tabelItem' id='matches'>" + element.matches + "</div>" + "<div class='tabelItem' id='wins'>" + element.won + "</div>"  + "<div class='tabelItem' id='draws'>" + element.draw + "</div>" + "<div class='tabelItem' id='losses'>" + element.lost + "</div>" + "<div class='tabelItem' id='bothGoals'>" + element.goals + ":" + element.opponentGoals + "</div>" + "<div class='tabelItem' id='difference'>" + element.goalDiff + "</div>"  + "<div class='tabelItem' id='points'>" + element.points + "</div>" + "</div>" + "</div>";
    });
    tabelHtml += "</ul>";
    document.getElementById("tabelContent").innerHTML = tabelHtml;
}

