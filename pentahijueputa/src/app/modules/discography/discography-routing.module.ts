import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscographyPage } from './pages/discography/discography.page';

const routes: Routes = [ 
  {
  path: '',
  component: DiscographyPage
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscographyRoutingModule { }




