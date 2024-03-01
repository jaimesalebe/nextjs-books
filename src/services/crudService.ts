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

export async function putBook({ formData, id }: { formData: FormData, id: string }) {
    await axios.put(`http://localhost:8080/api/books/` + id, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export async function postBook({ formData }: { formData: FormData }) {
    await axios.post(`http://localhost:8080/api/books`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export async function deleteBook({ bookId }: { bookId: string }) {
    const res = await axios.delete('http://localhost:8080/api/books/' + bookId)
    return res
}

