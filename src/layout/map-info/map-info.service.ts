import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
    apiUrl = 'http://192.168.100.5:8089/api/File/post';

  constructor(private http: HttpClient, private toastr: ToastrService) { }
  upload(formData) {
    return this.http.post<any>(`${this.apiUrl}`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map(event => this.getEventMessage(event, formData)),
    catchError(this.handleError)
    );
  }
  private getEventMessage(event: HttpEvent<any>, formData) {

    switch (event.type) {

      case HttpEventType.UploadProgress:
      // console.log(this.fileUploadProgress(event));
        return this.fileUploadProgress(event);

      case HttpEventType.Response:
      console.log(this.apiResponse(event));
        return this.apiResponse(event);

      default:
        return `File "${formData.get('profile').name}" surprising upload event: ${event.type}.`;
    }
  }

  private fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    if (percentDone === 100 ) {
    this.toastr.success('File is uploaded');
    }
    return { status: 'progress', message: percentDone };
  }

  private apiResponse(event) {
    return event.body;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}

