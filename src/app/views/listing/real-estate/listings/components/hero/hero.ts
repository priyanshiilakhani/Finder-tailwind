import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import * as L from 'leaflet';
import { LucideAngularModule } from "lucide-angular";
import { PropertyCard } from "../property-card/property-card";
import { PropertyFilter } from "../property-filter/property-filter";
import { Footer } from "../footer/footer";
const list1 = 'assets/img/listings/cars/list/01.jpg';
const list5 = 'assets/img/listings/cars/list/05.jpg';
 
@Component({
  selector: 'real-estate-listings-hero',
  standalone: true,
  imports: [LucideAngularModule, PropertyCard, PropertyFilter, Footer],
  templateUrl: './hero.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
  
export class Hero implements AfterViewInit {
  private map!: L.Map;

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {
    this.map = L.map('real-estate-map', {
      center: [40.7128, -74.006],
      zoom: 15,
      zoomControl: true,
    });

    L.tileLayer('https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=rqrCHwDtUZCUA2fCt3vV', {
      attribution: '© Maptiler © OpenStreetMap contributors',
      tileSize: 512,
      zoomOffset: -1,
    }).addTo(this.map);

    const properties = [
      {
        lat: 40.7128,
        lng: -74.006,
        price: '1,200',
        image: list1,
        address: 'New York, USA',
        area: '120',
        bedrooms: '3',
        bathrooms: '2',
        garage: '1',
      },

      {
        lat: 40.715,
        lng: -74.002,
        price: '2,500',
        image: list5,
        address: 'Los Angeles, USA',
        area: '220',
        bedrooms: '4',
        bathrooms: '3',
        garage: '2',
      },
    ];

    properties.forEach((property) => {
      const markerIcon = L.divIcon({
        className: '',
        html: `
          <div class="map-marker relative">
            <iconify-icon icon="tabler:map-pin-filled" class="text-primary text-2xl"></iconify-icon>

            <span
              class="bg-white rounded-lg text-default-400 p-2 text-sm font-medium shadow absolute top-full start-full mt-5 -translate-x-1/2 transition-color whitespace-nowrap"
            >
              $${property.price}
            </span>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const marker = L.marker([property.lat, property.lng], {
        icon: markerIcon,
      }).addTo(this.map);

      marker.bindPopup(`
        <div class="card bg-transparent border-0" data-bs-theme="light">

          <div class="card-img-top position-relative bg-body-tertiary overflow-hidden">

            <div
              class="ratio d-block"
              style="--fn-aspect-ratio: calc(248 / 362 * 100%)"
            >
              <img
                src="${property.image}"
                alt="Image"
              >
            </div>

          </div>

          <div class="card-body p-3">

            <div class="h5 mb-2">
              $${property.price}
            </div>

            <h3 class="fs-sm fw-normal text-body mb-2">
              <a
                class="stretched-link text-body"
                href="single-entry-real-estate.html"
              >
                ${property.address}
              </a>
            </h3>

            <div class="h6 fs-sm mb-0">
              ${property.area} sq.m
            </div>

          </div>

          <div
            class="card-footer d-flex gap-2 border-0 bg-transparent pt-0 pb-3 px-3 mt-n1"
          >

            <div class="d-flex align-items-center fs-sm gap-1 me-1">
              ${property.bedrooms}
              <iconify-icon icon="tabler:bed" class="fs-base text-default-500"></iconify-icon>
            </div>

            <div class="d-flex align-items-center fs-sm gap-1 me-1">
              ${property.bathrooms}
              <iconify-icon icon="tabler:waterpolo" class="fs-base text-default-500"></iconify-icon>
            </div>

            <div class="d-flex align-items-center fs-sm gap-1 me-1">
              ${property.garage}
              <iconify-icon icon="tabler:car-garage" class="fs-base text-default-500"></iconify-icon>
            </div>

          </div>

        </div>
      `);
    });
  }
}
