const DashboardMain = () => {
    const technicians = [
      { id: 1, name: 'Sita Rai', image: 'https://i.pravatar.cc/150?img=1', role: 'Electrician' },
      { id: 2, name: 'Ramesh Thapa', image: 'https://i.pravatar.cc/150?img=2', role: 'Plumber' },
      { id: 3, name: 'Hari Shrestha', image: 'https://i.pravatar.cc/150?img=3', role: 'Carpenter' },
      { id: 4, name: 'Anita Koirala', image: 'https://i.pravatar.cc/150?img=4', role: 'Designer' }
    ];
  
    return (
      <main className="p-6  w-full col-span-8">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <div className="flex gap-6 items-center mt-4">
            <h2 className="py-2 px-4 rounded-lg border border-gray-300">
              Total Bookings <p className="font-semibold text-xl">12</p>
            </h2>
            <h2 className="py-2 px-4 rounded-lg border border-gray-300">
              Upcoming <p className="font-semibold text-xl">8</p>
            </h2>
          </div>
        </div>
  
        <div className="mt-6">
          <h1 className="text-center text-xl font-semibold mb-4">Available Technicians</h1>
          <div className=" justify-center gap-4 grid grid-cols-2">
            {technicians.map((technician) => (
              <div key={technician.id} className="text-center flex space-x-3 shadow-gray-200 shadow-2xl border-1 rounded-lg p-4 hover:cursor-pointer">
                <img
                  src={technician.image}
                  alt={technician.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                <p className="mt-2 font-semibold tracking-widest">{technician.name}</p>
                <p className="text-sm text-gray-500">{technician.role}</p>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  };
  
  export default DashboardMain;
  