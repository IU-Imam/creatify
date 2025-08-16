import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <p>Please check the URL or return to the homepage.</p>
      <Link href="/">Go to Homepage</Link>
    </div>
  );
};

export default NotFound;
