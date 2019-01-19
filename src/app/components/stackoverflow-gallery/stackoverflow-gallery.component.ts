import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stackoverflow-gallery',
  templateUrl: './stackoverflow-gallery.component.html',
  styleUrls: ['./stackoverflow-gallery.component.css']
})
export class StackoverflowGalleryComponent implements OnInit {

  searchTag: string;
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  searchQuestions(tag: string){
    console.log("*****Inside Question  search Handler****"+ tag);
    this._router.navigate(['/questions', this.searchTag]);
  }

  searchInspiration(tag: string){
    console.log("*****Inside Question  search Handler****"+ tag);
    this._router.navigate(['/inspiration', this.searchTag]);    
  }
}
