const Hero = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 p-2 overflow-hidden">
      <section className="text-wrap tracking-tight">
        <h1 className="text-6xl md:text-6xlxl  md:font-bold">
          Book<span className="text-blue-700">Chautari</span> </h1>
          <p className="text-4xl md:text-7xl font-semibold md:font-bold">Talents You Need, Near You</p>
          <p className="text-4xl md:text-5xl mt-2">
            Designers, editors, technicians, trainers  sabai ek platform ma. <span className="block">
            Nepali market ko lagi baneko smart hiring system.
            </span>
          </p>
      </section>
      <section>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[360px] h-[720px] rounded-[2.5rem] bg-white border-[14px] border-black shadow-xl">
        {/* Camera dot */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-10" />

        {/* Screen Content */}
        <div className="p-4 mt-5 space-y-4 overflow-y-auto h-full">
          <h1 className="text-xl font-semibold text-center">📱 BookChautari App</h1>
          <p className="text-gray-600 text-center">
            Hire trusted technicians, instantly. Sewa khojna, Chautari ma aaunus.
          </p>

          <div className="flex flex-col gap-4">
            <button className="bg-blue-600 text-white rounded-xl py-2 font-medium hover:bg-blue-700 transition">
              Find Technicians
            </button>
            <button className="border border-blue-600 text-blue-600 rounded-xl py-2 font-medium hover:bg-blue-50">
              Join as Technician
            </button>
            <button className="border border-blue-600 text-blue-600 rounded-xl py-2 font-medium hover:bg-blue-50">
              Login
            </button>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="absolute bottom-0 left-0 right-0 h-5 bg-black rounded-b-[2rem] flex items-center justify-center text-white text-xs">
          ⬤ ⬤ ⬤
        </div>
      </div>
    </div>
      </section>
    </main>
  );
};

export default Hero;
