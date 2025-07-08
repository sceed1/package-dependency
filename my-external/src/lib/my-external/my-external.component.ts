import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInternal } from '@bundler-dependency-test/my-internal';

@Component({
  selector: 'lib-my-external',
  imports: [CommonModule, MyInternal],
  templateUrl: './my-external.html',
  styleUrl: './my-external.css',
})
export class MyExternal {}
