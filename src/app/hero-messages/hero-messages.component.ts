import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-messages',
  templateUrl: './hero-messages.component.html',
  styleUrls: ['./hero-messages.component.scss']
})

export class HeroMessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() { }
}
