import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://www.agiledrop.com/sites/default/files/styles/blog_article/public/2020-03/Angular%20or%20AngularJS%20cover%20photo.png?itok=e-xGVeU-"
  contentTitle:string = "Noticias"
  contentDescription:string = "Ola Mundo!"

  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
