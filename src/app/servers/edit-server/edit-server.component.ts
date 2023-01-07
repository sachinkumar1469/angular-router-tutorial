import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServersService } from '../servers.service';
import { canComponentDeactivate } from './can-deactivate.guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, canComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  changesSaved = false;

  canDeactivate(){
    if(!this.canDeactivate){
      confirm("Changes are not saved");
      return this.changesSaved;
    } 

    return this.changesSaved;
  }

  constructor(private serversService: ServersService,private routes:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    console.log(this.routes.snapshot.params);
    console.log(this.routes.snapshot.queryParams)

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    // this.router.navigate(['../'],{relativeTo:this.routes});
  }

}
