import AnnouncementSection from '../AnnouncementSection ';
import Banner from '../Banner';
import Faq from '../Faq';
import OurTeams from '../OurTeams';
import SalesPromotion from '../SalesPromotion';
import Services from '../Services';
import Testimonials from '../Testmonials';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <SalesPromotion></SalesPromotion>
      <OurTeams></OurTeams>
      <AnnouncementSection></AnnouncementSection>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
