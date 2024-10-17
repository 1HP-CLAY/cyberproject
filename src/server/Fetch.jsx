import React, { useEffect, useState } from "react";

function Fetch(url) {
  const [cate, setCate] = useState();
  const [arr, setArr] = useState();
  const [pro, setPro] = useState();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setCate(json));
  });
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setArr(json));
  });
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setPro(json));
  });
  return { cate, arr, pro };
}

export default Fetch;
