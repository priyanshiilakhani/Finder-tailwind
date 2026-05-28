import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { RouterLink } from '@angular/router';
import { galleryData } from '../../data';

@Component({
  selector: 'add-car-photos',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './photos.html',
  styles: ``,
})

export class Photos {
  galleryData = galleryData;
}
