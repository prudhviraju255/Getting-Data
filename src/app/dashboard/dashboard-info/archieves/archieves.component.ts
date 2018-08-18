import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-archieves',
  templateUrl: './archieves.component.html',
  styleUrls: ['./archieves.component.css']
})
export class ArchievesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
        console.log( editor );
    } )
    .catch( error => {
        console.error( error );
    } );
    
    
  }
  }


