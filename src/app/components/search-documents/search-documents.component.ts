import { DocsResponse } from './../../interfaces/docsResponse';



import { SearchService } from './../../services/search/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-documents',
  templateUrl: './search-documents.component.html',
  styleUrls: ['./search-documents.component.css'],
})
export class SearchDocumentsComponent implements OnInit {

  queryBusqueda!: string;
  documents !: DocsResponse;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {

  }

  getDocuments(): void {

    let a: any;
    console.log(this.queryBusqueda);
    this.searchService
      .search(this.queryBusqueda)
      .subscribe(data => {
        this.documents = data;
        console.log(this.documents);
        console.log(this.documents.results[0].response.docs[0].title);
        this.documents.results[0].response.docs.forEach(element => {
          console.log(element.title);
        });
      });
  }
}
