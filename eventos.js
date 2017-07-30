
$("document").ready(function(){

	console.log("ready: Database create!");
	//Create the database
	var db = new SQL.Database();

    // Run a query without reading the results
    db.run("CREATE TABLE test (nombre,edad,correo,fnac,fprueba,pruebas);");

	$("#resultados").click(function(){

	})

	$("#agregarpa").click(function(){
	
	})

	$("#actividades").click(function(){

	})

	$("#enviarResult").click(function(){

	})	

	$("#Mostrar").click(function(){
    // Prepare a statement
	    var stmt = db.prepare("SELECT * FROM test");
	    
	    while(stmt.step()) { 
	        var row = stmt.getAsObject();
	        console.log("row: ",row);
	    }
	})

	$("#AgregarUs").click(function(){
		var DatosPaciente;
		var selected = '';  

        $('input[name="prueba"]:checked').each(function(){
            selected += $(this).text()+',';
        }); 

		
		DatosPaciente={
			"nombre":$("#nombrePaciente").val(), 
			"edad":$("#edad").val(),
			"fnacimiento":$("#fnacimiento").val(),
			"fprueba":$("#fprueba").val(),
			"email":$("#email").val(),
			"pruebas":selected
		}

		if(DatosPaciente.nombre && DatosPaciente.edad && DatosPaciente.fnacimiento && DatosPaciente.fprueba && DatosPaciente.pruebas){
			console.log("Se han guardado los siguientes datos del paciente: ",DatosPaciente);

		    // Insert  rows
		    db.run("INSERT INTO test VALUES (?,?,?,?,?,?)", [DatosPaciente.nombre,DatosPaciente.edad,DatosPaciente.email,DatosPaciente.fnacimiento,DatosPaciente.fprueba,DatosPaciente.pruebas]);

		}else{
			alert("Debe completar los campos obligatorios. (*)");
		}
	})

})//fin ready