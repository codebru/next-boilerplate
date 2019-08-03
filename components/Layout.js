import Header from './Header';
import Footer from './Footer';

/* This will allow for a global style later */

function Layout(props){
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {props.children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
