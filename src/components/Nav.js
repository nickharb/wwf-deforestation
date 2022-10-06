import Tab from "./Tab";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./Nav.css";

const Nav = (props) => {
  let navContent;

  const tabClickHandler = (id) => {
    props.onNavClick(id); // pass the state up to App
  };

  const selectChangeHandler = (event) => {
    props.onNavClick(event.target.value); // pass the state up to App
  };

  if (props.isMobile) {
    navContent = (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="select-label">Disease</InputLabel>
          <Select
            labelId="select-label"
            label="Disease"
            onChange={selectChangeHandler}
            defaultValue={props.activeTab}
          >
            <MenuItem value={"ebola"}>Ebola & West Africa</MenuItem>
            <MenuItem value={"malaria"}>Malaria & The Amazon</MenuItem>
            <MenuItem value={"lyme"}>
              Lyme Disease & the North American Forest
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  } else {
    navContent = props.navContent.map((tab) => (
      <Tab
        content={tab}
        key={tab.id}
        activeTab={props.activeTab}
        onTabClick={tabClickHandler}
      />
    ));
  }

  return <nav id="nav" className="nav">{navContent}</nav>;
};

export default Nav;
