import CapitalList from './components/Capital/CapitalList';
import EventList from './components/Events/EventList';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import InsightList from './components/Insight/InsightList';
import PodcastList from './components/Podcast/PodcastList';
import './global-styles/app.scss';
function App() {
  return (
    <div className="app__wrapper">
      <Header></Header>
      <Hero></Hero>
      <EventList></EventList>
      <CapitalList></CapitalList>
      <InsightList></InsightList>
      <PodcastList></PodcastList>
    </div>
  );
}

export default App;
