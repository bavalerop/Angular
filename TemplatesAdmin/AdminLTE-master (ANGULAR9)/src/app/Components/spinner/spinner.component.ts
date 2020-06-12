import {Component, ViewEncapsulation, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event as RouterEvent} from '@angular/router';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SpinnerComponent implements OnChanges {
    // Sets initial value to true to show loading spinner on first load
    @Input() loading: boolean;

    constructor(private router: Router) {
      this.router.events.subscribe((event: RouterEvent) => {
        this.navigationInterceptor(event);
      });
    }
  // Cuando el estado del spinner cambia
  ngOnChanges(changes: SimpleChanges): void {
  }

    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      if (event instanceof NavigationEnd) {
        this.loading = false;
      }

      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        this.loading = false;
      }
      if (event instanceof NavigationError) {
        this.loading = false;
      }
    }
}
