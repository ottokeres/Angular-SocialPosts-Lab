import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {IPost} from '../interface-post'; 

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

  @Input() title: string;
  @Input() thought: string;
  @Input () post:IPost[];
  
  @Output() deleted = new EventEmitter();

  // constructor(){}
  // ngOnInit(){}

  deletePost(){
      this.deleted.emit(this.post);
    }
  
}
