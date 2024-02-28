import Book from "@/components/Book";
import Image from "next/image";

async function getBooks() {

  try {
    const res = await fetch('http://localhost:8080/api/books')
    if (!res.ok) throw new Error(`Error de red: ${res.status}`)
    return await res.json()

  } catch (error) {
    console.error('Error al recuperar datos:', error);
  }

}

export default async function Home() {

  const books = await getBooks()

  return (
    <main className="container mx-auto my-10">
      <h1 className="text-5xl font-bold w-fit">Books</h1>
      <section className="">
        {
          books ?
            <ul className="flex gap-4 my-4">
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
