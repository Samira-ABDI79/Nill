import { useState, useEffect } from "react";
import images from "../../Importer/Importer";

const portfolio = [
  {
    name: "My best client",
    image: "Work/Rectangle 54.png",
    category: ["all", "ux-ui"],
  },
  {
    name: "My favorite case",
    image: "Work/Rectangle 55.png",
    category: ["all", "graphic", "ux-ui"],
  },
  {
    name: "A old job",
    image: "Work/Rectangle 56.png",
    category: ["all", "webdesign"],
  },
  {
    name: "It is a really cool website",
    image: "Work/Rectangle 57.png",
    category: ["all", "ux-ui", "graphic", "3d", "seo"],
  },
  {
    name: "Something more",
    image: "Work/Rectangle 58.png",
    category: ["all", "3d"],
  },
  {
    name: "Something more",
    image: "Work/Rectangle 59.png",
    category: ["all", "3d", "graphic"],
  },
];

function GalleryFilter() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="portfolio__labels  lg:text-center lg:pb-20 pb-10 flex flex-wrap lg:block">
        <a
          className={`lg:pl-9 lg:pr-9 mt-2 lg:mt-0 w-28  animation  ${filter === "all" ? "activeda" : "filter-a-tag"} ${filter === "all" ? "text-yellow" : "text-white"}`}
          
          onClick={() => setFilter("all")}
        >
          All
        </a>
        <a
          className={`lg:pl-9 lg:pr-9 mt-2 lg:mt-0 w-28  animation  ${filter === "webdesign" ? "activeda" : "filter-a-tag"} ${filter === "webdesign" ? "text-yellow" : "text-white"}`}
          
          onClick={() => setFilter("webdesign")}
        >
          Web Design
        </a>
        <a
          className={`lg:pl-9 lg:pr-9 mt-2 lg:mt-0 w-28  animation  ${filter === "ux-ui" ? "activeda" : "filter-a-tag"} ${filter === "ux-ui" ? "text-yellow" : "text-white"}`}
          
          onClick={() => setFilter("ux-ui")}
        >
          Ui/UX
        </a>
        <a
          className={`lg:pl-9 lg:pr-9 mt-2 lg:mt-0 w-28  animation  ${filter === "graphic" ? "activeda" : "filter-a-tag"} ${filter === "graphic" ? "text-yellow" : "text-white"}`}
          
          onClick={() => setFilter("graphic")}
        >
          Graphic
        </a>
        <a
          className={`lg:pl-9 lg:pr-9 mt-2 lg:mt-0 w-28  animation  ${filter === "3d" ? "activeda" : "filter-a-tag"} ${filter === "3d" ? "text-yellow" : "text-white"}`}
         
          onClick={() => setFilter("3d")}
        >
          3D
        </a>
        <a
          className={`lg:pl-9 lg:pr-9 mt-2 lg:mt-0 w-28  animation  ${filter === "seo" ? "activeda" : "filter-a-tag"} ${filter === "seo" ? "text-yellow" : "text-white"}`}
         
          onClick={() => setFilter("seo")}
        >
          SEO
        </a>
      </div>
      <div className="portfolio__container grid lg:grid-cols-2 grid-cols-1 gap-4  animation ">
        {projects.map((item, index) =>
          item.filtered === true ? (
            <div>
              {index % 2 === 0 ? (
                <div className="pt-14 image-hover animation ">
                  <img
                    key={index}
                    className="animation  w-fill-availabe"
                    src={images[item.image]}
                    alt={item.name}
                  />
                </div>
              ) : (
                <div className="image-hover ">
                  <img
                    key={index}
                    className="animation  w-fill-availabe"
                    src={images[item.image]}
                    alt={item.name}
                  />
                </div>
              )}
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
}

export default GalleryFilter;
