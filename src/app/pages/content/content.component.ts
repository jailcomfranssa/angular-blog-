import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {dataFakes} from '../../data/dataFakes';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://www.agiledrop.com/sites/default/files/styles/blog_article/public/2020-03/Angular%20or%20AngularJS%20cover%20photo.png?itok=e-xGVeU-"
  contentTitle:string = "Noticias"
  contentDescription:string = "Ola Mundo!"
  private Id:string | null = "0"

  constructor( private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.Id = value.get("id")
    )
    this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(id: string | null){
    const result = dataFakes.filter(article=> article.id.toString() == id)[0]
    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover


  }

}
