import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";

const MainWrapper: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainWrapper;
