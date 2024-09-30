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
    <div className="flex justify-center items-center space-x-2 mt-6 overflow-x-auto">
      <a
        href={`/?page=${currentPage - 1}`}
        className={`px-3 py-1 lg:text-sm text-xs bg-orange-500 text-white rounded ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous
      </a>

      <div className="flex space-x-1 overflow-x-auto">
        {pageNumbers.map((number) => (
          <a
            key={number}
            href={`/?page=${number}`}
            className={`px-3 py-1 text-sm rounded ${
              currentPage === number
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-orange-500 hover:text-white"
            }`}
          >
            {number}
          </a>
        ))}
      </div>

      <a
        href={`/?page=${currentPage + 1}`}
        className={`px-3 py-1 lg:text-sm text-xs bg-orange-500 text-white rounded ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </a>
    </div>
  );
}
