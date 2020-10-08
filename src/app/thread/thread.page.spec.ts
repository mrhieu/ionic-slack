import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThreadPage } from './thread.page';

describe('ThreadPage', () => {
  let component: ThreadPage;
  let fixture: ComponentFixture<ThreadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThreadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
