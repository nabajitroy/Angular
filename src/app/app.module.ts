import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule}    from '@angular/http';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorComponent } from './author/author.component';
import { PostComponent } from './posts/posts.component';
import { EmployeeListComponent } from './employees/employee.list.component';
import { EmployeeCount } from './employees/employee-count.component';
import { EmployeeTitlePipe } from './employees/employee-title.pipe';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'emp-list', component: EmployeeListComponent },
  { path: 'posts', component: PostComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    PostComponent,
    EmployeeListComponent,
    EmployeeCount,
    EmployeeTitlePipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
     // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
