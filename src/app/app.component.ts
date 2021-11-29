import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  Name:string = '';
  email: string ='';
  phone:number=0;
  image:string ='';
  contacts =[];
addContacts(){
  console.log(this.Name,this.email,this.phone,this.image)
  
  if(this.Name && this.email && this.phone) {
    this.contacts.push({
      name:this.Name,
      email:this.email,
      phone:this.phone,
      image:this.image?this.image:null,
    })
  }else{
    alert("Enter All Fields")
  }

  console.log(this.contacts)
}


}
