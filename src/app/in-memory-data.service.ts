import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './boocking';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookings: Booking[] = [
      {
        id: 1,
        name: 'Radwan Sultan',
        roomNummber: 100,
        startDate: new Date(),
        endDate: new Date('2022-03-25'),
      },
      {
        id: 2,
        name: 'Amir Sultan',
        roomNummber: 102,
        startDate: new Date(),
        endDate: new Date('2022-05-26'),
      },
      {
        id: 3,
        name: 'Jamal Sultan',
        roomNummber: 104,
        startDate: new Date(),
        endDate: new Date('2022-06-10'),
      },
      {
        id: 4,
        name: 'Meriem Sultan',
        roomNummber: 106,
        startDate: new Date(),
        endDate: new Date('2022-07-4'),
      },
    ];

    return {bookings};
  }

  constructor() {}
}
