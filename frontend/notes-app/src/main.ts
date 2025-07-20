import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHotToastConfig } from '@ngxpert/hot-toast';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
        provideHotToastConfig(), // @ngxpert/hot-toast providers

  ]
})
.catch(err => console.error(err));
