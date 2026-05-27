import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar } from "@app/components/header/navbar/navbar";
import { Footer2 } from "@app/components/footer/footer2/footer2";
import { Breadcrumb } from "./components/breadcrumb/breadcrumb";
import { Hero } from "./components/hero/hero";
import { ImageSection } from "./components/image-section/image-section";
import { ContactCard } from "./components/contact-card/contact-card";
import { Services } from "./components/services/services";
import { BusinessDetails } from "./components/business-details/business-details";
import { Projects } from "./components/projects/projects";
import { Reviews } from "./components/reviews/reviews";
import { Pagination } from "./components/pagination/pagination";

@Component({
  selector: 'contractors-single-entry',
  imports: [Navbar, Footer2, Breadcrumb, Hero, ImageSection, ContactCard, Services, BusinessDetails, Projects, Reviews, Pagination],
  templateUrl: './single-entry.html',
  styles: ``,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SingleEntry {}
