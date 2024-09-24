import Link from "next/link";

interface BreadcrumbProps {
  category: string;
  productName: string;
}

const BreadCrumb = ({ category, productName }: BreadcrumbProps) => {
  return (
    <nav className="text-sm text-gray-600 mb-4">
      <div className="flex items-center space-x-2">
        <div>
          <Link href="/">
            <span className="hover:underline">Home</span>
          </Link>
        </div>
        <div>/</div>
        <div>
          <Link href={`/category/${category}`}>
            <span className="hover:underline capitalize">{category}</span>
          </Link>
        </div>
        <div>/</div>
        <div className="font-semibold">{productName}</div>
      </div>
    </nav>
  );
};

export default BreadCrumb;
