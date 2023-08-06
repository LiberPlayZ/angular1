import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) {}

  sendDataToPython(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, data, { headers });
}

recivegraphdata(): Observable<any> {
  const graphApiUrl= '/graphUrl'
  const graphUrl=this.apiUrl+graphApiUrl
  return this.http.post<any>(graphUrl, {});
}
}
