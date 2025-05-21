import './styles/main.scss';
import Header from './components/header/Header.tsx';
// import RecentProjects from './components/recentProjects/RecentProjects.tsx';
import Testimonials from './components/testimonials/Testimonials.tsx';
// import CaseStudies from './components/caseStudies/CaseStudies.tsx';
import Footer from './components/footer/Footer.tsx';

function App() {
    return (
        <div className="app">
          <div className='app_contents'>
            <Header />
            {/* <RecentProjects /> */}
            {/* <CaseStudies /> */}
            <Testimonials />
            <Footer />
          </div>
        </div>
    );
}

export default App;