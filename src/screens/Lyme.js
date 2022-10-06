import { useState } from "react";
import DriverTab from "../components/DriverTab";
import Blurb from "../components/Blurb";
import LinkToTop from "../components/LinkToTop";

import "./Page.css";

// charts
import imgLymeChart from "../images/lyme-chart.svg";

// primary drivers
import imgForestry1 from "../images/drivers-forestry-1.svg";

// secondary drivers
import imgFires2 from "../images/drivers-fires-2.svg";
import imgUrban2 from "../images/drivers-urban-2.svg";

function LymePage() {
  const [activeTab, setActiveTab] = useState("primary");
  let driverContent;

  const tabClickHandler = (id) => {
    setActiveTab(id); // state passed up from Tab.js
  };

  if (activeTab === "primary") {
    driverContent = (
      <div className="driver-content">
        <Blurb
          title="Forestry"
          text="Poor forest management, illegal logging, and growing demand for forest products contribute to rampant deforestation and degradation."
          imgSrc={imgForestry1}
          imgAlt="Forestry icon"
        />
      </div>
    );
  }

  if (activeTab === "secondary") {
    driverContent = (
      <div className="driver-content">
        <Blurb
          title="Fires"
          text="Wildfires around the world are bigger, more intense, and lasting longer than ever before. Each year they destroy or degrade millions of acres of forest around the world."
          imgSrc={imgFires2}
          imgAlt="Fires icon"
        />
        <Blurb
          title="Urban expansion"
          text="As human populations grow and expand from cities to suburbs and exurbs, forest degradation increases and raises the risk of zoonotic spillover."
          imgSrc={imgUrban2}
          imgAlt="Urban expansion icon"
        />
      </div>
    );
  }

  return (
    <div className="page-content page-lyme">
      <header className="page-header">
        <h2>Lyme Disease and the North American Forest</h2>
        <p>
          Each year, approximately 30,000 cases of Lyme disease are reported in
          the United States – the most reported vector disease in the country.
          Lyme disease is a species of bacteria passed to humans through ticks
          that act as vectors – consuming the blood of an infected animal (host)
          then carrying the virus to humans through tick bites.
        </p>
      </header>

      <div className="callout-section">
        <h3>Region Disease Profile</h3>
        <p>
          Lyme disease is most widespread in the Northeast U.S., where suburban
          and exurban development infringe on forests. According to several
          studies, forest fragmentation increases the risk of human exposure to
          Lyme disease, as wildlife and ticks come in closer contact with
          humans. Forest loss or fragmentation can also diminish the number of
          species living in a certain area as some die off or find new habitats.
          With less biodiversity, there is greater risk of human exposure to the
          disease.
        </p>
        <ul>
          <li>
            A study in southeastern New York State found that forest
            fragmentation leads to diminished biodiversity in forested areas as
            certain species die off or find new habitats and results in a higher
            risk of human exposure to Lyme disease.
          </li>
          <li>
            The findings confirmed the “dilution effect” – that species
            diversity lowers the risk of Lyme disease as some animals – like
            tree squirrels – are not competent hosts and cannot spread the
            disease. Greater biodiversity increases the chance of these
            incompetent vectors.
          </li>
        </ul>
        <div className="image-container">
          <h4>Reported Cases of Lyme Disease in the United States</h4>
          <img
            src={imgLymeChart}
            alt="Map of Lyme Disease in the United States"
          />
        </div>
      </div>

      <div className="content-section">
        <header>
          <h3>Drivers of Deforestation in the North American Forest</h3>
        </header>

        <div className="driver-tabs">
          <DriverTab
            type={"primary"}
            activeTab={activeTab}
            onTabClick={tabClickHandler}
          />
          <DriverTab
            type={"secondary"}
            activeTab={activeTab}
            onTabClick={tabClickHandler}
          />
        </div>

        {driverContent}
      </div>

      <div className="content-section">
        <h3>What WWF is Doing</h3>
        <p>
          The demand for timber, wood products are driving forest loss. WWF
          engages with companies to help reduce their forest footprint and
          support other on-the-ground actions — like forest restoration. We also
          encourage consumers to choose wood and paper products that are from
          responsibly managed forests.
        </p>
        <LinkToTop />
      </div>
    </div>
  );
}

export default LymePage;
