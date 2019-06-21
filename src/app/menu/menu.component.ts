import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

    Home(){this.router.navigateByUrl("")};
    About(){this.router.navigateByUrl("About")};
    Contact(){this.router.navigateByUrl("Contact")}
    Feedback(){this.router.navigateByUrl("Feedback")}

  ngOnInit() {
  }

}







    
  