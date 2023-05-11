import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from'@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

const routes : Routes = [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'movie/:id',component:MovieDetailsComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     RouterModule.forRoot(routes),
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
