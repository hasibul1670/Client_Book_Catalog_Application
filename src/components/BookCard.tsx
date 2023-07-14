/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hook";
import { IBook } from "../types/bookTypes";

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

  console.log("Hello", book);

  return (
    <div className="card w-64 border-solid border-2 border-sky-500 shadow-xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300">
      <figure className="px-6 pt-2">
        <img src={bookImage} alt="Book" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center py-3">
        <h6 className="text-cyan-400 ">Book Id : {id}</h6>
        <h6 className="font-bold  ">{title}</h6>
        <h6 className="text-cyan-400 ">{publicationDate}</h6>

        <p>$45.95</p>

        <Link to={`/Books/${id}`}>
          <button className="btn  btn-primary  btn-sm">Enroll Now</button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
