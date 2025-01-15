import AnnouncementSection from '../AnnouncementSection ';
import Banner from '../Banner';
import Footer from '../Footer';
import Navbar from '../Navbar';
import OurTeams from '../OurTeams';
import Services from '../Services';
import Testimonials from '../Testmonials';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <OurTeams></OurTeams>
      <AnnouncementSection></AnnouncementSection>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
