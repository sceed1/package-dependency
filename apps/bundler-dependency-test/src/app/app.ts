import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyExternal } from '@bundler-dependency-test/my-external';

@Component({
  imports: [RouterModule, MyExternal],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
