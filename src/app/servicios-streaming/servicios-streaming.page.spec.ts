import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiciosStreamingPage } from './servicios-streaming.page';

describe('ServiciosStreamingPage', () => {
  let component: ServiciosStreamingPage;
  let fixture: ComponentFixture<ServiciosStreamingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosStreamingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
