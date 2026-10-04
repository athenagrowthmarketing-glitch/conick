import React from 'react'
import { MapPin, CheckCircle2, Phone } from 'lucide-react'

export default function ServiceAreas() {
  const primaryCounties = [
    {
      county: "Spartanburg County",
      cities: ["Woodruff (HQ)", "Spartanburg", "Duncan", "Inman", "Boiling Springs", "Moore", "Reidville"]
    },
    {
      county: "Greenville County",
      cities: ["Greenville", "Simpsonville", "Greer", "Mauldin", "Fountain Inn", "Travelers Rest", "Taylors"]
    },
    {
      county: "Anderson County",
      cities: ["Anderson", "Powdersville", "Piedmont", "Pelzer", "Williamston", "Pendleton"]
    }
  ]

  return (
    <section id="service-areas" className="bg-[#FAF9F6] py-16 lg:py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B87333] font-semibold bg-[#B87333]/10 px-3 py-1 rounded-full border border-[#B87333]/20">
              Regional Coverage
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#11181C] tracking-tight mt-3 mb-4">
              Proudly Serving Upstate South Carolina.
            </h2>
            <p className="font-sans text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
              Headquartered at 449 Haddon Trail in Woodruff, Conick Construction provides timely site visits, local code compliance, and dedicated construction crews throughout the Upstate region.
            </p>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-3 mb-6">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#11181C]">
                <MapPin className="w-4 h-4 text-[#B87333] shrink-0" />
                <span><strong>Home Base:</strong> Woodruff, SC 29688</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#11181C]">
                <Phone className="w-4 h-4 text-[#B87333] shrink-0" />
                <span><strong>Direct Line:</strong> (781) 399-1906</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#11181C]">
                <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
                <span><strong>Radius:</strong> Greenville, Spartanburg & Anderson Counties</span>
              </div>
            </div>

            <p className="text-xs text-stone-500 font-sans italic">
              *Not sure if your property is within our travel radius? Give Renato a call or submit the estimate form with your zip code.
            </p>
          </div>

          {/* Right Column: County & City Badges */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {primaryCounties.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 border border-stone-200/90 shadow-sm hover:border-[#B87333]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B87333]" />
                    <h3 className="font-heading font-bold text-base text-[#11181C]">
                      {item.county}
                    </h3>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {item.cities.map((city, cIdx) => (
                      <li key={cIdx} className="text-xs font-sans text-[#4A5860] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-stone-300" />
                        <span>{city}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-100 text-[10px] font-mono text-[#B87333] font-semibold uppercase">
                  Active Service Area
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
