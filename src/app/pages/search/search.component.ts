import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/sevice/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{

  constructor(public service:MovieApiServiceService){}


  ngOnInit(){
  }
  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  sendForm()
  {
      console.log(this.searchForm.value,'searchform#');
      this.service.searchMovie(this.searchForm.value).subscribe((result)=>{
          console.log(result,'searchmovie##');
          this.searchResult = result.results;
      });
  }

}
