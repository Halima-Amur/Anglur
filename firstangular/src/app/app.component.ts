import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../Component/header/header.component';
import { FooterComponent } from '../Component/footer/footer.component';
import { SidebarComponent } from '../Component/sidebar/sidebar.component';
import { MainComponent } from '../Component/main/main.component';


@Component({ //dicoration
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HeaderComponent, FooterComponent,SidebarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstangular';
}
