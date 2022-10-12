import './App.css';
import './components/Scroll.js'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import './index.css';

function App() {
  return (
    <div className="App">  
      <div className="header fixed flex flex-row w-full justify-between pr-8 pl-8 pt-5"> 
        <div className="menu flex gap-3 items-center">
          <img className="w-[200px]" src="https://netflix-clone-ebon-nu.vercel.app/f4070143e1f521da82a119eb78b434d0.png" alt=""></img>
          <div className="menu flex text-sm gap-4 text-white">
              <div className="">Home</div>
              <div className="">TV Shows</div>
              <div className="">Movies</div>
              <div className="">Recently Added</div>
              <div className="">My List</div>
          </div>
        </div>
        <div className="flex text-sm text-white items-center gap-4">
            <div>KIDS</div>
            <div>DVD</div>
            <div className="w-[40px] h-[40px] bg-white rounded"></div>
        </div>
      </div>
      <div className="hero-banner h-[115vh]">
      <iframe className="background w-full" allow="autoplay; fullscreen" allowfullscreen="true" src="https://player.vimeo.com/video/384025132?h=060a4e3e2a&title=0&byline=0&portrait=0&playsinline=0&muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"></iframe>
        <div className="film-info z-1 h-[100vh] w-4/12 flex flex-col justify-center text-white pl-8">      
          <div className="text-[50px] font-bold py-[50px]">Narcos</div>
          <p>A gritty chronicle of the war against Colombia's infamously violent and powerful drug cartels.</p>
          <div className="flex py-10 gap-2">
            <button className="bg-white rounded font-bold text-xl border-box text-black px-[45px] py-1">Play</button>
            <button className="bg-gray-500/50 rounded font-bold text-xl border-box text-white px-[45px] py-1">My List</button>
          </div>
        </div>
      </div>

      <div className="b netflix-original relative pr-8 pl-8 h-60 flex items-center">
        <div className="text-2xl text-white font-bold">Netflix original</div>
        <div className="film-slide">
          
        </div>
      </div>
    </div>
  );
}

export default App;
