import React from "react";
import Aux from "../../hoc/Auxillary";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <Aux>
      <div>Tool bar,Side bar, Back bar</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
