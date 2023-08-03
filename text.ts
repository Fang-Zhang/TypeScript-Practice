// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: false}
// }

// createUser({name: "", email: "", isActive: false})

// type Point = {
//     x: number;
//     y: number;
// }

// function printPoint(point: Point){
//     console.log(point.x, point.y)
// }

// let scrore: number | string = 100;

function provideId(id: string){
    if (typeof id === "string"){
        return id.toLowerCase();
    } 
    return id;
    
}

export {}