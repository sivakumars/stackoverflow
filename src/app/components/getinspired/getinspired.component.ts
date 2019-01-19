import { Component, OnInit } from '@angular/core';
import { StackoverflowServiceService } from '../../services/stackoverflow-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-getinspired',
  templateUrl: './getinspired.component.html',
  styleUrls: ['./getinspired.component.css']
})
export class GetinspiredComponent implements OnInit {
  users: any[];
  searchTag: string;
  paginatorFlag: boolean = false;
  pageEvent: PageEvent;
  pageSize: number = 5;
  currentpageIndex: number = 0;
  length: number = 0;
  response: any[];
  start: number;
  end: number;
  searching: boolean = false;
  page: number = 1;
  constructor(private stackoverflowService: StackoverflowServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params)=> {
      this.searchTag = params.get('tag');
      this.searchUsers(this.searchTag);
    });
  }

  handleSuccess(data){    
    console.log("****Success*****" + JSON.stringify(data.items));
    this.response = data.items;
    this.length = data.items.length;
    this.paginatorFlag = true;
    this.spliceItems();
    console.log(this.length);
  }

  handleError(error){
    console.log("****Error*****" + error);
  }

  public handlePagination(event?: PageEvent){    
    this.searching = true;
    console.log(" Inside pagination handler "+JSON.stringify(event));
    this.pageSize = event.pageSize;
    this.currentpageIndex = event.pageIndex;
    this.spliceItems();
    this.searching = false;
  }

  spliceItems(){
    this.start = this.currentpageIndex * this.pageSize;
    this.end = (this.currentpageIndex + 1) * this.pageSize;
    this.users = this.response.slice(this.start, this.end);
    console.log(this.users);
  }

  searchUsers(questionTag: string){
    return this.stackoverflowService.getUsers(questionTag).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error)
    );
  }
}
