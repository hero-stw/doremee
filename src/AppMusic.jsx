import { useEffect, useState } from "react";
import "./App.css";
import { Animated } from "react-animated-css";
import "animate.css";

function App() {
  return (
      <div className="h-screen w-screen overflow-x-hidden relative">
        <div className="container mx-auto px-5 lg:px-0 pt-6 lg:py-7 lg:mb-auto">
          <div className="text-container lg:max-w-[60%]">
            <h1 className="title font-merriweather text-[40px] lg:text-[56px] leading-[1.5] lg:w-full w-[50%] mb-0">
              Dances of the Hanging Birds
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
                Better with headphones or speakers with bass
              </p>
            </div>
            <p className="font-patrick text-[12px] lg:text-lg leading-[1.5] color-gra mt-6">
              Ngày xửa ngày xưa, ở một vương quốc nọ có nàng công chúa Chin Xù vừa
              xinh đẹp tuyệt trần lại còn tải giỏi xuất chúng. Vua cha ấy thế giao
              luôn ngân khố cho quản lý. Vương quốc ngày ngày tháng tháng sung túc
              thanh bình lắm, chỉ trừ mỗi dịp giao mùa lại có mụ phù thủy từ khu
              rừng Xỉn Ga Bo bay đến quấy phá cướp bóc.
            </p>
            <p className="font-patrick text-[12px] lg:text-lg leading-[1.5] color-gra mt-6">
              "TA CẦN TIỀN! TA CẦN THÊM TIỀN ...." mụ hét.
            </p>
            <p className="font-patrick text-[12px] lg:text-lg leading-[1.5] color-gra mt-6">
              Chin Xù thương bần dân chúng lắm, nên cố tìm kiếm phân bổ vàng bạc
              khắp nơi trong vương quốc để mụ phù thủy không cướp bóc tùy tiện.
              Mỗi lần thế, mụ lại treo Chin Xù lên một sợi dây phép thuật rồi hét:
            </p>
            <p className="font-patrick text-[12px] lg:text-lg leading-[1.5] color-gra mt-6">
              "TREO Ở ĐÓ! TREO Ở ĐÓ!"
            </p>
            <p className="font-patrick text-[12px] lg:text-lg leading-[1.5] color-gra mt-6">
              Chin Xù hay cưỡi ngựa và bê thóc nên dẻo dai lắm. Thấy thế cũng treo
              luôn, vừa treo vừa điều động vàng bạc. Có 4 chú chim thấy vừa thương
              vừa buồn cười nên ngày ngày bay đến đậu trên sợi dây, vừa nhẩy múa
              vừa hót líu lo cho cô công chúa bớt mệt nhọc.
            </p>
            <p className="font-patrick text-[12px] lg:text-lg leading-[1.5] color-gra mt-6">
              Vũ điệu của bầy chim này được một bác nông dân ghi chép lại và tương
              truyền khắp vương quốc.
            </p>
          </div>
          {/* princess */}
          <div className="right-[-3.5%] top-[0] absolute w-[48vw] lg:w-[30vw]">
            <img
                src="./img/princess.png"
                alt=""
                className="max-h-[185px] lg:max-h-[590px] w-full"
            />
          </div>
          {/* village */}
          <div className="w-[35vw] lg:w-[32vw] absolute bottom-0 right-0">
            <img src="./img/village.png" alt="" className="w-full" />
          </div>

          {/* bird */}
          <Animated
              animationIn="fadeInUp"
              className="w-[26px] lg:w-[50px] absolute top-[10px] lg:top-[24px] right-[30%] lg:right-[18%]"
          >
            <img
                className="w-[26px] lg:w-[50px] animate__animated absolute animate__tada animate__infinite animate__slow"
                src="./img/black_bird.png"
                alt=""
            />
          </Animated>
          <Animated
              animationIn="fadeInUp"
              className="w-[24px] lg:w-[40px] absolute top-[1.8%] lg:top-[7%] right-[22%] lg:right-[13%] "
          >
            <img
                className="w-[24px] lg:w-[40px] animate__animated absolute animate__tada animate__infinite animate__slow"
                src="./img/green_bird.png"
                alt=""
            />
          </Animated>
          <Animated
              animationIn="fadeInUp"
              className="w-[15px] lg:w-[26px] absolute top-[3.5%] lg:top-[9.5%] right-[14%] lg:right-[8%]"
          >
            <img
                className="w-[15px] lg:w-[26px] animate__animated animate__tada animate__infinite animate__slow"
                src="./img/white_bird.png"
                alt=""
            />
          </Animated>
          <Animated
              animationIn="fadeInUp"
              className="w-[18px] lg:w-[30px] absolute top-[2.2%] lg:top-[8%] right-[5%] lg:right-[3%] "
          >
            <img
                className="w-[18px] lg:w-[30px] animate__animated animate__tada animate__infinite animate__slow"
                src="./img/pink_bird.png"
                alt=""
            />
          </Animated>

          {/*  money*/}
          <Animated
              animationIn="fadeInUp"
              className="w-[40px] lg:w-[70px] absolute top-[15%] lg:top-[40%] right-[33%] lg:right-[19%]"
          >
            <img
                className="w-[40px] lg:w-[70px] animate__animated absolute animate__fadeIn animate__infinite animate__slow"
                src="./img/money_1.png"
                alt=""
            />
          </Animated>
          <Animated
              animationIn="fadeInUp"
              className="w-[30px] lg:w-[60px] absolute top-[8%] lg:top-[28%] right-[2%] lg:right-[0%]"
          >
            <img
                className="w-[30px] lg:w-[60px] animate__animated absolute animate__fadeInUp animate__infinite animate__slow"
                src="./img/money_2.png"
                alt=""
            />
          </Animated>
          <Animated
              animationIn="fadeInUp"
              className="w-[30px] lg:w-[50px] absolute top-[8%] lg:top-[20%] right-[30%] lg:right-[20%]"
          >
            <img
                className="w-[30px] lg:w-[50px] animate__animated absolute animate__fadeInDown animate__infinite animate__slow"
                src="./img/money_3.png"
                alt=""
            />
          </Animated>
          <Animated
              animationIn="fadeInUp"
              className="w-[30px] lg:w-[70px] absolute top-[21%] lg:top-[60%] right-[6%] lg:right-[1%]"
          >
            <img
                className="w-[30px] lg:w-[70px] animate__animated absolute animate__tada animate__infinite animate__slow"
                src="./img/money_4.png"
                alt=""
            />
          </Animated>
        </div>
      </div>
  );
}

export default App;
