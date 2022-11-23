import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
import SectionHeader from "./SectionHeader";
import NavbarComponent from "./NavbarComponent";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";
import ContactSlider from "./ContactSlider";
import images from "../../Importer/Importer";
import NewServices from "./NewServices";
import Button from "../Button/Button";
const About2 = () => {
  return (
    <div>
      <section className="dark-section">
        <div className="pt-20 pb-20">
          <div className="pt-20 pb-20 container mx-auto">
            <div className="flex flex-col items-center">
              <h1 className="about-nill-head pb-10">
                شرکت طراحی Nill Developers
              </h1>
              <p className="about-nill-text w-4/5 text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>

              <div className="pt-20">
                <img src={images["Icons/ScrollDwn.svg"]} alt="" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute p-7 bg-grey-blur flex flex-col content-center">
              <h3 className="blur-text-head pb-12">گستره فعالیت گروه ما</h3>
              <p className="blur-text-body">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </div>
            <img src={images["About/image 1.png"]} alt="" />
          </div>
          <div className="pt-20 pb-20 container mx-auto">
         
            <div className="pb-12">
              <SectionHeader
                headertxt={"خدمات جدید طراحی گرافیک"}
                theme={"dark"}
              />
            </div>
            <div className="grid grid-cols-3 gap-20 pb-20">
              <NewServices
                title={"طراحی پوستر"}
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
              />
              <NewServices
                title={"طراحی لوگو"}
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
              />
              <NewServices
                title={"طراحی موشن گرافی"}
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
              />
              <NewServices
                title={"طراحی قالب پست"}
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
              />
              <NewServices
                title={"طراحی بنر سایت"}
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
              />
              <NewServices
                title={"طراحی سه بعدی"}
                text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است."
              />
            </div>

            <div className="pb-3 pt-20">
            
        <CustomBreadcrumbs pageName={"تیم ما"} route="/"/>

            </div>
            <div className="pb-12">
              <SectionHeader headertxt={"اعضای گروه نیل"} theme={"dark"} />
            </div>
            <div className="pb-12">
              <Swiper
                id="contact-slider-3"
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                slidesPerView={3}
                spaceBetween={30}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={images["Profiles/Rectangle 7.png"]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images["Profiles/profile_2.png"]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images["Profiles/Rectangle 7.png"]} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={images["Profiles/Rectangle 7.png"]} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="pb-3 pt-20">
             
        <CustomBreadcrumbs pageName={"پروژه ها"} route="/"/>

            </div>
            <div className="pb-12">
              <SectionHeader headertxt={"نظرات کارفرمایان"} theme={"dark"} />
            </div>
            <div>
              <Swiper
                id="contact-slider-2"
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                slidesPerView={2}
                spaceBetween={30}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <ContactSlider
                    theme="dark"
                    profileName="Andre Park"
                    profileSource="Icons/LineStar.svg"
                    sliderP="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ContactSlider
                    theme="dark"
                    profileName="Andre Park"
                    profileSource="Icons/LineStar.svg"
                    sliderP="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ContactSlider
                    theme="dark"
                    profileName="Andre Park"
                    profileSource="Icons/LineStar.svg"
                    sliderP="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است."
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ContactSlider
                    theme="dark"
                    profileName="Andre Park"
                    profileSource="Icons/LineStar.svg"
                    sliderP="   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است."
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div>
              <div className="pt-20 pb-20 container mx-auto">
                <div className="">
                  <SectionHeader
                    headertxt={"پروژه های بسته شده"}
                    theme={"dark"}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pb-20">
                <div>
                  <img
                    src={images["Logo/Rectangle 22.png"]}
                    alt="company"
                    className="m-auto"
                  />
                </div>
                <div>
                  <img
                    src={images["Logo/Rectangle 23.png"]}
                    alt="company"
                    className="m-auto"
                  />
                </div>
                <div>
                  <img
                    src={images["Logo/Rectangle 27.png"]}
                    alt="company"
                    className="m-auto"
                  />
                </div>
                <div>
                  <img
                    src={images["Logo/Rectangle 22.png"]}
                    alt="company"
                    className="m-auto pt-7"
                  />
                </div>
                <div>
                  <img
                    src={images["Logo/Rectangle 23.png"]}
                    alt="company"
                    className="m-auto pt-7"
                  />
                </div>
                <div>
                  <img
                    src={images["Logo/Rectangle 27.png"]}
                    alt="company"
                    className="m-auto pt-7"
                  />
                </div>
              </div>
            </div>

            <div className="pb-3">
            
        <CustomBreadcrumbs pageName={"ارتباط با ما"} route="/"/>
              
            </div>
            <div className="pb-12">
              <SectionHeader
                headertxt={"ثبت نظر یا پروژه جدید"}
                theme={"dark"}
              />
            </div>
            <div className="grid grid-cols-2 gap-2 text-white">
              <div className="bg-light-dark">
                <div className="text-center">
                  <h3 className="form-box-head pt-9">ثبت نظر</h3>
                  <div className="pt-4">
                    <hr className="about" />
                  </div>
                  <form action="/" dir="rtl" className="text-right">
                    <div className="pt-8 pr-7 pl-7 flex flex-row">
                      <label
                      style={{
                        width:"27%"
                      }} 
                      
                      htmlFor="firstname" className="pl-3">
                        نام و نام خانوادگی
                      </label>
                      <svg
                        width="2"
                        height="24"
                        viewBox="0 0 1 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.5"
                          y1="23.5"
                          x2="0.5"
                          y2="0.5"
                          stroke="#938686"
                          stroke-linecap="round"
                        />
                      </svg>

                      <input
                       style={{
                        height: "24px",
                        width:"-webkit-fill-available"
                      }}
                        className="mr-3 w-2/3 pr-2"
                        type="text"
                        placeholder="پیمان کلانی"
                      />
                    </div>

                    <div className="pt-7 pr-7 pl-7 flex flex-row">
                      <label style={{
                        width:"16%"
                      }} 
                      htmlFor="firstname" className="pl-3">
                        آدرس ایمیل
                      </label>
                      <svg
                        width="2"
                        height="24"
                        viewBox="0 0 1 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.5"
                          y1="23.5"
                          x2="0.5"
                          y2="0.5"
                          stroke="#938686"
                          stroke-linecap="round"
                        />
                      </svg>
                      <input
                       style={{
                        height: "24px",
                        width:"-webkit-fill-available"
                      }}
                        className="mr-3 w-2/3 pr-2"
                        type="email"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div className="pt-7 pr-7 pl-7">
                      <input
                      style={{
                        height: "72px",
                        width:"-webkit-fill-available"
                      }}
                        className="mr-3 pr-2 w-2/3"
                        type="text"
                        placeholder="نظرات خود را بنویسید..."
                      />
                    </div>
                  </form>
                  <div className="pt-7 mb-4">
                    <Button btnType="simple" btntxt="ارسال" />
                  </div>
                </div>
              </div>
              <div className="bg-light-dark">
                <div className="text-center">
                  <h3 className="form-box-head pt-9">درخواست انجام پروژه</h3>
                  <div className="pt-4">
                    <hr className="about" />
                  </div>
                  <form action="/" dir="rtl" className="text-right">
                    <div className="pt-8 pr-7 pl-7 flex flex-row">
                      <label
                      style={{
                        width:"27%"
                      }} 
                      
                      htmlFor="firstname" className="pl-3">
                        نام و نام خانوادگی
                      </label>
                      <svg
                        width="2"
                        height="24"
                        viewBox="0 0 1 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.5"
                          y1="23.5"
                          x2="0.5"
                          y2="0.5"
                          stroke="#938686"
                          stroke-linecap="round"
                        />
                      </svg>

                      <input
                       style={{
                        height: "24px",
                        width:"-webkit-fill-available"
                      }}
                        className="mr-3 w-2/3 pr-2"
                        type="text"
                        placeholder="پیمان کلانی"
                      />
                    </div>

                    <div className="pt-7 pr-7 pl-7 flex flex-row">
                      <label style={{
                        width:"17%"
                      }} 
                      htmlFor="firstname" className="pl-3">
                        آدرس ایمیل
                      </label>
                      <svg
                        width="2"
                        height="24"
                        viewBox="0 0 1 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.5"
                          y1="23.5"
                          x2="0.5"
                          y2="0.5"
                          stroke="#938686"
                          stroke-linecap="round"
                        />
                      </svg>
                      <input
                       style={{
                        height: "24px",
                        width:"-webkit-fill-available"
                      }}
                        className="mr-3 w-2/3 pr-2"
                        type="email"
                        placeholder="example@email.com"
                      />
                    </div>
                   
                    <div className="pt-7 pr-7 pl-7 flex flex-row">
                      <label style={{
                        width:"20%"
                      }} 
                      htmlFor="firstname" className="pl-3">
                        شماره تماس
                      </label>
                      <svg
                        width="4"
                        height="24"
                        viewBox="0 0 1 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.5"
                          y1="23.5"
                          x2="0.5"
                          y2="0.5"
                          stroke="#938686"
                          stroke-linecap="round"
                        />
                      </svg>
                      <input
                       style={{
                        height: "24px",
                        width:"-webkit-fill-available"
                      }}
                        className="mr-3 w-2/3 pr-2"
                        type="tel"
                        placeholder="+98 933 389 3879"
                      />
                    </div>
                    <div className="pt-7 pr-7 pl-7 flex flex-row">
                      <label style={{
                        width:"20%"
                      }} 
                      htmlFor="firstname" className="pl-3">
                        طراحی UI / UX
                      </label>
                      <svg
                        width="4"
                        height="24"
                        viewBox="0 0 1 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.5"
                          y1="23.5"
                          x2="0.5"
                          y2="0.5"
                          stroke="#938686"
                          stroke-linecap="round"
                        />
                      </svg>
                      <input
                       style={{
                        height: "24px",
                        width:"-webkit-fill-available"
                      }}
                        className="mr-3 w-2/3 pr-2"
                        type="email"
                        placeholder="example@email.com"
                      />
                    </div>
                  </form>
                  <div className="pt-7 mb-4">
                    <Button btnType="simple" btntxt="ارسال" />
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About2;
