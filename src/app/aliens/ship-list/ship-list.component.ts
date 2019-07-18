import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Ship} from '../models/ship';
import {ShipsService} from '../ships.service';

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.less']
})
export class ShipListComponent implements OnInit {
  ships: Ship[] = [];
  shipForm: FormGroup;

  constructor(private shipService: ShipsService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.loadShips();
    this.shipForm = this.buildShipForm();

  }

  buildShipForm() {
    return this.formBuilder.group({
      size: ['', Validators.required],
      name: ['', Validators.required],
      maxspeed: ['', Validators.required],
      weaponpower: ['', Validators.required],
    });
  }

  loadShips(): void {
    this.shipService.getShips().subscribe((aliens) => {
      this.ships = aliens;
    });
  }

  addShip() {
    this.shipService.addShip(this.shipForm.value).subscribe(() => {
      this.loadShips();
    });
  }

  gotoShipDetails(ship: Ship) {
    this.router.navigate(['/ships', ship.id]);
  }

  removeShip(ship: Ship, event) {
    event.stopPropagation();
    this.shipService.removeShip(ship.id).subscribe(() => {
      this.loadShips();
    });
  }
}
