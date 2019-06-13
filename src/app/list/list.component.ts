import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  queryString
  doctorList = [
    "Dr. Gopal Singh Dhanik",
    "Dr. Vivek Saxena",
    "Dr. Nadeem Faruqui",
    "Dr. Pravina Patel",
    "Dr. Alok Bajpai",
    "Dr. Sanjai Rastogi",
    "Dr. Rakesh Chandra",
    "Dr. Rajan Bhargava",
    "Dr. Shubha Agarwal",
    "Dr. Shekhar Rastogi",
    "Dr. D. K. Jaipuria",
    "Dr. S. S. Singhal",
    "Dr. Ashish Agrawal",
    "Dr. Bhupendra Kumar",
    "Dr. K. K. Dokania"
  ]
  constructor() { }

  ngOnInit() {

  }

}
