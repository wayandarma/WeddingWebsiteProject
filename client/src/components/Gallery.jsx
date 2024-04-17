import Image1 from "../assets/images/image-1.jpeg";
import Image2 from "../assets/images/image-2.jpeg";
import Image3 from "../assets/images/image-3.jpeg";
import Image4 from "../assets/images/image-4.jpeg";
import Image5 from "../assets/images/image-5.jpeg";
export default function Gallery() {
  return (
    <>
      <div className="container md:grid grid-cols-3 hidden gap-4">
        <img src={Image1} alt="image 1" />
        <img src={Image2} alt="image 2" />
        <img src={Image3} alt="image 3" />
        <img src={Image4} alt="image 4" />
        <img src={Image5} alt="image 5" />
      </div>
      <div id="gallery" className="container md:hidden px-8">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={Image1} className="w-full rounded-xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle btn-secondary">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle btn-secondary ">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={Image2} className="w-full  rounded-xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle btn-secondary">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle btn-secondary">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={Image3} className="w-full  rounded-xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle btn-secondary">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle btn-secondary">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={Image4} className="w-full  rounded-xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle btn-secondary">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle btn-secondary">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img src={Image5} className="w-full  rounded-xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle btn-secondary">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle btn-secondary">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
