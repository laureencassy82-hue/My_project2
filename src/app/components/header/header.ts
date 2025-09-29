import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  // You can add functionality for language switching here
  currentLanguage = 'EN';
  
  switchLanguage() {
    this.currentLanguage = this.currentLanguage === 'EN' ? 'TH' : 'EN';
    // Add your language switching logic here
  }
}