// const message = 'Hello World';//String
// alert(message);

// const sum = 2 + 2;//Number
// alert(sum);

const age = parseFloat(prompt('Enter you age'));
alert('you age is ' + age);

const nextAge = add(age, 1);
alert('at next year you will be ' + nextAge);

//Boolean True False
if (age < 18) {
    alert('you are underaged!');
}
else {
    alert('you are adult!');
}

//Create function

function add(a, b) {
    const sum = a + b;
    return sum;
}