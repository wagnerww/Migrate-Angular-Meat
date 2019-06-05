"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.Validate = function (another) {
        return (another !== undefined &&
            another.email === this.email &&
            another.password === this.password);
    };
    return User;
}());
exports.User = User;
exports.users = {
    "juliana@gmail.com": new User("juliana@gmail.com", "Juliana", "ju123"),
    "wagner@gmail.com": new User("wagner@gmail.com", "Wagner", "123")
};
