
document.querySelector('button').addEventListener('click',getChoice);

function getChoice(){
    const choice =document.querySelector('input').value;
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`
    fetch(url)
    .then(res => res.json())
    .then(data => data.subclasses.forEach(element => {
        console.log(element);
    })
    );

}