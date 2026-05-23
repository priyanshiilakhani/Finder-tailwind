import { Component } from '@angular/core';
import { ProCta } from "./components/pro-cta/pro-cta";
import { Hero } from "./components/hero/hero";
import { Categories } from "./components/categories/categories";
import { Projects } from "./components/projects/projects";
import { ExpertAdvice } from "./components/expert-advice/expert-advice";
import { HomeProjects } from "./components/home-projects/home-projects";
import { Steps } from "./components/steps/steps";
import { DownloadCta } from "./components/download-cta/download-cta";
import { References } from "./components/references/references";
import { Footer2 } from "@app/components/footer/footer2/footer2";
import { Navbar } from "@app/components/header/navbar/navbar";

@Component({
  selector: 'app-contractors',
  imports: [ProCta, Hero, Categories, Projects, ExpertAdvice, HomeProjects, Steps, DownloadCta, References, Footer2, Navbar],
  templateUrl: './contractors.html',
  styles: ``,
})
export class Contractors {}
