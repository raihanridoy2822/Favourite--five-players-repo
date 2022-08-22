const playerArray = [];
function display(players) {
    // console.log(players);
    const tableBody = document.getElementById("player-source");
    tableBody.innerHTML = "";
    for (let i = 0; i < playerArray.length; i++) {
        console.log(players[i].playerName);
        const name = players[i].playerName;
        const tr = document.createElement("tr");
        tr.innerHTML = `
         <th>${i + 1}</th>
        <td>${name}</td>`
            ;
        tableBody.appendChild(tr);
    }
}
function addToCard(element) {
    // console.log(element.parentNode.parentNode.children)
    // console.log(element.parentNode.parentNode.children[1].innerText)
    // console.log(element.parentNode.parentNode.children[1])
    const playerName = element.parentNode.parentNode.children[1].innerText;
    // console.log(playerName)

    const playerObj = {
        playerName: playerName
    }
    playerArray.push(playerObj);
    // console.log(playerArray)
    // console.log(playerArray.length)
    document.getElementById("total player").innerText = playerArray.length;
    display(playerArray);
}