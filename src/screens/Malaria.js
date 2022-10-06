import { useState } from "react";
import DriverTab from "../components/DriverTab";
import CountryTab from "../components/CountryTab";
import Blurb from "../components/Blurb";
import LinkToTop from "../components/LinkToTop";

import "./Page.css";

// charts
import imgMalariaChart from "../images/malaria-chart.svg";

// primary drivers
import imgFarming1 from "../images/drivers-farming-1.svg";
import imgMining1 from "../images/drivers-mining-1.svg";
import imgTransport1 from "../images/drivers-transport-1.svg";
import imgCattle1 from "../images/drivers-cattle-1.svg";
import imgAgriculture1 from "../images/drivers-agriculture-1.svg";

// secondary drivers
import imgFarming2 from "../images/drivers-farming-2.svg";
import imgMining2 from "../images/drivers-mining-2.svg";
import imgTransport2 from "../images/drivers-transport-2.svg";
import imgAgriculture2 from "../images/drivers-agriculture-2.svg";
import imgLogging2 from "../images/drivers-logging-2.svg";
import imgTimber2 from "../images/drivers-timber-2.svg";
import imgHydroelectric2 from "../images/drivers-hydroelectric-2.svg";
import imgFires2 from "../images/drivers-fires-2.svg";

function MalariaPage() {
  const [activeTab, setActiveTab] = useState("primary");
  const [activeCountry, setActiveCountry] = useState("bolivia");
  let driverContent;

  const tabClickHandler = (id) => {
    setActiveTab(id); // state passed up from DriverTab.js
  };

  const countryClickHandler = (id) => {
    setActiveCountry(id); // state passed up from DriverTab.js
  };

  // bolivia

  if (activeTab === "primary" && activeCountry === "bolivia") {
    driverContent = (
      <div className="driver-content">
        <Blurb
          title="Cattle ranching"
          text="Beef is one of the leading drivers of tropical deforestation. In South America, cattle ranches are ravaging the Amazon and other landscapes."
          imgSrc={imgCattle1}
          imgAlt="Cattle ranching icon"
        />
        <Blurb
          title="Large-scale agriculture"
          text="Rising demand for crops like soy has created incentives to convert forests to farmland and ranch land. Once a forest is lost to agriculture, it is usually gone forever."
          imgSrc={imgAgriculture1}
          imgAlt="Small-scale timber extraction icon"
        />
        <Blurb
          title="Smallholder farming"
          text="Expanding agriculture, due to an increased population and shifts in diet, is responsible for most of the world’s deforestation."
          imgSrc={imgFarming1}
          imgAlt="Smallholder farming icon"
        />
      </div>
    );
  }

  if (activeTab === "secondary" && activeCountry === "bolivia") {
    driverContent = (
      <div className="driver-content">
        <Blurb
          title="Transport infrastructure"
          text="As agriculture, logging, and other businesses expand into forests, trees are cleared for new roadways and access further into forest landscapes."
          imgSrc={imgTransport2}
          imgAlt="Transport infrastructure"
        />
        <Blurb
          title="Fires"
          text="Wildfires around the world are bigger, more intense, and lasting longer than ever before. Each year they destroy or degrade millions of acres of forest around the world."
          imgSrc={imgFires2}
          imgAlt="Fires icon"
        />
      </div>
    );
  }

  // brazil

  if (activeTab === "primary" && activeCountry === "brazil") {
    driverContent = (
      <div className="driver-content">
        <Blurb
          title="Cattle ranching"
          text="Beef is one of the leading drivers of tropical deforestation. In South America, cattle ranches are ravaging the Amazon and other landscapes."
          imgSrc={imgCattle1}
          imgAlt="Cattle ranching icon"
        />
        <Blurb
          title="Transport infrastructure"
          text="As agriculture, logging, and other businesses expand into forests, trees are cleared for new roadways and access further into forest landscapes."
          imgSrc={imgTransport1}
          imgAlt="Transport infrastructure"
        />
      </div>
    );
  }

  if (activeTab === "secondary" && activeCountry === "brazil") {
    driverContent = (
      <div className="driver-content">
        <Blurb
          title="Large-scale agriculture"
          text="Rising demand for crops like soy has created incentives to convert forests to farmland and ranch land. Once a forest is lost to agriculture, it is usually gone forever."
          imgSrc={imgAgriculture2}
          imgAlt="Small-scale timber extraction icon"
        />
        <Blurb
          title="Smallholder farming"
          text="Expanding agriculture, due to an increased population and shifts in diet, is responsible for most of the world’s deforestation."
          imgSrc={imgFarming2}
          imgAlt="Smallholder farming icon"
        />
        <Blurb
          title="Large-scale logging"
          text="High demand for timber products, weak enforcement, and poorly implemented trade rules lead to logging practices that destroy forests."
          imgSrc={imgLogging2}
          imgAlt="Large-scale logging icon"
        />
        <Blurb
          title="Mining operations"
          text="Rich in natural resources, including gold and iron, Amazonian rain forests are threatened by major mining companies and the unsustainable infrastructure they often bring."
          imgSrc={imgMining2}
          imgAlt="Mining operations icon"
        />
        <Blurb
          title="Hydroelectric power"
          text="A boom in hydroelectric power has put regions like the Amazon at risk. Poorly planned dams lead to forest degradation and deforestation."
          imgSrc={imgHydroelectric2}
          imgAlt="Hydroelectric power icon"
        />
        <Blurb
          title="Fires"
          text="Wildfires around the world are bigger, more intense, and lasting longer than ever before. Each year they destroy or degrade millions of acres of forest around the world."
          imgSrc={imgFires2}
          imgAlt="Fires icon"
        />
      </div>
    );
  }

  // colombia

  if (activeTab === "primary" && activeCountry === "colombia") {
    driverContent = (
      <div className="driver-content">
        <Blurb
          title="Cattle ranching"
          text="Beef is one of the leading drivers of tropical deforestation. In South America, cattle ranches are ravaging the Amazon and other landscapes."
          imgSrc={imgCattle1}
          imgAlt="Cattle ranching icon"
        />
      </div>
    );
  }

  if (activeTab === "secondary" && activeCountry === "colombia") {
    driverContent = (
      <div className="driver-content">
        <Blurb
          title="Smallholder farming"
          text="Expanding agriculture, due to an increased population and shifts in diet, is responsible for most of the world’s deforestation."
          imgSrc={imgFarming2}
          imgAlt="Smallholder farming icon"
        />
        <Blurb
          title="Transport infrastructure"
          text="As agriculture, logging, and other businesses expand into forests, trees are cleared for new roadways and access further into forest landscapes."
          imgSrc={imgTransport2}
          imgAlt="Transport infrastructure"
        />
      </div>
    );
  }

  // peru

  if (activeTab === "primary" && activeCountry === "peru") {
    driverContent = (
      <div className="driver-content">
        <Blurb
          title="Cattle ranching"
          text="Beef is one of the leading drivers of tropical deforestation. In South America, cattle ranches are ravaging the Amazon and other landscapes."
          imgSrc={imgCattle1}
          imgAlt="Cattle ranching icon"
        />
        <Blurb
          title="Smallholder farming"
          text="Expanding agriculture, due to an increased population and shifts in diet, is responsible for most of the world’s deforestation."
          imgSrc={imgFarming1}
          imgAlt="Smallholder farming icon"
        />
      </div>
    );
  }

  if (activeTab === "secondary" && activeCountry === "peru") {
    driverContent = (
      <div className="driver-content">
        <Blurb
          title="Large-scale logging"
          text="High demand for timber products, weak enforcement, and poorly implemented trade rules lead to logging practices that destroy forests."
          imgSrc={imgLogging2}
          imgAlt="Large-scale logging icon"
        />
        <Blurb
          title="Small-scale timber extraction"
          text="Illegal and unsustainable logging, usually resulting from the demand for cheap wood and paper, is the primary driver of forest degradation."
          imgSrc={imgTimber2}
          imgAlt="Small-scale timber extraction icon"
        />
        <Blurb
          title="Mining operations"
          text="Rich in natural resources, including gold and iron, Amazonian rain forests are threatened by major mining companies and the unsustainable infrastructure they often bring."
          imgSrc={imgMining2}
          imgAlt="Mining operations icon"
        />
      </div>
    );
  }

  // venezuela

  if (activeTab === "primary" && activeCountry === "venezuela") {
    driverContent = (
      <div className="driver-content">
        <Blurb
          title="Smallholder farming"
          text="Expanding agriculture, due to an increased population and shifts in diet, is responsible for most of the world’s deforestation."
          imgSrc={imgFarming1}
          imgAlt="Smallholder farming icon"
        />
        <Blurb
          title="Mining operations"
          text="Rich in natural resources, including gold and iron, Amazonian rain forests are threatened by major mining companies and the unsustainable infrastructure they often bring."
          imgSrc={imgMining1}
          imgAlt="Mining operations icon"
        />
      </div>
    );
  }

  if (activeTab === "secondary" && activeCountry === "venezuela") {
    driverContent = (
      <div className="driver-content">
        <Blurb
          title="Large-scale agriculture"
          text="Rising demand for crops like soy has created incentives to convert forests to farmland and ranch land. Once a forest is lost to agriculture, it is usually gone forever."
          imgSrc={imgAgriculture2}
          imgAlt="Small-scale timber extraction icon"
        />
      </div>
    );
  }

  return (
    <div className="page-content page-malaria">
      <header className="page-header">
        <h2>Malaria and the Amazon</h2>
        <p>
          Malaria affected 228 million people globally in 2018 and resulted in
          an estimated 405,000 associated deaths. Research shows that
          deforestation is linked to increases in malaria across different
          regions and different species of mosquitoes. Malaria is one of the
          infectious diseases with the most research on its ties to
          deforestation and may offer scientists insights into other zoonotic
          diseases.
        </p>
      </header>

      <div className="callout-section">
        <h3>Region Disease Profile</h3>
        <p>
          A 13-year study of 795 municipalities in the Amazon found a 10%
          increase in deforestation led to a 3.3% increase in rates of malaria.
          The early stages of deforestation – as forest edges shift and change –
          showed the greatest impact on malaria outbreaks. Studies noted that
          regional ecological variables, different mosquito species, and
          environmental variables will affect mosquitoes’ ability to develop and
          transmit the malaria parasite.
        </p>
        <ul>
          <li>
            Deforestation is linked to malaria through increases in sunlight and
            standing water that provide favorable breeding sites for mosquitos,
            as well as the loss of biodiversity and increases in human exposure
            to infected mosquitos.
          </li>
          <li>
            Studies reveal that while some vector mosquitoes require deep forest
            shade, other mosquitoes require partial shade and can thrive on
            forest edges or in areas with reduced tree cover.
          </li>
        </ul>
        <div className="image-container">
          <h4>Cases of Malaria in the Brazilian Amazon</h4>
          <img
            src={imgMalariaChart}
            alt="Map of Malaria in the Brazilian Amazon"
          />
        </div>
      </div>

      <div className="content-section">
        <header>
          <h3>Drivers of Deforestation in the Amazon</h3>
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

        <div className="country-tabs">
          <CountryTab type={"bolivia"} name={"Bolivia"} activeCountry={activeCountry} onCountryClick={countryClickHandler} />
          <CountryTab type={"brazil"} name={"Brazil"} activeCountry={activeCountry} onCountryClick={countryClickHandler} />
          <CountryTab type={"colombia"} name={"Colombia"} activeCountry={activeCountry} onCountryClick={countryClickHandler} />
          <CountryTab type={"peru"} name={"Peru"} activeCountry={activeCountry} onCountryClick={countryClickHandler} />
          <CountryTab type={"venezuela"} name={"Venezuela/Guyana"} activeCountry={activeCountry} onCountryClick={countryClickHandler} />
        </div>

        {driverContent}
      </div>

      <div className="content-section">
        <h3>What WWF is Doing</h3>
        <p>
          Protecting and conserving the Amazon – a region two-thirds the size of
          the United States – is a big job. WWF has been working in the Amazon for
          40 years and is at the forefront of efforts to protect its forests and
          help its communities. We engage local communities and partner with
          governments to identify solutions that bridge the need for sustainable
          livelihoods and effective conservation.
        </p>
        <LinkToTop />
      </div>
    </div>
  );
}

export default MalariaPage;
