
  const list = document.querySelector(".list")
function add(){
    const text = document.getElementById("text").value;
    
    const html =`<li class="todo">

    <i class="fas fa-check-circle"></i>

    <span class = "span">${text}</span>

<i class="fas fa-trash"></i>
    </li>`;
    list.innerHTML += html;
  
}
list.addEventListener('click', e => {
    if (e.target.classList.contains('fa-trash')) {
      e.target.parentElement.remove();
    }
  });
  list.addEventListener('click', e => {
    if (e.target.classList.contains("fa-check-circle")) {
      if ((e.target.parentElement).style.textDecoration != 'line-through')
        (e.target.parentElement).style.textDecoration = 'line-through';
      else (e.target.parentElement).style.textDecoration = 'none';
    }
  });

