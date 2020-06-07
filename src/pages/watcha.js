import * as React from "react";
import {
  Header,
  FootDialog,
  Section,
  Item,
  PortraitItem,
} from "../components/watcha";
import "./watcha.css";
import { useSelector } from "react-redux";

const contentType = {
  "tv_seasons": "TV",
  "books": "도서",
  "movies": "영화",
};

const Page = () => {
  const {
    top_results,
    movies,
    tv_seasons,
    books,
    users,
  } = useSelector((state) => state.watcha);
  console.log(top_results);
  return <div className="Watcha-container">
    <Header />
    <Section title="상위 검색 결과">
      {top_results.map(x => <PortraitItem
        key={x.code}
        title={x.title}
        subtitle={`${x.year} ・ ${x.channel_name}`}
        caption={contentType[x.content_type]}
        src={x.poster.medium}
      />)}
    </Section>
    <Section title="TV" more>
      {tv_seasons.map(x => <Item key={x.code} />)}
    </Section>
    <FootDialog />
  </div>;
};

export default Page;
