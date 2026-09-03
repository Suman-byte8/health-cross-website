import { Link } from "react-router-dom";
import { Award, Users } from "lucide-react";
import { aboutItemsData } from "../../data/homeData";
import aboutImg from "../../assets/about_image.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-10 lg:py-14">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 bg-white rounded-[24px] border border-gray-200 shadow-lg overflow-hidden">
          <div className="relative p-4 sm:p-6 flex flex-col justify-center">
            <div className="relative overflow-hidden rounded-[20px] aspect-[3/4] lg:aspect-auto lg:h-full min-h-[360px] lg:min-h-[480px] bg-[#f4f8f6]">
              <img
                src={aboutImg}
                alt="About Health Cross"
                className="h-full w-full object-cover transition duration-500"
              />
              <div className="absolute top-4 right-4 rounded-2xl bg-white/85 px-4 py-3 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0d7055] text-white shrink-0">
                    <Users className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-bold">
                      1,000+ Families Trust Us
                    </div>
                    <div className="text-xs text-[#1a1a1a]/60">
                      Across Kolkata &amp; suburbs
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 rounded-2xl bg-white/85 px-4 py-3 shadow-lg backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0d7055] text-white shrink-0">
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-bold">
                      3+ Years Excellence
                    </div>
                    <div className="text-xs text-[#1a1a1a]/60">
                      Kolkata's trusted home healthcare
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-10 flex flex-col justify-center">
            <div className="text-xs font-bold tracking-[0.14em] text-[#0d7055] flex items-center gap-2">
              <span className="h-6 w-[2px] bg-[#0d7055]" /> ABOUT HEALTH CROSS
            </div>
            <h2 className="mt-3 text-[26px] font-bold tracking-tight lg:text-[32px]">
              What Makes Us Different
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#1a1a1a]/65">
              At Health Cross Organization, care is not a service — it's a
              relationship. We combine clinical rigor with human warmth to keep
              families together, safe and supported at home.
            </p>
            <ul className="mt-6 space-y-3.5">
              {aboutItemsData.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex gap-3"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e5f3ef] text-[#0d7055] shrink-0">
                      <ItemIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="font-semibold text-sm">{item.label}</div>
                      <div className="text-sm leading-5 text-[#1a1a1a]/60">
                        {item.description}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-[#0d7055] px-6 py-3 text-sm font-semibold text-[#ffffff] hover:bg-[#0a5243] transition"
              >
                Book Consultation
              </Link>
              <a
                href="tel:+919732443744"
                className="rounded-full border border-[#0d7055]/15 bg-white px-6 py-3 text-sm font-semibold text-[#1a1a1a] hover:bg-[#0d7055]/5 transition"
              >
                Talk to Us
              </a>
            </div>
            <p className="mt-3 text-xs text-[#1a1a1a]/45">
              Response within ~30 minutes • No obligation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
