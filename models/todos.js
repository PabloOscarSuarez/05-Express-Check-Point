'use strict';
var tasks = {}; 
var list = [];
module.exports = {
  reset: () =>{tasks = {};list = [];},
  listPeople:()=>list,
  add:(name, task)=> {
    if (task.complete === undefined) {task.complete = false;} 
    if (tasks[name] === undefined){
      tasks[name] = [];
      tasks[name].push(task)
      list.push(name)
    }else tasks[name].push(task)},
  list:(name)=>tasks[name],
  complete:(name, posicion)=>tasks[name][posicion].complete = true,
  remove:(name, posicion)=>tasks[name].splice(posicion, 1)}


  /// anda a buscarla al angulo messi para vos super comprimdooo !!!!!!!! jajajaja