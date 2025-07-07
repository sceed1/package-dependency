import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyOtherLib } from './my-other-lib';

describe('MyOtherLib', () => {
  let component: MyOtherLib;
  let fixture: ComponentFixture<MyOtherLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOtherLib],
    }).compileComponents();

    fixture = TestBed.createComponent(MyOtherLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
