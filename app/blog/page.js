"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [apiData, setApiData] = useState([]);

  const fetchApi = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/posts");
      console.log(res.data.posts);
      setApiData(res.data.posts);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul className="grid grid-cols-3 gap-4">
        {apiData.map((post) => (
          <li className="bg-[skyblue] min-h-[30vh] text-white" key={post.id}>
            {post.title}
            <Link href={`/blog/${post.id}`}>
              <button className="bg-[black] cursor-pointer">View</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
