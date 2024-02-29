'use client'
import { useRef, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function BookForm() {

    const [book, setBook] = useState({
        title: "",
        author: ""
    })
    const [file, setFile] = useState<File | null>(null)
    const form = useRef<HTMLFormElement | null>(null);
    const router = useRouter()

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setBook({
            ...book,
            [e.target.name]: [e.target.value]
        })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', book.title)
        formData.append('author', book.author)
        file && formData.append('file', file)

        await axios.post(`http://localhost:8080/api/books`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        await axios.get('api/revalidate?tag=books')

        form.current?.reset()
        router.push("/books")
        router.refresh()
    }

    return (

        <form onSubmit={handleSubmit} ref={form} className="bg-white shadow-md rounded-md px-8 py-8 mb-4 w-full max-w-md">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-black"
                type="text"
                placeholder="title"
                onChange={handleChange}
                id="title"
                name="title"
                autoFocus
                required
                pattern="^[a-zA-Z0-9\s]*$"
            />

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">Author</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-black"
                type="text"
                placeholder="author"
                onChange={handleChange}
                id="author"
                name="author"
                required
                pattern="^[a-zA-Z0-9\s]*$" />

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageBook">Image Book</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-black"
                type="file"
                onChange={(e) => {
                    if (e.target.files) setFile(e.target.files[0])
                }}
                id="imageBook"
                required />
            <section className="grid place-items-center aspect-[320/291] text-black">
                {
                    file ? <Image className="aspect-[220/275] mb-4" width={220} height={275} src={URL.createObjectURL(file)} alt="" />
                        : "Elige una imagen"
                }
            </section>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save Book
            </button>
        </form>

    )
}
