import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
  standalone: true,
  imports: []
})
export class ExamsComponent implements OnInit {
  examsData: any[] = [
    {
      "name": "Isabella.S",
      "status": "En attente",
      "location": null,
      "date": "En attente",
      "time": "En attente",
      "additional_status": "En recherche de place"
    },
    {
      "name": "Franziska.S",
      "status": "Confirmé",
      "location": "Martigues-B",
      "date": "16 juin",
      "time": "14h",
      "additional_status": "Confirmé"
    },
    {
      "name": "Lucas.R",
      "status": "À organiser",
      "location": "Martigues-B",
      "date": "21 juin",
      "time": "17h",
      "additional_status": "À organiser"
    },
    {
      "name": "Léo.C",
      "status": "Annulé",
      "location": "Martigues-B",
      "date": "26 mai",
      "time": "13h",
      "additional_status": "Annulé"
    },
    {
      "name": "Raphaël.B",
      "status": "En attente",
      "location": null,
      "date": "En attente",
      "time": "En attente",
      "additional_status": "En recherche de place"
    },
    {
      "name": "Thibault.V",
      "status": "En attente",
      "location": null,
      "date": "En attente",
      "time": "En attente",
      "additional_status": "En recherche de place"
    },
    {
      "name": "Olivia.J",
      "status": "Annulé",
      "location": null,
      "date": "16 juin",
      "time": "En attente",
      "additional_status": "Annulé"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
