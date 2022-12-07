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

  public download($event: any) {

    console.log($event.target.id);

    if ($event.target.id !== null) {
      let fileName = $event.target.id;
      this.documentService.downloadDocument(fileName).subscribe((response) => {
        console.log(response);
        let filename = fileName;
         let blob: Blob = response;
         let a = document.createElement('a');
         a.download = filename;
         a.href = window.URL.createObjectURL(blob);
         console.log(a);
         a.click();
       });
    }


    console.log('Descargando');
  }

  public sendEmail() {
    this.emailService.sendEmail("the.jonkey@gmail.com","http://artrune.com:8093/file/Mirame.pdf").subscribe(data => {
      console.log(data);
    });
  }

  public viewDocument($event: any) {
    console.log($event.target.title);
    if ($event.target.id !== null) {
      let fileName = $event.target.id;
      this.documentService.viewDocument(fileName).subscribe((response) => {
        console.log(response);
        let blob: Blob = response;
        let a = document.createElement('a');
        a.target = '_blank';
        a.href = window.URL.createObjectURL(blob);
        a.click();
      });
    }

  }

}
