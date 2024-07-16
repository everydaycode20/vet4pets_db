import { Link, NavLink } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import JoinClasses from "../../utils/join-classes";

import styles from "./sidebar.module.scss";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion/accordion";

const routes = [
  {
    path: "dashboard",
    text: "Dashboard",
    icon: (color: string) => <DashboardIcon htmlColor={color} />,
  },
  {
    path: "appointments",
    text: "Appointments",
    icon: (color: string) => <CalendarMonthIcon htmlColor={color} />,
  },
  {
    path: "owners",
    text: "Owners",
    icon: (color: string) => <PersonIcon htmlColor={color} />,
  },
  {
    path: "pets",
    text: "Pets",
    icon: (color: string) => <PetsOutlinedIcon htmlColor={color} />,
  },
];

export default function Sidebar() {
  return (
    <nav className={JoinClasses("", styles["sidebar"])}>
      <aside className="h-full flex flex-col">
        <div className={JoinClasses("", styles.sidebar__title)}>
          <span className="font-semibold text-black">Vet4Pets</span>
        </div>

        <div className={JoinClasses("navigation-container", styles.navigation)}>
          <Accordion type="single" defaultValue="item-1" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger
                className={JoinClasses(
                  "flex items-center w-full text-light-gray-4 font-light",
                  styles["navigation__collapse"]
                )}
              >
                Navigation
              </AccordionTrigger>

              <AccordionContent>
                <ul>
                  {routes.map((route, index) => {
                    return (
                      <li key={index}>
                        <NavLink to={route.path} className="">
                          {({ isActive }) => (
                            <div className="flex items-center">
                              {route.icon(isActive ? "4D7CFE" : "#778CA2")}

                              <span>{route.text}</span>
                            </div>
                          )}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className={JoinClasses("mt-auto", styles.settings)}>
          <NavLink to="settings">
            {({ isActive }) => (
              <div className="flex items-center">
                <SettingsOutlinedIcon
                  htmlColor={isActive ? "4D7CFE" : "#778CA2"}
                />

                <span>Settings</span>
              </div>
            )}
          </NavLink>
        </div>
      </aside>
    </nav>
  );
}
