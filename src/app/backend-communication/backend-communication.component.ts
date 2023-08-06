import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-backend-communication',
  templateUrl: './backend-communication.component.html',
  styleUrls: ['./backend-communication.component.css']
})
export class BackendCommunicationComponent implements OnInit  {
  imageData: string;

  safeImageUrl: SafeResourceUrl;

  constructor(private dataService: DataService,private sanitizer: DomSanitizer,private route:ActivatedRoute) {}
  ngOnInit(){
    this.imageData = this.route.snapshot.queryParamMap.get('imageBase64');
  }

 
  
  getSafeImageURL(): SafeResourceUrl {
    const imageUrl = 'data:image/png;base64,' + this.imageData;
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  }
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
