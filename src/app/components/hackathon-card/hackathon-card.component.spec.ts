import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonCardComponent } from './hackathon-card.component';

describe('HackathonCardComponent', () => {
  let component: HackathonCardComponent;
  let fixture: ComponentFixture<HackathonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HackathonCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HackathonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
