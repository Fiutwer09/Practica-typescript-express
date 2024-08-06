import express, {Request, Response} from "express";
import dotenv from "dotenv";
import cors from 'cors'; 


dotenv.config();

const practica = express()
    .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

    const PORT = process.env.PORT || 5050;


// EJEMPLO DE QUERYS : ?nombres=adso&apellidos=sena
    practica.post ('/domicilio',function(request: Request, response: Response){
        let cc = request.query.cc;
        let nombres = request.query.nombres;
        let apellidos = request.query.apellidos;
        console.log("----", cc , nombres , apellidos) // para probar en la terminal si estan llegando
        return response.status(200).json({
            "Status": "ok registrado con params",
            cc:cc, 
            nombres: nombres, 
            apellidos: apellidos
        });
    });

    // JSON 

    practica.post('/:id/:peso', function (request: Request, response : Response){
        let id = request.params.id;
        let peso = request.params.peso;
        let ancho = request.body.ancho;
        let alto = request.body.alto;
        return response.status (200).json({
            "Status" :"ok params y registrado con json",
            id:id, peso:peso, 
            ancho: ancho, 
            alto:alto
        });
    });

    practica.delete('/delete', function (request : Request, response : Response){
        let cc = request.query.cc;
        let motivo = request.body.motivo;
        let cabecera = request.header("id");
        console.log("----", cc, motivo, cabecera);
        return response.status (200).json({
            "Status" : "ok eliminado json con id",
            cc: cc , 
            cabecera: cabecera,
            motivo: motivo

        });
    });


    practica.put('/recibir_datos', function(request : Request , response : Response) {
        let cc = request.query.cc;
        let apellidos = request.body.apellidos;
        let cabecera = request.header ("domicilio");
        return response. status (200).json ({
            "Status" : "Ok información recibida",
            cc : cc,
            apellidos : apellidos,
            cabecera : cabecera
        });
    }); 


    practica.get('/registro-users/:cantidad/:marca', function (request : Request, response : Response){
        let precio = request.query.precio;
        let cantidad = request.params.cantidad;
        let marca = request.params.marca;
        let cabecera = request.header("domicilio");
        return response.status(200).json({
            "Status" : "ok se registro con exito",
            precio : precio,
            cantidad : cantidad,
            marca : marca,
            cabecera : cabecera
        });
    });

    practica.listen(PORT, () => {
        console.log("Servidor ejecutándose en el puerto: ", PORT);
    }).on("error", (error: any) => {
        throw new Error(error.message);
    });