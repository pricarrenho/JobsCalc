import { Route, Routes as RouteLib } from "react-router-dom";
import { AddNewJob } from "../pages/AddNewJob";
import { EditJob } from "../pages/EditJob";
import { Home } from "../pages/Home";
import { MyProfile } from "../pages/MyProfile";

export const Routes = () => {
  return (
    <RouteLib>
      <Route path="/" element={<Home />} />
      <Route path="my-profile/*" element={<MyProfile />} />
      <Route path="edit-job/*" element={<EditJob />} />
      <Route path="add-new-job/*" element={<AddNewJob />} />
    </RouteLib>
  );
};
