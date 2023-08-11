import './App.scss';
import Header from './Components/Header';
// import About from './Components/About';
// import Catalogue from './Components/Catalogue';
// import Pillows from './Components/Pillows';
// import Blog from './Components/Blog';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="wrapper ">
      < Header />
      <main className='flex-auto'>

        <div className="content lg:mt-36 mt-[5.3125rem] relative  z-10">
          <div className="container m-0">
            <div className="lg:flex lg:justify-between   ">
              <div className="flex  flex-col lg:gap-12 gap-4 flex-[0_1_365px]">
                <h1 className='header__title  text-[3rem] text-[#E4E5EA]'>Зарабатывайте больше <span>c WELBEX</span></h1>
                <div className="text-[18px] lg:text-lg text-[#E4E5EA] ">Развиваем и контролируем продажи за вас</div>
              </div>
              <div className="flex flex-col flex-[0_1_391px] mt-[2.8125rem]">
                <div className="about__title mb-10">Вместе c <span>бесплатной консультацией</span> мы дарим:</div>
                <div className="lg:inline-grid grid-cols-2 gap-4 hidden">
                  <div className="flex flex-col gap-y-2">
                    <div className="text-[#E4E5EA] text-lg font-medium">Виджеты</div>
                    <div className="text-base text-[#E4E5EA] font-normal">30 готовых решений</div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div className="text-[#E4E5EA] text-lg font-medium">Dashboard</div>
                    <div className="text-base text-[#E4E5EA] font-normal">с показателями вашего бизнеса</div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div className="text-[#E4E5EA] text-lg font-medium">Skype Аудит</div>
                    <div className="text-base text-[#E4E5EA] font-normal">отдела продаж и CRM системы</div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div className="text-[#E4E5EA] text-lg font-medium">35 дней</div>
                    <div className="text-base text-[#E4E5EA] font-normal">использования CRM</div>
                  </div>
                </div>
                <div className="lg:hidden inline-grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-x-[.3125rem]">
                    <div className="w-[.625rem] h-[.0625rem] line"></div>
                    <div className="text-[.8125rem] text-[#E4E5EA] uppercase font-normal">Skype аудит</div>
                  </div>
                  <div className="flex items-center gap-x-[.3125rem]">
                    <div className="w-[.625rem] h-[.0625rem] line"></div>
                    <div className="text-[.8125rem] text-[#E4E5EA] uppercase font-normal">30 виджетов</div>
                  </div>
                  <div className="flex items-center gap-x-[.3125rem]">
                    <div className="w-[.625rem] h-[.0625rem] line"></div>
                    <div className="text-[.8125rem] text-[#E4E5EA] uppercase font-normal">Dashboard</div>
                  </div>
                  <div className="flex items-center gap-x-[.3125rem]">
                    <div className="w-[.625rem] h-[.0625rem] line"></div>
                    <div className="text-[.8125rem] text-[#E4E5EA] uppercase font-normal">Месяц аmoCRM</div>
                  </div>
                </div>
                <a href="s" className='hidden mt-[3.8125rem] lg:flex justify-center items-center w-[16.375rem] h-[3.8125rem] bg-[#4077F3] text-[#E4E5EA] text-base font-medium'>Получить консультацию</a>
              </div>
            </div>
          </div>
        </ div>
        {/* < About />
        <  Catalogue />
        <  Pillows />
        <  Blog /> */}


      </main>
      < Footer />
    </div >
  );
}

export default App;
