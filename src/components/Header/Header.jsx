import styles from "./Header.module.css"

function Header(){
    return (
      <header className={`${styles.header}`}>
        <img className="header-image" src="/images/image1.png" alt="image-1" />
        <div className="navigation">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Content</li>
          </ul>
        </div>
      </header>
    );
}

export default Header;