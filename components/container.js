export default function Container({ children }) {
  return (
  <div className="container">
    <div className="container-inner">
      {children}
    </div>
  </div>
  );
}
