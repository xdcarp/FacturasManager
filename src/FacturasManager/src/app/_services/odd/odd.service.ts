import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

import { Configuration } from '../../shared/configuration';

import { ODD } from './odd';

@Injectable()
export class ODDService {
    
    /*Urls Api */
    getByIdUrl: string = '/GetById/';
    
    objetosDeDeseo: ODD[] = [
        new ODD(1, 'Facturas'),
        new ODD(2, 'Yerba'),
        new ODD(3, 'Café')
    ];

    constructor(private _http: Http, private configuration : Configuration) { }

    public getODDs =  (): Observable<ODD[]> => {
        return this._http.get(this.configuration.ServerWithApiUrl) 
            .map(data => data.json());
    };

    getODDsByPersona(idPersona) { 
        //TODO: servicio que trae los odds de una persona en particular
    }

    addODD(nombre: string) { 
        //TODO: servicio que da de alta al odd
    }

    getOddById = (id: number): Observable<ODD> => {
    return this._http.get(this.configuration.ServerWithApiUrl + this.getByIdUrl + id)
        .map(data => data.json());
};
}