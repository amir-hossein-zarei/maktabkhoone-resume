import { useState } from "react";
import { Data } from "./entities/data";
import Header from "./Layouts/Header";
import Section from "./Components/Sections/Section";
import data from "./assets/data.json";
import Article from "./Components/Article";

const typedData = data as Data;

function App() {
  const [socialVisible, setSocialVisible] = useState(true);

  return (
    <>
      <Header
        showSocialAccounts={socialVisible}
        sections={typedData.sections}
        links={typedData.links}
      />
      <Article onVisibilityChange={setSocialVisible} data={typedData} />
      {typedData.sections.map((section) => (
        <Section section={section} key={section.id} />
      ))}
    </>
  );
}

export default App;
