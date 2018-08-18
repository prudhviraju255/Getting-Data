import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//declare var $:any;
@Component({
  selector: 'app-add-new-faq',
  templateUrl: './add-new-faq.component.html',
  styleUrls: ['./add-new-faq.component.css']
})
export class AddNewFaqComponent implements OnInit {

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
