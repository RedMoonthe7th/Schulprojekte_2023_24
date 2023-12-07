alert("Hello")
console.log("Test")

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
        tabelHtml += "<div class='column'>" + "<div class='line'>" + "<div id='index'>" + index + ".</div>" + "<div><img id='logo' src=" + element.teamIconUrl + "></div>" + "<div id='name'>" + element.teamName + "</div>" + "<div id='matches'>" + element.matches + "</div>" + "<div id='wins'>" + element.won + "</div>"  + "<div id='draws'>" + element.draw + "</div>" + "<div id='losses'>" + element.lost + "</div>" + "<div id='goals'>" + element.goals + ": </div>" + "<div id='enemyGoals'>" + element.opponentGoals + "</div>" + "<div id='difference'>" + element.goalDiff + "</div>"  + "<div id='points'>" + element.points + "</div>" + "</div>" + "</div>";
    });
    tabelHtml += "</ul>";
    document.getElementById("content").innerHTML = tabelHtml;
}

