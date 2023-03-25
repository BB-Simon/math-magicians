import { useEffect, useState } from 'react';

const apiKey = 'RZq11UUitBvJnfp97sJacg==deXkuPUuPtcMYcEQ';
const category = 'funny';
const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

const Quote = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, {
          headers: {
            'X-Api-Key': apiKey,
          },
        });
        setQuotes(await res.json());
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="quote-container">
      {loading ? <p>Quote is loading...!</p> : null}
      {error ? <p>Error oqurred while fetching quote, please reload the page agin:(</p> : null}
      {!loading && !error ? (
        <div className="quotes-wrapper">
          <h1>Quotes</h1>
          <p>{`${quotes[0]?.quote} __ by ${quotes[0]?.author}`}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Quote;
