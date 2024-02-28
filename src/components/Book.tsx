import Image from "next/image";

export default function Book({ book }: { book: Book }) {
    return (
        <figure>
            <Image
                src={`http://127.0.0.1:8080${book.imageUrl}`}
                alt={`${book.title.toLowerCase().replace(/ /g, '-')}-${book.author.toLowerCase().replace(/ /g, '-')}`}
                width={220}
                height={310}
                className="aspect-[220/310]" />
            <figcaption>
                <h4 className="text-lg font-semibold">{book.title}</h4>
                <h5 className="">{book.author}</h5>
            </figcaption>
        </figure>
    )
}
