import { Component, OnInit } from '@angular/core';
import { Slider } from '../slider';
import { SlidersService } from '../sliders.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [SlidersService]
})
export class SliderComponent implements OnInit {

  private sliderData: Slider;
  private acf;
  sliders;


  constructor(private sliderService: SlidersService) { }

  getSlidersData(): void {
    this.sliderService.getSliders().then(response => {
      this.sliderData = response[0];
      this.acf = this.sliderData.acf;
      this.sliders = this.acf.sliderComponent;
    });
  }

  ngOnInit(): void {
    this.getSlidersData();
  }

}
