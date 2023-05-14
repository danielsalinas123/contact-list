let listaContactos = 
[
    {
        "id":1036635414,
        "nombres":"Robert",
        "apellidos":"Baratheon",
        "telefono":6042390794,
        "ubicaciones":{
                         "ciudad":"Las tierras de la tormenta",
                         "dirección":"Bastión de tormentas"
        }
    },
    {
        "id":1017167488,
        "nombres":"Eddard",
        "apellidos":"Stark",
        "telefono":6042161477,
        "ubicaciones":{
                         "ciudad":"El norte",
                         "dirección":"Invernalia"
        }
    },
    {
        "id":32512643,
        "nombres":"Edmure",
        "apellidos":"Tully",
        "telefono":6042602934,
        "ubicaciones":{
                         "ciudad":"Las tierras de los ríos",
                         "dirección":"Aguasdulces"
        }
    }
];

//Este json es una simulación de un contacto nuevo que ingresó el usuario mediante la pagina web.
let contactoNuevo=
{
    "id":70081805,
    "nombres":"Mace",
    "apellidos":"Tyrell",
    "telefono":6045112675,
    "ubicaciones":{
                     "ciudad":"El dominio",
                     "dirección":"Altojardín"
    }
}

//Esta variable es una simulación de un id que el usuario ingreso por la pagina web para elimiar dicho contacto.
let idContactoEliminado=1017167488;

//Este json es una simulación de un contacto que será actualizado con la información ingresada por la página web.
let contactoActualizado=
{
    "id":32512643,
    "nombres":"Petyr",
    "apellidos":"Baelish",
    "telefono":3024441808,
    "ubicaciones":{
                     "ciudad":"El valle de Arryn",
                     "dirección":"El nido de águilas"
    }
}

imprimirLista(listaContactos);

añadirContacto(listaContactos,contactoNuevo);

eliminarContacto(listaContactos,idContactoEliminado);

modificarContacto(listaContactos,contactoActualizado);

imprimirLista(listaContactos);

console.log('\n'+"----------FIN----------"+'\n');

function imprimirLista(lista)
{
    console.log('\n'+"Esta es tu lista de contactos:"+'\n');
    for(let contacto of lista)
        console.log(contacto);
}

function añadirContacto(lista,contactoNuevo)
{
    console.log('\n'+`Se ha añadido a ${contactoNuevo.nombres} ${contactoNuevo["apellidos"]} a tu lista de contactos.`);
    lista.push(contactoNuevo);
    //imprimirLista(lista);
}

function eliminarContacto(lista,idContacto)
{
    console.log('\n'+`Buscando el id: ${idContacto} en tu lista de contactos para eliminarlo...`);

    let indice=buscarContacto(lista,idContacto);
    
    if(indice==-1)
        console.log('\n'+`El id ${idContacto} no corresponde a ningún contacto, ergo no habrá ninguna eliminación en tu lista de contactos.`);
    else
    {
        console.log('\n'+`Se eliminó a ${lista[indice].nombres} ${lista[indice].apellidos} de tu lista de contactos.`);
        lista.splice(indice,1);
        //imprimirLista(lista);
    }
}

function modificarContacto(lista,contacto)
{
    console.log('\n'+`Buscando el id: ${contacto["id"]} en tu lista de contactos para modificarlo...`);

    let indice=buscarContacto(lista,contacto.id);

    if(indice==-1)
        console.log('\n'+`El id ${contacto.id} no corresponde a ningún contacto, ergo no habrá ninguna actialización en tu lista de contactos.`);
    else
    {
        if(contacto.nombres!=null)
            lista[indice].nombres=contacto.nombres;
        if(contacto.apellidos!=null)
            lista[indice].apellidos=contacto.apellidos;
        if(contacto.telefono!=null)
            lista[indice].telefono=contacto.telefono;
        if(contacto.ubicaciones.ciudad!=null)
            lista[indice].ubicaciones.ciudad=contacto.ubicaciones.ciudad;
        if(contacto.ubicaciones.dirección!=null)
            lista[indice].ubicaciones.dirección=contacto.ubicaciones.dirección;
        
        console.log('\n'+`El contacto identificado con el id ${contacto.id} ha sido actualizado con la información indicada, así:`+'\n');
        console.log(lista[indice]);
    }
}

function buscarContacto(lista,id)
{
    let contador=0;
    for(let contacto of lista)
    {
        if(contacto.id==id)
            return contador;
        contador++;
    }
    return -1;
}