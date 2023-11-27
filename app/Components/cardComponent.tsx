"use client";

import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/navigation";

type listType = {
  id: number;
  img: string;
  title: string;
  year: number;
  text: string;
  song: any;
  trailer: string;
  info: string;
  genre: string;
  video: string;
};

export default function MediaCard({
  id,
  title,
  year,
  text,
  img,
  video,
  song,
}: listType) {
  const router = useRouter();

  const handleDelete = async (animeId: any) => {
    const res = await fetch(`http://localhost:3002/animeData/${animeId}`, {
      method: "delete",
    });

    if (res.status === 200) {
      router.push("./");
    }
  };
  return (
    <div className="w-64 m-3">
      <img src={img} alt="" className="w-full h-36" />
      <CardContent>
        <Typography className="text-md" gutterBottom component="div">
          {title}
        </Typography>
        <Typography className="text-md" gutterBottom component="div">
          {text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {year}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/${id}`}>
          <Button size="small">Music and Trailer</Button>
        </Link>

        <Button onClick={() => handleDelete(id)} size="small">
          Delete Item
        </Button>
      </CardActions>
    </div>
  );
}
