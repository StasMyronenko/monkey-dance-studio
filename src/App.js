import Header from './templates/Header/Header'
import Menu from './templates/Menu/Menu'
import OurStudio from './templates/OurStudio/OurStudio'
import OurTeachers from './templates/OurTeachers/OurTeachers'
import Timetable from './templates/Timetable/Timetable'
import Footer from './templates/Footer/Footer'

function App() {
  return (
      <div className="mainRoot">
        <Header />
        <Menu />
        <OurStudio />
        <OurTeachers />
        <Timetable />
        <Footer />
      </div>

  );
}

export default App;
