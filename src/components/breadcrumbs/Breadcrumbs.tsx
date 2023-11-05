import React from "react";
import { Link } from "react-router-dom";
import { BreadcrumbProps } from "./BreadcrumbsProps.type";

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav>
      <ul className="flex flex-wrap">
        {items.map((item, index) => (
          <li key={item.link}>
            {index > 0 && <span className="text-gray-500 ">/</span>}
            {index === items.length - 1 ? (
              <span className="text-gray-700">{item.label}</span>
            ) : (
              <>
                <Link to={item.link} className="text-blue-500 cursor-pointer">
                  {item.label}
                </Link>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
