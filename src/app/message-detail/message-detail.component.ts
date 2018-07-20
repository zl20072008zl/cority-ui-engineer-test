import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router'
import { Message } from '../message';
import { MESSAGES } from '../mock-messages';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {

  private message: Message;
  messageList = MESSAGES;
  private data: any;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.message = this.messageList.find(x => x.id == params['id']);
    })
  }

}
