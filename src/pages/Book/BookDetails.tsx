import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../../redux/features/book/bookApi";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../redux/hook";
import { IBook } from "../../types/bookTypes";
import Footer from "../shared/Footer";




const BookDetails = () => {
  const dispatch = useAppDispatch();
  const handleAddBook = (book: IBook) => {
    dispatch(addToCart(book));
    toast.success("Product Added to Cart Successfully!");
  };

  const { id } = useParams();

  const { data: book } = useSingleBookQuery(id);
  const bookData = book?.data[0];




  return (
    <div>
      <div className="hero px-10 py-24  min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={bookData?.bookImage}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <p className="text-xs font-bold">{id}</p>
            <h1 className="text-xl text-cyan-400 font-bold">
              {bookData?.title}
            </h1>

            <p className=" text-md text-teal-500 font-semibold ">
              Written By : {bookData?.author}
            </p>
            <p className=" text-md text-red-400 font-semibold ">
              Genre : {bookData?.genre}
            </p>

            <p className=" text-md font-semibold ">
              Description :{" "}
              <span className="text-sm text-cyan-800">
                {bookData?.bookDescription}
              </span>
            </p>

            <p className=" text-md font-semibold ">
              Publication Date : {bookData?.publicationDate}
            </p>

            <p className=" text-md font-semibold ">
              Rating : {bookData?.rating}
            </p>
            <p className=" text-md font-semibold ">
              Price : ${bookData?.price}
            </p>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <button
         
              className="btn btn-outline btn-sm  "
            >
              Buy Now
            </button>

            <button
              onClick={() => handleAddBook(bookData)}
              className="btn btn-outline btn-primary btn-sm mx-2  "
            >
              Add to Cart
            </button>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookDetails;
