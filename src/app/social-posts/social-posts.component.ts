import { Component, OnInit, Input, } from '@angular/core';
import {IPost} from '../interface-post'; 

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit{ 

  @Input() title: string;
  @Input() thought: string;
  @Input() post:IPost[];
  public show:boolean = false;

  

  constructor() { }
  ngOnInit() {}

  postList=[];

  onSubmit($event){
    this.postList.push({title:$event.title, thought:$event.thought});
    this.show=!this.show;
  }

  onDelete($event,i){
    this.post=$event; 
    this.postList.splice(i,1);
  }


  toggleForm() {
    this.show=!this.show;
  }
}
