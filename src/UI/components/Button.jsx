/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
function Button({
  colour,
  text,
  textsize,
  padding,
  marginheight,
  image,
  alt,
  href,
  redirect,
}) {
  return (
    <div
      className={`${marginheight || "my-8"} w-max inline-flex ${
        colour ? colour : "bg-blue"
      } rounded-[5rem] ${padding} items-baseline `}
      aria-label={`${text}`}
    >
      <a
        className={` ${
          image && "py-3 pl-3  pr-1"
        }  text-white p-3 cursor-pointer drop-shadow-md px-[1.3rem] ${textsize}`}
        href={href}
        {...(redirect &&
          `${(target = "_blank")} ${(rel = "noopener noreferrer")}`)}
      >
        {text}
      </a>
      {image && (
        <span className="mr-[0.8rem] phone:w-[0.6rem]">
          <img src={image} alt={alt} width="15" height="14" />
        </span>
      )}
    </div>
  );
}

export default Button;
