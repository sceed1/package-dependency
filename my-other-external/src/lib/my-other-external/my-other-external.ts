import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyInternal } from '@bundler-dependency-test/my-internal';

@Component({
  selector: 'lib-my-other-external',
  imports: [CommonModule, MyInternal],
  templateUrl: './my-other-external.html',
  styleUrl: './my-other-external.css',
})
export class MyOtherExternal {}
