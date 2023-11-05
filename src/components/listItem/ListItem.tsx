import React from "react";
import { ListItemProps } from "./ListItemProps.type";

const ListItem: React.FC<ListItemProps> = ({ image, title, id, onClick }) => {
  return (
    <div
      className="flex items-center space-x-2 p-2 border-y-2 border-slate-200 mb-2 w-full "
      onClick={() => onClick(id)}
    >
      <img src={image} alt={title} className="w-10" />
      <p className="text-base font-medium text-gray-800">{title}</p>
    </div>
  );
};

export default ListItem;
