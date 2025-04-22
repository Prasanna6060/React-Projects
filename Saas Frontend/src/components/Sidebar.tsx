import { House, UserSearch, BookText, User, LogOut } from 'lucide-react';

const navItems = [
  { icon: <House />, label: 'Dashboard' },
  { icon: <UserSearch />, label: 'Technicians' },
  { icon: <BookText />, label: 'Bookings' },
  { icon: <User />, label: 'Profile' },
];

const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center h-[100vh]  p-2 bg-gray-100 border-r-2 border-gray-100 shadow-xl col-span-2">
      <h1 className="text-2xl font-bold mb-8">
        Book<span className="text-blue-700">Chautari</span>
      </h1>

      <nav className="flex flex-col justify-between flex-1">
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-700 hover:text-gray-600 cursor-pointer font-bold"
            >
              {item.icon} {item.label}
            </li>
          ))}
        </ul>

        <button className="mt-10 px-4 py-2 w-full flex items-center gap-3 hover:cursor-pointer">
           <LogOut/> Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
