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
    
    const text_0 = document.getElementById('text_0').value;
    
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
            link_0
            
			],
		textCapitulo:[
			text_0
            
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
        
        document.getElementById('text_0').value = "";
        
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
                
                <td style="display:none">${doc.data().textCapitulo[0]}</td>
                
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
                    
                    '${doc.data().textCapitulo[0]}',
                    
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
function editar(codigo,id,title,genero,categoria,tipo,puntuacion,fecha,resumen,linkImg,link_0,
    text_0,linkDescarga,linkAtras,linkReproducir){
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
        
        document.getElementById('text_0').value = text_0;
        
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
                
                var text_0 = document.getElementById('text_0').value;
                
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
            link_0
            
			],
		textCapitulo:[
			text_0
            
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
       
        document.getElementById('text_0').value = "";
        
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



