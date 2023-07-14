import { useParams } from "react-router-dom";
import { useSingleBookQuery } from "../../redux/features/book/bookApi";

const BookDetails = () => {
  const { id } = useParams();

  const { data: book, isLoading, error } = useSingleBookQuery(id);
  const bookData = book?.data[0];
  return (
    <div>
      <div className="hero px-10  min-h-screen bg-base-200">
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

            {/* <Link>
              <button
                onClick={handlebookEnrolled}
                className="btn btn-outline btn-sm  "
              >
                Enroll Now
              </button>
            </Link>
            <Link>
              <button
                onClick={handlebookAddToCart}
                className="btn btn-outline btn-secondary btn-sm mx-2  "
              >
                Add to Cart
              </button>
            </Link> */}

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
