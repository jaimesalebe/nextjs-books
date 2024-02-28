'use client'
import { useState } from "react"

export default function BookForm() {

    const [book, setBook] = useState({
        title: "",
        author: ""
    })

    function handleChange(e: any) {
        setBook({
            ...book,
            [e.target.name]: [e.target.value]
        })
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        console.log(book)
    }

    return (

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md px-8 py-8 mb-4 w-full max-w-96">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-4"
                type="text"
                placeholder="title"
                onChange={handleChange}
                id="title"
                name="title" />

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">Author</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mb-4"
                type="text"
                placeholder="author"
                onChange={handleChange}
                id="author"
                name="author" />

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save Book
            </button>
        </form>

    )
}
