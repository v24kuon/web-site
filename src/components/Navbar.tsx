import navbarLogo from '../images/navbar_logo.webp';

const Navbar = () => {
  const onClickHandleA = () => {
    window.location.replace('http://www.marufuku-kyoto.jp/contact');
  };

  return (
    <header className="px-1 sm:px-5 pt-3 pb-2 sticky top-0 bg-white z-10">
      <div className="max-w-screen-2xl mx-auto flex items-center gap-5 mb-1 sm:mb-0">
        <div className="flex-auto">
          <a href="https://marufukusansyou.com/">
            <img src={navbarLogo} alt="ヘッダーロゴ" />
          </a>
        </div>
        <button
          type="button"
          className="text-white bg-[#d46311] hover:bg-[#FF9119]/80 focus:ring-4 focus:ring-[#FF9119]/50 font-medium rounded-lg px-1 py-2.5 text-center items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 whitespace-nowrap sm:px-5"
          onClick={onClickHandleA}
        >
          お問い合わせ
        </button>
      </div>
      <h1 className="max-w-screen-2xl mx-auto text-gray-600 text-center sm:text-left text-xs sm:text-base ">
        まるふく産商株式会社 | 住宅販売・リノベーション・建築・不動産
      </h1>
    </header>
  );
};

export default Navbar;
