import { EventsIdPage } from "@/views/events";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: Readonly<{
  params: Promise<{ id: string }>;
}>) {
  const { id } = await params;
  const idNumber = parseInt(id);
  if (isNaN(idNumber)) notFound();

  return <EventsIdPage id={idNumber} />;
}
