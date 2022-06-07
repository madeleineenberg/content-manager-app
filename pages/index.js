import Navbar from '../components/Navbar';
import ResorceHighlight from '../components/ResorceHighlight';
import Newsletter from '../components/Newsletter';
import ResourceList from '../components/ResourceList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <ResorceHighlight />
      <Newsletter />
      <ResourceList />
      <Footer />
    </>
  );
}
