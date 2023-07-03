import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Animated } from "react-animated-css";
import "animate.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen w-sc reen overflow-x-hidden relative">
      <div className="container mx-auto px-5 lg:px-0 pt-6 lg:py-7 lg:mb-auto">
        <div className="text-container lg:max-w-[60%]">
          <h1 className="title font-merriweather text-[40px] lg:text-[6vw] leading-[1.5] lg:w-full w-[50%] mb-0">
            Dances of the Hanging birds
          </h1>
          <div className="soundcloud-embed mt-4 mb-4 font-inter">
            <iframe
              width="100%"
              height="20"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1554918718&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
            <p className="pt-4 text-[11px] lg:text-xs color-gra opacity-60 font-inter">
              Better to enjoy with headphones or speakers with bass
            </p>
          </div>
          <p className="font-patrick text-[12px] lg:text-base lg:text-md leading-[1.5] color-gra mt-6">
            Ngày xửa ngày xưa, ở một vương quốc nọ có nàng công chúa Chin Xù vừa
            xinh đẹp tuyệt trần lại còn tải giỏi xuất chúng. Vua cha ấy thế giao
            luôn ngân khố cho quản lý. Vương quốc ngày ngày tháng tháng sung túc
            thanh bình lắm, chỉ trừ mỗi dịp giao mùa lại có mụ phù thủy từ khu
            rừng Xỉn Ga Bo bay đến quấy phá cướp bóc.
          </p>
          <p className="font-patrick text-[12px] lg:text-base lg:text-md leading-[1.5] color-gra mt-6">
            "TA CẦN TIỀN! TA CẦN THÊM TIỀN ...." mụ hét.
          </p>
          <p className="font-patrick text-[12px] lg:text-base lg:text-md leading-[1.5] color-gra mt-6">
            Chin Xù thương bần dân chúng lắm, nên cố tìm kiếm phân bổ vàng bạc
            khắp nơi trong vương quốc để mụ phù thủy không cướp bóc tùy tiện.
            Mỗi lần thế, mụ lại treo Chin Xù lên một sợi dây phép thuật rồi hét:
          </p>
          <p className="font-patrick text-[12px] lg:text-base lg:text-md leading-[1.5] color-gra mt-6">
            "TREO Ở ĐÓ! TREO Ở ĐÓ!"
          </p>
          <p className="font-patrick text-[12px] lg:text-base lg:text-md leading-[1.5] color-gra mt-6">
            Vũ điệu của bầy chim này được một bác nông dân ghi chép lại và tương
            truyền khắp vương quốc.
          </p>
        </div>
        {/* princess */}
        <div className="right-[-3.5%] top-[0] absolute w-[40vw] lg:w-[30vw]">
          <img
            src="./img/tree.png"
            alt=""
            className="max-h-[185px] lg:max-h-[590px] w-full"
          />
        </div>
        <Animated
          animationIn="fadeInUp"
          className=" w-[35vw] lg:w-[22vw] right-[-2%] top-[25px] lg:top-[75px] absolute"
        >
          <img
            className=" w-[35vw] lg:w-[22vw] animate__animated animate__swing animate__infinite animate__slow"
            src="./img/princess.png"
            alt=""
          />
        </Animated>

        {/* village */}
        <div className="w-[35vw] lg:w-[32vw] absolute bottom-0 right-0">
          <img src="./img/village.png" alt="" className="w-full" />
        </div>

        {/* bird */}
        <Animated
          animationIn="fadeInUp"
          className="w-[50px] absolute top-[18px] right-[18%] hidden lg:block"
        >
          <img
            className="w-[10px] right-[18px] top-[30%] absolute animate__fadeIn animate__animated animate__infinite animate__slow"
            src="./img/left_wing.png"
            alt=""
          />
          <img
            className="w-[50px] animate__animated animate__tada animate__infinite animate__slow"
            src="./img/black_body.png"
            alt=""
          />
          <img
            className="w-[20px] right-[-15%] top-[50%] absolute animate__fadeIn animate__animated  animate__infinite animate__slow"
            src="./img/right_wing.png"
            alt=""
          />
        </Animated>
        <Animated
          animationIn="fadeInUp"
          className="w-[40px] absolute top-[6%] right-[12%] hidden lg:block"
        >
          <img
            className="w-[40px] animate__animated absolute animate__fadeInTopRight animate__infinite animate__slow"
            src="./img/green_bird.png"
            alt=""
          />
        </Animated>
        <Animated
          animationIn="fadeInUp"
          className="w-[26px] absolute top-[9.5%] right-[8%] hidden lg:block"
        >
          <img
            className="w-[26px] animate__animated animate__tada animate__infinite animate__slow"
            src="./img/white_bird.png"
            alt=""
          />
        </Animated>
        <Animated
          animationIn="fadeInUp"
          className="w-[30px] absolute top-[6%] right-[3%] hidden lg:block"
        >
          <img
            className="w-[30px] animate__animated animate__fadeInTopRight animate__infinite animate__slow"
            src="./img/pink_bird.png"
            alt=""
          />
        </Animated>
      </div>
    </div>
  );
}

export default App;
