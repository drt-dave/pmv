const Empleado = require('../models/empleados.model');
let response ={
  msg: "",
  exito: false
}

//Método para crear un dato - Create
exports.create = (req,res)=>{
  let empleado = new Empleado({
    nombre: req.body.nombre,
    apellido_p: req.body.apellido_p,
    apellido_m: req.body.apellido_m,
    telefono: req.body.telefono,
    mail: req.body.mail,
    direccion: req.body.direccion
  });

  empleado.save(function(err){
    if(err){
      console.log = false,
	response.exito = false,
	response.msg = "Error al guardar empleado",
	res.json(response)
      return;
    }

    response.exito = true,
      response.msg = "El empleado se guardó correctamente"
    res.json(response)
  })
}

//Método para traer todos los datos - read
exports.find = (req,res)=>{
  Empleado.find( (err, empleados)=>{
    res.json(empleados)
  })
}

//Método para traer un único dato
exports.findOne = (req,res)=>{
  Empleado.findOne({_id: req.params.id},(err, empleado)=>{
    res.json(empleado)
  })
}
//Método para actualizar datos - Update
exports.update = (req,res) => {
  let empleado = {
    nombre: req.body.nombre,
    apellido_p: req.body.apellido_p,
    apellido_m: req.body.apellido_m,
    telefono: req.body.telefono,
    mail: req.body.mail,
    direccion: req.body.direccion
  }

  Empleado.findByIdAndUpdate(req.params.id,{$set:empleado},(err) => {
    if(err){
      console.error(err),
	response.exito = false,
	response.msg = "Error al modificar el empleado"
      res.json(response)
      return;
    }

    response.exito = true,
      response.msg = "El empleado se modificó correctamente"
    res.json(response)
  })
}

//Método para eliminar un dato - Remove
exports.remove = (req,res) => {
  Empleado.findByIdAndRemove({_id: req.params.id}, (err) =>{
    if(err){
      console.error(err),
	response.exito = false,
	response.msg = "Error al eliminar el empleado"
      res.json(response)
      return;
    }

    response.exito = true,
      response.msg = "El empleado se eliminó correctamente"
    res.json(response)
  })
}
