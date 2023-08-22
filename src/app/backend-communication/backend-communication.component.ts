import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageModel } from './image.mode';

@Component({
  selector: 'app-backend-communication',
  templateUrl: './backend-communication.component.html',
  styleUrls: ['./backend-communication.component.css']
})
export class BackendCommunicationComponent {
 

  //send data to python backend
  constructor(private dataService: DataService, private router: Router) { }

  IMAGE: string;
  inputValue: number = 0;
  received_correlation_coefficient: number
  receivedText: string
  labelVisible = false

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
  sendGraphIdToBackEnd() {
    if (this.inputValue) {

      this.dataService.sendGraphId(this.inputValue).then((response: ImageModel) => {
        if (this.labelVisible == false) {
          this.labelVisible = !this.labelVisible
        } 
        if(response.correlation_coefficient==0){
          this.receivedText="there is no connection ";
        }
        else{
        this.receivedText=`prediction percentage is ${response.prediction_percentage} %`;
        }
        this.received_correlation_coefficient=response.correlation_coefficient;
        //  console.log(" prediction percentage is" +response.correlation_coefficient)
        this.IMAGE = "data:image/png;base64," + response.graph_data;
      })

    }
  }
  getColorClass(number:number):string{
     if (number==0)
        return 'no_connection' ;
    if (Math.abs(number) <= 0.3)
        return 'low_connection';
    else if (0.3 < Math.abs(number)&& Math.abs(number)<= 0.7)
        return 'medium_connection' ;
    else if ( 0.7 <Math.abs(number)&& Math.abs(number)< 1)
        return 'strong_connection' ;
    else
        return 'perfect_connection' ;
  }

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
