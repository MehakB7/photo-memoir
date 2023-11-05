import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAlbumsForId } from "../../services/api";
import { RouteParams } from "./User.type";
import { Albums } from "../../services/api.type";
import Loader from "../../components/loader/Loader";
import ListItem from "../../components/listItem/ListItem";
import { album } from "../../helper/pathIcon";
import Breadcrumb from "../../components/breadcrumbs/Breadcrumbs";
import NoDataFound from "../../components/nodatafound/NoDataFound";

const User = () => {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<Albums[]>([]);

  const params = useParams<RouteParams>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      const data = await getAlbumsForId(params.id || "");

      if (!data.error) {
        setAlbums(data.result);
      } else {
        setAlbums([]);
      }
      setLoading(false);

      console.log("inside this here i'm");
    };

    fetchAlbums();
  }, [params]);

  const onClick = (id: number) => {
    navigate(`/user/${params.id}/album/${id}`, { state: params });
  };

  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Album", link: "/" },
  ];

  const getElement = () => {
    if (loading) {
      return <Loader />;
    } else if (albums.length === 0) {
      return <NoDataFound />;
    } else {
      return (
        <>
          {albums.map((item, index) => (
            <ListItem
              image={album}
              title={item.title}
              id={item.id}
              onClick={onClick}
            />
          ))}
        </>
      );
    }
  };

  return (
    <div className="flex flex-col items-start gap-2 p-2">
      <Breadcrumb items={breadcrumb} />
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        {" "}
        Albums
      </h2>
      <div className="w-full shadow-md ">{getElement()}</div>
    </div>
  );
};

export default User;
