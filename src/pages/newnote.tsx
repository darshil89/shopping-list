import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

interface FormData {
  title: String;
  description: String;
}

export default function Home() {
  const [data, setData] = useState<FormData>({
    title: "",
    description: "",
  });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" mx-10 flex min-h-screen flex-col justify-center">
        <Link
          className="indigo-700 inline-block py-4 text-base font-semibold leading-7 text-green-700"
          href="/"
        >
          Go back
        </Link>
        <h1 className="mb-6 text-left text-3xl font-bold tracking-tight text-gray-900">
          Add new notes
        </h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();

            setData({
              title: "",
              description: "",
            });
          }}
        >
          <input
            type="text"
            required
            value={data.title.toString()}
            placeholder="Your title"
            onChange={(event) =>
              setData({ ...data, title: event.target.value })
            }
            className="border-1 mb-2 block w-full rounded-sm border-green-800 bg-neutral-100 px-4 py-2 focus:outline-none"
          />
          <textarea
            // Remove the type attribute
            // type="textarea"
            required
            value={data.description.toString()}
            placeholder="Your description"
            onChange={(event) =>
              setData({ ...data, description: event.target.value })
            }
            className="border-1 mb-2 block w-full rounded-sm border-green-800 bg-neutral-100 px-4 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="block w-full rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-600 hover:bg-green-700 hover:ring-green-700"
          >
            Add a note
          </button>
        </form>
      </main>
    </>
  );
}
