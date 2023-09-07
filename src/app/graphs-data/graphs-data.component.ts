import { Component, OnInit } from '@angular/core';
import { GraphsTableServiceService } from './graphs-table-service.service';
import { TableModel } from './table.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graphs-data',
  templateUrl: './graphs-data.component.html',
  styleUrls: ['./graphs-data.component.css']
})
export class GraphsDataComponent implements OnInit {
  data: TableModel[] = [];

  constructor(private graphs_TableService: GraphsTableServiceService,private router:Router) { }
  ngOnInit(): void {
    this.graphs_TableService.getGraphModels().subscribe((response) => {
      this.data = response
    })
  }
  showgraph(id: number): void { 
    sessionStorage.setItem('activatedByButton', 'true'); 
    this.router.navigate(['showgraph',id])
  }


}
