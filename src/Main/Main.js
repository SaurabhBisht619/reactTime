import React, { useState } from "react";
import ViewList from "../Component/Feature/ViewList";
import Carousel from "../Component/Feature/Carousel";
import Header from "../Component/Common/Header/header";
import From from "../Component/Common/Header/header";

function Main() {
  const [form, setForm] = useState([
    {
      keyName: "1",
      url: "www.some.com",
    },
  ]);

  const submitData = (data) => {
    setForm((prev) => [...prev, data]);
  };

  const handleDelete = (idx) => {};

  return (
    <div>
      <Header />
      <Carousel imageData={form} />
      <ViewList data={form} setData={setForm} />
      <From data={form} setData={setForm} />
    </div>
  );
}

export default Main;
