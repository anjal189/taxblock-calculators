import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residentialstatus',
  templateUrl: './residentialstatus.component.html',
  styleUrls: ['./residentialstatus.component.css']
})
export class ResidentialstatusComponent implements OnInit {
  isShow=true;
  status:any;
  status1:any;
  showMe=false;
  showMe1=false;
  showMe2=false;
  showMe3=false;
  showMe4=false;
  showMe5=false;
  showMe6=false;
  showMe7=false;
  showMe8=false;

  constructor() { }

  ngOnInit(): void {
  }
  onToggle(status:any){
    this.isShow=false;

    if(status=="1" || status=="8" || status=="11" || status=="16"){
      this.showMe=true;
      this.showMe3=false;
      this.showMe8=false;
      this.showMe2=false;
    }
    else if(status=="2"){
      this.showMe1=true;
    }
    else if(status=="4"){
      this.showMe1=false;
      this.showMe2=true;
    }
    else if(status=="9" || status=="17" || status=="6"|| status=="7"){
      this.showMe1=false;
      this.showMe2=false;
      this.showMe8=false;
      this.showMe3=true;
    }
    else if(status=="10"|| status=="3"){
      this.showMe3=false;
      this.showMe4=true;
    }
    else if(status=="12" || status=="14"){
      this.showMe4=false;
      this.showMe6=false;
      this.showMe5=true;
    }
    else if(status=="13"){
      this.showMe4=false;
      this.showMe6=true;
    }
    else if(status=="15"){
      this.showMe6=false;
      this.showMe7=true;
    }
    else if(status=="5"){
      this.showMe1=false;
      this.showMe8=true;
    }
  
  }

  onClick(){
    this.isShow=true;
    this.showMe=false;
    this.showMe1=false;
    this.showMe2=false;
    this.showMe3=false;
    this.showMe4=false;
    this.showMe5=false;
    this.showMe6=false;
    this.showMe7=false;
    this.showMe8=false;

    console.log(this.isShow);
  
    
  }

}
