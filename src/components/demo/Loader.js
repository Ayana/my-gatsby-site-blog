import React from "react"
import Loader from "../assets/images/loader.png"
import LoaderSVG from "../assets/images/loader.svg"

export default () => {
  const styleWrapper = {
    backgroundColor: "#F2F2F2",
    width: "100%",
    height: "105vh",
    position: "absolute",
    transition: "opacity 0.3s",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
  }

  const styleInner = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
  }

  return (
    <div key="loader" id="___loader" style={styleWrapper}>
      <div style={styleInner}>
        <img src={LoaderSVG} alt="spinner" width="70" height="65" />
        <img src={Loader} alt="spinner" width="70" height="65" />
      </div>
    </div>
  )
}
