export function genera_tabla() {

    document.getElementsByName('materias')[0].value = materias.length

    if(document.getElementsByClassName('tbl')[0]){
        document.getElementsByClassName('tbl')[0].remove()
    }

    var semestres = document.getElementsByName('semestres')[0].value
    var cantidadMaterias = materias.length
    var materiasPorSemestre = parseInt(cantidadMaterias, 10) / parseInt(semestres, 10);
    materiasPorSemestre = Math.ceil(materiasPorSemestre)

    // Obtener la referencia del elemento body
    var tableContainer = document.getElementsByClassName("table-container")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("div");
    tabla.classList.add('tbl')
    var tblBody = document.createElement("div");
    tblBody.classList.add('tbody')

    // Crea los headers
    var header = document.createElement("div");
    header.classList.add('header-row')

    // Crea las celdas
    for (var i = 0; i < semestres; i++) {
        // Crea columnas
        var row = document.createElement("div");
        row.classList.add('row');
        var headerData = document.createElement('label')
        headerData.classList.add('item', 'column')
        var textoHeader = document.createTextNode(`Semestre ${i+1}`)
        headerData.appendChild(textoHeader)
        row.appendChild(headerData)

        for (var j = 0; j < materiasPorSemestre; j++) {
            var item = document.createElement("div");
            item.id = Math.abs(cantidadMaterias - (materias.length + 1));
            item.classList.add('item')
            // var textoCelda = document.createTextNode("Materia " + Math.abs((materias - 36)));
            // celda.appendChild(textoCelda);
            row.appendChild(item);
            cantidadMaterias--;
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(row);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    tableContainer.appendChild(tabla);

    // Evaluar materias por semestre y llenar todos los semestres con un numero de materias

    var id = 0;
    for (var i = 0; i < semestres; i++) {
    // console.log(materiasPorSemestre)

        for (var j = 0; j < materiasPorSemestre; j++) {
            // console.log(materiasPorSemestre,j)
            if(materias[id]){
                var materiaText = document.createTextNode(materias[id].id)
                document.getElementById(id+1).appendChild(materiaText);
            }
            id++;
        }
    }
}

export function genera_tabla2() {
    var secondTable = document.getElementsByClassName('second-table')[0];
    var tabla = document.createElement('div');
    tabla.classList.add('tbl')
    var cuerpo = document.createElement('div')
    cuerpo.classList.add('tbody')
    var tableHeader = document.createElement('div')
    tableHeader.classList.add('tbl-header')
	tabla.appendChild(tableHeader)
	
	if(document.getElementsByClassName('tbl')[0]){
		document.getElementsByClassName('tbl')[0].remove()
		console.log('table deleted')
    }

    for (let i = 0; i < arreglo.length; i++) {
        var renglon = document.createElement('div');
        renglon.classList.add('row');
        var headerData = document.createElement('label')
        headerData.classList.add('item', 'column')
        var textHeader = document.createTextNode(`Sem ${arreglo[i].semestre}`)
        headerData.appendChild(textHeader)
        tableHeader.appendChild(headerData)

        for (let j = 0; j < arreglo[i].materias.length; j++) {
            var item = document.createElement('div');
            item.classList.add('item');
            var itemText = document.createTextNode(`Mat ${arreglo[i].materias[j]}`);
            item.appendChild(itemText);
            renglon.appendChild(item);
        }
        cuerpo.appendChild(renglon)
    }

    tabla.appendChild(cuerpo);
    secondTable.appendChild(tabla);
}

export const arreglo = [
    {semestre: 1, materias: [1,2,3]}, {semestre: 2, materias: [1,3]}, {semestre: 3, materias: [1,2,3,4,5,6]},
    {semestre: 4, materias: [1]}, {semestre: 4, materias: [1,2]}, {semestre: 6, materias: [1,2]},
]

export const materias = [
	{
		id: 1,
		name: "ac ipsum."
	},
	{
		id: 2,
		name: "sit amet,"
	},
	{
		id: 3,
		name: "luctus. Curabitur"
	},
	{
		id: 4,
		name: "et magnis"
	},
	{
		id: 5,
		name: "metus sit"
	},
	{
		id: 6,
		name: "quis diam."
	},
	{
		id: 7,
		name: "dictum magna."
	},
	{
		id: 8,
		name: "et magnis"
	},
	{
		id: 9,
		name: "Cum sociis"
	},
	{
		id: 10,
		name: "scelerisque sed,"
	},
	{
		id: 11,
		name: "enim non"
	},
	{
		id: 12,
		name: "hymenaeos. Mauris"
	},
	{
		id: 13,
		name: "sem semper"
	},
	{
		id: 14,
		name: "Nam tempor"
	},
	{
		id: 15,
		name: "Donec egestas."
	},
	{
		id: 16,
		name: "auctor quis,"
	},
	{
		id: 17,
		name: "Donec porttitor"
	},
	{
		id: 18,
		name: "dolor. Donec"
	},
	{
		id: 19,
		name: "pede. Praesent"
	},
	{
		id: 20,
		name: "nec, malesuada"
	},
	{
		id: 21,
		name: "in, hendrerit"
	},
	{
		id: 22,
		name: "sodales elit"
	},
	{
		id: 23,
		name: "fames ac"
	},
	{
		id: 24,
		name: "porta elit,"
	},
	{
		id: 25,
		name: "velit eu"
	},
	{
		id: 26,
		name: "vitae, erat."
	},
	{
		id: 27,
		name: "placerat, augue."
	},
	{
		id: 28,
		name: "luctus vulputate,"
	},
	{
		id: 29,
		name: "semper cursus."
	},
	{
		id: 30,
		name: "in felis."
	},
	{
		id: 31,
		name: "sodales. Mauris"
	},
	{
		id: 32,
		name: "molestie tortor"
	},
	{
		id: 33,
		name: "eu neque"
	},
	{
		id: 34,
		name: "nulla. Cras"
	},
	{
		id: 35,
		name: "sed tortor."
	},
	{
		id: 36,
		name: "neque sed"
	},
	{
		id: 37,
		name: "ligula eu"
	},
	{
		id: 38,
		name: "non, egestas"
	},
	{
		id: 39,
		name: "magna a"
	},
	{
		id: 40,
		name: "eu tellus."
	},
	{
		id: 41,
		name: "mi enim,"
	},
	{
		id: 42,
		name: "dictum magna."
	},
	{
		id: 43,
		name: "ipsum. Phasellus"
	},
	{
		id: 44,
		name: "dolor dolor,"
	},
	{
		id: 45,
		name: "volutpat ornare,"
	},
	{
		id: 46,
		name: "molestie arcu."
    },]

    