/** NOTA: por la letra del problema yo entendi que se intenta buscar el valor 10, y no el de a = '10'.
 *  por lo tanto esta solucion solo busca el valor numerico == 10 dentro del array.
 */

const array = [1, 11, 'a', 'b', 123];


function search_value(array) {
    let flag = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 10) {
            flag = false;
            console.log('Value 10 was found in array');
        }
    }
    if (flag == true) {
        console.log('Value 10 was NOT found in array');
    }
}

search_value(array);