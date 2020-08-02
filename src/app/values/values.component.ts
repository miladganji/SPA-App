import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  constructor(private http: HttpClient) { }
values: any;
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.GetAll();
  }


  // tslint:disable-next-line:typedef
  GetAll()
  {

    this.http.get('http://localhost:5000/api/Home/Index').subscribe(response => {
      this.values = response;


    // tslint:disable-next-line:whitespace
    // tslint:disable-next-line:no-shadowed-variable
    }, error => {console.log(error); }
    );
  }

}
