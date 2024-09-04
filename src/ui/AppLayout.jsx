import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import LoadingComponent from "./LoadingComponent";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(isLoading);
  return (
    <div className="layout">
      <Header />
      <main>{isLoading ? <LoadingComponent /> : <Outlet />}</main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
