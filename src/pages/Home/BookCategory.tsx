import { Link } from "react-router-dom";
import BookCard from "../../components/BookCard";
import SectionTitle from "../../components/SectionTitle";
import { useGetBooksQuery } from "../../redux/features/book/bookApi";
import { IBook } from "../../types/bookTypes";

const BooksCategory = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  const booksData = data?.data?.data;

  return (
    <div className="mb-5 ">
      <SectionTitle
        subHeading=""
        heading={" Newly Lunched Books  "}
      ></SectionTitle>
      <div className="flex justify-center  container mx-auto mb-5    px-4">
        <div className="flex justify-center px-4">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {booksData?.slice(0, 4).map((book: IBook) => (
              <BookCard book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn  ml-5 btn-primary">
          {" "}
          <Link to="/books">See All Books</Link>
        </button>
      </div>
    </div>
  );
};

export default BooksCategory;
