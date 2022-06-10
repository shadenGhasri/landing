import "./NavStyle.css";

const Nav = () => {
    
  return (
    <div className="nav-box flex items-center justify-between">
      <div className="flex items-center">
        <span class="material-symbols-outlined logo-icon mr-2">group_work</span>
        <section className="logo-text flex items-center">ParaTech</section>
      </div>
      <div className="menu flex items-center">
        <p>Menu</p>
        <div className="container inline-block relative px-4" >
          <div className="bar1 w-7 h-1"></div>
          <div className="bar2 w-7 h-1 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
