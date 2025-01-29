import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="top-header-wrapper">
          <ul>
            <li>
              <i className="fas fa-paper-plane me-2"></i>
              <Link href="mailto:info@example.com" className="link">
                info@roopalthecoach
              </Link>
            </li>
            <li>
              <i className="fas fa-map-marker-alt me-2"></i>
              123 Anywhere St., Any City, ST 12345

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
