
import NewProject from "../NewProject/NewProject";
import TagGenerator from "./Components/TagGenerator"
import ChatComments from "./Components/ChatComments";
import images from "src/Importer/Importer";
import SliderItems from "../SliderItems/SliderItems";
import Slider from "../Slider/Slider";
import CustomBreadcrumbs from "../CustomBreadcrumbs/CustomBreadcrumbs";
function Post (){
    return (
        <>
         <div className="">
        <img src={images["Post/Rectangle 62.png"]} alt="" className="" />
      </div>
      <section className="dark-section pt-10 pb-10" dir="rtl">
        <div className="container mx-auto">
          <p className="text-slate-300 text-sm mt-8 mb-4">Graphic Design, December 04, 2022</p>
          <p className="lg:text-5xl text-3xl font-bold" >طراحی ست اداری شرکت hydeout</p>

          <div className="flex lg:flex-row pt-5 flex-col">
            <div className="pl-2 mt-2 lg:mt-0">
              {" "}
              <TagGenerator
                linkAddress="www.p30download.com"
                linkElement="Adobe Indesign"
              />
            </div>
            <div className="pl-2 mt-2 lg:mt-0 " >
              {" "}
              <TagGenerator
                linkAddress="www.p30download.com"
                linkElement="Adobe Photoshop"
              />
            </div>
            <div className="pl-2 mt-2 lg:mt-0">
              {" "}
              <TagGenerator
                linkAddress="www.p30download.com"
                linkElement="Adobe Illustrator"
              />
            </div>
          </div>

          <div className="pt-20" >
            <p className="text-justify ml-6 text-xl mr-6 light-post-txt">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
              جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>

            <div className="pt-8">
              <img
                src={images["Post/Rectangle 67.png"]}
                alt="hyteout design"
                className="m-auto"
              />
            </div>

            <div className="pt-20">
              <p className="text-justify ml-6 text-xl mr-6 light-post-txt">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>

            <div className="pt-20 relative">
              <div className="absolute  hidden lg:inline-block">
                <img
                  src={images["Icons/RedVerticalLine.svg"]}
                  className="mr-8 "
                  alt=""
                />
              </div>
              <p className="text-justify ml-6 text-xl mr-16 special-txt text-yellow pr-8">
                ’’ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت
                فراوان جامعه و متخصصان را می طلبد. ‘‘
              </p>
            </div>

            <div className="pt-20">
              <img
                src={images["Post/Rectangle 69.png"]}
                alt="CGI design"
                className="m-auto"
              />
            </div>
            <div className="pt-20">
              <img
                src={images["Post/Rectangle 70.png"]}
                alt="hyteout design"
                className="m-auto"
              />
            </div>
            </div></div>
            </section>
            {/* ------------------------------- */}
            <div className="pr-8 pl-8 pt-20 container" dir="rtl">
              <ChatComments
                comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
"
                date="28 November"
                liked={false}
                username="Andre Park"
              />
              <div className="pt-5">
                <div className="grid lg:grid-cols-10 grid-cols-4 gap-2">
                  <div className="contents col-span-1">
                    <img
                      src={images["Icons/SpecialReply.svg"]}
                      className="pr-8 m-auto "
                      alt=""
                    />
                  </div>
                  <div className="lg:col-span-9 col-span-3">
                    <ChatComments
                      comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
"
                      date="28 November"
                      liked={true}
                      username="Andre Park"
                    />
                  </div>
                </div>
                <div className="pt-5">
                  <ChatComments
                    comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
"
                    date="28 November"
                    liked={true}
                    username="Andre Park"
                  />
                </div>
                <div className="pt-5">
                  <ChatComments
                    comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
"
                    date="28 November"
                    liked={false}
                    username="Andre Park"
                  />
                </div>
              </div>
            </div>
            <div className="container" dir="rtl">
        <CustomBreadcrumbs pageName="پورتفولیو" route=""/>
        <p className="font-bold text-3xl pr-8">پروژه های اخیر</p>
        </div>

        <div className="container">
          <Slider type="Project"/>
        </div>
<NewProject />

        </>
    )
}

export default Post;