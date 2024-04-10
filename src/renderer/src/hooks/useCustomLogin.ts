// import { useState } from 'react'
import { doc, setDoc, query, collection, orderBy, startAt, endAt } from 'firebase/firestore'
import { db } from '@renderer/main'

import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useState } from 'react'

export const useCustomLogin = (email: string, password: string): [() => Promise<void>, boolean] => {
  //const [loading, setLoading] = useState(true)

  const [values] = useCollectionData(
    query(
      collection(db, 'users'),
      // Sorting by name
      orderBy('email'),

      // Borders for searching
      startAt(email),
      endAt(`${email}\uf8ff`)
    )
  )

  const [error, setError] = useState(false)

  const login = async (): Promise<void> => {
    if (values?.length != 0) {
      setError(true)
    } else {
      await setDoc(doc(db, 'users', email), {
        email,
        password
      })
    }
  }

  return [login, error]
}
