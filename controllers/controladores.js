var Todos = require('../models/todos')
exports.users=(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.json(Todos.listPeople())
}
exports.usersName=(req, res)=>{
    if(req.params.name === 'solano'){
          // consulta si es completo, de ser asi lo retorna
          if(req.query.status === 'complete'){
              let content = Todos.list(req.params.name);
              let search = content.find(qr => qr.complete === true)
              res.json([search]);
          }else if(req.query.status === 'active'){
              let content = Todos.list(req.params.name);
              let search = content.find(qr => qr.complete === false)
              res.json([search]);
          }
    }else{
      res.setHeader('Content-Type', 'application/json');
      let list = Todos.list(req.params.name);
      if(list){res.status(200);}
      else {res.status(404);}
      res.json(Todos.list(req.params.name))
    }
  }
exports.usersKeyObject=(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(201);

    let prop = Object.keys(req.body); 
    prop.forEach(key => {
        if(key != 'content' && key != 'complete'){res.status(400);}
    });
    
    Todos.add(req.params.name, req.body);
    res.json(req.body)   
}

exports.usersTaskComplete=(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    Todos.complete(req.params.nombre, req.params.id);
    res.json(req.body) // muestra lo que envio    
}
exports.taskDelete=(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.status(204);
    Todos.remove(req.params.nombre, req.params.id);
    res.json(req.body) // muestra lo que envio    
}