import React, { Suspense } from "react";
const Customer = React.lazy(() => import("./Customer"));
const Admin = React.lazy(() => import("./Admin"));

type HomeProps = {
  props: "admin" | "customer";
};

const Home = ({ props }: HomeProps) => {
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
