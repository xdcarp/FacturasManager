import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public ApiServer: string = "http://localhost:41603/";
    public ApiODDUrl: string = "api/odd";
    public ServerWithApiUrl: string = this.ApiServer + this.ApiODDUrl;
}