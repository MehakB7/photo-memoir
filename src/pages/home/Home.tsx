import React, { useEffect, useState } from "react";
import { getUsers } from "../../services/api";
import UserCard from "../../components/usercard/UserCard";
import { useNavigate } from "react-router-dom";
import { User } from "../../services/api.type";
import Loader from "../../components/loader/Loader";
import Breadcrumb from "../../components/breadcrumbs/Breadcrumbs";
import NoDataFound from "../../components/nodatafound/NoDataFound";

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const data = await getUsers();

      if (!data.error) {
        setUsers(data.result);
      } else {
        setUsers([]);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const onClick = (id: number) => {
    navigation(`user/${id}`);
  };

  const getElement = () => {
    if (loading) {
      return <Loader />;
    } else if (users.length === 0) {
      return <NoDataFound />;
    } else {
      return (
        <div className="grid w-full h-full  gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-center">
          {users.map((item, index) => (
            <UserCard
              name={item.name}
              key={index}
              userId={item.id}
              onClick={onClick}
            />
          ))}
        </div>
      );
    }
  };

  const breadcrumb = [{ label: "Home", link: "/" }];

  return (
    <div className="flex flex-col items-start gap-2 p-2">
      <Breadcrumb items={breadcrumb} />

      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        {" "}
        People
      </h2>
      <div className="flex justify-center items-center w-full">
        {getElement()}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
