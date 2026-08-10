import {
  FiHeart,
  FiEye,
  FiStar,
   FiArrowRight,
} from "react-icons/fi";

import { useTemplates } from "../../context/TemplateContext";
import { useNavigate } from "react-router-dom";


const TemplateCard = ({
  
  template,
  openModal,
}) => {
    const { view } = useTemplates();
    const navigate = useNavigate();
  return (
  <div
  onClick={(e) => {

  // Agar kisi button (Heart, Request Sample, Quick Preview) par click hua ho
  // to modal mat kholo
  if (e.target.closest("button")) {
    return;
  }

  // Sirf Mobile par card click se modal kholo
  if (window.innerWidth < 1024) {
    openModal(template);
  }

}}
  className={`
    group
    cursor-pointer
    overflow-hidden
    rounded-[30px]
    border
    border-white/10
    bg-white/5
    backdrop-blur-2xl
    transition-all
    duration-500
    hover:border-sky-400/40
    hover:-translate-y-2

    ${
      view === "list"
        ? "flex flex-col md:flex-row"
        : ""
    }
  `}
>
      {/* Image */}
     <div
  className={`
    relative
    overflow-hidden

    ${
      view === "list"
        ? "w-full md:w-[340px] lg:w-[360px] flex-shrink-0"
        : ""
    }
  `}
>

  <img
    src={template.image}
    alt={template.title}
   className={`
w-full
object-cover
transition-all
duration-700
group-hover:scale-105

${
view==="list"

?

"h-[260px] md:h-full"

:

"h-64"

}
`}
  />

  {/* Dark Gradient */}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-[#081525]
      via-transparent
      to-transparent
      opacity-0
      group-hover:opacity-100
      transition-all
      duration-500
    "
  />

  {/* Badge */}

  <span
    className="
      absolute
      left-5
      top-5
      rounded-full
      bg-sky-500
      px-4
      py-2
      text-xs
      font-semibold
      text-white
      shadow-lg
    "
  >
    {template.badge}
  </span>

  {/* Wishlist */}

  <button
    className="
      absolute
      right-5
      top-5
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      bg-black/40
      backdrop-blur-xl
      text-white
      transition-all
      duration-300
      hover:bg-red-500
      hover:scale-110
    "
  onClick={(e) => {
  e.stopPropagation();

  navigate("/request-wizard", {
    state: {
      template,
    },
  });
}}
  >
    <FiHeart />
  </button>

  {/* Hover Actions */}

  <div
    className="
      absolute
      inset-x-5
      bottom-5
      translate-y-20
      opacity-0
      transition-all
      duration-500
      group-hover:translate-y-0
      group-hover:opacity-100
    "
  >

   <button
  onClick={(e) => {
    e.stopPropagation();
    openModal(template);
  }}
  className="
    w-full
    rounded-2xl
    bg-white
    py-3.5
    font-semibold
    text-slate-900
    flex
    items-center
    justify-center
    gap-2
    transition
    hover:bg-sky-400
    hover:text-white
  "
>

      <FiEye />

      Quick Preview

    </button>

  </div>

</div>

      {/* Content */}

    <div
className={`
flex
flex-1
flex-col
justify-between
p-6
lg:p-8
`}
>

  <div className="flex items-center justify-between">

    <span
      className="
      rounded-full
      bg-sky-500/10
      px-4
      py-1.5
      text-xs
      font-semibold
      text-sky-300
    "
    >
      {template.category}
    </span>

    <div className="flex items-center gap-1">

      <FiStar className="fill-yellow-400 text-yellow-400" />

      <span className="text-white font-medium">

        {template.rating}

      </span>

    </div>

  </div>

  <h3 className="mt-5 text-2xl font-bold text-white transition group-hover:text-sky-400">

    {template.title}

  </h3>

  <p className="mt-3 text-slate-400 leading-7">

    Premium print-ready design with fully customizable layout,
    high-resolution graphics and commercial printing support.

  </p>

  <div
className={`
mt-8
flex
${
view==="list"
?
"flex-col md:flex-row md:items-center md:justify-between gap-5"
:
"items-center justify-between"
}
`}
>
    <div>

      <p className="text-3xl font-black text-white">

        {template.price}

      </p>

      <span className="text-slate-500 text-sm">

        Starting Price

      </span>

    </div>

    {view==="list" && (

<div className="flex gap-3 mb-4">

<button
onClick={(e)=>{
   e.stopPropagation();
   openModal(template);
}}
className="
flex-1
rounded-xl
border
border-white/10
bg-white/5
py-3
text-white
transition
hover:border-sky-400
"
>

Quick Preview

</button>

</div>

)}

  <button
onClick={(e) => {
  e.stopPropagation();

  // Later navigate to Request Sample Form
}}
className={`
flex
items-center
justify-center
gap-2
rounded-2xl
bg-sky-500
px-6
py-3
font-semibold
text-white
transition-all
duration-300
hover:bg-sky-600

${
  view === "grid"
    ? "h-12 w-12 rounded-full p-0"
    : "w-full md:w-auto"
}
`}
>

{view==="grid" ? <FiArrowRight/> : "Request Sample"}

</button>

  </div>

</div>

    </div>
  );
};

export default TemplateCard;