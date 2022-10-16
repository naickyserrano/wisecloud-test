import { Navigate } from "react-router-dom";

/**
 *
 * @returns {JSX.Element}
 */

const NotFoundPage = (): JSX.Element => {
  return <Navigate to="/" />;
};

export default NotFoundPage;
