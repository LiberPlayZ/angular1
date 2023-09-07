import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImageModel } from './backend-communication/image.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environment.apiUrl
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json' // Adjust content type based on API requirements
    });
  }

  sendDataToPython(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data, { headers: this.headers });
  }

  recivegraphdata(): Observable<any> {
    const graphApiUrl = '/graphUrl';
    const graphUrl = this.apiUrl + graphApiUrl;
    return this.http.get<any>(graphUrl, {});
  }

  sendGraphId(imageId: number): Promise<ImageModel> {
    const graphIdApiUrl = '/IdUrl';
    const Url = this.apiUrl + graphIdApiUrl + "?imageId=" + imageId;
    return this.http.get<ImageModel>(Url, { headers: this.headers }).toPromise()
  }
}
