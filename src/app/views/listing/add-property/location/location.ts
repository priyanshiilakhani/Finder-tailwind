import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { Navbar7 } from '@app/components/header/navbar7/navbar7';
import { PropertySidebar } from '../components/property-sidebar/property-sidebar';
import { RouterLink } from '@angular/router';
import { citiesData, countryGroupsData } from './data';

@Component({
  selector: 'app-location',
  imports: [PropertySidebar, Navbar7, RouterLink],
  templateUrl: './location.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class Location {
  countryGroupsData = countryGroupsData;
  citiesData = citiesData;

  @ViewChild('mapContainer', { static: true })
  mapContainer!: ElementRef;

  map!: L.Map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  mapOptions = {
    tileLayer: 'https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=rqrCHwDtUZCUA2fCt3vV',

    attribution: '© Maptiler © OpenStreetMap contributors',

    zoom: 14,

    tileSize: 512,

    zoomOffset: -1,

    templates: {
      marker: `
        <div class="map-marker">
          <iconify-icon icon="tabler:map-pin-filled" class="text-blue-600 text-xl"></iconify-icon>
        </div>
      `,

      popup: `
        <div class="p-3 bg-body-bg rounded shadow">
          <h6 class="pb-1 mb-2 font-semibold">
            Property location
          </h6>

          <p class="text-sm text-gray-700 dark:text-gray-300 m-0">
            929 Hart Street, Brooklyn, NY, 11237
          </p>
        </div>
      `,
    },
  };

  markers = [
    {
      coordinates: {
        lat: 40.719,
        lng: -73.994,
      },
    },
  ];

  initMap() {
    const firstMarker = this.markers[0];

    this.map = L.map(this.mapContainer.nativeElement).setView(
      [firstMarker.coordinates.lat, firstMarker.coordinates.lng],
      this.mapOptions.zoom,
    );

    L.tileLayer(this.mapOptions.tileLayer, {
      attribution: this.mapOptions.attribution,
      tileSize: this.mapOptions.tileSize,
      zoomOffset: this.mapOptions.zoomOffset,
    }).addTo(this.map);

    this.markers.forEach((item) => {
      const markerIcon = L.divIcon({
        html: this.mapOptions.templates.marker,
        className: '',
        iconSize: [30, 30],
      });

      const marker = L.marker([item.coordinates.lat, item.coordinates.lng], {
        icon: markerIcon,
      }).addTo(this.map);

      marker.bindPopup(this.mapOptions.templates.popup);
    });
  }
}
