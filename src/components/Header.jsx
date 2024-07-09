import coverImage from '../assets/cover/cover-image.png';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Josie Zobel</h1>
      <img src={coverImage} alt="swirls of color"></img>
      {props.children}
    </header>
  );
}

export default Header;
