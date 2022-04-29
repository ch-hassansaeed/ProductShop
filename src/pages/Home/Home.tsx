import React, { Fragment, useEffect } from "react";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import ErrorBox from "../../components/ErrorBox/ErrorBox";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import vegetablesList from "../../store/actions/actionCreators/productsListAction";
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductCard from "../../container/Product/ProductCard";
import { Product } from "../../Interfaces/Product";

const Home = () => {
  const dispatch = useDispatch();

  const vegetablesData: any = useSelector((state: any) => state.products);
  const searchTerm = useSelector((state: any) => state.searchFilter);

  const { loading, error } = vegetablesData;
  const vegetables: Product[] = vegetablesData.vegetables;
  useEffect(() => {
    dispatch(vegetablesList());
  }, [dispatch]);

  const filterProducts =
    vegetables &&
    vegetables.filter((vegetable: Product) => {
      if (
        vegetable?.name?.toLowerCase().includes(searchTerm) ||
        vegetable?.description?.toLowerCase().includes(searchTerm)
      ) {
        return vegetable;
      }
      return false;
    });

  return (
    <Fragment>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <ErrorBox varient="error">{error}</ErrorBox>
      ) : (
        <div className="row center">
          {filterProducts &&
            filterProducts.map((vegetable) => (
              <ProductCard key={vegetable._id} product={vegetable} />
            ))}
        </div>
      )}
      <Sidebar />
    </Fragment>
  );
};
export default withRouter(Home);
