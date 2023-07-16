/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AiFillDelete } from "react-icons/ai";

import { toast } from "react-hot-toast";
import defaultBook from "../../assets/defaultbook.jpg";

import { useEffect } from "react";
import { useGetWishListQuery } from "../../redux/features/wishlist/wishListApi";
import {
  markAsFinished,
  markAsUnfinished,
  removeFromwish,
} from "../../redux/features/wishlist/wishSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/bookTypes";

const WishList = () => {
  const email = localStorage.getItem("email");
  const { data, isLoading } = useGetWishListQuery(email, {
    refetchOnMountOrArgChange: true,
  });

  const actualData = data?.data[0]?.wishList;
  const { book } = useAppSelector((state) => state.wishlist);

  useEffect(() => {
    if (!isLoading && actualData?.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify({ book: actualData }));
    }
  }, [data, isLoading, actualData]);

  const dispatch = useAppDispatch();
  const handleRemoveBookFromWish = (book: IBook) => {
    dispatch(removeFromwish(book));
    toast.success("Book is removed from the Wishlist!!");
  };

  const handleMarkAsFinished = (book: IBook) => {
    dispatch(markAsFinished(book));
    toast.success("Book marked as Finished!!");
  };

  const handleMarkAsUnfinished = (book: IBook) => {
    dispatch(markAsUnfinished(book));

    toast.success("Book marked as UnFinished!!");
  };

  return (
    <div className="p-2 shadow-xl py-32">
      <h2 className="text-red-500 mb-5 text-xl flex justify-center font-bold">
        Total Wishlist Books: {book?.length}
      </h2>
      <hr className="h-px my-8  border-0 dark:bg-gray-700"></hr>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {book?.map((book) => (
            <div
              key={book._id}
              className="card  flex items-center  card-compact w-64 bg-base-300 p-5 shadow-xl"
            >
              <div className="">
                <img
                  src={book?.bookImage || defaultBook}
                  alt=""
                  className="h-32"
                />
              </div>
              <p className="text-cyan-600 font-bold ">Name: {book?.title}</p>
              <p className="text-blue-600 font-bold ">Genre: {book?.genre}</p>
              <p className=" font-bold ">Author: {book?.author}</p>

              <div className="flex justify-between items-center mt-4">
                {book.finishedReading ? (
                  <button
                    onClick={() => handleMarkAsUnfinished(book)}
                    className="text-red-500 btn btn-sm p-2"
                  >
                    Continue Reading
                  </button>
                ) : (
                  <button
                    onClick={() => handleMarkAsFinished(book)}
                    className="text-green-500 btn btn-sm "
                  >
                    Finished Reading
                  </button>
                )}

                <button
                  onClick={() => handleRemoveBookFromWish(book)}
                  className="text-3xl  "
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
