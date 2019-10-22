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
      var uname = document.getElementById("user").value;
      console.log(uname);

      return true;
    }









  }
}
