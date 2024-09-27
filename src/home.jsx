import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "Lot8";
  }, []);
  return <HomePage />;
};

export default Home;
