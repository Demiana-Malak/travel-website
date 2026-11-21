import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive, FormsModule, NgFor],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  constructor(private router: Router) {}

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // لما المستخدم يعمل scroll أكثر من 50px
    this.isScrolled = window.scrollY > 50;
  }
  destination1: string = '';
  destination2: string = '';
  startDate: string = '';
  guests: number = 2;
  guestOptions = [1, 2, 3, 4, 5];

  activities = [
    { name: 'Culture', selected: false },
    { name: 'Outdoors', selected: false },
    { name: 'Relaxing', selected: false },
    { name: 'Wildlife', selected: false },
    { name: 'Romantic', selected: false },
    { name: 'Religious', selected: false },
    { name: 'Hiking', selected: false },
    { name: 'Musical', selected: false },
    { name: 'Shopping', selected: false },
    { name: 'Business', selected: false },
    { name: 'Museums', selected: false },
    { name: 'Party', selected: false },
    { name: 'Traditions', selected: false },
    { name: 'Walks', selected: false },
    { name: 'Fishing', selected: false },
    { name: 'Cruise', selected: false },
    { name: 'Guide', selected: false },
    { name: 'Healthcare', selected: false },
    { name: 'Accommodation', selected: false },
  ];



  // close the mobile menu after clicking a link
  closeMenu() {
    document.getElementById('navbarSupportedContent')?.classList.remove('show');
  }

  buildPackage() {
    // go to the packages page, pre-filled with the first destination the user typed
    this.router.navigate(['/packages'], {
      queryParams: this.destination1.trim()
        ? { destination: this.destination1.trim() }
        : {},
    });
  }
}
