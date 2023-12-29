import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

enum SendState {
    Init,
    Pending,
    Sent,
    Error
}

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

    public SendState = SendState;
    public state  = SendState.Init;

    public async onSubmit() {
        console.log(this.form.value, this.form.valid);
        this.state = SendState.Pending;

        try {
            await this.sendMail(this.form.value);
        } catch (err) {
            this.state = SendState.Error;
            return;
        }

        this.state = SendState.Sent;
    }

    private sendMail(data:any) {
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => Math.random() < .5 ? resolve() : reject(), 2000)
        })
    }
}