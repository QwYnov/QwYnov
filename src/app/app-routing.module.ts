import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',

    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
  {
    path: 'question-user',
    loadChildren: () => import('./question-user/question-user.module').then( m => m.QuestionUserPageModule)
  },
  {
    path: 'quizapi',
    loadChildren: () =>
      import('./quizapi/quizapi.module').then((m) => m.QuizapiPageModule),
  },
  {
    path: 'quiz/:id',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: 'mesquiz',
    loadChildren: () => import('./mesquiz/mesquiz.module').then( m => m.MesquizPageModule)
  },
  {
    path: 'invite-friends',
    loadChildren: () => import('./invite-friends/invite-friends.module').then( m => m.InviteFriendsPageModule)
  },
  {
    path: 'res-quiz/:id',
    loadChildren: () => import('./res-quiz/res-quiz.module').then( m => m.ResQuizPageModule)
  },
  {
    path: 'quiz-internaute',
    loadChildren: () => import('./quiz-internaute/quiz-internaute.module').then( m => m.QuizInternautePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
