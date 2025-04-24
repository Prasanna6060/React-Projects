const BookingDetails = () => {
    const booking = {
      customer: "Ramesh Shrestha",
      technician: "Sita Rai",
      service: "AC Repair",
      date: "2025-04-22",
      time: "2:30 PM",
    };
  
    return (
      <aside className="col-span-1 md:col-span-2 p-4 bg-white rounded-lg shadow-md">
        <span className="bg-purple-700 text-white font-semibold py-1 px-4 rounded-lg mt-4 inline-block ml-10">
          Book Technician
        </span>
  
        <div className="mt-6 space-y-3 text-gray-800">
          <h2 className="text-lg font-bold">Booking Details</h2>
          
          <div className="space-y-3">
            <p><span className="font-semibold">Customer:</span> {booking.customer}</p>
            <p><span className="font-semibold">Technician:</span> {booking.technician}</p>
            <p><span className="font-semibold">Service:</span> {booking.service}</p>
            <p><span className="font-semibold">Date:</span> {booking.date}</p>
            <p><span className="font-semibold">Time:</span> {booking.time}</p>
          </div>
  
          <button className="mt-4 bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg">
            Start Session
          </button>
        </div>
      </aside>
    );
  };
  
  export default BookingDetails;
  