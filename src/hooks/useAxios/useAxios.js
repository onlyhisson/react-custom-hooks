import { useState, useEffect } from "react";
import defaultAxios from "axios";

const useAxios = (option, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  if (!option.url) {
    setState({
      ...state,
      loading: false,
      error: { message: "url is null" },
    });
  }

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiosInstance(option)
      .then((response) => {
        setState({
          ...state,
          loading: false,
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        setState({
          ...state,
          loading: false,
          error: { message: "axios error" },
        });
      });
  }, [trigger]);

  return { ...state, refetch };
};

export default useAxios;
