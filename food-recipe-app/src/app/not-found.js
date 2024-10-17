import Link from 'next/link';

export default function GlobalError() {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <Link href={'/'}>Back to Home Page</Link>
    </div>
  );
}
