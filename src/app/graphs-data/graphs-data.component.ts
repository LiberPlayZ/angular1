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

  constructor(private graphs_TableService: GraphsTableServiceService, private router: Router) { }
  ngOnInit(): void {
    this.graphs_TableService.getGraphModels().subscribe((response) => {
      this.data = response;
      // for (let i = 0; i < this.data.length; i++) {
      //   console.log(this.data[i].correlation_coefficient);


      // }

    })
  }
  showgraph(id: number,correlation_coefficient:number): void //the function receive graph id and navigate to graph component through router.
  {
    sessionStorage.setItem('activatedByButton', 'true');
    this.router.navigate(['showgraph', id,correlation_coefficient])
  }



  getColorClass(number: number): string { // the func return the class color by the correlation_coefficient value.
    if (number == 0)
      return 'no_connection';
    if (Math.abs(number) <= 0.3)
      return 'low_connection';
    else if (0.3 < Math.abs(number) && Math.abs(number) <= 0.7)
      return 'medium_connection';
    else if (0.7 < Math.abs(number) && Math.abs(number) < 1)
      return 'strong_connection';
    else
      return 'perfect_connection';
  }


}
