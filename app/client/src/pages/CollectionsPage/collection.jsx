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
