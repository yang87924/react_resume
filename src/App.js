//import logo from './logo.svg';
import raspberry from './image/raspberry.png'
import APP_LOGO from './image/100.png'
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="resume w-50">
        <div className='container'>
          <div class="row">
            <div class="col-sm-2 ">
              <img src="https://user-images.githubusercontent.com/102047848/192935932-37edc944-3b7a-4726-a5d3-efd58fc602d3.JPG"  class="img-thumbnail" alt="..." />
            </div>
            <div class="col-sm-10">
              <div class="text-start " >
                <p>洪偉哲</p>
                <p>信箱:4a690103@office.stust.edu.tw</p>
                <p>Github: https://github.com/yang87924</p>
              </div>
            </div>
          </div>
          <div className='container text-start  button_bodrer'>
            <p className='fw-bold fs-3'>簡歷 Summary</p>

            <div className='container'>
              <p>我叫洪偉哲，畢業於南台科技大學資訊管理系，目前在創科資訊股份有限公司培訓，培訓內容也非常廣，因此工作並不只侷限在單一的領域中，培訓時接觸到許多技術，如前後端開發技術，在培訓過程中對軟體工程師這項職業有更進一步的了解</p>
            </div>
          </div>
          <div className='work_experience text-start container'>
            <p className='fw-bold fs-3'>工作經驗 Professional Experience</p>
            <div className='container'>
            <p>創科資訊股份有限公司培訓(2022/09-now)</p>
              <ul>
                <li><p >
                  畢業後，到創科資訊股份有限公司進行培訓，在這邊學習到很多技能，從設計、前端、後端、都有接觸到，讓我對專案流程有了更進一步的了解，也接觸到以前在學校沒接觸到的技術，例如React、Git、虛擬環境等等
                </p></li>
              </ul>
            </div>

          </div>
          <div className='container text-start  button_bodrer title_interval'>
            <p className='fw-bold fs-3'>證照 Certificates</p>
            <ul>
              <li>電腦硬體裝修(丙級)</li>
              <li>勞動部電腦硬體裝修丙級</li>
              <li>TQC 電子商務概論專業級</li>
              <li>TQC+網頁編輯製作(Dreamweaver CC)</li>
              <li>EEC 企業電子化助理規劃師</li>
              <li>EEC 企業電子化規劃師-網路行銷</li>
              <li>TQC+ 影像編輯製作(Photoshop CC)</li>
              <li>ERP 規劃師</li>
              <li>ICDL Data Analytics</li>
              <li>ICDL Computing</li>
            </ul>
          </div>
          <div className=' container button_bodrer  title_interval'>
            <div className=' text-start '>
              <p className='fw-bold fs-3'>專業技能 Skills</p>
            </div>
            <div className='container '>
              <div class="row">
                <div class="col-sm-4">
                  <p className='button_bodrer'>Programming</p>
                  <ul class="list-group text-start ">
                    <li >JAVA</li>
                    <li >Android</li>
                    <li >Html/CSS</li>
                    <li >C#</li>
                    <li >JavaScript</li>
                    <li >python</li>
                  </ul>

                </div>
                <div class="col-sm-4">
                  <p className='button_bodrer'>Git</p>
                  <ul class="list-group text-start">
                    <li >git</li>
                    <li >Github</li>
                  </ul>
                </div>
                <div class="col-sm-4 ">
                  <p className='button_bodrer'>Database</p>
                  <ul class="list-group text-start ">
                    <li >Mysql</li>
                    <li >MSsql</li>
                    <li >firebase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='Portfolio container button_bodrer container title_interval text-start'>
            <p className='fw-bold fs-3'>專案與作品集</p>
            <div className='container'>
              <ul>
                <li>
                  <div class="row">
                    <div class="col-4">
                      <img src={raspberry} alt="" style={{ width: '120px', height: '120px' }} />

                    </div>
                    <div class="col-8">
                      <div class="text-start " >
                        <p>即時溫溼度感測</p>
                        <p>這個專案是我獨立完成的其目的是做溫溼度感測，透過樹莓派、dht11來抓取溫濕度，接著透過MQTT broker把資料傳到後端API來做資料存取，最後把即時的溫溼度透過網頁的圖表功能顯示出來，讓觀測人員能夠知道當下的溫濕度，以及歷史的溫溼度狀況</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-4">
                      <img src={APP_LOGO} alt="" style={{ width: '120px', height: '120px' }} />

                    </div>
                    <div class="col-8">
                      <div class="text-start " >
                        <p>智能輔助APP</p>
                        <p>這是我的畢業專題，這是一個透過 app 的藍芽功能與 Arduino 去 控制檯燈，我是負責 app 的所有功能，根據選單上的列表，可以對檯燈進行不同的操作，資料庫方面則是透過firebase 對資料進行存取。</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='Education text-start container  title_interval button_bodrer '>
            <div className=''>
              <p className='fw-bold fs-3'>學歷 Education</p>
            </div>
            <ul>
              <li>南臺科技大學 2018/09 - 2022/06
                <ul>
                  <li>資訊管理系</li>
                </ul>
              </li>

              <li>國立永靖高工 2014/09 - 2017/06
                <ul>
                  <li>資訊科</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='language text-start container title_interval'>
            <p className='fw-bold fs-3'>語言能力 language skills</p>
            <div>
              <ul>
                <li>中文(母語)</li>
                <li>英文(初學)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
