document.querySelector('#check').addEventListener('click',getSpell)

function getSpell(){

  const choice = document.querySelector('#chName').value.toLowerCase();
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;
  fetch(url)
  .then(res => res.json())
  .then(data => {
      console.log(data)
    document.querySelector('.putChaName').innerText = data.subclasses[0].name;
    document.querySelector('.putChaDescription').innerText = data.classes[0].name;
    document.querySelector('ul').innerText = ' ';
    data.subclasses.forEach(obj => {
      console.log(obj.name)
      const li = document.createElement('li')
      li.textContent = obj.name;
      document.querySelector('ul').appendChild(li);

    } )
   
})
}