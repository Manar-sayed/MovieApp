import { Component,Input,Output } from '@angular/core';
import { MovieApiServiceService } from 'src/app/sevice/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private service:MovieApiServiceService){}
banerData:any=[];
trendingData:any=[];
actionMovieResult:any=[];
adventureMovieResult: any = [];
animationMovieResult: any = [];
comedyMovieResult: any = [];
documentaryMovieResult: any = [];
sciencefictionMovieResult: any = [];
thrillerMovieResult: any = [];

ngOnInit(){
 this.bannerData();
 this.trendingMData();
 this.actionMovie();
 this.adventureMovie();
 this.comedyMovie();
 this.animationMovie();
 this.documentaryMovie();
 this.sciencefictionMovie();
 this.thrillerMovie();
}
//to make banner
bannerData(){
  this.service.bannerApiData().subscribe((result)=>{
    console.log(result,'bannerresult#');
    this.banerData=result.results;
  });
}

//to make trending row
trendingMData(){
  this.service.trendingMovies().subscribe((result)=>{
    console.log(result,'trendingresult#');
    this.trendingData=result.results;
  })
}

actionMovie(){
  this.service.fetchActionMovies().subscribe((result)=>{
    this.actionMovieResult=result.results;
  })
}

 // adventure 
 adventureMovie() {
  this.service.fetchAdventureMovies().subscribe((result) => {
    this.adventureMovieResult = result.results;
  });
}


// animation 
animationMovie() {
  this.service.fetchAnimationMovies().subscribe((result) => {
    this.animationMovieResult = result.results;
  });
}


// comedy 
comedyMovie() {
  this.service.fetchComedyMovies().subscribe((result) => {
    this.comedyMovieResult = result.results;
  });
}

// documentary 
documentaryMovie() {
  this.service.fetchDocumentaryMovies().subscribe((result) => {
    this.documentaryMovieResult = result.results;
  });
}


// science-fiction 
sciencefictionMovie() {
  this.service.fetchScienceFictionMovies().subscribe((result) => {
    this.sciencefictionMovieResult = result.results;
  });
}

// thriller
thrillerMovie() {
  this.service.fetchThrillerMovies().subscribe((result) => {
    this.thrillerMovieResult = result.results;
  });
}














}
