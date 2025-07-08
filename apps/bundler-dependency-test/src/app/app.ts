import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcome } from './nx-welcome';
import { MyExternal } from '@bundler-dependency-test/my-external';

@Component({
  imports: [NxWelcome, RouterModule, MyExternal],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
