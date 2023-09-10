import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageModel } from './image.model';
import { NONE_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-backend-communication',
  templateUrl: './backend-communication.component.html',
  styleUrls: ['./backend-communication.component.css']
})
export class BackendCommunicationComponent implements OnInit {


  //send data to python backend
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  data: ImageModel;
  IMAGE: string;
  inputValue: number = 0;
  counter: number = 0
  received_correlation_coefficient: number
  receivedText: string
  labelVisible = false

  ngOnInit(): void //constructor for graph component that recive graph id from table component  .
  {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      const correlation_coefficient = +params[' correlation_coefficient'];
      this.dataService.sendGraphId(id).then((response: ImageModel) => {
        this.data = response
        if (this.labelVisible == false) {
          this.labelVisible = !this.labelVisible
        }
        if (correlation_coefficient == -2) {
          alert("No Id found at data base . ")
        }
        else {
          if (correlation_coefficient == 0) {
            this.receivedText = "there is no connection ";
          }

          //  console.log(" prediction percentage is" +response.correlation_coefficient)
          this.IMAGE = "data:image/png;base64," + response.graph_data;
        }
      })

    })
  }

  mergeAarrays(value: ImageModel): number[][] //the function get image model from the backend and merge x array and y array to matrix for points table.
  {
    const mergedArray: number[][] = []
    if (value !== undefined) {
      for (let i = 0; i < value.points_model.X_array.length; i++) {
        mergedArray.push([value.points_model.X_array[i], value.points_model.Y_array[i]]);
      }
    }
    return mergedArray;

  }



  // sendGraphIdToBackEnd() {
  //   if (this.inputValue) {

  //     this.dataService.sendGraphId(this.inputValue).then((response: ImageModel) => {
  //       if (this.labelVisible == false) {
  //         this.labelVisible = !this.labelVisible
  //       }
  //       if (response.correlation_coefficient == -2) {
  //         alert("No Id found at data base . ")
  //       }
  //       else {
  //         if (response.correlation_coefficient == 0) {
  //           this.receivedText = "there is no connection ";
  //         }
  //         else {
  //           this.receivedText = `prediction percentage is ${response.prediction_percentage} %`;
  //         }
  //         this.received_correlation_coefficient = response.correlation_coefficient;
  //         //  console.log(" prediction percentage is" +response.correlation_coefficient)
  //         this.IMAGE = "data:image/png;base64," + response.graph_data;
  //       }
  //     })

  //   }
  // }


















  // imageData: string;

  // safeImageUrl: SafeResourceUrl;

  // constructor(private dataService: DataService,private sanitizer: DomSanitizer,private route:ActivatedRoute) {}
  // ngOnInit(){
  //   this.imageData = this.route.snapshot.queryParamMap.get('imageBase64');
  // }



  // getSafeImageURL(): SafeResourceUrl {
  //   const imageUrl = 'data:image/png;base64,' + this.imageData;
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  // }
  // ngOnInit(): void {
  //       this.dataService.recivegraphdata().subscribe(
  //         (response: any) => {
  //           // response.graph_data=new TextEncoder().encode(response.graph_data)
  //           // const recievedata=response
  //           console.log('Received data:', response);
  //           // this.imageBase64=response.graph_data
  //           this.router.navigate(['/view-image', { imageBase64: response.graph_data }]);


  //         },
  //         (error: any) => {
  //           console.error('Error fetching data:', error);
  //         }
  //       );


  // getSafeImageURL(): SafeResourceUrl {
  //   const imageUrl = 'data:image/png;base64,' + this.imageBase64;
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  // }


  // showImage(): void {
  //   this.dataService.recivegraphdata().subscribe(
  //     (response: any) => {
  //       console.log(response.graph_data);
  //       if(this.labelVisible==false){
  //       this.labelVisible=!this.labelVisible
  //       }
  //       this.IMAGE="data:image/png;base64,"+response.graph_data;
  //     //  this.router.navigate(['/view-image'], { queryParams: { imageBase64: response.graph_data } });
  //     },
  //     (error: any) => {
  //       console.error('Error fetching data:', error);
  //     }
  //   );
  // }





















  // ngOnInit(): void {
  //   this.imageBase64 = this.route.snapshot.data['imageBase64'];
  // }
  // getSafeImageURL(): SafeResourceUrl {
  //   const imageUrl = 'data:image/png;base64,' + this.imageBase64;
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  // }


  //   recivegraphdata(): void {
  //     this.dataService.recivegraphdata().subscribe(
  //       (response: any) => {
  //         // response.graph_data=new TextEncoder().encode(response.graph_data)
  //         // const recievedata=response
  //         console.log('Received data:', response);
  //         this.imageBase64 = response.image;
  //         const imageUrl = 'data:image/png;base64,' + this.imageBase64;
  //         return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  //         // const decodedImage = atob(response.graph_data);
  //         // const blob = new Blob([decodedImage], { type: 'image/png' });
  //         // this.safeImageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));

  //       },
  //       (error: any) => {
  //         console.error('Error fetching data:', error);
  //       }
  //     );
}
