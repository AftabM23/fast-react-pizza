import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
// import SearchOrder from "../features/order/SearchOrder";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="layout">
      <Header />

      <main>{isLoading ? <LoadingComponent /> : <Outlet />}</main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
