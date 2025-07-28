import React from 'react'
import { useSearchParams } from 'react-router'

export default function NoteList() {
  const [searchParams]=useSearchParams()
  const category=searchParams.get('category')
  return (
    <div>
        <h1>{category}</h1>
    </div>
  )
}
