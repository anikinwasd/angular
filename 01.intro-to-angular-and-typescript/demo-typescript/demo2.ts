class Human {
    speak() {
        console.log('hello!');
    }
}

class Person extends Human{
    private name: string;
    public age: number;

    constructor(name: string, age: number) {
        super();
        this.name = name;
        this.age = age;
    }
}

const personIvan = new Person("Ivan", 25);

