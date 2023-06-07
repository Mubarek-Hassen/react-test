import { useEffect, useState } from 'react'
import axios from 'axios'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  useEffect(()=>{
    setLoading(true)
    try {
      const fetcher = async()=>{
        const res = await axios.get(url);
        setData(res.data)
      }
      fetcher()
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [url])
  return { data, loading, error}
}

export default useFetch