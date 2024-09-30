type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <a
        href={`/?page=${currentPage - 1}`}
        className={`px-4 py-2 bg-orange-500 text-white rounded ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous
      </a>

      {pageNumbers.map((number) => (
        <a
          key={number}
          href={`/?page=${number}`}
          className={`px-4 py-2 rounded ${
            currentPage === number
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white"
          }`}
        >
          {number}
        </a>
      ))}

      <a
        href={`/?page=${currentPage + 1}`}
        className={`px-4 py-2 bg-orange-500 text-white rounded ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </a>
    </div>
  );
}
