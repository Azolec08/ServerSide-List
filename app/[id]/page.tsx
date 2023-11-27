import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { notFound } from "next/navigation";

async function myData(id: any) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await fetch("http://localhost:3002/animeData/" + id, {
    next: {
      revalidate: 0,
    },
  });

  if (!data.ok) {
    notFound();
  }

  return data.json();
}

export default async function page({ params }: any) {
  const allData = await myData(params.id);

  return (
    <main className="h-screen w-full grid place-content-center   ">
      <div className="w-64 m-3">
        <img src={allData.img} alt="" className="w-full h-36" />
        <CardContent>
          <Typography className="text-md" gutterBottom component="div">
            {allData.title}
          </Typography>
          <Typography className="text-md" gutterBottom component="div">
            {allData.text}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {allData.year}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href="/">
            <Button size="small">Anime Page</Button>
          </Link>
          <Button size="small">Learn More</Button>
        </CardActions>
      </div>
    </main>
  );
}
