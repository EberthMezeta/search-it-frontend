import { CookieService } from 'ngx-cookie-service';
import { Token } from './../../interfaces/token';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginform !: FormGroup;
  public token !: Token;

  public TokenEmpty :boolean = true;

  constructor(private fb: FormBuilder, public loginservice:LoginService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.loginform = this.createForm();
  }

  private createForm():FormGroup {
    return this.fb.group({
      username: '',
      password: ''
    });
  }

  public onSubmit():void {
    this.loginservice.getToken(this.loginform.value.username, this.loginform.value.password).subscribe(
      (data : Token ) => {
        this.token = data;
        this.TokenEmpty = false;
        console.log(this.token);
        this.cookieService.set('token', this.token.access_token,{expires: this.token.expires_in});
      }
    );

    console.log(this.token);
  }


  public showToken():void {
    console.log(this.token);
  }

  public isToken():boolean {
    return this.TokenEmpty;
  }

}
