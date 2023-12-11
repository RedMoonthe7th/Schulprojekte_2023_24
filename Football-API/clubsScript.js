
/*Clubs*/
fetch("https://api.openligadb.de/getavailableteams/bl1/2023").then((result) => {
    console.log("Hat funktioniert Teil 1")
    result.json().then((data) => {
        getHTMLForTabel(data);
        console.log(data)
    })
})

function getHTMLForTabel(data){
    let clubsHtml = "";
    /* + "<div id=''>" + index + "</div>" */
    data.forEach((element,index) =>{
        index += 1;
        clubsHtml += "<div class='grid-container-clubs'>" + "<div class='grid-item-clubs'>" + "<div><img id='logo' src=" + element.teamIconUrl + "></div>" + "<div id='name'>" + element.teamName + "</div>" + "</div>" + "</div>";
    });
    document.getElementById("grid-container-clubs").innerHTML = clubsHtml;
}