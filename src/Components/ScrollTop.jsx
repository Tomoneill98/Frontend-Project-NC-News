import { Link } from "react-router-dom";

function ScrollTop() {
     const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
      <Link to="#" onClick={handleScrollToTop}>
          <p className="back-to-top">Back to top</p>
          </Link>
  )
}

export default ScrollTop