import { useSearchParams } from "react-router-dom";

export default function Pagination({ pagination }) {
  const { pageCount, page } = pagination;
  const [searchParams, setSearchParams] = useSearchParams();

  function handlePage(page) {
    if (page < 1 || page > pageCount) return;

    searchParams.set("page", page);
    setSearchParams(searchParams);
  }

  if (pageCount === 1) return null;

  return (
    <div>
      <button
        onClick={() => {
          handlePage(page - 1);
        }}
      >
        prev
      </button>

      <span>
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => {
              handlePage(i + 1);
            }}
            style={{ backgroundColor: i + 1 === page ? "balck" : "initial" }}
          >
            {i + 1}
          </button>
        ))}
      </span>

      <button
        onClick={() => {
          handlePage(page + 1);
        }}
      >
        next
      </button>
    </div>
  );
}
