import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  // Router hook pattern: useLocation provides the current URL without prop drilling.
  const location = useLocation();
  // URL parsing pattern: split the pathname into route segments for breadcrumb links.
  const pathnames = location.pathname.split("/").filter((x) => x);
  let breadcrumbPath = "";

  if (pathnames.length === 0) {
    // If the current route is the home route ('/'), do not render the breadcrumbs
    return null;
  }

  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        // Accumulator pattern: build each parent URL as the breadcrumb list is rendered.
        breadcrumbPath += `/${name}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={breadcrumbPath}> / {name}</span>
        ) : (
          <span key={breadcrumbPath}>
            {" "}
            / <Link to={breadcrumbPath}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
