import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {


  offers: Place[] = []

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.offers = this.placesService.places
  }

  onEdit(placeId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/','places','tabs','offers','edit', placeId]);
    console.log('Editing item', placeId);
    ;
    }

}
