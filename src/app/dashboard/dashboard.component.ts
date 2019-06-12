import { Component, OnInit } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';





// import { sampleProducts } from './products';
import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';
import { ServicesService } from '../services.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:any;
  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'title', operator: 'contains', value: '' }]
    }
};

  // gridData: any[];
popupData:any;
  products = [];
public gridData: GridDataResult = process(this.products, this.state);
constructor(
  private maiAPI:ServicesService
) {
    // this.gridData = this.products;
    this.dataInit().then((resData)=>{
        this.state.take = this.data.hitsPerPage;
    });
    
  }

  ngOnInit() {

  }
  dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(this.data.hits, this.state);
}

dataInit(){
   return new Promise ((resolve, rejeect)=>{
    this.maiAPI.taglist().subscribe((res:any)=>{
      console.log("App DATA :",res);
      this.data = res;
      resolve(res);
      this.gridData = this.data.hits;
   });
  });
}
opened:boolean = false;
close(val){
  if(val === 'no')
  {
    this.opened = true;
  }else{
    this.opened = false;
  }
}
onGridSelectionChange(e)
{
  try {
    if(e.dataItem && e.dataItem !== null){
    
    this.popupData = e.dataItem;
        this.close('no');
        console.log(this.popupData);
    }else{
      alert('Selected Row has no Data!')
    }
  } catch (error) {
      alert('Invalid Click!')
  }
  
}
}
