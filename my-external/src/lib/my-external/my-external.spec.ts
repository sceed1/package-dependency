import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyExternal } from './my-external';

describe('MyExternal', () => {
  let component: MyExternal;
  let fixture: ComponentFixture<MyExternal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyExternal],
    }).compileComponents();

    fixture = TestBed.createComponent(MyExternal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
