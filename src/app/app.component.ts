import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as airtable from 'airtable';
import { Base } from 'airtable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PMS';
  isHeader:boolean=true;
  isForm:boolean=false;
  isGrid:boolean=true;
  Productlist:any = [];
  Id: number=0;
  name: string=''
  description:  string=''
  size: string='';

  delete(id:any){
  this.Productlist = this.Productlist.filter((user: any)=> user.Id !== id);
  this.isGrid=true;
 }

 savedata(){
  if(this.name=='' || this.description=='' || this.size=='')
    alert("All fields are required")
  else{
    var item = {
      Id:this.Id,
      Name:this.name,
      Description:this.description,
      Size:this.size
    }
    this.Productlist.push(item);
    this.CloseForm();  
  }
 }

 OpenForm(){
  this.isForm=true;
 }
 
 CloseForm(){
  this.Id++;
  this.name=''
  this.description=''
  this.size=''
  this.isForm=false;
 }
}
