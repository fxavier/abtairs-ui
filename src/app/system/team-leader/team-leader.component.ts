import { Component, OnInit } from '@angular/core';
import { TeamLeader } from '../../model';
import { TeamLeaderService } from './team-leader.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-team-leader',
  templateUrl: './team-leader.component.html',
  styleUrls: ['./team-leader.component.css']
})
export class TeamLeaderComponent implements OnInit {
  teamLeaders: TeamLeader[];
  districts: any[];
  teamLeader = new TeamLeader();

  constructor(private teamLeaderService: TeamLeaderService) { }

  ngOnInit() {
    this.loadDistricts();
    this.loadTeamLeaders();
  }

  loadDistricts() {
    this.teamLeaderService.loadDistricts()
    .subscribe(response => {
      this.districts = response.map(d => ({ label: d.name, value: d.id }));
    });
  }

  loadTeamLeaders() {
    this.teamLeaderService.loadTeamLeaders()
    .subscribe(response => this.teamLeaders = response);
  }

  create(form: FormControl) {
    this.teamLeaderService.create(this.teamLeader)
    .subscribe(response => {
      form.reset();
      this.loadTeamLeaders();
    });
  }

}
