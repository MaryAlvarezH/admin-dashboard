import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-retail-filters',
  templateUrl: './retail-filters.component.html',
  styleUrls: ['./retail-filters.component.scss']
})
export class RetailFiltersComponent implements OnInit {

  sources = new FormControl();
  sourceList: any[] = [{ id: 1, name: 'Google' }, { id: 2, name: 'Display' }, { id: 3, name: 'Social' }, { id: 4, name: 'Otros' }];

  ways = new FormControl();
  wayList: any[] = [{ id: 1, name: 'Medio 1' }, { id: 2, name: 'Medio 2' }, { id: 3, name: 'Medio 3' }];;

  audiences = new FormControl();
  audienceList: any[] = [{ id: 1, name: 'Audiencia 1' }, { id: 2, name: 'Audiencia 2' }, { id: 3, name: 'Audiencia 3' }];

  constructor() { }

  ngOnInit(): void {
  }

}
