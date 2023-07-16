// let fun = fetch("https://goweather.herokuapp.com/weather/ny");

// fun.then((respose)=>{
//     console.log(respose.status);
//     console.log(respose.ok);
//     return respose.json();
// }).then((json)=>{
//     console.log(json.temperature);
//     console.log(json.wind);

//     json.forecast.forEach(element => {
//         console.log(element.day, element.temperature, element.wind);
//         console.log();
//     });
// })

// POST request
const createTodo = async(todo)=>{
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo)
    }
    let respose = await fetch('https://jsonplaceholder.typicode.com/todos',options);
    return respose.json();
}

// GET request
const getTodo = async(id)=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/'+id);
    let todo = response.json(); 
    return todo;
}

const mainFunc = async()=>{
    let todo = {
        completed:true,
        id: 499,
        title: "first todo",
        userId:4
    }
    let p1 = await createTodo(todo);
    console.log(p1);
    let p2 = await getTodo(20);
    console.log(p2);
}

mainFunc()