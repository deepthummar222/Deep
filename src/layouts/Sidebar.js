import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "UserData",
    href: "/data",
    icon: "bi bi-person-workspace ",
  },
  
  {
    title: "Online User",
    href: "/online",
    icon: "bi bi-people",
  },
  {
    title: "festival list",
    href: "/favimg",
    icon: "bi bi-images",
  },
  {
    title: "Add emojis",
    href: "/Addemojis",
    icon: "bi bi-emoji-heart-eyes-fill",
  },
  {
    title: "Add profile picture",
    href: "/AddProfilepic",
    icon: "bi bi-person-plus-fill",
  },
  {
    title: "Coin transaction",
    href: "/coinData",
    icon: "bi bi-person-plus-fill",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="bg-dark">
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
