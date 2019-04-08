import { Project } from '../project-info/project-info.model';
import { OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService  {
  public API = 'http://localhost:6654/api';
  public PROJECT_API = `${this.API}/ProjectInfoes`;
  apiUrl = 'http://192.168.100.9:8088/api/File/post';
  // private projectInfo: Project;
  constructor(private http: HttpClient) {}
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
        return this.fileUploadProgress(event);
      case HttpEventType.Response:
        return this.apiResponse(event);
      default:
        return `File "${formData.get('profile').name}" surprising upload event: ${event.type}.`;
    }
  }
  private fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
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

  getAll(): Observable <Array<Project>> {
    return this.http.get<Array<Project>>(this.PROJECT_API);
  }

  get(id: number) {
    return this.http.get<Project>(`${this.PROJECT_API}/${id}`);
  }

  save(project: Project): Observable<Project> {
    let result: Observable<Project>;
    if (project.id) {
      result = this.http.put<Project>(
        `${this.PROJECT_API}/${project.id}`,
        project
      );
    } else {
      result = this.http.post<Project>(this.PROJECT_API, project);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(`${this.PROJECT_API}/${id.toString()}`);
  }







  // projectChanged = new Subject<Project>();

  // addProject(rproject: Project) {
  //   console.log(rproject);
  //   this.projectInfo = rproject;
  // }

  // getProjectInfo() {
  //   return this.projectInfo;
  // }

  // setProject(rproject: Project) {
  //   this.projectInfo = rproject;
  //   console.log(this.projectInfo);
  //   this.projectChanged.next( this.projectInfo);
  // }

}
