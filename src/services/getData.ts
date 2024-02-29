import axios from "axios";

export async function getBooks() {

    try {
        const res = await fetch('http://localhost:8080/api/books', { next: { tags: ['books'] } })
        if (!res.ok) throw new Error(`Error de red: ${res.status}`)
        return await res.json()

    } catch (error) {
        console.error('Error al recuperar datos:', error);
    }

}

export async function getBookById({ bookId }: { bookId: string }) {
    const res = await axios.get('http://localhost:8080/api/books/' + bookId)
    return res.data
}