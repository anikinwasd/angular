let isEven:boolean = false;
let num:number = 4;
let str:string = "";

type User = {
    name: string;
    age: number;
}

const peshoUser = {
    name: "Pesho",
    age: 21,
} as User;

peshoUser.age = 20;

interface AnotherUser {
    firstName: string;
    id: number;
}

class AnotherUserClass implements AnotherUser {
    firstName: string;
    id: number;

    getUserName() {
        return this.firstName
    }
}

const anotherUserList = [
    { firstName: "Ivan", id: 1} ,
    { firstName: "Mitko", id: 2 },
    { firstName: "Maria", id: 3 },
] as AnotherUser[];

anotherUserList.forEach((firstName, id) => {
    console.log(`${id}: ${firstName} `);
});