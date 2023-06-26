import { useState } from "react";
import { Link, useLocation, useMatch } from "react-router-dom";
import AlternativeLayout from "../../components/shared/Layouts/AlternativeLayout";
import { BsSave, BsShare } from "react-icons/bs";
import { Button, ButtonGroup } from "@mui/material";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import pic from "../../assets/3d11.jpeg";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];

const actions = [
  { icon: <SaveIcon />, name: "Save" },
  { icon: <PrintIcon />, name: "Print" },
  { icon: <ShareIcon />, name: "Share" },
];

const Collection = () => {
  const match = useMatch("/:name-collections/:id");
  const name = match ? match.params.name : "";

  const [open, setOpen] = useState(false);
  const location = useLocation();
  console.log("Location:::", location);

  return (
    <AlternativeLayout>
      <div className="discover-page">
        <div className="discoverPage-banner">
          <div className="cursor-pointer match-link--container">
            <Link to="/collections" className="match-link">
              Collections
            </Link>
            <span>/</span>
            <Link to={match} className="match-link match-link--name">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
          </div>
          <div className="centered-text">
            <h5>{name.charAt(0).toUpperCase() + name.slice(1)}</h5>
            <p className="">
              <span className="discover-author">
                by <span className="span-auth">{"giatto"}</span>
              </span>
              <span className="resources">{2000} resources</span>
              <span className="followers">{18175} followers</span>
            </p>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              color="inherit"
            >
              <Button startIcon={<BsSave />}>Save</Button>
              <Button startIcon={<BsShare />}>Share</Button>
            </ButtonGroup>
          </div>
        </div>
        <div className="discover-gallery">
          <div className="discover-overlay-image">
            {/* {itemData.map((obj) => {
              return ( */}
                <div id="thumbnail-container">
                  <div id="thumbnail">
                    {/* <p>{obj.author}</p> */}
                    <p>sutra khan</p>
                      <Box
                        sx={{
                          height: 320,
                          transform: "translateZ(0px)",
                          flexGrow: 1,
                        }}
                      >
                        <SpeedDial
                          ariaLabel="SpeedDial controlled open example"
                          sx={{ position: "absolute", bottom: 26, right: 16 }}
                          icon={<SpeedDialIcon />}
                          onClose={() => setOpen(false)}
                          onOpen={() => setOpen(true)}
                          open={open}
                        >
                          {actions.map((action) => (
                            <SpeedDialAction
                              key={action.name}
                              icon={action.icon}
                              tooltipTitle={action.name}
                              onClick={() => setOpen(false)}
                            />
                          ))}
                        </SpeedDial>
                      </Box>
                  </div>
                  <img src={pic} alt="" width="420px" height="360px" />
                </div>
              {/* );
            })} */}
          </div>
        </div>
      </div>
    </AlternativeLayout>
  );
};

export default Collection;
