const express = require('express'); //llamando na express
const app = express();
app.use(express.json());
const PORT = 3000;

//GET obtener datos
app.get('/prueba', (req, res)=>{
    let personnas = [{
        id_person:1,
        nombre:"Edson",
        apellido:"sosa"
    },
    {
        id_person:2,
        nombre:"Juan",
        apellido:"perez"
    },
    {
        id_person:3,
        nombre:"Pedro",
        apellido:"Picapiedra"
    }]
    res.status(200).json({
        estado:1,
        mensaje:personnas
    })
})


//POST enviar datos
app.post('/prueba', (req, res)=>{
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let sexo = req.body.sexo;
    let fecha_nacimiento = req.body.fecha_nacimiento;
    console.log(nombre, apellido, sexo, fecha_nacimiento);
    try {
        res.status(200).json({
            estado:1,
            mensaje:"Registro correcto"
        })
    }catch(error){
        res.status(500).json({
            estado:0,
            mensaje:"error en el servidor"
        })
    }
})

//PUT enviar y modiuficar datos
app.put('/prueba/:id', (req, res)=>{
    let id_persona = req.params.id;
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    console.log("params id : ",id_persona);
    console.log("body : ",nombre, apellido);
    res.status(200).json({
        estado:1,
        mensaje:"Editado correctamente!!"
    });
})
//DELTE borrar datos o un dato
app.delete('/prueba/:id_persona', (req, res)=>{
   let id_person = req.params.id_persona;
   console.log(id_person);
   res.status(200).json({
    estado:1,
    mensaje:"borrado correctamente!!"
   })
})

console.log(`Escuchando el Puerto`,PORT);
app.listen(PORT);