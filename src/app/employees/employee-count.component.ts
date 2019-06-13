import {Component, Input, Output,EventEmitter} from '@angular/core'

@Component({
    selector: 'employee-count',
    templateUrl: './employee-count.component.html'
})

export class EmployeeCount{

    selectedRadioButtonValue:string ='All';
    @Output()
    countRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();
   
    @Input()
    all: number;
   
    @Input()
    male: number;
    
    @Input()
    female: number;

    onRadionButtonSelectionChange(){
       // console.log(this.selectedRadioButtonValue);
       this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);

    }
}

