//inicar firebase
firebase.initializeApp({
    apiKey: "AIzaSyBXW-68yNj5m-fuvHf3G3jBa463Z_kIrs8",
    authDomain: "loadigital-546c1.firebaseapp.com",
    projectId: "loadigital-546c1",
});

const db = firebase.firestore();
//agregar datos

const boton = document.getElementById("boton");
boton.addEventListener('click', ()=>{
    const id = document.getElementById('id').value;
    const title = document.getElementById('title').value;
    const genero = document.getElementById('genero').value;
    const categoria = document.getElementById('categoria').value;
    const tipo = document.getElementById('tipo').value;
    const puntuacion = document.getElementById('puntuacion').value;
    const fecha = document.getElementById('fecha').value;
    const resumen = document.getElementById('resumen').value;
    const linkImg = document.getElementById('linkImg').value;
    const link_0= document.getElementById('link_0').value;
    const link_1= document.getElementById('link_1').value;
    const link_2= document.getElementById('link_2').value;
    const link_3= document.getElementById('link_3').value;
    const link_4= document.getElementById('link_4').value;
    const link_5= document.getElementById('link_5').value;
    const link_6= document.getElementById('link_6').value;
    const link_7= document.getElementById('link_7').value;
    const link_8= document.getElementById('link_8').value;
    const link_9= document.getElementById('link_9').value;
    const text_0 = document.getElementById('text_0').value;
    const text_1 = document.getElementById('text_1').value;
    const text_2 = document.getElementById('text_2').value;
    const text_3 = document.getElementById('text_3').value;
    const text_4 = document.getElementById('text_4').value;
    const text_5 = document.getElementById('text_5').value;
    const text_6 = document.getElementById('text_6').value;
    const text_7 = document.getElementById('text_7').value;
    const text_8 = document.getElementById('text_8').value;
    const text_9 = document.getElementById('text_9').value;
    const linkDescarga = document.getElementById('linkDescarga').value;
    const linkAtras = document.getElementById('linkAtras').value;
    const linkReproducir = document.getElementById('linkReproducir').value;
    
    db.collection("users").add({
        id: id,
		title: title,
		genero: genero,
		categoria: categoria,
        tipo: tipo,
		puntuacion: puntuacion,
		fecha: fecha,
		resumen: resumen,
		linkImg: linkImg,
		linkSeries:[
            link_0,
            link_1,
            link_2,
            link_3,
            link_4,
            link_5,
            link_6,
            link_7,
            link_8,
            link_9
			],
		textCapitulo:[
			text_0,
            text_1,
            text_2,
            text_3,
            text_4,
            text_5,
            text_6,
            text_7,
            text_8,
            text_9
		],
		linkDescarga: linkDescarga,
		linkAtras: linkAtras,
		linkReproducir:linkReproducir
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('id').value = "";
        document.getElementById('title').value = "";
        document.getElementById('genero').value = "";
        document.getElementById('categoria').value = "";
        document.getElementById('tipo').value = "";
        document.getElementById('puntuacion').value = "";
        document.getElementById('fecha').value = "";
        document.getElementById('resumen').value = "";
        document.getElementById('linkImg').value = "";
        document.getElementById('link_0').value = "";
        document.getElementById('link_1').value = "";
        document.getElementById('link_2').value = "";
        document.getElementById('link_3').value = "";
        document.getElementById('link_4').value = "";
        document.getElementById('link_5').value = "";
        document.getElementById('link_6').value = "";
        document.getElementById('link_7').value = "";
        document.getElementById('link_8').value = "";
        document.getElementById('link_9').value = "";
        document.getElementById('text_0').value = "";
        document.getElementById('text_1').value = "";
        document.getElementById('text_2').value = "";
        document.getElementById('text_3').value = "";
        document.getElementById('text_4').value = "";
        document.getElementById('text_5').value = "";
        document.getElementById('text_6').value = "";
        document.getElementById('text_7').value = "";
        document.getElementById('text_8').value = "";
        document.getElementById('text_9').value = "";
        document.getElementById('linkDescarga').value = "";
        document.getElementById('linkAtras').value = "";
        document.getElementById('linkReproducir').value = "";
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
})


//db movies

const tabla = document.getElementById("tabla");
db.collection("users").onSnapshot((querySnapshot) => {
    tabla.innerHTML = "";
    querySnapshot.forEach((doc) => {
        tabla.innerHTML +=`
                <th>${doc.data().id}</th>
				<td>${doc.data().title}</td>
				<td style="display:none">${doc.data().genero}</td>
                <td style="display:none">${doc.data().categoria}</td>
                <td style="display:none">${doc.data().tipo}</td>
                <td style="display:none">${doc.data().puntuacion}</td>
                <td style="display:none">${doc.data().fecha}</td>
                <td style="display:none">${doc.data().resumen}</td>
                <td style="display:none">${doc.data().linkImg}</td>
                <td style="display:none">${doc.data().linkSeries[0]}</td>
                <td style="display:none">${doc.data().linkSeries[1]}</td>
                <td style="display:none">${doc.data().linkSeries[2]}</td>
                <td style="display:none">${doc.data().linkSeries[3]}</td>
                <td style="display:none">${doc.data().linkSeries[4]}</td>
                <td style="display:none">${doc.data().linkSeries[5]}</td>
                <td style="display:none">${doc.data().linkSeries[6]}</td>
                <td style="display:none">${doc.data().linkSeries[7]}</td>
                <td style="display:none">${doc.data().linkSeries[8]}</td>
                <td style="display:none">${doc.data().linkSeries[9]}</td>
                <td style="display:none">${doc.data().textCapitulo[0]}</td>
                <td style="display:none">${doc.data().textCapitulo[1]}</td>
                <td style="display:none">${doc.data().textCapitulo[2]}</td>
                <td style="display:none">${doc.data().textCapitulo[3]}</td>
                <td style="display:none">${doc.data().textCapitulo[4]}</td>
                <td style="display:none">${doc.data().textCapitulo[5]}</td>
                <td style="display:none">${doc.data().textCapitulo[6]}</td>
                <td style="display:none">${doc.data().textCapitulo[7]}</td>
                <td style="display:none">${doc.data().textCapitulo[8]}</td>
                <td style="display:none">${doc.data().textCapitulo[9]}</td>
                <td style="display:none">${doc.data().linkDescarga}</td>
                <td style="display:none">${doc.data().linkAtras}</td>
                <td style="display:none">${doc.data().linkReproducir}</td>
                <td><input type="submit" value="ELIMINAR" id="eliminar" onclick="eliminar('${doc.id}')"></td>
                <td><a href="#main"><input type="submit" value="EDITAR" id="editar" 
                onclick="editar(
                    '${doc.id}',
                    '${doc.data().id}',
                    '${doc.data().title}',
                    '${doc.data().genero}',
                    '${doc.data().categoria}',
                    '${doc.data().tipo}',
                    '${doc.data().puntuacion}',
                    '${doc.data().fecha}',
                    '${doc.data().resumen}',
                    '${doc.data().linkImg}',
                    '${doc.data().linkSeries[0]}',
                    '${doc.data().linkSeries[1]}',
                    '${doc.data().linkSeries[2]}',
                    '${doc.data().linkSeries[3]}',
                    '${doc.data().linkSeries[4]}',
                    '${doc.data().linkSeries[5]}',
                    '${doc.data().linkSeries[6]}',
                    '${doc.data().linkSeries[7]}',
                    '${doc.data().linkSeries[8]}',
                    '${doc.data().linkSeries[9]}',
                    '${doc.data().textCapitulo[0]}',
                    '${doc.data().textCapitulo[1]}',
                    '${doc.data().textCapitulo[2]}',
                    '${doc.data().textCapitulo[3]}',
                    '${doc.data().textCapitulo[4]}',
                    '${doc.data().textCapitulo[5]}',
                    '${doc.data().textCapitulo[6]}',
                    '${doc.data().textCapitulo[7]}',
                    '${doc.data().textCapitulo[8]}',
                    '${doc.data().textCapitulo[9]}',
                    '${doc.data().linkDescarga}',
                    '${doc.data().linkAtras}',
                    '${doc.data().linkReproducir}'
                    )"></a></td>
        `//end innerHTML
    });
});

//borrar datos
function eliminar(codigo){
    db.collection("users").doc(codigo).delete().then(() => {
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
};

//atualizar datos
function editar(codigo,id,title,genero,categoria,tipo,puntuacion,fecha,resumen,linkImg,link_0,link_1,
    link_2,link_3,link_4,link_5,link_6,link_7,link_8,link_9,text_0,text_1,text_2,text_3,text_4,
    text_5,text_6,text_7,text_8,text_9,linkDescarga,linkAtras,linkReproducir){
        document.getElementById('id').value = id;
        document.getElementById('title').value = title;
        document.getElementById('genero').value = genero;
        document.getElementById('categoria').value = categoria;
        document.getElementById('tipo').value = tipo;
        document.getElementById('puntuacion').value = puntuacion;
        document.getElementById('fecha').value = fecha;
        document.getElementById('resumen').value = resumen;
        document.getElementById('linkImg').value = linkImg;
        document.getElementById('link_0').value = link_0;
        document.getElementById('link_1').value = link_1;
        document.getElementById('link_2').value = link_2;
        document.getElementById('link_3').value = link_3;
        document.getElementById('link_4').value = link_4;
        document.getElementById('link_5').value = link_5;
        document.getElementById('link_6').value = link_6;
        document.getElementById('link_7').value = link_7;
        document.getElementById('link_8').value = link_8;
        document.getElementById('link_9').value = link_9;
        document.getElementById('text_0').value = text_0;
        document.getElementById('text_1').value = text_1;
        document.getElementById('text_2').value = text_2;
        document.getElementById('text_3').value = text_3;
        document.getElementById('text_4').value = text_4;
        document.getElementById('text_5').value = text_5;
        document.getElementById('text_6').value = text_6;
        document.getElementById('text_7').value = text_7;
        document.getElementById('text_8').value = text_8;
        document.getElementById('text_9').value = text_9;
        document.getElementById('linkDescarga').value = linkDescarga;
        document.getElementById('linkAtras').value = linkAtras;
        document.getElementById('linkReproducir').value = linkReproducir;

        var actualizar = document.getElementById('actualizar');
        actualizar.onclick = function(){
                 var washingtonRef = db.collection("users").doc(codigo); 
        
                var id = document.getElementById('id').value;
                var title = document.getElementById('title').value;
                var genero = document.getElementById('genero').value;
                var categoria = document.getElementById('categoria').value;
                var tipo = document.getElementById('tipo').value;
                var puntuacion = document.getElementById('puntuacion').value;
                var fecha = document.getElementById('fecha').value;
                var resumen = document.getElementById('resumen').value;
                var linkImg = document.getElementById('linkImg').value;
                var link_0= document.getElementById('link_0').value;
                var link_1= document.getElementById('link_1').value;
                var link_2= document.getElementById('link_2').value;
                var link_3= document.getElementById('link_3').value;
                var link_4= document.getElementById('link_4').value;
                var link_5= document.getElementById('link_5').value;
                var link_6= document.getElementById('link_6').value;
                var link_7= document.getElementById('link_7').value;
                var link_8= document.getElementById('link_8').value;
                var link_9= document.getElementById('link_9').value;
                var text_0 = document.getElementById('text_0').value;
                var text_1 = document.getElementById('text_1').value;
                var text_2 = document.getElementById('text_2').value;
                var text_3 = document.getElementById('text_3').value;
                var text_4 = document.getElementById('text_4').value;
                var text_5 = document.getElementById('text_5').value;
                var text_6 = document.getElementById('text_6').value;
                var text_7 = document.getElementById('text_7').value;
                var text_8 = document.getElementById('text_8').value;
                var text_9 = document.getElementById('text_9').value;
                var linkDescarga = document.getElementById('linkDescarga').value;
                var linkAtras = document.getElementById('linkAtras').value;
                var linkReproducir = document.getElementById('linkReproducir').value;

    // Set the "capital" field of the city 'DC'
    return washingtonRef.update({
        id: id,
		title: title,
		genero: genero,
		categoria: categoria,
        tipo: tipo,
		puntuacion: puntuacion,
		fecha: fecha,
		resumen: resumen,
		linkImg: linkImg,
		linkSeries:[
            link_0,
            link_1,
            link_2,
            link_3,
            link_4,
            link_5,
            link_6,
            link_7,
            link_8,
            link_9
			],
		textCapitulo:[
			text_0,
            text_1,
            text_2,
            text_3,
            text_4,
            text_5,
            text_6,
            text_7,
            text_8,
            text_9
		],
		linkDescarga: linkDescarga,
		linkAtras: linkAtras,
		linkReproducir:linkReproducir
})
.then(() => {
    console.log("Document successfully updated!");
        document.getElementById('id').value = "";
        document.getElementById('title').value = "";
        document.getElementById('genero').value = "";
        document.getElementById('categoria').value = "";
        document.getElementById('tipo').value = "";
        document.getElementById('puntuacion').value = "";
        document.getElementById('fecha').value = "";
        document.getElementById('resumen').value = "";
        document.getElementById('linkImg').value = "";
        document.getElementById('link_0').value = "";
        document.getElementById('link_1').value = "";
        document.getElementById('link_2').value = "";
        document.getElementById('link_3').value = "";
        document.getElementById('link_4').value = "";
        document.getElementById('link_5').value = "";
        document.getElementById('link_6').value = "";
        document.getElementById('link_7').value = "";
        document.getElementById('link_8').value = "";
        document.getElementById('link_9').value = "";
        document.getElementById('text_0').value = "";
        document.getElementById('text_1').value = "";
        document.getElementById('text_2').value = "";
        document.getElementById('text_3').value = "";
        document.getElementById('text_4').value = "";
        document.getElementById('text_5').value = "";
        document.getElementById('text_6').value = "";
        document.getElementById('text_7').value = "";
        document.getElementById('text_8').value = "";
        document.getElementById('text_9').value = "";
        document.getElementById('linkDescarga').value = "";
        document.getElementById('linkAtras').value = "";
        document.getElementById('linkReproducir').value = "";
})
.catch((error) => {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
})
}
}



