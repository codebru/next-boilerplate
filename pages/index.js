import Layout from '../components/Layout'
import Header from '../components/Header';
import BlogList from '../components/Blog/List';

function Index() {
  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <BlogList />
      </Layout>
    </div>
  );
}

export default Index;
