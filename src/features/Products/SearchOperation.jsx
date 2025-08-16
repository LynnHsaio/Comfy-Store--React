import { useState } from "react";
import Select from "../../ui/Select";
import useProducts from "./useProducts";
import { useSearchParams } from "react-router-dom";
import Search from "../../ui/Search";
import Range from "../../ui/Range";
import CheckBox from "../../ui/CheckBox";

export default function SearchOperation() {
  const { isLoading, data } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const allQuery = Object.fromEntries(searchParams.entries());
  const [query, setQuery] = useState(allQuery || {});

  if (isLoading) return <div>Loading...</div>;

  function getOptions(type) {
    const uniqueType = new Set(data.map((item) => item.attributes[type]));
    return ["all", ...uniqueType];
  }

  function addQuery(prop, value) {
    const newQuery = { ...query };
    newQuery[prop] = value;

    setQuery(newQuery);
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearchParams(query);
  }

  function handleReset(e) {
    e.preventDefault();
    setSearchParams({});
    setQuery({});
  }

  return (
    <form>
      <Search
        id="search"
        label="Search Product"
        initialVal={query.search}
        addQuery={addQuery}
      />

      <Select
        id="category"
        label="Select Category"
        options={getOptions("category")}
        addQuery={addQuery}
        initialVal={query.category}
      />

      <Select
        id="company"
        label="Select Company"
        options={getOptions("company")}
        addQuery={addQuery}
        initialVal={query.company}
      />

      <Select
        id="order"
        label="Sort By"
        options={["a-z", "z-a", "high", "low"]}
        addQuery={addQuery}
        initialVal={query.order}
      />

      <Range
        id="price"
        label="Select Price"
        max="100000"
        addQuery={addQuery}
        initialVal={query.price}
      />

      <CheckBox
        id="shipping"
        label="Free Shipping"
        addQuery={addQuery}
        initialVal={Boolean(query.shipping)}
      />

      <button onClick={handleSearch}>Search</button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
