import React, { useState } from "react";
import Fuse from "fuse.js";
import { useGetBooksQuery } from "../../redux/features/book/bookApi";
import { IBook } from "../../types/bookTypes";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setPriceRange } from "../../redux/features/book/bookSlice";
import BookFilter from "./BookFilter";
import BookCard from "../../components/BookCard";
import Footer from "../shared/Footer";


const BookPage = () => {
  const { data, isLoading, error } = useGetBooksQuery(undefined);
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [value, setValue] = useState(50);
  const dispatch = useAppDispatch();
  const { priceRange, status } = useAppSelector((state) => state.book);
  const booksData = data?.data?.data;
  let filteredData = booksData;

 
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    handleSlider([newValue]);
  };
  
 
  const handleSlider = (value: number[]) => {
    dispatch(setPriceRange(value[0]));
  };
 
  if (status) {
    filteredData = filteredData.filter(
      (item: { status: boolean; price: number }) =>
        item.status === true && item.price < priceRange
    );
  } else if (priceRange > 0) {
    filteredData = filteredData?.filter(
      (item: { price: number }) => item.price < priceRange
    );
  }

  
  
  const handleGenreFilter = () => {
    let updatedData = booksData;
  
    if (selectedGenre !== "") {
      updatedData = updatedData.filter((book: IBook) =>
        book.genre.toLowerCase().includes(selectedGenre.toLowerCase())
      );
    }
  
    if (selectedYear !== "") {
      const year = (selectedYear);
      updatedData = updatedData.filter((book: IBook) => book.year === year);
    }
  
    filteredData = updatedData;
  };
  
  handleGenreFilter();
  
  if (filteredData) {
    const options: Fuse.IFuseOptions<IBook> = {
      keys: ["title", "author", "genre", "year"],
      threshold: 0.4,
    };
  
    const fuse = new Fuse(filteredData, options);
    const searchResults = fuse.search(searchText);
    filteredData = searchResults.length > 0 ? searchResults.map((result) => result.item) : filteredData;
  
   

    if (status) {
      filteredData = filteredData.filter(
        (item: { status: boolean; price: number }) =>
          item.status === true && item.price < priceRange
      );
    } else if (priceRange > 0) {
      filteredData = filteredData.filter(
        (item: { price: number }) => item.price < priceRange
      );
    }
  }
  

  return (
    <>
      <div className="flex  py-24  ">
        <div className="w-1/4 overflow-y-auto">
          {" "}
          <div className="">
            <BookFilter
            value={value}
              handleRangeChange={handleRangeChange}
              priceRange={priceRange}
              searchText={searchText}
              selectedGenre={selectedGenre}
              selectedYear={selectedYear}
              setSearchText={setSearchText}
              setSelectedGenre={setSelectedGenre}
              setSelectedYear={setSelectedYear}
            />
          </div>

    
        </div>
        <div className="w-3/4 flex justify-end">
          <div className="flex justify-end mx-auto px-4">
            <div className="flex justify-end px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {filteredData?.map((book: IBook) => (
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
