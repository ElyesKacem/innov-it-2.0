import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
 @Input() colis?:number;
  constructor() { }

  ngOnInit(): void {
  }

}
