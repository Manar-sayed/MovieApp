import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/sevice/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

   constructor(public service:MovieApiServiceService,public router:ActivatedRoute){}
   getMovieDetails:any;
   getMovieVideoResult:any;
   getMovieCastResult:any;

   ngOnInit(){
    let getParamId=this.router.snapshot.paramMap.get('id');

    console.log(getParamId,'getparamid#');
    this.getcurrentMovie(getParamId);
    this.getMovieVideo(getParamId);
    this.getMovieCast(getParamId);
   }


   getcurrentMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result,'moviedetails#');
      this.getMovieDetails=result;
    })
   }

   getMovieVideo(id:any)
   {
    this.service.getMovieVideo(id).subscribe((result)=>{
        console.log(result,'getMovieVideo#');
        result.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getMovieVideoResult = element.key;
            }
        });

    });
  }

   getMovieCast(id:any)
   {
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult = result.cast;
    });
  }
}
