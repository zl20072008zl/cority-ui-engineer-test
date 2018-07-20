import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { MESSAGES } from '../mock-messages';
import { Status } from '../status';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messageList = MESSAGES;
  isActive: boolean;
  unreadCount: number;
  messageStatus: any = Status;
  @ViewChild('content') content: ElementRef;

  constructor(private renderer2: Renderer2, private router: Router) { 
    this.isActive = false;
  }

  ngOnInit() {
    this.unreadCount = 0;
    this.messageList.forEach(message => {
      if(!message.status) this.unreadCount++;
    })
  }

  showList(){
    this.isActive = !this.isActive;
    this.collapseMessage();
  }

  collapseMessage(){
    let scrollHeight = this.isActive?this.content.nativeElement.scrollHeight + 'px':null;
    this.renderer2.setStyle(this.content.nativeElement,'maxHeight',scrollHeight);
  }

  removeMessage(item){
    this.messageList.find(x => x.id == item).status = Status.Deleted;
    this.unreadCount?this.unreadCount--:0;
  }

  readMessage(e,item){
    this.messageList.find(x => x.id == item).status = Status.Read;
    this.router.navigate(['messages/message-detail/' + item]);
  }
  
}
