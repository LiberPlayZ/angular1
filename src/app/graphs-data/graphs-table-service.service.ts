import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TableModel } from './table.model';

@Injectable({
  providedIn: 'root'
})
export class GraphsTableServiceService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getGraphModels(): Observable<TableModel[]> //the function create http service that recieve array of tableModel from the backend
  {
    const graphsTableIdApiUrl = '/graphsTableUrl'
    const Url = this.apiUrl + graphsTableIdApiUrl
    return this.http.get<TableModel[]>(Url);


  }
}
