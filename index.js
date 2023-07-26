const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const empty = document.querySelector(".empty");

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
        let li = document.createElement("li");
        let inputbox = document.createElement("input");
        li.innerHTML = inputBox.value;

        const div = document.createElement("div")
        let input = document.createElement("input");
        div.className = 'PruebaMarco'
        input.type = 'checkbox';

        div.appendChild(input)
        div.appendChild(li)

        listContainer.appendChild(div)
        

    }
    inputBox.value = ''
} 



// document.querySelector('').addEventListener('click',()=>{
//     let p = document.getElementById('counter')
//     let val = parseInt(p.textContent)
//     val++
//     p.textContent=val
// })

    