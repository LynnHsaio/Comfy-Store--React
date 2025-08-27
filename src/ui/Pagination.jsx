import { useSearchParams } from "react-router-dom";

export default function Pagination({ pagination }) {
  const { pageCount, page } = pagination;
  const [searchParams, setSearchParams] = useSearchParams();
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

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
        {pages.map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => {
              handlePage(pageNum);
            }}
            style={{ backgroundColor: pageNum === page ? "balck" : "initial" }}
          >
            {pageNum}
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
