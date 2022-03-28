import { Component, OnInit } from '@angular/core';
import { Booking } from '../boocking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-creat-booking',
  templateUrl: './creat-booking.component.html',
  styleUrls: ['./creat-booking.component.scss'],
})
export class CreatBookingComponent implements OnInit {
  booking: Booking = {
    id: 0,
    name: 'Guest Name',
    roomNummber: 0,
    startDate: new Date(),
    endDate: new Date(),
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    if (this.router.url != '/create') {
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.bookingService.getBookingById(id).subscribe((result) => {
        this.booking = result;
      });
    }
  }

  save(): void {
    this.bookingService.addBooking(this.booking).subscribe();
    this.router.navigate(['bookings']);
  }

  changeDate(event: Event, isStart: Boolean) {
    let dateValue = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.booking.startDate = new Date(dateValue);
    } else {
      this.booking.endDate = new Date(dateValue);
    }
  }
}
