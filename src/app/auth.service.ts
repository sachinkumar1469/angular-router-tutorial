import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class AuthService{
    isLoggedIn:boolean = false;

    login(){
        this.isLoggedIn = true;
    }
    logout(){
        this.isLoggedIn = false;
    }

    isAutheticated(){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res(this.isLoggedIn);
            },1000)
        })
    }
}