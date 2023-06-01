class FormSubmit{
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button)

        if(this.form){
            this.url = this.form.getAttribute("action")
        }
    }

    displaySucess(){
        this.form.innerHTML = this.settings.sucess;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

//     async sendForm(){
//         try{
//         await fetch(this.url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body:"",
//         });

//         this.displaySucess();
//     } catch (error) {
//         this.displayError();
//         throw new Error(error);
//     }
// }
    init(){
        if (this.form) this.formButton.addEventListener("click", () => this.displaySucess());
        return this;
    }
}

const FormSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    Sucess: "<h1 class='success'>Mensagem enviada!</h1>",
    Error: "<H1 class='error'> Não foi possível enviar sua mensagem. </h1>",
});

FormSubmit.init();