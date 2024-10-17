import phone from "../assets/phone.svg";
import play from "../assets/PlayStation.svg";
import air from "../assets/naushnik.svg";
import ochki from "../assets/ochki.svg";
import nout from "../assets/nout.svg";
import Fetch from "../server/Fetch";
function Home() {
  const { cate } = Fetch("http://localhost:8000/caterogy");
  const { arr } = Fetch("http://localhost:8000/arrival");
  const { pro } = Fetch("http://localhost:8000/pop");
  return (
    <>
      <div className="home-wrap">
        <div className="home">
          <div className="h-left">
            <h5 className="h-left-title">Pro.Beyond.</h5>
            <h2 className="h-left-sub">
              IPhone 14 <span className="h-left-span">Pro</span>
            </h2>
            <p className="h-left-text">
              Created to change everything for the better. For everyone
            </p>
            <button className="h-left-btn">Shop Now</button>
          </div>
          <div className="h-right">
            <img src={phone} alt="" className="h-right-img" />
          </div>
        </div>
      </div>
      <div className="tools-wrap">
        <div className="tools">
          <div className="tools-left">
            <div className="tools-top">
              <div className="tools-t-box">
                <div className="tool-t-left">
                  <img src={play} alt="" className="tools-t-left-img" />
                </div>
                <div className="tool-t-right">
                  <h4 className="tools-t-title">Playstation 5</h4>
                  <p className="tools-t-text">
                    Incredibly powerful CPUs, GPUs, and an SSD with integrated
                    I/O will redefine your PlayStation experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="tools-bottom">
              <div className="tools-b-box">
                <div className="t-b-box-left">
                  <img src={air} alt="" className="t-b-box-img" />
                </div>
                <div className="t-b-box-right">
                  <h4 className="t-b-box-title">
                    Apple AirPods <span className="t-span"> Max</span>
                  </h4>
                  <p className="t-b-box-text">
                    Computational audio. Listen, its powerful
                  </p>
                </div>
              </div>
              <div className="tools-b-box1">
                <div className="t-b-box-left">
                  <img src={ochki} alt="" className="t-b-box-img" />
                </div>
                <div className="t-b-box-right">
                  <h4 className="t-b-box-title1">
                    Apple Vision <span className="span1">Pro</span>
                  </h4>
                  <p className="t-b-box-text1">
                    An immersive way to experience entertainment
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tools-right">
            <div className="tools-r-box1">
              <div className="tools-r-left">
                <h2 className="tools-r-l-title">
                  Macbook <span className="span2">Air</span>
                </h2>
                <p className="tools-r-l">
                  The new 15‑inch MacBook Air makes room for more of what you
                  love with a spacious Liquid Retina display.
                </p>
                <button className="tools-r-btn">Shop Now</button>
              </div>
              <div className="tools-r-right">
                <img src={nout} alt="" className="toool" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="caterogy">
        <div className="cate-top">
          <h5 className="cate-top-title">Browse By Category</h5>
        </div>
        <div className="cate-bottom">
          <div className="cat-cards">
            {cate &&
              cate.map((e) => {
                return (
                  <div key={e.id} className="cate-card">
                    <img src={e.img} alt="" className="cate-card-img" />
                    <h4 className="cate-title">{e.title}</h4>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="arrival">
        <h3 className="arrival-title">New Arrival</h3>
        <div className="arr-cards">
          {arr &&
            arr.map((e) => {
              return (
                <div key={e.id} className="arr-card">
                  <img src={e.img} alt="" className="arr-card-img" />
                  <div className="like-box">
                    <i class="bx bx-heart"></i>
                  </div>
                  <h4 className="arr-card-title">{e.title}</h4>
                  <span className="arr-price">${e.price}</span>
                  <div className="arr-btn-box">
                    <button className="arr-btn">{e.btn}</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="products">
        <div className="product-cards">
          {pro &&
            pro.map((e) => {
              return (
                <div key={e.id} className="pro-card">
                  <img src={e.img} alt="" className="pro-img" />
                  <h3 className="pro-title">{e.title}</h3>
                  <p className="ro-text">{e.text}</p>
                  <button className="pro-btn">{e.btn}</button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Home;
