import BookCard from "../../components/BookCard";
import { useGetBooksQuery } from "../../redux/features/book/bookApi";
import { IBook } from "../../types/bookTypes";

const BookPage = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  const booksData = data?.data?.data;



  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div className="flex items-center space-x-2 mt-3"></div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">Price Range</h1>
          <div className="max-w-xl"></div>
          <div>From 0$ To priceRange$</div>
        </div>
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {booksData?.map((book: IBook) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookPage;
