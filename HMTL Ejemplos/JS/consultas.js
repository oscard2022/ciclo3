function verestudiantes(){
    var listapost;
    var url="https://jsonplaceholder.typidecode.com/post"
    
    fetch(url)
    .then(Response=>Response.json())
    .then((data)=>{

    var info= "<h1>Modulo de estudiantes</h1>"
    var info=info+"<table>"
    var info=info+"<tr>"
    var info=info+"<th> id </th>"
    var info=info+"<th> user id </th>"
    var info=info+"<th> titulo </th>"
    var info=info+"<th> detalle </th>"
    var info=info+"<th> acciones </th>"
    var info=info+"<tr>"
    var info=info+"<table>"

    for(var i=0;i<listapost.lenth;i++)
    {
        info=info+"<tr>"
        info=info+"<td>"+listapost[i]['id']+"</td>"
        info=info+"<td>"+listapost[i]['useid']+"</td>"
        info=info+"<td>"+listapost[i]['title']+"</td>"
        info=info+"<td>"+listapost[i]['body']+"</td>"
        info=info+"<td> <span class='badge bg-success'>Editar</span> <span class='badge bg-danger'>Eliminar</span></td>"
        info=info+"</tr>"

    document.getElementById("estudiantes").innerhtml-info
    }
    
    
}

function verprofesores(){
    var info="<h1>modulo de profesores<h/1>"
    document.getElementById("profesores")
}
function limpiar(){
    var info="";
    document.getElementById("estudiantes").innerHTML=info
    document.getElementById("profesores").innerHTML=info
}