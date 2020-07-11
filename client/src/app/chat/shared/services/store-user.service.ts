import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreUserService {

  constructor() { }


  /**
   * getStoredUser
   */
  public getStoredUser() {
    let storedUser = sessionStorage.getItem("userName");
    return storedUser ? storedUser : "";
  }

  /**
   * storeUser
   */
  public storeUser(userName) {
    sessionStorage.setItem("userName", userName);
  }



}
