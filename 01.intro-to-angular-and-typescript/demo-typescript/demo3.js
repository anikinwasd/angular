function getIdentity(id) {
    console.log(id);
}
getIdentity(123);
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Failed"] = 0] = "Failed";
    PaymentStatus[PaymentStatus["Successful"] = 1] = "Successful";
    PaymentStatus[PaymentStatus["Pending"] = 2] = "Pending";
})(PaymentStatus || (PaymentStatus = {}));
//                            0           1            2
var PaymentStatusArr = ["Failed", "Succsessful", "Pending"];
var PaymentStatusObj = {
    0: "Failed",
    1: "Succsessful",
    2: "Pending",
};
var PaymentStatus2 = {
    Failed: "Failed",
    Successful: "Succsessful",
    Pending: "Pending",
};
PaymentStatus2.Failed = "Фаилед";
var usersTest2 = [
    { name: "Marto1" },
    { name: "Marto2" },
    { name: "Marto3" },
    { name: "Marto4" },
    { name: "Marto5" },
    { name: "Marto6" },
];
var someVar1 = { name: "Marto1213" };
var someVar2 = { name: "Marto1213" }; // cast
var someVar3 = someVar2;
//let someVar3 = someVar2 as unknown;
function test(name, users) {
    users.forEach(function (u) {
        u.name = name;
    });
}
function test2(name, users) { }
;
function test3(name, users) {
    return 5;
}
;
function test4(name, users) {
    return "5";
}
;
