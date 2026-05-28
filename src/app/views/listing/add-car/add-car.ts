import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar7 } from '@app/components/header/navbar7/navbar7';
import { Footer1 } from '@app/components/footer/footer1/footer1';
import { LucideAngularModule } from 'lucide-angular';
import { Photos } from './components/photos/photos';
import { BasicInformation } from './components/basic-information/basic-information';
import { Specifications } from './components/specifications/specifications';
import { Features } from './components/features/features';
import { Price } from './components/price/price';
import { Price2 } from './components/price2/price2';
import { RightSidebar } from "./components/right-sidebar/right-sidebar";

@Component({
  selector: 'app-add-car',
  imports: [
    Navbar7,
    Footer1,
    LucideAngularModule,
    Photos,
    BasicInformation,
    Specifications,
    Features,
    Price,
    Price2,
    RightSidebar
],
  templateUrl: './add-car.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AddCar {}
