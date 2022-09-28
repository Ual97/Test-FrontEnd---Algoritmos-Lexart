/**
 * NOTA: el slice(2,6) se usa ya que 'Math.random().toString(36)' a veces genera 12 valores en vez de 11
 * por lo tanto obteniendo los valores del 2 al 6 con el slice asegura tener siempre 4 valores por sub_id.
 */

function generateID() {
    let id = '';
    for (let i = 0; i < 4; i++) {
        let sub_id = Math.random().toString(36).slice(2, 6);
        if (i == 3) {
            id += sub_id;
        }
        else{
            id += sub_id + '-';
        }
    }
    console.log(id);
}

generateID();