import { Component, OnInit } from '@angular/core';
import { Booking } from '../boocking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-boockings',
  templateUrl: './boockings.component.html',
  styleUrls: ['./boockings.component.scss'],
})
export class BoockingsComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((result) =>{
      this.bookings = result;
    });
  }

  deleteGuest(booking: Booking): void {
    this.bookingService.deleteGuest(booking).subscribe();
    this.bookings = this.bookings.filter(b => b != booking);
  }
}
