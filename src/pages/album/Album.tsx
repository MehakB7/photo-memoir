import React, { useEffect, useState } from "react";
import { getPhotosForId } from "../../services/api";
import { useLocation, useParams } from "react-router-dom";
import { PhotoRes } from "../../services/api.type";
import Loader from "../../components/loader/Loader";
import { RouteParams } from "../user/User.type";
import Photo from "../../components/photo/Photo";
import Breadcrumb from "../../components/breadcrumbs/Breadcrumbs";
import NoDataFound from "../../components/nodatafound/NoDataFound";

const Album: React.FC = () => {
  const [photos, setPhoto] = useState<PhotoRes[]>([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const params = useParams<RouteParams>();

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      const data = await getPhotosForId(params.id || "");

      if (!data.error) {
        setPhoto(data.result);
      } else {
        setPhoto([]);
      }
      setLoading(false);
    };

    fetchPhotos();
  }, [params]);

  const getElement = () => {
    if (loading) {
      return <Loader />;
    } else if (photos.length === 0) {
      return <NoDataFound />;
    } else {
      return (
        <div className="grid w-full h-full  gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  justify-center">
          {photos.map((item, index) => (
            <Photo text={item.title} key={index} image={item.url} />
          ))}
        </div>
      );
    }
  };

  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Album", link: `/user/${location.state.id}` },
    { label: "Photo", link: "" },
  ];

  return (
    <div className="flex flex-col items-start gap-2 p-2">
      <Breadcrumb items={breadcrumb} />
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        {" "}
        Photos
      </h2>
      <div className="flex w-full justify-center">{getElement()}</div>
    </div>
  );
};

export default Album;
