const colorsContainer = document.getElementById('colorsContainer');

const btn = document.getElementById('btn') ;
const baslik = document.getElementById('baslık');
const bigColor=document.getElementById('bigColor')

const buttons=[" red" , "yellow" ,"blue","pink","green"]
for (let sayac=0;sayac < buttons.length;sayac++){

const color=document.createElement('div')

color.id = buttons[sayac]
color.classList.add('smallbox');
color.style.backgroundColor = buttons[sayac]

colorsContainer.appendChild(color)

color.addEventListener("click",function(){
    bigColor.style.background=buttons[sayac]
    
})

}



