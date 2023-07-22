function ajouterTache() {
    const tache = document.getElementById('tache');
    const taskList = document.getElementById('taskList');
 
    if (!tache.value) {
        tache.focus();
        return;
      }

    const newTask = document.createElement('li');
        newTask.innerText= tache.value;

        $(newTask).on('swiperight', function (){
            if (this.parentNode === taskListTerminees) {
                taskListTerminees.removeChild(this);
                taskList.appendChild(this);
            }
            if(this.classList.contains('termine')) {
                this.classList.remove('termine');
            }
            else {
                this.classList.add('termine');
                const taskListTerminees = document.getElementById('taskListTerminees');
                taskListTerminees.appendChild(this);
            }
        });
    
        $(newTask).on('swipeleft', function() {
            $(this).hide('slow', function(){
                this.remove
            });
        });

        taskList.appendChild(newTask);
        $(taskList).listview('refresh');
        tache.value='';
        tache.focus();
    
}
function reinitialiser(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
       $(taskList).listview('refresh');

    const taskListTerminees = document.getElementById('taskListTerminees');
   taskListTerminees.innerHTML = '';
    $(taskListTerminees).listview('refresh');

}


