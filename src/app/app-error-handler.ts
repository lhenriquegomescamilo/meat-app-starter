import { Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import * as _ from "lodash";
export class ErrorHandler {
    public static handleError(error: Response | any) {
        let errorMessage: string;
        if (!_.isEmpty(error) && error instanceof Response) {
            errorMessage = `Erro ${error.status} ao recuperar na URL ${error.url} - ${error.statusText}`;
        } else {
            errorMessage = error.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);


    }
}