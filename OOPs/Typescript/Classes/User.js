var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    User.prototype.getProfile = function () {
        return "User ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return User;
}());
var user1 = new User(1, "Akshaya");
var user2 = new User(2, "Rahul");
console.log(user1.getProfile());
console.log(user2.getProfile());
