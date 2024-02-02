import React from 'react'
import TopBanner from '../components/Banner/TopBanner'
import BookingForm from '../components/BookingForm/BookingForm'

const BookingPage  = () => {
  return (
    <>
      <TopBanner title="Reservations" />
      <BookingForm />
    </>
  )
}

export default BookingPage 