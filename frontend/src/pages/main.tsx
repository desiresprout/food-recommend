import React, { FC } from "react";
import PageGlobal from "@components/pageGlobal";
import Header from "@components/header";
import Section from "@components/section";
import Main from "@components/main";

const MainPage: FC = () => {
  return (
    <PageGlobal>
      <Header />
      <Section />
      <Main />
    </PageGlobal>
  );
};

export default MainPage;
