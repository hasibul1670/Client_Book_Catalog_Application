/* eslint-disable no-unused-vars */
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useAppDispatch } from "../redux/hook";
import { IBook } from "../types/bookTypes";
import  defaultBook  from "../assets/defaultbook.jpg";

interface IProps {
  book: IBook;
}

const BookCard = ({ book }: IProps) => {
  const dispatch = useAppDispatch();
  const {
    id,
    title,
    bookDescription,
    bookImage,
    price,
    author,
    genre,
    rating,
    publicationDate,
    year,
  } = book;

  
  const handleAddBook = (book: IBook) => {
    dispatch(addToCart(book));
    toast.success("Product Added to Cart Successfully!");
  };
  return (
    <div className="card w-64  border-solid border-2 border-sky-500 shadow-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
      <figure className="px-10 pt-2">
        <img src={bookImage||defaultBook} alt="Book" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center py-3">
        <h6 className="text-cyan-400 ">Book Id : {id}</h6>
        <h6 className="font-bold  ">{title}</h6>
        <h6 className="text-cyan-700 font-bold ">Written By : {author}</h6>
        <h6 className=" text-blue-400 ">Genre : {genre}</h6>
        <p>${price}</p>{" "}
        <Link to={`/book-details/${id}`}>
          <button className="btn btn-outline btn-primary btn-sm mx-2  ">
            Show Details
          </button>
        </Link>
        <button
          onClick={() => handleAddBook(book)}
          className="btn btn-outline btn-primary btn-sm mx-2  "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
