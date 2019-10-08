import { Component } from '@angular/core';
//import "../node_modules/admin-lte/build/less/AdminLTE";
//import "../node_modules/admin-lte/build/less/skins/_all-skins";
// boxed-layout-bg-image-path: "/assets/img/boxed-bg.jpg";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imgUser1:any = "./assets/images/user2-128x128.jpg";
  imgUser2:any = "./assets/images/user2-160x160.jpg";
  imgUser3:any = "./assets/images/user3-128x128.jpg";
  imgUser4:any = "./assets/images/user4-128x128.jpg";
  imgUser5:any = "./assets/images/user5-128x128.jpg";
  imgUser6:any = "./assets/images/user6-128x128.jpg";
  imgUser7:any = "./assets/images/user7-128x128.jpg";
  imgUser8:any = "./assets/images/user8-128x128.jpg";

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  title = 'angular-adminlte-template';
  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
  }
}

