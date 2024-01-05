import Image from "next/image";
import Link from "next/link";

const ExperienceCard = (props) => {
  const {
    companyName,
    companyLogo,
    designation,
    location,
    startDate,
    endDate,
    companyLink,
    description,
    skills,
  } = props.item;
  return (
    <div className="flex relative items-center experience-row">
      <div className="w-[20px] h-[20px] absolute left-[-9px] rounded-full experience-circle"></div>
      <div className="experience-card">
        <div className="bg-theme-white border-2 absolute top-[-15px] rounded-lg right-8 px-3 py-1 experience-date">
          <p className="text-xs md:text-sm">
            {startDate} - {endDate}
          </p>
        </div>
        <div
          className={
            companyLink
              ? "w-full flex items-center md:justify-center md:w-[90px]"
              : "w-full flex items-center md:justify-center md:w-[60px]"
          }
        >
          <Image
            src={companyLogo}
            width={100}
            height={100}
            alt="company logo"
            className={
              companyLink
                ? "w-[60px] md:w-[90px] bg-theme-white p-1 rounded-full"
                : "w-[60px] md:w-[60px] bg-theme-white p-1 rounded-full"
            }
          />
        </div>
        <div
          className={
            companyLink
              ? "w-full md:w-[calc(100%-80px)]"
              : "w-full md:w-[calc(100%-60px)]"
          }
        >
          <h3 className="text-base md:text-lg font-semibold">{designation}</h3>
          <div className="mb-2 flex justify-between flex-wrap items-baseline">
            {companyLink ? (
              <h4 className="font-medium text-sm underline">
                <Link target="_blank" href={companyLink}>
                  {companyName}
                </Link>
              </h4>
            ) : (
              <h4 className="font-medium text-sm">{companyName}</h4>
            )}

            <h4 className="text-xs">{location}</h4>
          </div>
          {description ? (
            <p className="text-xs tracking-normal">{description}</p>
          ) : null}
          {skills ? (
            <div className="flex justify-start items-center gap-1 mt-2">
              <p className="hidden md:block text-xs font-medium">hands on: </p>
              {skills.map((item, idx) => (
                <Image
                  key={idx}
                  src={item}
                  width={100}
                  height={100}
                  alt="skills"
                  className="w-[30px] md:w-[35px]"
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
