import { Outlet } from "react-router-dom";
import PageLayout from "./layout/PageLayout";

function Root() {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}

export default Root;
