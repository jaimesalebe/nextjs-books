import Image from "next/image";
import Link from "next/link";

export default function Book({ book }: { book: Book }) {
    return (
        <Link href={`/books/${book.id}`}>
            <figure className="group">
                <Image
                    src={`http://127.0.0.1:8080${book.imageUrl}`}
                    alt={`${book.title.toLowerCase().replace(/ /g, '-')}-${book.author.toLowerCase().replace(/ /g, '-')}`}
                    width={220}
                    height={310}
                    className="aspect-[220/310]" />
                <figcaption>
                    <h4 className="text-lg font-semibold group-hover:underline">{book.title}</h4>
                    <h5 className="group-hover:underline">{book.author}</h5>
                </figcaption>
            </figure>
        </Link>
    )
}
