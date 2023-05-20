import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private router:Router) { }
  goBack(): void {
    this.router.navigate(['/sidenavwrapper']);

}
  ngOnInit(): void {
  }

}
