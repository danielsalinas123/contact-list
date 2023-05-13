let listaContactos = ["Robert Baratheon","Eddard Stark","Edmure Tully","Doran Martell","Jon Arryn","Tywin Lannister"];

let contactoNuevo="Mace Tyrell";
let contactoEliminado="Jon Arryn";

imprimirLista(listaContactos);

añadirContacto(listaContactos,contactoNuevo);

eliminarContacto(listaContactos,contactoEliminado);

console.log('\n'+"----------FIN----------"+'\n');

function añadirContacto(lista,contactoNuevo)
{
    console.log('\n'+`Se añadirá a ${contactoNuevo} a tu lista de contactos.`);
    lista.push(contactoNuevo);
    imprimirLista(lista);
}

function eliminarContacto(lista,contactoEliminado)
{
    console.log('\n'+`Buscando a ${contactoEliminado} en tu lista de contactos para eliminarlo...`);

    let indice=-1;
    let contador=0;
    for(let contacto of lista)
    {
        if(contacto==contactoEliminado)
        {
            indice=contador;
            break;
        }
        contador++;
    }
    
    if(indice==-1)
        console.log('\n'+`${contactoEliminado} no se encuentra en tu lista de contactos.`);
    else
    {
        lista.splice(indice,1);
        console.log('\n'+`Se eliminó a ${contactoEliminado} de tu lista de contactos.`);
        imprimirLista(lista);
    }
}

function imprimirLista(lista)
{
    console.log('\n'+"Esta es tu lista de contactos:"+'\n');
    for(let contacto of lista)
        console.log(contacto);
}