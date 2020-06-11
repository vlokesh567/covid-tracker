import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
interface Tracker {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-tracker',
  templateUrl: './add-tracker.component.html',
  styleUrls: ['./add-tracker.component.css']
})
export class AddTrackerComponent implements OnInit {
  selectedValue: string;
  selectedCar: string;
  TrackerList: Tracker[] = [
    {value: 'police', viewValue: 'Police'},
    {value: 'shopkeeper', viewValue: 'Shop Owner'},
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
