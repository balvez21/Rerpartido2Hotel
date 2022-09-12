
$('#boton').click(function () {

    $('#galeria').html(' ');
    

    if(document.getElementById('1500').checked){
    
       const habitacion = galeriaHabitaciones.filter(element => {
        
        if(element.precio == 1500 ){
        //.PREPEND AGREGA CONTENIDO AL PRINCIPIO.
       $('#galeria').prepend(
        '<div>' + 
            '<img src='+ element.imagen + ' />' +
            '<h2>'+ element.nombre+'</h2>' +
            '<p>'+'Camas: '+ element.camas+'</p>'+
            '<p>'+ 'Baños: '+element.baños+' </p>'+
            '<p>'+ 'Tamaño: '+element.tamaño+' </p>'+
            '<p>'+ 'Precio: '+ element.precio+' </p>'+
            '<div/>');
}
       })
 }

 if(document.getElementById('1800').checked){

    const habitacion = galeriaHabitaciones.filter(element => {
     
     if(element.precio == 1800){

    $('#galeria').prepend(
        '<div>' + 
        '<img src='+ element.imagen + ' />' +
        '<h2>'+ element.nombre+'</h2>' +
        '<p>'+'Camas: '+ element.camas+'</p>'+
        '<p>'+ 'Baños: '+element.baños+' </p>'+
        '<p>'+ 'Tamaño: '+element.tamaño+' </p>'+
        '<p>'+ 'Precio: '+ element.precio+' </p>'+
        '<div/>');
}
    })
}

if(document.getElementById('2800').checked){

    const habitacion = galeriaHabitaciones.filter(element => {
     
     if(element.precio == 2800){

    $('#galeria').prepend(
        '<div>' + 
        '<img src='+ element.imagen + ' />' +
        '<h2>'+ element.nombre+'</h2>' +
        '<p>'+'Camas: '+ element.camas+'</p>'+
        '<p>'+ 'Baños: '+element.baños+' </p>'+
        '<p>'+ 'Tamaño: '+element.tamaño+' </p>'+
        '<p>'+ 'Precio: '+ element.precio+' </p>'+
        '<div/>');
}
    })
}

if(document.getElementById('1500').checked){

    const habitacion = galeriaHabitaciones.filter(element => {
     
     if(element.precio == 1500){

    $('#galeria').prepend(
        '<div>' + 
        '<img src='+ element.imagen + ' />' +
        '<h2>'+ element.nombre+'</h2>' +
        '<p>'+'Camas: '+ element.camas+'</p>'+
        '<p>'+ 'Baños: '+element.baños+' </p>'+
        '<p>'+ 'Tamaño: '+element.tamaño+' </p>'+
        '<p>'+ 'Precio: '+ element.precio+' </p>'+
        '<div/>');
}
    })
}

if(document.getElementById('1simple').checked){

    const habitacion = galeriaHabitaciones.filter(element => {
     
     if(element.camas == '1 simple'){

    $('#galeria').prepend(
        '<div>' + 
        '<img src='+ element.imagen + ' />' +
        '<h2>'+ element.nombre+'</h2>' +
        '<p>'+'Camas: '+ element.camas+'</p>'+
        '<p>'+ 'Baños: '+element.baños+' </p>'+
        '<p>'+ 'Tamaño: '+element.tamaño+' </p>'+
        '<p>'+ 'Precio: '+ element.precio+' </p>'+
        '<div/>');
}
    })
}

if(document.getElementById('2simple').checked){

    const habitacion = galeriaHabitaciones.filter(element => {
     
     if(element.camas == '2 simples'){

    $('#galeria').prepend(
        '<div>' + 
        '<img src='+ element.imagen + ' />' +
        '<h2>'+ element.nombre+'</h2>' +
        '<p>'+'Camas: '+ element.camas+'</p>'+
        '<p>'+ 'Baños: '+element.baños+' </p>'+
        '<p>'+ 'Tamaño: '+element.tamaño+' </p>'+
        '<p>'+ 'Precio: '+ element.precio+' </p>'+
        '<div/>');
}
    })
}

if(document.getElementById('2dobles').checked){

    const habitacion = galeriaHabitaciones.filter(element => {
     
     if(element.camas == '2 dobles'){

    $('#galeria').prepend(
        '<div>' + 
        '<img src='+ element.imagen + ' />' +
        '<h2>'+ element.nombre+'</h2>' +
        '<p>'+'Camas: '+ element.camas+'</p>'+
        '<p>'+ 'Baños: '+element.baños+' </p>'+
        '<p>'+ 'Tamaño: '+element.tamaño+' </p>'+
        '<p>'+ 'Precio: '+ element.precio+' </p>'+
        '<div/>');
}
    })
}

if(document.getElementById('1baño').checked){

    const habitacion = galeriaHabitaciones.filter(element => {
     
     if(element.baños== '1 baño'){

    $('#galeria').prepend(
        '<div>' + 
        '<img src='+ element.imagen + ' />' +
        '<h2>'+ element.nombre+'</h2>' +
        '<p>'+'Camas: '+ element.camas+'</p>'+
        '<p>'+ 'Baños: '+element.baños+' </p>'+
        '<p>'+ 'Tamaño: '+element.tamaño+' </p>'+
        '<p>'+ 'Precio: '+ element.precio+' </p>'+
        '<div/>');
}
    })
}

if(document.getElementById('2baños').checked){

    const habitacion = galeriaHabitaciones.filter(element => {
     
     if(element.baños == '2 baños'){

    $('#galeria').prepend(
        '<div>' + 
        '<img src='+ element.imagen + ' />' +
        '<h2>'+ element.nombre+'</h2>' +
        '<p>'+'Camas: '+ element.camas+'</p>'+
        '<p>'+ 'Baños: '+element.baños+' </p>'+
        '<p>'+ 'Tamaño: '+element.tamaño+' </p>'+
        '<p>'+ 'Precio: '+ element.precio+' </p>'+
        '<div/>');
}
    })
}


        });

        if(document.getElementById('1simple').checked){

            const habitacion = galeriaHabitaciones.filter(element => {
             
             if(element.camas == '1 simple'){
        
            $('#galeria').prepend(
                '<div>' + 
                '<img src='+ element.imagen + ' />' +
                '<h2>'+ element.nombre+'</h2>' +
                '<p>'+'Camas: '+ element.camas+'</p>'+
                '<p>'+ 'Baños: '+element.baños+' </p>'+
                '<p>'+ 'Tamaño: '+element.tamaño+' </p>'+
                '<p>'+ 'Precio: '+ element.precio+' </p>'+
                '<div/>');
        }
            })
        }

//RONY SILVA - BRUNO ALVEZ        
