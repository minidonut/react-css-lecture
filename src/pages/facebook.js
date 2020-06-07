import * as React from "react";
import { useStore } from "react-redux";

const Page = () => {
  const store = useStore();
  console.log(store.getState().facebook);

  return <div>Facebook</div>;
};

export default Page;
