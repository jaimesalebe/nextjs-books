'use client'

import { deleteBook } from "@/services/crudService"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Buttons({ bookId }: { bookId: string }) {

    const router = useRouter()

    async function handleDelete() {
        if (confirm("Are you sure you want to delete this book?")) {
            const res = await deleteBook({ bookId })
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
            <Link href={`/books/edit/${bookId}`} className="hover:underline" >
                Edit
            </Link>
        </div>
    )
}
