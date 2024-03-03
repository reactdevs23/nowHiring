import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  img,
  headingBg,
  logo,
  heading,
  postDetails,

  applyNow,
}) => {
  return (
    <div
      className={[
        classes.mainWrapper,
        "min-h-screen flex items-center justify-center w-full ",
      ].join(" ")}
      style={{ background: "var(--primaryColor)" }}
    >
      <div className={classes.container}>
        <div className={classes.topHeader}>
          <img src={logo} alt="#" className={classes.logo} />
        </div>
        <div className={classes.wrapper}>
          <div className={classes.infoContainer}>
            <h1 className={classes.heading}>
              {heading}
              <img src={headingBg} alt="#" className={classes.headingBg} />
            </h1>{" "}
            <div className={classes.postDetails}>
              <h2 className={classes.postName}>{postDetails.postName}</h2>
              <p className={classes.info}>{postDetails.info}</p>
            </div>
          </div>
          <div className={classes.imgContainer}>
            <img src={img} alt="#" className={classes.img} />
          </div>
        </div>
        <div className={classes.applyNow}>
          <button className={classes.label}>{applyNow.label}</button>
          <a href={`mailto:${applyNow.email}`} className={classes.email}>
            {applyNow.email}
          </a>
        </div>
      </div>{" "}
      <img src={headingBg} alt="#" className={classes.bottomBg} />
    </div>
  );
};

export default MainComponent;
