var com;
(function (com) {
    var erwin;
    (function (erwin) {
        var Fresher;
        (function (Fresher) {
            var Boot = /** @class */ (function () {
                function Boot() {
                    this.action();
                }
                Boot.prototype.action = function () {
                    var _this = this;
                    var submit = document.getElementById("submit");
                    submit.addEventListener('click', function () {
                        _this.validate();
                    });
                };
                Boot.prototype.validate = function () {
                    var uname = document.getElementById("user").value;
                    var pass = document.getElementById("pass").value;
                    var male = document.getElementById("m1").value;
                    var female = document.getElementById("m2").value;
                    var mail = document.getElementById("mail").value;
                    var num = document.getElementById("num").value;
                    console.log(uname);
                    console.log(pass);
                    console.log(mail);
                    return true;
                };
                return Boot;
            }());
            Fresher.Boot = Boot;
        })(Fresher = erwin.Fresher || (erwin.Fresher = {}));
    })(erwin = com.erwin || (com.erwin = {}));
})(com || (com = {}));
