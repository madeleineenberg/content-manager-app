import Navbar from 'components/Navbar';
import ResorceHighlight from 'components/ResorceHighlight';
import Newsletter from 'components/Newsletter';
import ResourceList from 'components/ResourceList';
import Footer from 'components/Footer';
import Layout from 'components/Layout';



export default function Home({ resources }) {

  return (
    <Layout>
      <ResorceHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResourceList resources={resources.slice(2)} />
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  // is called every time you will visit the page
  // function is executed on the server
  // data are always fresh

  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();
 
  return {
    props: {
      resources: data,
    },
  };
}


