module com.erwin.Fresher {
  export class Boot {

    constructor() {
      this.action();
    }

    action(): void {
      var submit = document.getElementById("submit");
      submit.addEventListener('click', () => {
        this.validate();
      });
    }

    validate(): boolean {
      var uname = (<HTMLInputElement>document.getElementById("user")).value;
      var pass=(<HTMLInputElement>document.getElementById("pass")).value;
      var male=(<HTMLInputElement>document.getElementById("m1")).value;
      var female=(<HTMLInputElement>document.getElementById("m2")).value;
      var mail=(<HTMLInputElement>document.getElementById("mail")).value;
      var num=(<HTMLInputElement>document.getElementById("num")).value;




      console.log(uname);
      console.log(pass);
      console.log(mail);

      return true;
    }









  }
}
