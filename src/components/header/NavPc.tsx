const linkNavEn = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "about",
  },
  {
    title: "Tours",
    path: "/tours",
  },
  {
    title: "Hotels",
    path: "/hotels",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Login",
    path: "/login",
  },
];

const NavPc = () => {
  return (
    <nav className="lg:block hidden">
      <ul className="flex justify-between items-center gap-6 lg:flex-row flex-col">
        {linkNavEn.map((nav, index) => (
          <li key={index}>
            <a
              href={nav.path}
              className="text-third hover:underline text-[16px] font-semibold hover:text-[#f5b041] transition-all duration-300 ease-in-out"
            >
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavPc;
