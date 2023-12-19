import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component ({
    templateUrl: './contact.html',
    styleUrls: ['./style.scss']
})
export class ContactPage {
    public form = new FormGroup({

        name: new FormControl(''),
        company: new FormControl(''),
        phone: new FormControl(''),
        email: new FormControl(''),
        object: new FormControl(''),
        message: new FormControl('')
    })

    public onSubmit() {
        console.log(this.form.value, this.form.valid)
    }
}