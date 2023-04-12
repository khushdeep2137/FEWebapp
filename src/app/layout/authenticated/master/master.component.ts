import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class AuthenticatedMasterComponent {
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    localStorage.clear()
    this.route.navigate(['/auth/login'])

  }
}


