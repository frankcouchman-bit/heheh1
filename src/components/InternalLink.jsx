import { Link } from 'react-router-dom';

// A wrapper around react-router Link for internal navigation
export default function InternalLink({ to, children, ...props }) {
  return (
    <Link to={to} {...props} className="hover:underline">
      {children}
    </Link>
  );
}
