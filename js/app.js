// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

// findBiggestWord(str)
function findBiggestWord(str) {
    return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
  };
  
  console.log(findBiggestWord('Every finish is essentially a start'));

// 2. написать функцию которая принимает число и возвращает перевернутое число

// function reverseNumber(number)
function reverseNumber(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverseNumber(456)));

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

// function unique(str) 
function unique(str)
{
 var str=str;
 var uniql="";
 for (var x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(unique("everyfinishisessentiallyastart"));

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

// function calcPoints(win, draw, loss)

function calcPoints(win, draw, loss) {
    return win + draw + loss;
}
console.log(calcPoints(3, 1, 0));


// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

// function statisctics(arr);

function statisctics(arr) {
    const maxValue = arr.reduce((max, current) => {
      return Math.max(max, current);
    });
    const minValue = arr.reduce((min, current) => {
      return Math.min(min, current);
    });
  }


// 6.Написать функцию которая принимает массив работников компании 

// const workers = [
//   { name: "Jimm", salary: 40000, department: "IT" },
//   { name: "Bob", salary: 60300, department: "HR" },
//   { name: "Stacy", salary: 15000, department: "IT" },
//   { name: "Tom", salary: 55200, department: "DEVOPS" },
//   { name: "Kate", salary: 25000, department: "IT" },
//   { name: "John", salary: 40000, department: "HR" },
//   { name: "Billy", salary: 60000, department: "DEVOPS" },
// ];

// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 



