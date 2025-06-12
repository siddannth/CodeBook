import { useLocation } from "react-router-dom"
import { OrderSuccess } from "./components/OrderSuccess"
import { OrderFail } from "./components/OrderFail"

export const OrderPage = () => {
  const location = useLocation();
  const state = location.state;

  if (!state) {
    // Fallback if page is refreshed or accessed directly
    return (
      <main>
        <OrderFail />
      </main>
    );
  }

  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  );
};
