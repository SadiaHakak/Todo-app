const toDos= [{
        text:'offer salah',
        completed:true
},{
        text:'cook food',
        completed:false
},{
        text:'study javascript',
        completed:true
},{
        text:'wash clothes',
        completed:false
},
{
       text:'wash utensils',
       completed:true
}];

const filters= {
    searchText:'',
    hideCompleted:false
}




const renderTodos=function(todos,filters){
    const filteredTodos=todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())&&
        (!filters.hideCompleted||!todo.completed)
    });
    const incompleteTodos=filteredTodos.filter(function(todo){
    return !todo.completed;
    });

    document.querySelector('#addTodo').innerHTML='';

    const summary = document.createElement('h2');
    summary.textContent = `you have ${incompleteTodos.length} todos left`;
    document.querySelector('#addTodo').appendChild(summary);
    

    filteredTodos.forEach(function(todo){
        const newT=document.createElement('p');
        newT.textContent=todo.text;
        document.querySelector('div#addTodo').appendChild(newT);
    });

};
renderTodos(toDos,filters);


document.querySelector('#todo').addEventListener('input',function(e){
	filters.searchText=e.target.value;
    renderTodos(toDos,filters);
});

document.querySelector('#add-todo').addEventListener('submit',function(e){
    e.preventDefault();
    toDos.push({
        text:e.target.elements.newText.value,
        completed:false
    });
    renderTodos(toDos,filters)
    e.target.elements.newText.value=''

})

document.querySelector('#hide-completed').addEventListener('change',function(e){
     filters.hideCompleted=e.target.checked;
     renderTodos(toDos,filters)
})
