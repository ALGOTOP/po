"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Books.module.css";

type Book = {
  title: string;
  image?: string;
};

const books: Book[] = [
  {
    title: "WE ARE AS GODS",
    image: "/books/we-are-as-gods.jpg",
  },
  {
    title: "PERFORMANCE NEUROSCIENCE",
    image: "/books/performance-neuroscience.jpg",
  },
  {
    title: "GNAR COUNTRY",
    image: "/books/gnar-country.jpg",
  },
  {
    title: "THE DEVIL'S DICTIONARY",
    image: "/books/the-devils-dictionary.jpg",
  },

  // Placeholder books.
  // Replace these titles/images later with the remaining books.
  {
    title: "BOOK FIVE",
  },
  {
    title: "BOOK SIX",
  },
  {
    title: "BOOK SEVEN",
  },
  {
    title: "BOOK EIGHT",
  },
  {
    title: "BOOK NINE",
  },
  {
    title: "BOOK TEN",
  },
  {
    title: "BOOK ELEVEN",
  },
  {
    title: "BOOK TWELVE",
  },
  {
    title: "BOOK THIRTEEN",
  },
  {
    title: "BOOK FOURTEEN",
  },
];

function BookCover({
  book,
  index,
}: {
  book: Book;
  index: number;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  const showPlaceholder = !book.image || imageFailed;

  return (
    <div className={styles.coverFrame}>
      {!showPlaceholder && book.image ? (
        <div className={styles.coverWrap}>
          <Image
            src={book.image}
            alt={book.title}
            fill
            priority={index < 4}
            sizes="443px"
            className={styles.cover}
            onError={() => setImageFailed(true)}
          />
        </div>
      ) : (
        <div className={styles.placeholderCover}>
          <span className={styles.placeholderNumber}>
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className={styles.placeholderTitle}>
            {book.title}
          </span>

          <span className={styles.placeholderLabel}>
            COVER IMAGE
          </span>
        </div>
      )}
    </div>
  );
}

export default function Books() {
  return (
    <section className={styles.section} aria-label="Books">
      {/* =========================================
          SECTION HEADER
      ========================================= */}

      <div className={styles.header}>
        <h2 className={styles.title}>BOOKS</h2>

        <button
          type="button"
          className={styles.viewAll}
          aria-label="View all books"
        >
          <span className={styles.viewAllText}>VIEW ALL</span>

          <span className={styles.arrowButton}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* =========================================
          BOOK RAIL
      ========================================= */}

      <div className={styles.railViewport}>
        <div className={styles.bookRail}>
          {books.map((book, index) => (
            <article
              className={styles.bookItem}
              key={`${book.title}-${index}`}
            >
              <BookCover book={book} index={index} />

              <h3 className={styles.bookTitle}>
                {book.title}
              </h3>
            </article>
          ))}
        </div>
      </div>

      {/* =========================================
          PAGINATION
      ========================================= */}

      <div className={styles.pagination}>
        {books.map((book, index) => (
          <button
            key={`${book.title}-dot-${index}`}
            type="button"
            className={`${styles.dot} ${
              index === 0 ? styles.activeDot : ""
            }`}
            aria-label={`Book ${index + 1}: ${book.title}`}
          />
        ))}
      </div>
    </section>
  );
}
