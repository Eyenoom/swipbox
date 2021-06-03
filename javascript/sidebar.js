const sidebar = document.querySelector(".sidebar");
const closebutton = document.querySelector(".closebutton");
const openbutton = document.querySelector(".openbutton");
  
openbutton.addEventListener('click', () => {
    sidebar.classList.add('sidebar--open');
    closebutton.classList.add ('closebutton--open');
    });

closebutton.addEventListener('click', () => {
    sidebar.classList.remove('sidebar--open');
    closebutton.classList.remove('closebutton--open');
    });