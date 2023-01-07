import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs-compat';
import { Subscribable } from 'rxjs/internal/types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};

  constructor(private activeRoute:ActivatedRoute) { }

  subscribeId:Subscription;

  ngOnInit() {
    this.user = {id: this.activeRoute.snapshot.params.userId, name : this.activeRoute.snapshot.params.userName}
    console.log(this.activeRoute.queryParams)
    this.subscribeId = this.activeRoute.params.subscribe((updatedParams)=>{
      console.log(updatedParams);
      this.user.id = updatedParams.userId;
      this.user.name = updatedParams.userName;
    })
  }

  ngOnDestroy(): void {
      this.subscribeId.unsubscribe()
  }

}
