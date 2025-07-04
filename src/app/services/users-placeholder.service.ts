import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersPlaceHolderListReponse } from "../types/users-placeholder-list-response";

@Injectable({
  providedIn: 'root'
})
export class UsersPlaceHolders {

  constructor(
    private readonly _httpClient: HttpClient
  ){}

  getUsersPlaceHolder(): Observable<UsersPlaceHolderListReponse> {
    return this._httpClient.get<UsersPlaceHolderListReponse>('https://jsonplaceholder.typicode.com/users');
  }

}