import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpComponent } from '../help-component/help-component.component';
import { RegisterComponent } from '../register-component/register-component.component';
import { LoginComponent } from '../login-component/login-component.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        HelpComponent
    ],
    exports:[
        LoginComponent,
        RegisterComponent,
        HelpComponent
    ]
})
export class AuthenticationModule {}
