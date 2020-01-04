import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent} from './article-list/article-list.component';
import { ArticleComponent} from './article/article.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },

  {
    path: 'article/:articleId',
    component: ArticleComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
