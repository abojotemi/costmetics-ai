import DashboardChart from "../components/dashboard-charts";
import DashboardConditions from "../components/dashboard-conditions";



const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-5 p-3">
      <DashboardChart/>
    <DashboardConditions/>  
      
    </div>
  );
};

export default DashboardStats;
