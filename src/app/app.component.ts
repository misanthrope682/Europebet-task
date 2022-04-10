import { Component } from '@angular/core';

import SwiperCore from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Europebet';
  cards = [
    {
      period: '1-4 კვირა',
      price: '2 000 000₾',
      active: true
    },
    {
      period: '5-8 კვირა',
      price: '2 000 000₾',
      active: false
    },
    {
      period: '5-8 კვირა',
      price: '2 000 000₾',
      active: false
    },
    {
      period: '5-8 კვირა',
      price: '2 000 000₾',
      active: false
    },
  ];
  tabs = [
    {
      text: '2.07-29.07',
      active: true 
    },
    {
      text: '2.07-29.07',
      active: false 
    },
    {
      text: '2.07-29.07',
      active: false 
    },
    {
      text: '2.07-29.07',
      active: false 
    },
  ];
  lbs = [
    {
      title: 'მოხვდი ყოველკვირეულ ლიდერბორდში',
      content: 'ერთ სპინზე დაფიქსირებული მოგების ყველაზე მაღალი კოეფიციენტი არის შენი ქულა ლიდერბორდში',
      info: 'Top 1500',
      color: 'turquoise',
      label: 'ადგილი',
      tables: [
        {
          quantity: '1',
          prize: '40 000₾',
        },
        {
          quantity: '2',
          prize: '20 000₾',
        },
        {
          quantity: '3',
          prize: '8 000₾',
        },
        {
          quantity: '4-10',
          prize: '4 000₾',
        },
        {
          quantity: '11-20',
          prize: '2 000₾',
        },
        {
          quantity: '21-50',
          prize: '800₾',
        },
        {
          quantity: '21-50',
          prize: '800₾',
        },
        {
          quantity: '21-50',
          prize: '800₾',
        },
        {
          quantity: '21-50',
          prize: '800₾',
        },
        {
          quantity: '21-50',
          prize: '800₾',
        },
        {
          quantity: '21-50',
          prize: '800₾',
        },
        {
          quantity: '21-50',
          prize: '800₾',
        },
        {
          quantity: '21-50',
          prize: '800₾',
        },
        {
          quantity: '21-50',
          prize: '800₾',
        },
        {
          quantity: '21-50',
          prize: '800₾',
        },
        {
          quantity: '21-50',
          prize: '800₾',
        },
      ]
    },
    {
      title: 'ყოველდღე მიიღე შემთხვევითი ფულადი პრიზი ნებისმიერ სპინზე',
      content: 'ყოველდღიური, 36 000₾-ის ფულადი პრიზები',
      info: '1500 <em>პრიზი</em>',
      color: 'orange',
      label: 'რაოდენობა',
      tables: [
        {
          quantity: '1',
          prize: '4 000₾',
        },
        {
          quantity: '2',
          prize: '2 000₾',
        },
        {
          quantity: '5',
          prize: '400₾',
        },
        {
          quantity: '12',
          prize: '200₾',
        },
        {
          quantity: '110',
          prize: '800₾',
        },
        {
          quantity: '370',
          prize: '40₾',
        },
        {
          quantity: '370',
          prize: '40₾',
        },
        {
          quantity: '370',
          prize: '40₾',
        },
        {
          quantity: '370',
          prize: '40₾',
        },
        {
          quantity: '370',
          prize: '40₾',
        },
        {
          quantity: '370',
          prize: '40₾',
        },
        {
          quantity: '370',
          prize: '40₾',
        },
        {
          quantity: '370',
          prize: '40₾',
        },
        {
          quantity: '370',
          prize: '40₾',
        },
        {
          quantity: '370',
          prize: '40₾',
        },
        {
          quantity: '370',
          prize: '40₾',
        },
      ]
    }
  ];
  dropdowns = [
    {
      title: "როდის იწყება და რა ფორმატით გაიმართება აქცია",
      active: false,
    },
    {
      title: "როგორ მივიღო აქციაში მონაწილეობა?",
      active: false,
    },
    {
      title: "სხვადასვა",
      active: false,
    }
  ];
  dropToggle(index: number) {
    this.dropdowns[index].active = !this.dropdowns[index].active;
  };
  progress = 0;
  calcProg(index: number, length: number) {
    this.progress = Math.round((index + 1) / length * 100 * 100) / 100;
  };
  onSwiper(swiper: any) {
    this.calcProg(swiper.activeIndex, swiper.slides.length);
  };
  onSlideChange([swiper]: any) {
    this.calcProg(swiper.activeIndex, swiper.slides.length);
    console.log(this.progress);
  };
}
