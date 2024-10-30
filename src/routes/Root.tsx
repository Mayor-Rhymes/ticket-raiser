import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { useUserStore } from "@/states/userStore";

export default function Root() {
  const { user } = useUserStore();

  return (
    <div className="min-h-screen font-sans">
      {user && <Navbar />}
      <Outlet />
    </div>
  );
}
