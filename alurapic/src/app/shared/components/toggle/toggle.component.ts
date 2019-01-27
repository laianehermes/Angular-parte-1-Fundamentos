import { Component,  Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {

  @Input() check:boolean = false;
  @Input() text: string = '';
  @Input() color: string = 'primary';
  @Output() toggleResult = new EventEmitter<boolean>(); 
  
  ngOnInit() {
    this.toggleResult.emit(this.check);
  }

  toggleVisibility(){
    this.toggleResult.emit(this.check);
  }
}
