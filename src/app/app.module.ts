import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { OAuthModule } from "angular-oauth2-oidc";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ["https://gitlab.com/api"],
        sendAccessToken: true
      }
    })
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
