import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppModule {}
