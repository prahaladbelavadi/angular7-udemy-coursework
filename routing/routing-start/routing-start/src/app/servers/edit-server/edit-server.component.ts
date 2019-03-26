import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    // snapshot
          console.log(this.route.snapshot.queryParams);
          console.log(this.route.snapshot.fragment)
    
    //Observable method dynamic 
          this.route.params.subscribe((params)=>{
            console.log('Params event: '+params)
          })

          this.route.fragment.subscribe((fragment) => {
            console.log('Obtain fragment : ' + fragment)
          })

          this.route.queryParams.subscribe((params) => {
            console.log('Obtain Params : ' + params)
          })

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
