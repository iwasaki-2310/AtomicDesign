import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* TOP */}
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        {/* Users */}
        <Route>
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
