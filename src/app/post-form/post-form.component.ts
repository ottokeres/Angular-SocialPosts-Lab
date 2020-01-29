import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {IPost} from '../interface-post'; 

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent{
 
  @Input() title: string;
  @Input() thought: string;
  @Input () post:IPost[];


  @Output() submitted = new EventEmitter();

  // constructor() {}
  // ngOnInit() {}

  submitPost(){
      this.submitted.emit({title:this.title, thought:this.thought});
      this.title=''; 
      this.thought='';
  }
}
