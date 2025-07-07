import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { MyInternal } from '@bundler-dependency-test/my-internal';
import { MyOtherLib } from '@bundler-dependency-test/my-other-lib';

@Component({
  imports: [NxWelcome, RouterModule, MyInternal, MyOtherLib],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'bundler-dependency-test';
}
