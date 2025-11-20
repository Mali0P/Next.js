import { redirect } from "next/navigation";

export default function page() {
  return <div>{redirect("/home")}</div>;
}
