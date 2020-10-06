import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  title:string="List of Product";

  imgSrc:string="/assets/Images/yellow with black.jpg";

  imgOnline="https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg";

  isDisabled = false;
  isActive=false;
  constructor() {

  }

  ngOnInit(): void {
  }
getTitle(){
  return this.title;
}

products=["fan","pen","pencil","sofa","laptop"];

onAddnew(){
  console.log(" No of times the Button Clicked");
}
onKeyup(product){
  //console.log(event);
 //console.log("Key pressed Textbox");
 console.log(product);
}
divClick(){
  console.log("Div Clicked");
}
parentClick(){
  console.log("parent div Clicked");
}
onSubmit(event){
  event.stopPropagation();
  console.log("Submit button Clicked");
}
}
