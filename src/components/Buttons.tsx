'use client'

import axios from "axios"
import { useRouter } from "next/navigation"

export default function Buttons({ bookId }: { bookId: number }) {

    const router = useRouter()

    async function handleDelete() {
        if (confirm("Are you sure you want to delete this book?")) {
            const res = await axios.delete('http://localhost:8080/api/books/' + bookId)
            if (res.status === 200 || 204) {
                await axios.get('/api/revalidate?tag=books')
                router.push("/books")
                router.refresh()
            }
        }
    }

    return (
        <div className="flex gap-4">
            <button className="hover:underline" onClick={handleDelete}>
                Delete
            </button>
            <button className="hover:underline" >
                Edit
            </button>
        </div>
    )
}
