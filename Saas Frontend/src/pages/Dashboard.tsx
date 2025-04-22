import BookingDetails from "../components/BookingDetails";
import DashboardMain from "../components/DashboardMain";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-12 p-2 h-screen">
        <Sidebar/>
        <DashboardMain/>
        <BookingDetails/>
    </div>
  )
}

export default Dashboard;