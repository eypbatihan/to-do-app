const text = document.getElementById("text").value;
const add = document.querySelector(".add");
const list = document.querySelector(".list");

const todo = `<li class = "todo"><i class="fas fa-check"></i> ${text}<i class="fas fa-trash"></i></li>`;




add.addEventListener("click",e =>{
    const text = document.getElementById("text").value;
    const todo = `<li class = "todo"><i class="fas fa-check"></i> ${text}<i class="fas fa-trash"></i></li>`;
    if(text != ""){
    list.innerHTML += todo;
    }
   
    });

    list.addEventListener('click', e => {
        if (e.target.classList.contains('fa-trash')) {
          e.target.parentElement.remove();
        }
      });
      list.addEventListener('click', e => {
        if (e.target.classList.contains("fa-check")) {
          if ((e.target.parentElement).style.textDecoration != 'line-through')
            (e.target.parentElement).style.textDecoration = 'line-through';
          else (e.target.parentElement).style.textDecoration = 'none';
        }
      });