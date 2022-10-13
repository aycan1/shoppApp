import ProductChart from "../ProductChart";
import TotalCost from "../TotalCost";

export default function Sidebar() {
  return (

    <div className="fixed top-20 right-5 w-1/5">
    <ProductChart/>
    <TotalCost/>
    </div>
  );
}
