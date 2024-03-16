let result = document.getElementById('result')
let filter = document.getElementById('filter')  
let last=document.getElementsByClassName('last-li')

let listitems=[]
getdata()

filter.addEventListener('input',e=>f(e.target.value))
async function getdata(){  
    
    const res= await fetch('https://randomuser.me/api?results=50')
 result.innerHTML=''
    const {results} = await res.json()
      
    results.forEach(user => {
        const li= document.createElement('li')
        listitems.push(li)

        li.innerHTML=`<img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user" >
           <h4>${user.name.first} ${user.name.last}</h4>
           <p>${user.location.city} ${user.location.country}</p>
        </div>`        
        result.appendChild(li)        
    });
}

function f(searchterm){
    listitems.forEach((item)=>{
 if(item.innerText.toLowerCase().includes(searchterm.toLowerCase())){
    
    console.log(searchterm.toLowerCase())
    console.log(item.innerText.toLowerCase())
    item.classList.remove('hide')
    }
    else{
item.classList.add('hide')
    }
    })
   
}
