async function listarDistritos() {
    const url = "./assets/json/distritos.json"; 
    const method = 'GET';
    
    console.log('CALL SERVICE: ', url);
    
    const resp = await fetch(url, {
        method: method,
    }).then((response) => {
        console.log(`response: ${response.status}`)
        
        if (response.status == 200) {
            console.log('RESPUESTA CORRECTA.');
            return response.json();
        } else {
            console.log('ERROR EN LA RESPUESTA DE LA API');
        }
    }).then((data) => {
        console.log(`distritos: ${data.distritos}`);
        
        let selectOneDistrito = `<select id="lista-distritos" 
                          class="form-select my-3" aria-label="Select distrito">`;
        for (let i = 0; i < data.distritos.length; i++) {
            console.log(`distrito: ${data.distritos[i].nombre}`);
            let nombre = data.distritos[i].nombre;
            selectOneDistrito += `<option value="${i}">${nombre}</option>`;
        }
        selectOneDistrito += `</select>`;
        
        let labelDistrito = `<label for="lista-distritos" 
                        class="form-label">DISTRITOS</label>`;
        
        let selectHTML = `${labelDistrito} ${selectOneDistrito}`;
        console.log(`selectOneDistrito: ${selectHTML}`);
        document.getElementById('distritos').innerHTML = selectHTML;
    }).catch((err) => {
        console.log(`ERROR:  ${err.message}`);
    });
}