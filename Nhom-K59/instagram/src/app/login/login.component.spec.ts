import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   
  });

  it('on the login page', () => {
    expect(component).toBeTruthy();
  });

  it(`login succesfully when email is nguyentienviet and password is 123456`, async(() => {
     const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.debugElement.componentInstance;
    expect(login.email).toEqual('nguyentienviet') && expect(login.password).toEqual('123456') ;
  }));
  
  it(`login faily when email is notvietatall and password is 123456`, async(() => {
     const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.debugElement.componentInstance;
    expect(login.emailWrong).toEqual('notvietatall') && expect(login.passwordWrong).toEqual('123456') ;
  }));
});
