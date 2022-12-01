import PromptSync from "prompt-sync";
// import { fruits } from "./module/fruits.modul";

const prompt = PromptSync()

type Fruit = {
    name: string
    color: string
    count: number
    price: number
}
const fruits: string[] = []

while(true){
    const request = prompt('Wait request: ')
    const body = prompt('Body: ')

    if(request == ' '){ break }

    const array = request.split(' ')
    const method = array[0]
    const resource = array[1]

    if(resource == 'fruits'){
        if(method.toLowerCase() == "get"){
            console.log(fruits);
        } else if( method.toLowerCase() == "post"){
            fruits.push(body)
            console.log('Your changes save');
        }else{
            console.log("404: Resource " + resource + " hasn't method " + method);
            
        }
    }else{
        console.error('Cannot do ' + request);
        
    }
}