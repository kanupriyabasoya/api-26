let deckId = '';
fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
.then(res => res.json())
.then(data => deckId = data.deck_id);

document.getElementById('getAction').addEventListener('click', getFetch)

function getFetch(){
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {console.log(data)
        document.querySelector("#player1").src = data.cards[0].image;
        document.querySelector("#player2").src = data.cards[1].image; 

      

        let card1 = convert(data.cards[0].value);
        let card2 = convert(data.cards[1].value);
        console.log(card1);
        console.log(card2);
        
        if(card1 > card2){
            document.querySelector("span").innerText = "player1 wins";
            play1++;
        }else if(card1 < card2){
            document.querySelector("span").innerText = "player2 wins";
            play2++;
        }else {
            document.querySelector("span").innerText = "it's a tie";
        }
    });
    
}

function convert(val){
    if(val === "ACE"){
        val = 14;
    }else if(val === "KING"){
        val = 13;
    } else if(val === "QUEEN"){
        val = 12;
    } else if(val === "JACK"){
        val = 11;
    }else {
        val = Number(val);
    }
    return val;
}