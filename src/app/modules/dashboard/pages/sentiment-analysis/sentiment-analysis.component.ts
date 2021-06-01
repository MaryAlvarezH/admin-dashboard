import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.scss']
})
export class SentimentAnalysisComponent implements OnInit {

  activeTabView = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
