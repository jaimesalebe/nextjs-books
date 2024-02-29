import Buttons from "@/components/Buttons"
import { getBookById } from "@/services/getData"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"

export default async function BooksById({ params }: { params: { id: string } }) {

    const book: Book = await getBookById({ bookId: params.id })

    return (
        <main className="container mx-auto my-10">
            <div className="flex justify-between items-center">
                <h1 className="text-5xl font-bold w-fit">Book #{params.id}</h1>
                <Link className="bg-green-500 hover:bg-green-700 p-3 rounded" href="/books">All Books</Link>
            </div>
            <section className="mt-10 flex flex-col gap-2">
                <h2 className="text-3xl">{book.title}</h2>
                <h3 className="text-2xl">{book.author}</h3>
                <Image
                    src={`http://127.0.0.1:8080${book.imageUrl}`}
                    alt={`${book.title.toLowerCase().replace(/ /g, '-')}-${book.author.toLowerCase().replace(/ /g, '-')}`}
                    width={220}
                    height={310}
                    className="aspect-[220/310]" />
                <Buttons bookId={book.id} />
            </section>
        </main>
    )
}
