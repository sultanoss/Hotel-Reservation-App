import { Injectable } from '@angular/core';
import { Bookings } from './mock-boockings';
import { Booking } from './boocking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private Httpclient: HttpClient) { }

  bookingsUrl: string = "/api/bookings";

  getBookings(): Observable<Booking[]> {

    let response = this.Httpclient.get<Booking[]>(this.bookingsUrl);
    console.log(response)
    return response;

  }

  deleteGuest(booking: Booking): Observable<Booking> {
    let response = this.Httpclient.delete<Booking>(this.bookingsUrl + "/" + booking.id);
    return response;
  }

  getBookingById(id: number): Observable<Booking> {
    let response = this.Httpclient.get<Booking>(this.bookingsUrl + "/" + id);
    return response;
  }

  addBooking(boocking: Booking): Observable<Booking> {
    let response = this.Httpclient.post<Booking>(this.bookingsUrl, boocking);
    return response;
  }
}

