import * as React from "react";
import {
  Header,
  FootDialog,
  Section,
  Item,
} from "../components/watcha";
import "./watcha.css";
import { useSelector } from "react-redux";

const Page = () => {
  const {
    top_results,
    movies,
    tv_seasons,
    books,
    users,
  } = useSelector((state) => state.watcha);
  console.log(movies);
  return <div className="Watcha-container">
    <Header />
    <Section title="상위 검색 결과">
    </Section>
    <Section title="TV" more>
      {tv_seasons.map(x => <Item key={x.code} />)}
    </Section>
    <FootDialog />
  </div>;
};

export default Page;
