import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// module
import { AuthenticationModule } from './authentication/authentication.module';
// outro module para teste
import { ContentModule } from './content/content.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AuthenticationModule,
        ContentModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}