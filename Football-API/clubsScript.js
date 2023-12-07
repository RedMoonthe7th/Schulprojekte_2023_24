alert("Hello")
console.log("Test")

/*Clubs*/
fetch("https://api.openligadb.de/getavailableteams/bl1/2023").then((result) => {
    console.log("Hat funktioniert Teil 1")
    result.json().then((data) => {
        getHTMLForTabel(data);
        console.log(data)
    })
})

function getHTMLForTabel(data){
    let clubsHtml = "<ul>";

    /* + "<div id=''>" + index + "</div>" */
    data.forEach((element,index) =>{
        index += 1;
        clubsHtml += "";
    });
    clubsHtml += "</ul>";
    document.getElementById("content").innerHTML = clubsHtml;
}