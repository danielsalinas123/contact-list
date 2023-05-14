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
        "id":"1017167488",
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

//Este json es una simulación de un contacto que ingresó el usuario mediante la pagina web.
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
let idContactoEliminado=32512643;

imprimirLista(listaContactos);

añadirContacto(listaContactos,contactoNuevo);

eliminarContacto(listaContactos,idContactoEliminado);

console.log('\n'+"----------FIN----------"+'\n');

function imprimirLista(lista)
{
    console.log('\n'+"Esta es tu lista de contactos:"+'\n');
    for(let contacto of lista)
        console.log(contacto);
}

function añadirContacto(lista,contactoNuevo)
{
    console.log('\n'+`Se añadirá a ${contactoNuevo.nombres} ${contactoNuevo["apellidos"]} a tu lista de contactos.`);
    lista.push(contactoNuevo);
    imprimirLista(lista);
}

function eliminarContacto(lista,idContacto)
{
    console.log('\n'+`Buscando el id: ${idContacto} en tu lista de contactos para eliminarlo...`);

    let indice=-1;
    let contador=0;
    for(let contacto of lista)
    {
        if(contacto.id==idContacto)
        {
            indice=contador;
            break;
        }
        contador++;
    }
    
    if(indice==-1)
        console.log('\n'+"El id ingresado no corresponde a ninguno en tu lista de contactos.");
    else
    {
        console.log('\n'+`Se eliminó a ${lista[indice].nombres} ${lista[indice].apellidos} de tu lista de contactos.`);
        lista.splice(indice,1);
        imprimirLista(lista);
    }
}