import { Component } from '@angular/core';
import { DataService } from './data.service';
import { SafeResourceUrl,DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular1';
  // public messageClass={
  //   "test":true
  // }
  RandomNumber: number=-1;
  


  function1() {//example function
    return "click on the button to get random number";
  }
  generaterandomNumber() // the func generate number between 1 to 100
  {
    this.RandomNumber = Math.floor(Math.random() * 500)
  }
  function2() {
    return alert("hello world")
  }


  //send data to python backend
  constructor(private dataService: DataService,private router:Router) {}

  sendDataToPython() {
    const data = { name: 'John', age: 30 };
    this.dataService.sendDataToPython(data).subscribe(
      (response) => {
        console.log('Data sent successfully:', response);
      },
      (error) => {
        console.error('Error sending data:', error);
      }
    );
  }
  public IMAGE:string;
  showImage(): void {
    this.dataService.recivegraphdata().subscribe(
      (response: any) => {
        console.log(response.graph_data);
        this.IMAGE="data:image/png;base64,"+response.graph_data;
      //  this.router.navigate(['/view-image'], { queryParams: { imageBase64: response.graph_data } });
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

//   recivegraphdata(): void {
//     this.dataService.recivegraphdata().subscribe(
//       (response: any) => {
//         // response.graph_data=new TextEncoder().encode(response.graph_data)
//         // const recievedata=response
//         console.log('Received data:', response);

//       },
//       (error: any) => {
//         console.error('Error fetching data:', error);
//       }
//     );
// }

}
