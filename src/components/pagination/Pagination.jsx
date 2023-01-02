import "./pagination.scss";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const pagenumbers = [...Array(nPages + 1).keys()].slice(1);
  return (
    <nav>
      <ul>
        {currentPage !== 1 && (
          <li className="prev">
            <button onClick={prevPage}>Previous</button>
          </li>
        )}

        {pagenumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => setCurrentPage(number)}
              disabled={currentPage === number}
              data-testid={'pNumb' + number}
            >
              {number}
            </button>
          </li>
        ))}

        {currentPage !== nPages && (
          <li className="next">
            <button onClick={nextPage}>Next</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
