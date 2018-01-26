import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChcImageAttachmentsComponent } from './chc-image-attachments/chc-image-attachments.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'chc-image-attachments',
      pathMatch: 'full'
    }, 
    {
      path: 'chc-image-attachments',
      component: ChcImageAttachmentsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //declarations: [ChcImageAttachmentsComponent, LayoutComponent]
})
export class AppRoutingModule { }
