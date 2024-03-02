function Navigation() {
  return (
    <nav className="flex  justify-between items-center p-4 w-full container mx-auto h-10vh  ">
      <div className="mx-4">
        <img src="../images/brand_logo.png" alt="" />
      </div>
      <ul className="flex gap-6 font-bold cursor-pointer ">
        <li>
          <a href="#">MENU</a>
        </li>
        <li>
          <a href="#">LOCATION</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
      <button className="bg-red-600 text-white mx-4 px-2 rounded-sm py-[0.5px] h-7">
        Login
      </button>
    </nav>
  );
}
export default Navigation;
