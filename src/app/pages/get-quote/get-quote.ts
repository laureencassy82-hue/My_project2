import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-quote',
  standalone: true,
  imports: [],
  templateUrl: './get-quote.html',
  styleUrls: ['./get-quote.css']
})
export class GetQuoteComponent {
  constructor(private router: Router) {}

  navigateToSelectPlan() {
    this.router.navigate(['/select-plan']);
  }
}