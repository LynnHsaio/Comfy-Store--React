import { useState } from "react";
import Select from "../../ui/Select";
import useProducts from "./useProducts";
import { useSearchParams } from "react-router-dom";
import Search from "../../ui/Search";
import Range from "../../ui/Range";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
// import CheckBox from "../../ui/CheckBox";
import styles from "./SearchOperation.module.scss";

const defaultQuery = {
  search: "",
  category: "all",
  company: "all",
  order: "a-z",
  price: "100000",
  // shipping: false,
};

export default function SearchOperation() {
  const { isLoading, data } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = Object.fromEntries(searchParams.entries());
  const initialQuery = Object.keys(urlQuery).length ? urlQuery : defaultQuery;
  const [query, setQuery] = useState(initialQuery);

  function getOptions(type) {
    const uniqueType = new Set(data.map((item) => item.attributes[type]));
    return ["all", ...uniqueType];
  }

  function onChange(e) {
    const { name, value } = e.target;

    setQuery((curState) => ({ ...curState, [name]: value }));
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearchParams(query);
  }

  function handleReset(e) {
    e.preventDefault();
    setSearchParams({});
    setQuery(defaultQuery);
  }

  if (isLoading) return <Loading />;

  if (!data?.length) return <Empty resourceName="options" />;

  return (
    <form className={styles.searchOperation}>
      <Search
        name="search"
        label="Search Product"
        value={query.search}
        onChange={onChange}
      />

      <Select
        name="category"
        label="Select Category"
        options={getOptions("category")}
        value={query.category}
        onChange={onChange}
      />

      <Select
        name="company"
        label="Select Company"
        options={getOptions("company")}
        value={query.company}
        onChange={onChange}
      />

      <Select
        name="order"
        label="Sort By"
        options={["a-z", "z-a", "high", "low"]}
        value={query.order}
        onChange={onChange}
      />

      <Range
        name="price"
        label="Select Price"
        max="100000"
        value={query.price}
        onChange={onChange}
      />

      {/* <CheckBox
        name="shipping"
        label="Free Shipping"
        value={Boolean(query.shipping)}
        onChange={onChange}
      /> */}
      <div></div>

      <button className="btn-primary" onClick={handleSearch}>
        Search
      </button>
      <button className="btn-accent" onClick={handleReset}>
        Reset
      </button>
    </form>
  );
}
