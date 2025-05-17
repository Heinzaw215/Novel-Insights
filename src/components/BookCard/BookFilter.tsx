import { Book } from '@/schemas/book';
import React from 'react'

type BookFilterProps = {
  books: Book[];
}

const BookFilter: React.FC<BookFilterProps> = ({ books }) => {
  return (
    <div>BookFilter</div>
  )
}

export default BookFilter