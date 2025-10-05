
function beer(name) {
    return 'Hello ' + name
}

console.log(beer('Danila'))

// =============================================


const numbers = [2,5,8,13,21,4,35,17]

function printNumbersGreaterThanTen(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}

printNumbersGreaterThanTen(numbers)

// =================================================


function calculator(num1, num2, operator){
    if (operator === 'plus')
        {
        return num1 + num2;
    } else if (operator === 'minus') {
        return num1 - num2;
    } else if (operator === 'multiply') {
        return num1 * num2;
    } else if (operator === 'divide') {if (num2 === 0) {
            return 'Ошибка: деление на ноль';
        }
        return num1 / num2;
    } else {
        return 'Ошибка: неверный оператор';
    }
}
let resultMinus = calculator(2, 3, 'minus');
console.log('Результат вычитания: ' + resultMinus); 

let resultPlus = calculator(5, 3, 'plus');
console.log('Результат сложения: ' + resultPlus); 

let resultMultiply = calculator(4, 6, 'multiply');
console.log('Результат умножения: ' + resultMultiply)

let resultDivide = calculator(10, 2, 'divide');
console.log('Результат деления: ' + resultDivide);

// ============================================




const user = [

     {
        name:'Danil',
        age: 24,
        height:173,
        weight: 80
    
    }
]
   
for(let i = 0; i < user.length; i++)


console.log(user[i])


// =================================


const users = [
 
   
{
        id: 1,
        name: 'Иван Петров',
        role: 'user'
    },
    {
        id: 2,
        name: 'Анна Сидорова',
        role: 'admin'
    },
    {
        id: 3,
        name: 'Петр Иванов',
        role: 'user'
    },
    {
        id: 4,
        name: 'Мария Козлова',
        role: 'user'
    },
    {
        id: 5,
        name: 'Алексей Смирнов',
        role: 'admin'
    }





]

let regularUsersCount = 0

for (let i = 0; i < users.length; i++){

if (users[i].role === 'user'){
    regularUsersCount++
}


}

console.log('Количество обычных пользователей:' + regularUsersCount)