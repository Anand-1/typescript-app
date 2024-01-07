import React, { Suspense } from "react";
const Customer: any = React.lazy(() => import("./Customer"));
const Admin: any = React.lazy(() => import("./Admin"));

const Home = ({ props }: any) => {
  console.log(props);
  if (props === "admin") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Admin />
      </Suspense>
    );
  } else if (props === "customer") {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Customer />
      </Suspense>
    );
  } else {
    return (
      <>
        <div>Invalid User !</div>
      </>
    );
  }
};

export default Home;
