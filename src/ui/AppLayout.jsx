import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
// import SearchOrder from "../features/order/SearchOrder";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      <main className="overflow-scroll">
        {isLoading ? <LoadingComponent /> : <Outlet />}
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
