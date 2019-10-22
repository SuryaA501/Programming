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
                    console.log(uname);
                    return true;
                };
                return Boot;
            }());
            Fresher.Boot = Boot;
        })(Fresher = erwin.Fresher || (erwin.Fresher = {}));
    })(erwin = com.erwin || (com.erwin = {}));
})(com || (com = {}));
