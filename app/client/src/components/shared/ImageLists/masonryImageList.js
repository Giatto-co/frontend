import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaShareAlt, FaSave } from "react-icons/fa";
import { Grid, Popover, Typography } from "@mui/material";

const MasonryImageList = ({ itemData }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      {itemData.map((img, i) => {
        return (
          <div key={i} className="zoom-hover image-overlay">
            <div className="image-list">
              <div className="img-list-full-col">
                <img
                  src={img.imgOne}
                  alt=""
                />
              </div>
              <div className="img-list-half-col">
                <div className="masonry-sm-img">
                  <img
                    src={img.imgTwo}
                    alt=""
                    className="img-list-half-top"
                  />
                </div>
                <div className="masonry-sm-img">
                  <img
                    src={img.imgThree}
                    alt=""
                    className="img-list-half-bottom"
                  />
                </div>
              </div>
            </div>
            <div className="item-bar flex-container">
              <div className="item-bar-title">
                <h5>{img.title}</h5>
                <p>{`${img.total} items`}</p>
              </div>
              <div className="action-btn">
                <BsThreeDotsVertical
                  className="cursor-pointer"
                  aria-describedby={id}
                  onClick={handleClick}
                />
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <Grid container>
                    <div className="action-flex flex-container">
                      <FaShareAlt style={{marginRight:"0.25em"}} color="#122a32" />
                      <Typography sx={{ fontSize: "0.75rem" }}>
                        share
                      </Typography>
                    </div>
                    <div className="action-flex flex-container">
                      <FaSave style={{marginRight:"0.25em"}} color="#122a32" />
                      <Typography sx={{  fontSize: "0.75rem" }}>
                        save
                      </Typography>
                    </div>
                  </Grid>
                </Popover>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MasonryImageList;
