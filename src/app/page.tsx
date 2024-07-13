import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Find events around you</h1>
      <p>
        Browse more than <span>10,000</span> events around you{" "}
      </p>

      <form>
        <input
          type="text"
          placeholder="Search event in any city"
          spellCheck="false"
        />
      </form>

      <section>
        <p>Popular: </p>

        <div>
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
