import Head from "next/head";
import Form from "../../components/form";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Patrick Keenan</title>
      </Head>

      <main>
        <h2>Listings</h2>
        <Form />
      </main>
    </div>
  );
}
