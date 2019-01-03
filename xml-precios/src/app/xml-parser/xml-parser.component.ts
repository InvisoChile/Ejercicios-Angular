import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'xmlParserComponent',
  templateUrl: './xml-parser.component.html',
  styleUrls: ['./xml-parser.component.css']
})
export class xmlParserComponent  {

  private _url='www.google.cl';
  constructor(private httpClient:HttpClient) { }

  getFile() {
    this.httpClient.get(this._url).subscribe(
      (data:any[]) => {
        console.log(data);
      }
    )
  }
  
}

