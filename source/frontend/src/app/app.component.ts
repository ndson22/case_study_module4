import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clothes shop';

  frontendStyles = [
    'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap',
    'assets/backend/css/bootstrap.min.css',
    'assets/backend/css/bootstrap.min.css',
    'assets/backend/css/font-awesome.min.css',
    'assets/backend/css/elegant-icons.css',
    'assets/backend/css/magnific-popup.css',
    'assets/backend/css/nice-select.css',
    'assets/backend/css/owl.carousel.min.css',
    'assets/backend/css/slicknav.min.css',
    'assets/backend/css/style.css',
  ];

  frontendScripts = [
    'assets/backend/js/jquery-3.3.1.min.js',
    'assets/backend/js/bootstrap.min.js',
    'assets/backend/js/jquery.nice-select.min.js',
    'assets/backend/js/jquery.nicescroll.min.js',
    'assets/backend/js/jquery.magnific-popup.min.js',
    'assets/backend/js/jquery.countdown.min.js',
    'assets/backend/js/jquery.slicknav.js',
    'assets/backend/js/mixitup.min.js',
    'assets/backend/js/owl.carousel.min.js',
    'assets/backend/js/main.js',
  ];

  backendStyles = [
    'https://fonts.googleapis.com/css?family=Montserrat:400,500|Poppins:400,500,600,700|Roboto:400,500',
    'https://cdn.materialdesignicons.com/3.0.39/css/materialdesignicons.min.css" rel="stylesheet',
    'assets/backend/plugins/nprogress/nprogress.css',
    'assets/backend/plugins/flag-icons/css/flag-icon.min.css',
    'assets/backend/plugins/toaster/toastr.min.css',
    'assets/backend/plugins/jvectormap/jquery-jvectormap-2.0.3.css',
    'assets/backend/plugins/ladda/ladda.min.css',
    'assets/backend/plugins/select2/css/select2.min.css',
    'assets/backend/plugins/daterangepicker/daterangepicker.css',
    'assets/backend/css/sleek.css',
    'assets/backend/img/favicon.png',

  ];

  backendScripts = [
    'assets/backend/plugins/nprogress/nprogress.js',
    'assets/backend/plugins/jquery/jquery.min.js',
    'assets/backend/plugins/bootstrap/js/bootstrap.bundle.min.js',
    'assets/backend/plugins/toaster/toastr.min.js',
    'assets/backend/plugins/slimscrollbar/jquery.slimscroll.min.js',
    'assets/backend/plugins/charts/Chart.min.js',
    'assets/backend/plugins/ladda/spin.min.js',
    'assets/backend/plugins/ladda/ladda.min.js',
    'assets/backend/plugins/jquery-mask-input/jquery.mask.min.js',
    'assets/backend/plugins/select2/js/select2.min.js',
    'assets/backend/plugins/jvectormap/jquery-jvectormap-2.0.3.min.js',
    'assets/backend/plugins/jvectormap/jquery-jvectormap-world-mill.js',
    'assets/backend/plugins/daterangepicker/moment.min.js',
    'assets/backend/plugins/daterangepicker/daterangepicker.js',
    'assets/backend/plugins/jekyll-search.min.js',
    'assets/backend/js/sleek.js',
    'assets/backend/js/chart.js',
    'assets/backend/js/date-range.js',
    'assets/backend/js/map.js',
    'assets/backend/js/custom.js'
  ];

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const CustomJsList = document.querySelectorAll('#custom_js');
        if (CustomJsList.length > 0) {
          CustomJsList.forEach((customJs) => {
            customJs.remove();
          });
        }
        this.load();
      }
    });
  }

  load() {
    if (window.location.pathname.startsWith('/admin')) {
      this.loadStyles(this.backendStyles);
      this.loadScripts(this.backendScripts);
    } else {
      this.loadStyles(this.frontendStyles);
      this.loadScripts(this.frontendScripts);
    }
  }

  loadStyles (styles: string[]) {
    for (let i = 0; i < styles.length; i++) {
      const node = document.createElement('link');
      node.type = 'text/css';
      node.rel = 'stylesheet';
      node.href = styles[i];
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  loadScripts (scripts: string[]) {
    for (let i = 0; i < scripts.length; i++) {
      const node = document.createElement('script');
      node.type = 'text/javascript';
      node.src = scripts[i];
      node.id = "custom_js";
      node.async = false;
      document.getElementsByTagName('body')[0].appendChild(node);
    }
  }
}
