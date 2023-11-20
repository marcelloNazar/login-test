"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/register");

  return <section className="page-container">Homepage</section>;
}
