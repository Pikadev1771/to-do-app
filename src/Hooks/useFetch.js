import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data); // 응답으로 들어오는 데이터를 data에 넣어줌
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

  // useEffect(() => {
  //   async function request() {
  //     const response = await axios.get(url);
  //     const { data } = response;
  //     setIsLoading(false);
  //     setData(data);
  //     setError(null);
  //   }
  //   request();
  // }, []);

  // useEffect(() => {
  //   async function request() {
  //     const response = await axios.get('http://localhost:3001/todos');
  //     const { data } = response;
  //     setTodoData(data);
  //   }
  //   request();
  // }, []);

  return { data, isLoading, error };
};

export default useFetch;
