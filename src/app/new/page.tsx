import BookForm from "@/components/BookForm";

export default function NewBook() {


    return (
        <main className="container mx-auto my-10 h-[calc(100vh-6rem)]">
            <h1 className="text-5xl font-bold w-fit text-white">New Book</h1>
            <section className="grid place-items-center h-full w-full">
                <BookForm />
            </section>
        </main>
    )
}
