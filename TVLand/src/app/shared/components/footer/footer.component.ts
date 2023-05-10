import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerVisible = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = (): void => {
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    const documentHeight = document.body.offsetHeight || document.documentElement.offsetHeight || 0;
    const bottomPosition = documentHeight - windowHeight;

    if (scrollPosition >= bottomPosition) {
      this.footerVisible = true;
    } else {
      this.footerVisible = false;
    }
  };

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollHandler);
  }

}
