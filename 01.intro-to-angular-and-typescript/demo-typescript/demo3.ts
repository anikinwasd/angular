function getIdentity<T>(id: T) {

    console.log(id);
}

getIdentity<number>(123);

enum PaymentStatus {
    Failed = 0,
    Successful = 1,
    Pending = 2,
}
//                            0           1            2
const PaymentStatusArr = ["Failed", "Succsessful", "Pending"];
const PaymentStatusObj = {
    0: "Failed",
    1: "Succsessful",
    2: "Pending",
}

const PaymentStatus2 = {
    Failed: "Failed",
    Successful: "Succsessful",
    Pending: "Pending",
};

PaymentStatus2.Failed = "Фаилед";

interface UserInterface {
    name: string;
}

const usersTest2 = [
    { name: "Marto1" }, // 0
    { name: "Marto2" },
    { name: "Marto3" },
    { name: "Marto4" },
    { name: "Marto5" },
    { name: "Marto6" },
] as UserInterface[];

let someVar1: UserInterface = { name: "Marto1213"};
let someVar2 = { name: "Marto1213"} as UserInterface; // cast

let someVar3 = someVar2 as any;
//let someVar3 = someVar2 as unknown;

function test(name: string, users: UserInterface[]) {
    users.forEach(u => {
        u.name = name;
    })
}

function test2(name: string, users: UserInterface[]): void {};

function test3(name: string, users: UserInterface[]): number {
    return 5;
};

function test4(name: string, users: UserInterface[]): string {
    return "5";
};
