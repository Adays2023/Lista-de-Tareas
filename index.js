const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById(".button");
const counter = document.getElementById("counter");

let contador = 0;

inputBox.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
       addTask();
    }
})

function addTask(){
    if(inputBox.value ===''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No Ingreso Tarea!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
  
     }      
    else{
        let inputbox = document.createElement("input");
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        const div = document.createElement("div")
        div.id = 'ada'
        let input = document.createElement("input");

        const deletebutton = document.createElement("button")
        deletebutton.textContent = 'X'
        deletebutton.className='deleteBtn'

        div.className = 'PruebaMarco'

        input.type = 'checkbox';

        div.appendChild(input)
        div.appendChild(li)
        div.appendChild(deletebutton)

        listContainer.appendChild(div)

        input.addEventListener('click', function(){
            if(input.checked){
                console.log('esta checkeado')
                contador++;
                counter.textContent = contador
            }
            else{
                console.log('No esta checkeado')
                contador--;
                counter.textContent = contador
               
            }
        })

        deletebutton.addEventListener('click', function(){
            console.log('elimina')
            contador--;
            counter.textContent = contador

            div.remove();
            saveDate();
        })

    
    }
    inputBox.value = ''
    saveDate();
} 

// funcion de guardado de datos 

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDate();
    }
    } 
,false);
function saveDate(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

function imprime(){
    let p = document.getElementById('counter')
    p.textContent=contador
}