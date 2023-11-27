"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function CreateForm() {
  const [state, setState] = useState({
    title: "",
    img: "",
    year: "",
    author: "",
    isLoading: false,
  });

  //   const router = useRouter();

  const { title, img, year, author, isLoading } = state;

  const router = useRouter();

  const handleSubmit = async () => {
    // e.preventDefault();
    setState({ ...state, isLoading: true });

    const Anime = {
      title,
      img,
      year,
      author,
    };

    const res = await fetch("http://localhost:3002/animeData", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(Anime),
    });

    if (res.status === 201) {
      router.push("/");
    }
  };

  return (
    <form
      action={handleSubmit}
      className="h-full w-full flex flex-col items-center justify-center bg-gray-200 gap-y-3"
    >
      <label>Add Anime Title</label>
      <input
        type="title"
        value={title}
        onChange={(e) => setState({ ...state, title: e.target.value })}
      />
      <label>Add Anime Author</label>
      <input
        type="author"
        value={author}
        onChange={(e) => setState({ ...state, author: e.target.value })}
      />
      <label>Add Anime Link Image</label>
      <input
        type="img"
        value={img}
        onChange={(e) => setState({ ...state, img: e.target.value })}
      />
      <label>Add Anime Year</label>
      <input
        type="year"
        value={year}
        onChange={(e) => setState({ ...state, year: e.target.value })}
      />

      <Button
        variant="contained"
        className="bg-blue-600"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Loading" : "Add Anime"}
      </Button>
    </form>
  );
}
