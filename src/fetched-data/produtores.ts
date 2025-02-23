import { useEffect, useState } from 'react';

// Define the type for the API response
interface ApiResponse {
  message: string;
  data?: number[];
}

export default function Produtores() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch data from the API route
    fetch('/api/produtores')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log(response)
        return response.json() as Promise<ApiResponse>;
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return 'Loading...';
  if (error) return error;

  return (
    console.log(data)
)
}