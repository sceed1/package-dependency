import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyOtherExternal } from './my-other-external';

describe('MyOtherExternal', () => {
  let component: MyOtherExternal;
  let fixture: ComponentFixture<MyOtherExternal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOtherExternal],
    }).compileComponents();

    fixture = TestBed.createComponent(MyOtherExternal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
