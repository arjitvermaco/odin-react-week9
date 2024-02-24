import "../header.css";
function Header() {
  return (
    <header className="main-header">
      <img src="logo.svg" alt="Nodejs Logo" />

      <nav>
        <ul className="main-nav">
          <li>
            <a className="" href="/en/learn">
              Learn
            </a>
          </li>
          <li>
            <a className="" href="/en/about">
              About
            </a>
          </li>
          <li>
            <a className="" href="/en/download">
              Download
            </a>
          </li>
          <li>
            <a className="" href="/en/guides">
              Guides
            </a>
          </li>
          <li>
            <a className="" href="/en/blog">
              Blog
            </a>
          </li>
          <li>
            <a href="https://nodejs.org/docs/latest/api/" className="">
              Docs
            </a>
          </li>
          <li>
            <a href="https://openjsf.org/certification" class="">
              Certification
            </a>
          </li>
        </ul>
      </nav>

      <div className="right-icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
