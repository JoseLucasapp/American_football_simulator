const afc = details.afc;
const nfc = details.nfc

const afcE = afc.east;
const afcW = afc.west;
const afcN = afc.north;
const afcS = afc.south;

const nfcE = nfc.east;
const nfcW = nfc.west;
const nfcN = nfc.north;
const nfcS = nfc.south;
let team = 'one';

const afcPlayoffs = [];
const nfcPlayoffs = [];

for(let i = 1; i < 17; i++){
    if(i == 1 || i == 5 || i == 9 || i == 13){
        team = 'one'
    }
    if(i == 2 || i == 6 || i == 10 || i == 14){
        team = 'two'
    }
    if(i == 3 || i == 7 || i == 11 || i == 15){
        team = 'three'
    }
    if(i == 4 || i == 8 || i == 12 || i == 16){
        team = 'four'
    }

    if(i < 5){
        document.getElementById('afcteams').innerHTML += `<li id="afce${team}" onclick="playoffs('${afcE[team].name}', 'afc', 'afce${team}');"  style="background-color:${afcE[team].color1}; color:${afcE[team].color2}">${afcE[team].name}</li>`;
    }
    if(i >= 5 && i < 9){
        document.getElementById('afcteams').innerHTML += `<li id="afcw${team}" onclick="playoffs('${afcW[team].name}', 'afc', 'afcw${team}');" style="background-color:${afcW[team].color1}; color:${afcW[team].color2}" >${afcW[team].name}</li>`
    }
    if(i >= 9 && i < 13){
        document.getElementById('afcteams').innerHTML += `<li id="afcn${team}" onclick="playoffs('${afcN[team].name}', 'afc', 'afcn${team}');" style="background-color:${afcN[team].color1}; color:${afcN[team].color2}">${afcN[team].name}</li>`
    }
    if(i >= 13){
        document.getElementById('afcteams').innerHTML += `<li id="afcs${team}" onclick="playoffs('${afcS[team].name}', 'afc', 'afcs${team}');" style="background-color:${afcS[team].color1}; color:${afcS[team].color2}">${afcS[team].name}</li>`
    }
}

for(let i = 1; i < 17; i++){
    if(i == 1 || i == 5 || i == 9 || i == 13){
        team = 'one'
    }
    if(i == 2 || i == 6 || i == 10 || i == 14){
        team = 'two'
    }
    if(i == 3 || i == 7 || i == 11 || i == 15){
        team = 'three'
    }
    if(i == 4 || i == 8 || i == 12 || i == 16){
        team = 'four'
    }

    if(i < 5){
        document.getElementById('nfcteams').innerHTML += `<li id="nfce${team}" onclick="playoffs('${nfcE[team].name}', 'nfc', 'nfce${team}');" style="background-color:${nfcE[team].color1}; color:${nfcE[team].color2}">${nfcE[team].name}</li>`;
    }
    if(i >= 5 && i < 9){
        document.getElementById('nfcteams').innerHTML += `<li id="nfcw${team}" onclick="playoffs('${nfcW[team].name}', 'nfc', 'nfcw${team}');" style="background-color:${nfcW[team].color1}; color:${nfcW[team].color2}">${nfcW[team].name}</li>`
    }
    if(i >= 9 && i < 13){
        document.getElementById('nfcteams').innerHTML += `<li id="nfcn${team}" onclick="playoffs('${nfcN[team].name}', 'nfc', 'nfcn${team}');" style="background-color:${nfcN[team].color1}; color:${nfcN[team].color2}">${nfcN[team].name}</li>`
    }
    if(i >= 13){
        document.getElementById('nfcteams').innerHTML += `<li id="nfcs${team}" onclick="playoffs('${nfcS[team].name}', 'nfc', 'nfcs${team}');" style="background-color:${nfcS[team].color1}; color:${nfcS[team].color2}">${nfcS[team].name}</li>`
    }
}

function playoffs(t, c, id){
    if(c === 'afc' && !afcPlayoffs.includes(t) && afcPlayoffs.length < 7){
        afcPlayoffs.push(t)
    }

    if(c === 'afc' && afcPlayoffs.includes(t) && afcPlayoffs.length <= 7){
        let position = afcPlayoffs.indexOf(t);
        document.getElementById(id).innerText = ``
        document.getElementById(id).innerText = `${position + 1} - ${afcPlayoffs[position]}`
    }

    if(c === 'nfc' && !nfcPlayoffs.includes(t) && nfcPlayoffs.length < 7){
        nfcPlayoffs.push(t)
    }

    if(c === 'nfc' && nfcPlayoffs.includes(t) && nfcPlayoffs.length <= 7){
        let position = nfcPlayoffs.indexOf(t);
        document.getElementById(id).innerText = ``
        document.getElementById(id).innerText = `${nfcPlayoffs[position]} - ${position + 1}`
    }

    if(afcPlayoffs.length === 7 && nfcPlayoffs.length === 7){
        renderWildCard();
    }
}

function renderWildCard(){

    document.getElementById('wildcardafc').innerHTML = `
        <h2 style="background-color: red;">AFC</h2>
        <br/>
        <p class="gameScore">#1${afcPlayoffs[0]}</p>
        <br/>
        <div class="game">
            <p class="gameScore">#7 ${afcPlayoffs[6]} <span id="wcafc1">0</span> @ <span id="wcafc2">0</span> ${afcPlayoffs[1]} #2</p>
            <div class="buttons">
                <button onClick="points('wcafc1', 7)">TD-home</button>
                <button onClick="points('wcafc1', 3)">FG-home</button>
                <button onClick="points('wcafc2', 7)">TD-away</button>
                <button onClick="points('wcafc2', 3)">FG-away</button>
                <button id="endwcafc1" onClick="checkWinner('wcafc1','wcafc2','afc','${afcPlayoffs[6]}', '${afcPlayoffs[1]}', 'endwcafc1');">endgame</button>
            </div>
        </div>
        
        <div class="game">
            <p class="gameScore">#6 ${afcPlayoffs[5]} <span id="wcafc3">0</span> @ <span id="wcafc4">0</span> ${afcPlayoffs[2]} #3</p>
            <div class="buttons">
                <button onClick="points('wcafc3', 7)">TD-home</button>
                <button onClick="points('wcafc3', 3)">FG-home</button>
                <button onClick="points('wcafc4', 7)">TD-away</button>
                <button onClick="points('wcafc4', 3)">FG-away</button>
                <button id="endwcafc2" onClick="checkWinner('wcafc3','wcafc4','afc','${afcPlayoffs[5]}', '${afcPlayoffs[2]}', 'endwcafc2');">endgame</button>
            </div>
        </div>

        <div class="game">
            <p class="gameScore">#5 ${afcPlayoffs[4]} <span id="wcafc5">0</span> @ <span id="wcafc6">0</span> ${afcPlayoffs[3]} #4</p>
            <div class="buttons">
                <button onClick="points('wcafc5', 7)">TD-home</button>
                <button onClick="points('wcafc5', 3)">FG-home</button>
                <button onClick="points('wcafc6', 7)">TD-away</button>
                <button onClick="points('wcafc6', 3)">FG-away</button>
                <button id="endwcafc3" onClick="checkWinner('wcafc5','wcafc6','afc','${afcPlayoffs[4]}', '${afcPlayoffs[3]}', 'endwcafc3');">endgame</button>
            </div>
        </div>
    `

    document.getElementById('wildcardnfc').innerHTML = `
        <h2 style="background-color: blue;">NFC</h2>
        <br/>
        <p class="gameScore">#1${nfcPlayoffs[0]}</p>
        <br/>
        <div class="game">
            <p class="gameScore">#7 ${nfcPlayoffs[6]} <span id="wcnfc1">0</span> @ <span id="wcnfc2">0</span> ${nfcPlayoffs[1]} #2</p>
            <div class="buttons">
                <button onClick="points('wcnfc1', 7)">TD-home</button>
                <button onClick="points('wcnfc1', 3)">FG-home</button>
                <button onClick="points('wcnfc2', 7)">TD-away</button>
                <button onClick="points('wcnfc2', 3)">FG-away</button>
                <button id="endwcnfc1" onClick="checkWinner('wcnfc1','wcnfc2','nfc','${nfcPlayoffs[6]}', '${nfcPlayoffs[1]}', 'endwcnfc1');">endgame</button>
            </div>
        </div>
        
        <div class="game">
            <p class="gameScore">#6 ${nfcPlayoffs[5]} <span id="wcnfc3">0</span> @ <span id="wcnfc4">0</span> ${nfcPlayoffs[2]} #3</p>
            <div class="buttons">
                <button onClick="points('wcnfc3', 7)">TD-home</button>
                <button onClick="points('wcnfc3', 3)">FG-home</button>
                <button onClick="points('wcnfc4', 7)">TD-away</button>
                <button onClick="points('wcnfc4', 3)">FG-away</button>
                <button id="endwcnfc2" onClick="checkWinner('wcnfc3','wcnfc4','nfc','${nfcPlayoffs[5]}', '${nfcPlayoffs[2]}', 'endwcnfc2');">endgame</button>
            </div>
        </div>

        <div class="game">
            <p class="gameScore">#5 ${nfcPlayoffs[4]} <span id="wcnfc5">0</span> @ <span id="wcnfc6">0</span> ${nfcPlayoffs[3]} #4</p>
            <div class="buttons">
                <button onClick="points('wcnfc5', 7)">TD-home</button>
                <button onClick="points('wcnfc5', 3)">FG-home</button>
                <button onClick="points('wcnfc6', 7)">TD-away</button>
                <button onClick="points('wcnfc6', 3)">FG-away</button>
                <button id="endwcnfc3" onClick="checkWinner('wcnfc5','wcnfc6','nfc','${nfcPlayoffs[4]}', '${nfcPlayoffs[3]}', 'endwcnfc3');">endgame</button>
            </div>
        </div>
    `
}

function renderDivisionalRound(){

    document.getElementById('divisionalafc').innerHTML = `
        <h2 style="background-color: red;">AFC</h2>
        <br/>
        <div class="game">
            <p class="gameScore">${afcPlayoffs[3]} <span id="drafc1">0</span> @ <span id="drafc2">0</span> ${afcPlayoffs[0]}</p>
            <div class="buttons">
                <button onClick="points('drafc1', 7)">TD-home</button>
                <button onClick="points('drafc1', 3)">FG-home</button>
                <button onClick="points('drafc2', 7)">TD-away</button>
                <button onClick="points('drafc2', 3)">FG-away</button>
                <button id="enddrafc1" onClick="checkWinner('drafc1','drafc2','afc','${afcPlayoffs[3]}', '${afcPlayoffs[0]}', 'enddrafc1');">endgame</button>
            </div>
        </div>
        
        <div class="game">
            <p class="gameScore">${afcPlayoffs[2]} <span id="drafc3">0</span> @ <span id="drafc4">0</span> ${afcPlayoffs[1]}</p>
            <div class="buttons">
                <button onClick="points('drafc3', 7)">TD-home</button>
                <button onClick="points('drafc3', 3)">FG-home</button>
                <button onClick="points('drafc4', 7)">TD-away</button>
                <button onClick="points('drafc4', 3)">FG-away</button>
                <button id="enddrafc2" onClick="checkWinner('drafc3','drafc4','afc','${afcPlayoffs[2]}', '${afcPlayoffs[1]}','enddrafc2');">endgame</button>
            </div>
        </div>
    `

    document.getElementById('divisionalnfc').innerHTML = `
        <h2 style="background-color: blue;">NFC</h2>
        <br/>
        <div class="game">
            <p class="gameScore">${nfcPlayoffs[3]} <span id="drnfc1">0</span> @ <span id="drnfc2">0</span> ${nfcPlayoffs[0]}</p>
            <div class="buttons">
                <button onClick="points('drnfc1', 7)">TD-home</button>
                <button onClick="points('drnfc1', 3)">FG-home</button>
                <button onClick="points('drnfc2', 7)">TD-away</button>
                <button onClick="points('drnfc2', 3)">FG-away</button>
                <button id="enddrnfc1" onClick="checkWinner('drnfc1','drnfc2','nfc','${nfcPlayoffs[3]}', '${nfcPlayoffs[0]}', 'enddrnfc1');">endgame</button>
            </div>
        </div>
        
        <div class="game">
            <p class="gameScore">${nfcPlayoffs[2]} <span id="drnfc3">0</span> @ <span id="drnfc4">0</span> ${nfcPlayoffs[1]}</p>
            <div class="buttons">
                <button onClick="points('drnfc3', 7)">TD-home</button>
                <button onClick="points('drnfc3', 3)">FG-home</button>
                <button onClick="points('drnfc4', 7)">TD-away</button>
                <button onClick="points('drnfc4', 3)">FG-away</button>
                <button id="enddrnfc2" onClick="checkWinner('drnfc3','drnfc4','nfc','${nfcPlayoffs[2]}', '${nfcPlayoffs[1]}', 'enddrnfc2');">endgame</button>
            </div>
        </div>
    `
}

function renderConferenceFinals(){

    document.getElementById('conferenceafc').innerHTML = `
        <h2 style="background-color: red;">AFC</h2>
        <br/>
        <div class="game">
            <p class="gameScore">${afcPlayoffs[1]} <span id="cfafc1">0</span> @ <span id="cfafc2">0</span> ${afcPlayoffs[0]}</p>
            <div class="buttons">
                <button onClick="points('cfafc1', 7)">TD-home</button>
                <button onClick="points('cfafc1', 3)">FG-home</button>
                <button onClick="points('cfafc2', 7)">TD-away</button>
                <button onClick="points('cfafc2', 3)">FG-away</button>
                <button id="endcfafc1" onClick="checkWinner('cfafc1','cfafc2','afc','${afcPlayoffs[1]}', '${afcPlayoffs[0]}', 'endcfafc1');">endgame</button>
            </div>
        </div>
    `

    document.getElementById('conferencenfc').innerHTML = `
        <h2 style="background-color: blue;">NFC</h2>
        <br/>
        <div class="game">
            <p class="gameScore">${nfcPlayoffs[1]} <span id="cfnfc1">0</span> @ <span id="cfnfc2">0</span> ${nfcPlayoffs[0]}</p>
            <div class="buttons">
                <button onClick="points('cfnfc1', 7)">TD-home</button>
                <button onClick="points('cfnfc1', 3)">FG-home</button>
                <button onClick="points('cfnfc2', 7)">TD-away</button>
                <button onClick="points('cfnfc2', 3)">FG-away</button>
                <button id="endcfnfc1" onClick="checkWinner('cfnfc1','cfnfc2','nfc','${nfcPlayoffs[3]}', '${nfcPlayoffs[0]}', 'endcfnfc1');">endgame</button>
            </div>
        </div>
    `
}

function renderSuperBowl(){

    document.getElementById('superbowl').innerHTML = `
        <div class="game">
            <p class="gameScore"><span id="tsb1">${afcPlayoffs[0]} </span><span id="sb1">0</span> VS <span id="sb2">0</span> <span id="tsb2">${nfcPlayoffs[0]}</span></p>
            <div class="buttons">
                <button onClick="points('sb1', 7)">TD-home</button>
                <button onClick="points('sb1', 3)">FG-home</button>
                <button onClick="points('sb2', 7)">TD-away</button>
                <button onClick="points('sb2', 3)">FG-away</button>
                <button onClick="checkWinnerSB('sb1','sb2');">endgame</button>
            </div>
        </div>
    `
}

function points(current, point){
    let p = parseInt(document.getElementById(current).innerText) + parseInt(point);
    document.getElementById(current).innerText = p;
}

function checkWinner(t1, t2, conference, team1name, team2name, btn){

    let team1 = parseInt(document.getElementById(t1).innerText);
    let team2 = parseInt(document.getElementById(t2).innerText);

    if(team1 > team2){
        if(conference === 'afc'){
            let index = afcPlayoffs.indexOf(team2name);
            afcPlayoffs.splice(index,1);
        }else{
            let index = nfcPlayoffs.indexOf(team2name);
            nfcPlayoffs.splice(index,1);
        }
    }else{
        if(conference === 'afc'){
            let index = afcPlayoffs.indexOf(team1name);
            afcPlayoffs.splice(index,1);
        }else{
            let index = nfcPlayoffs.indexOf(team1name);
            nfcPlayoffs.splice(index,1);
        }
    }

    document.getElementById(btn).disabled = true;

    if(afcPlayoffs.length === 4 && nfcPlayoffs.length === 4){
        renderDivisionalRound();
    }

    if(afcPlayoffs.length === 2 && nfcPlayoffs.length === 2){
        renderConferenceFinals();
    }

    if(afcPlayoffs.length === 1 && nfcPlayoffs.length === 1){
        renderSuperBowl();
    }
}

function checkWinnerSB(t1, t2){

    let team1 = parseInt(document.getElementById(t1).innerText);
    let team2 = parseInt(document.getElementById(t2).innerText);

    if(team1 > team2){
        document.getElementById('champion').innerHTML = `<h2>${afcPlayoffs[0]}</h2>`;
        document.getElementById('champion').style.backgroundColor = '#ff4040';
        document.getElementById('champion').style.color = 'white';
    }else{
        document.getElementById('champion').innerHTML = `<h2>${nfcPlayoffs[0]}</h2>`;
        document.getElementById('champion').style.backgroundColor = '#7d75ff';
        document.getElementById('champion').style.color = 'white';
    }
}