import { useSearchParams } from "react-router-dom";
import styles from "./Pagination.module.scss";

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
    <div className={styles.paginationContainer}>
      <div className={styles.pagination}>
        <button
          className="btn"
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
              className={`btn ${pageNum === page ? "active" : ""} `}
              onClick={() => {
                handlePage(pageNum);
              }}
            >
              {pageNum}
            </button>
          ))}
        </span>

        <button
          className="btn"
          onClick={() => {
            handlePage(page + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}
