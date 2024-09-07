import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
// import SearchOrder from "../features/order/SearchOrder";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="grid h-screen w-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          <div>{isLoading ? <LoadingComponent /> : <Outlet />}</div>
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
