import Book from "@/components/Book";
import { getBooks } from "@/services/crudService";
import Link from "next/link";

export default async function Books() {

  const books = await getBooks()

  return (
    <main className="container my-10">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold w-fit">Books</h1>
        <Link className="bg-blue-500 hover:bg-blue-700 p-3 rounded" href="/books/new">Add Book</Link>
      </div>
      <section className="">
        {
          books ?
            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-4 my-10">
              {
                books.map((book: Book) => (
                  <li className="w-fit" key={book.id}>
                    <Book book={book} />
                  </li>
                ))
              }
            </ul>
            : ''
        }
      </section>
    </main>
  )
}
