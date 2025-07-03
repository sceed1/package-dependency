import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyInternal } from './my-internal';

describe('MyInternal', () => {
  let component: MyInternal;
  let fixture: ComponentFixture<MyInternal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyInternal],
    }).compileComponents();

    fixture = TestBed.createComponent(MyInternal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
