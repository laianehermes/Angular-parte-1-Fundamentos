import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos');       
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());

        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos', { params });       
    }    

    search(description: string) {
        const data = [
            {description: 'Opção 1'},
            {description: 'Opção 2'},
            {description: 'Opção 3'},
            {description: 'Teste 1'},
            {description: 'Teste 2'},
            {description: 'Teste 3'},
        ]
        
        return data.filter(elem => elem.description === description);
        // return this.http.get<string[]>(`${this.baseApiUrl}/v1/purchases`, {
        //     params: { search: '1', description }
        // });
    }
}
