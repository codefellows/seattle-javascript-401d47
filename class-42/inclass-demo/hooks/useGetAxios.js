import { useEffect, useState } from "react";
import axios from 'axios';

const useGetAxios = (apiUrl) => {
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});

  const getNext = async(nextUrl) => {
    try{
      let res = await axios.get(nextUrl);
      setResponse(res.data);
    } catch (e){
      setError(e);
    }
  }

  useEffect(() => {
    (async () => {
      try{
        let res = await axios.get(apiUrl);
        setResponse(res.data);
      } catch (e){
        setError(e);
      }

    })();
  }, []);

  return {...response, error, getNext}
};

export default useGetAxios;
