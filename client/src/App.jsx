import "./output.css";
import Navbar from "./layout/Navbar";
import Hero from "./components/Hero";
import Quotes from "./components/Quotes";
import OurStory from "./components/OurStory";
import Gallery from "./components/Gallery";
import EventSechedule from "./components/EventSechedule";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
export default function App() {
  return (
    <div className="bg-secondary">
      <Navbar />
      <Hero />
      <Quotes />
      <OurStory />
      <Gallery />
      <EventSechedule />
      <CommentForm />
      <CommentList />
    </div>
  );
}
