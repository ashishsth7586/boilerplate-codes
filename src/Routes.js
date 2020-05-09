import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { PublicRoute } from "./routers";
import { PublicLayout } from "./layouts";
import Homepage from "./pages/Public/Homepage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          exact
          path="/"
          layout={PublicLayout}
          component={Homepage}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
