const ProtectedRoute = ({ children }) => {

  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <h1>Please Login</h1>;
  }

  return children;
};

export default ProtectedRoute;