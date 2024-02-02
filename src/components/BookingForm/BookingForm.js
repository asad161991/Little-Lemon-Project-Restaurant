// BookingForm.jsx

import React, { useState, useEffect } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const [hideSubmittedData, setHideSubmittedData] = useState(false);

  useEffect(() => {
    if (submittedData) {
      const hideTimeout = setTimeout(() => {
        setSubmittedData(null);
        setHideSubmittedData(false);
      }, 6000); // Hide after 5 seconds, you can adjust the duration as needed

      return () => clearTimeout(hideTimeout);
    }
  }, [submittedData]);

  // Sample availableTimes for testing purposes
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const validateForm = () => {
    let valid = true;
    const errors = {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    };

    // Date validation
    if (!date) {
      errors.date = "Date is required";
      valid = false;
    }

    // Time validation
    if (!time) {
      errors.time = "Time is required";
      valid = false;
    }

    // Guests validation
    if (!guests || guests < 1) {
      errors.guests = "Number of guests must be at least 1";
      valid = false;
    }

    // Occasion validation
    if (!occasion) {
      errors.occasion = "Occasion is required";
      valid = false;
    }

    // Reset the form
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");

    setValidationErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const data = {
        date,
        time,
        guests,
        occasion,
      };
      setSubmittedData(data);
      setHideSubmittedData(true);
      console.log("Form submitted successfully!");
    } else {
    console.log("Form validation failed. Please check the errors.");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="booking-form">

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <div className="validation-error">{validationErrors.date}</div>

        <label htmlFor="time">Time</label>
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            Select a time
          </option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <div className="validation-error">{validationErrors.time}</div>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="Number of guests"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
          min="1"
        />
        <div className="validation-error">{validationErrors.guests}</div>

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            Select an occasion
          </option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <div className="validation-error">{validationErrors.occasion}</div>

        <button type="submit" className="btn submit">
          Reserve a Table
        </button>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div
          className={`booking-form ${
            hideSubmittedData ? "hide-submitted-data" : ""
          }`}
        >
          <h5>Booking Has Been Confirmed!</h5>
          <p>Date: {submittedData.date}</p>
          <p>Time: {submittedData.time}</p>
          <p>Number of Guests: {submittedData.guests}</p>
          <p>Occasion: {submittedData.occasion}</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
