const array = ['a', 10, 'b', 'hola', 122, 15];

function only_letters(array) {
    const new_array = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'string') {
            new_array.push(array[i]);
        }
    }
    console.log(new_array);
}

only_letters(array)


function only_numbers(array) {
    const new_array = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number') {
            new_array.push(array[i]);
        }
    }
    console.log(new_array);
}

only_numbers(array)

function biggest_number(array) {
    const new_array = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == 'number') {
            new_array.push(array[i]);
        }
    }
    console.log(Math.max.apply(null, new_array));
}

biggest_number(array)