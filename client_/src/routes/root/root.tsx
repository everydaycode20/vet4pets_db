import { Outlet } from "react-router-dom";

import Sidebar from "../../components/sidebar/sidebar";
import TopBar from "../../components/top-bar/top-bar";

import styles from "./root.module.scss";
import JoinClasses from "../../utils/join-classes";

export default function Root() {
  return (
    <div className="flex w-full h-screen overflow-y-hidden">
      <Sidebar />

      <div className={JoinClasses("w-full", styles["main-container"])}>
        <TopBar />

        <main className="w-full h-full bg-light-gray-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
