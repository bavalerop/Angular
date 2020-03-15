import {Component, Input, OnInit, ViewChild, Renderer2} from '@angular/core';
import { NavigationModel } from '../../../../Models/Navigations/Navigation.model';
import {animate, style, transition, trigger, state, group} from '@angular/animations';

@Component({
  selector: 'app-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
          'max-height': '100%', opacity: '1', visibility: 'visible'
      })),
      state('out', style({
          'max-height': '0px', opacity: '0', visibility: 'hidden'
      })),
      transition('in => out', [group([
          animate('700ms ease-in-out', style({
              opacity: '0'
          })),
          animate('600ms ease-in-out', style({
              'max-height': '0px'
          })),
          animate('900ms ease-in-out', style({
              visibility: 'hidden'
          }))
      ]
      )]),
      transition('out => in', [group([
          animate('1ms ease-in-out', style({
              visibility: 'visible'
          })),
          animate('600ms ease-in-out', style({
              'max-height': '100%'
          })),
          animate('800ms ease-in-out', style({
              opacity: '1'
          }))
      ]
      )])
  ])
  ]
})

export class NavCollapseComponent implements OnInit {
  @ViewChild('itemCollapsed', { static: false }) arrowCollapsed;

  @Input() item: NavigationModel;

  animationState = 'out';

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  navCollapse() {
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
    // se valida si se esta desplegando el menu
    if (this.arrowCollapsed.nativeElement.classList.contains('fa-angle-right')) {
        this.renderer.removeClass(this.arrowCollapsed.nativeElement, 'fa-angle-right');
        this.renderer.addClass(this.arrowCollapsed.nativeElement, 'fa-angle-down');
    } else {
      this.renderer.removeClass(this.arrowCollapsed.nativeElement, 'fa-angle-down');
      this.renderer.addClass(this.arrowCollapsed.nativeElement, 'fa-angle-right');
    }
  }

}
