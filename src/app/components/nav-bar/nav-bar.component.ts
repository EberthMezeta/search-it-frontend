import { EmailService } from './../../services/email/email.service';
import { StatisticsService } from './../../services/statistics/statistics.service';
import { Statistics } from './../../interfaces/statistics';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DocumentsService } from 'src/app/services/documents/documents.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  public fileUrl !: any;

  public statistics !: Statistics;

  constructor(private documentService: DocumentsService ,private statisticService : StatisticsService, private emailService : EmailService) {}

  ngOnInit(): void {
    this.statisticService.getStatistics().subscribe(data => {
      this.statistics = data;
      console.log(this.statistics);
    });
  }

  public download() {
    this.documentService.downloadDocument('Mirame.pdf').subscribe((response) => {
     console.log(response);
     //let filename = response.headers.get('Content-Disposition')?.split(';')[1].split('=')[1];
     let filename = 'Mirame.pdf';
      let blob: Blob = response;
      let a = document.createElement('a');
      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      a.click();

    });
    console.log('Descargando');
  }

  public sendEmail() {
    this.emailService.sendEmail("the.jonkey@gmail.com","http://artrune.com:8093/download/Mirame.pdf").subscribe(data => {
      console.log(data);
    });
  }
}
