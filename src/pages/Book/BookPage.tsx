import BookCard from "../../components/BookCard";
import { useGetBooksQuery } from "../../redux/features/book/bookApi";
import { IBook } from "../../types/bookTypes";
import Footer from "../shared/Footer";
import NavBar from "../shared/Navbar";

const BookPage = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  const booksData = data?.data?.data;

  return (
    <>

  <div className="flex mt-2  ">
    <div className="w-1/4 overflow-y-auto"> {/* 75% width */}
      <div className="bg-red-500">
        <h1 className="text-4xl">hellghghfjfvghjjyyjghjhgjho</h1>
      </div>
    </div>
    <div className="w-3/4 flex justify-end">
      <div className="flex justify-end mx-auto px-4">
        <div className="flex justify-end px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {booksData?.map((book: IBook) => (
              <BookCard book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>



      <Footer />
    </>
  );
};

export default BookPage;
