
import NewProject from "../NewProject/NewProject";
import TagGenerator from "./Components/TagGenerator"
import ChatComments from "./Components/ChatComments";
import images from "src/Importer/Importer";
function Post (){
    return (
        <>
         <div className="relative">
        <img src={images["Post/Rectangle 62.png"]} alt="" className="z-40" />
      </div>
      <section className="dark-section pt-10 pb-10">
        <div className="container mx-auto">
          <p className="light-header-text">Graphic Design, December 04, 2022</p>
          <p  >طراحی ست اداری شرکت hydeout</p>

          <div className="flex flex-row pt-5">
            <div className="pl-2">
              {" "}
              <TagGenerator
                linkAddress="www.p30download.com"
                linkElement="Adobe Indesign"
              />
            </div>
            <div className="pl-2">
              {" "}
              <TagGenerator
                linkAddress="www.p30download.com"
                linkElement="Adobe Photoshop"
              />
            </div>
            <div className="pl-2">
              {" "}
              <TagGenerator
                linkAddress="www.p30download.com"
                linkElement="Adobe Illustrator"
              />
            </div>
          </div>

          <div className="pt-20">
            <p className="text-justify ml-6 mr-6 light-post-txt">
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
              <p className="text-justify ml-6 mr-6 light-post-txt">
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
              <div className="absolute">
                <img
                  src={images["icons/RedVerticalLine.svg"]}
                  className="pr-8"
                  alt=""
                />
              </div>
              <p className="text-justify ml-6 mr-16 special-txt pr-8">
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
            <div className="pr-8 pl-8 pt-20">
              <ChatComments
                comment="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
"
                date="28 November"
                liked={false}
                username="Andre Park"
              />
              <div className="pt-5">
                <div className="grid grid-cols-3 gap-1">
                  <div className="contents">
                    <img
                      src={images["icons/SpecialReply.svg"]}
                      className="pr-8 m-auto"
                      alt=""
                    />
                  </div>
                  <div className="col-span-2 ...">
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
<NewProject />

        </>
    )
}

export default Post;