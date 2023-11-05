import React from "react";
import { UserCardProps } from "./UserCard.type";
import Avatar from "../avatar/Avatar";

const UserCard: React.FC<UserCardProps> = ({
  imgScr,
  name,
  userId,
  onClick,
}) => {
  return (
    <div className="bg-white  ">
      <div className="w-48 md:w-64 flex items-center flex-col gap-4 p-2  shadow rounded-md">
        <Avatar image={imgScr} name={name} />
        <p className="text-center text-xs font-semibold text-gray-800">
          {name}
        </p>
        <button
          className="bg-blue-500 rounded-full text-white p-2"
          onClick={() => onClick(userId)}
        >
          {" "}
          Show Album
        </button>
      </div>
    </div>
  );
};

export default UserCard;
