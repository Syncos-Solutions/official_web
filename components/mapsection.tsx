import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

const ModernMapSection = () => {
  const offices = [
    {
      city: "Darwin",
      country: "Australia",
      address: "Level 3, 456 Smith Street Mall",
      zipcode: "NT 0800",
      phone: "+61 8 1234 5678",
      email: "darwin@syncos.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
      timezone: "ACST (UTC+9:30)",
      isHeadquarters: true,
      coordinates: { lat: -12.4634, lng: 130.8456 },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.123456789!2d130.8456!3d-12.4634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI3JzQ4LjIiUyAxMzDCsDUwJzQ0LjEiRQ!5e0!3m2!1sen!2sau!4v1234567890",
      color: "blue"
    },
    {
      city: "Colombo",
      country: "Sri Lanka", 
      address: "No. 123, Galle Road, Colombo 03",
      zipcode: "00300",
      phone: "+94 11 234 5678",
      email: "colombo@syncos.com",
      hours: "Mon-Fri: 9:00 AM - 7:00 PM",
      timezone: "IST (UTC+5:30)",
      isHeadquarters: false,
      coordinates: { lat: 6.9271, lng: 79.8612 },
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.123456789!2d79.8612!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMzcuNiJOIDc5wrA1MSczOS4yIkU!5e0!3m2!1sen!2slk!4v1234567890",
      color: "emerald"
    }
  ]

  return (
    <section className="w-full py-24 bg-gradient-to-br from-slate-50/50 via-blue/500 to-purple/500 dark:from-slate-950/30 dark:via-blue/800 dark:to-black/900 relative overflow-hidden" id="Locations">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 text-black dark:from-slate-100 dark:via-blue-200 dark:to-emerald-200 bg-clip-text text-transparent">
            Visit Our Offices
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Strategic locations across Australia and Sri Lanka, providing comprehensive coverage and localized expertise for our global clientele.
          </p>
        </motion.div>

        {/* Maps Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              {/* Office Header */}
              <div className="mb-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold">{office.city}, {office.country}</h3>
                      {office.isHeadquarters && (
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs">
                          HQ
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{office.isHeadquarters ? 'Global Headquarters' : 'Regional Office'}</p>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="relative mb-6 group-hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/20 dark:border-slate-800/50">
                  {/* Map Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className={`${office.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white shadow-lg border-0`}>
                      <MapPin className="w-3 h-3 mr-1" />
                      {office.isHeadquarters ? 'Headquarters' : 'Office'}
                    </Badge>
                  </div>
                  
                  {/* Zoom Button */}
                  <div className="absolute top-4 right-4 z-10">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-0 shadow-lg hover:bg-white dark:hover:bg-slate-800"
                      onClick={() => window.open(`https://maps.google.com/?q=${office.coordinates.lat},${office.coordinates.lng}`, '_blank')}
                    >
                      <Navigation className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  </div>

                  {/* Google Map Embed */}
                  <iframe
                    src={office.mapUrl}
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-80 transition-all duration-300 group-hover:brightness-110"
                  ></iframe>
                </div>
              </div>

              {/* Office Information */}
              {/* <div className="space-y-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-800/50 shadow-lg">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className={`w-4 h-4 mt-0.5 ${office.color === 'blue' ? 'text-blue-500' : 'text-emerald-500'} flex-shrink-0`} />
                      <div>
                        <p className="font-medium text-foreground">{office.address}</p>
                        <p className="text-muted-foreground">{office.zipcode}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className={`w-4 h-4 ${office.color === 'blue' ? 'text-blue-500' : 'text-emerald-500'}`} />
                      <a 
                        href={`tel:${office.phone.replace(/\s/g, '')}`} 
                        className={`font-medium ${office.color === 'blue' ? 'text-blue-600 hover:text-blue-700' : 'text-emerald-600 hover:text-emerald-700'} dark:text-blue-400 dark:hover:text-blue-300 transition-colors`}
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className={`w-4 h-4 ${office.color === 'blue' ? 'text-blue-500' : 'text-emerald-500'}`} />
                      <a 
                        href={`mailto:${office.email}`} 
                        className={`font-medium ${office.color === 'blue' ? 'text-blue-600 hover:text-blue-700' : 'text-emerald-600 hover:text-emerald-700'} dark:text-blue-400 dark:hover:text-blue-300 transition-colors`}
                      >
                        {office.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className={`w-4 h-4 ${office.color === 'blue' ? 'text-blue-500' : 'text-emerald-500'}`} />
                      <span className="text-foreground font-medium">{office.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 ${office.color === 'blue' ? 'bg-blue-500' : 'bg-emerald-500'} rounded-full animate-pulse`}></div>
                      <span className="text-sm text-muted-foreground">{office.timezone}</span>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`rounded-full ${office.color === 'blue' ? 'border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-950' : 'border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-950'} transition-all duration-300`}
                      onClick={() => window.open(`https://maps.google.com/?q=${office.coordinates.lat},${office.coordinates.lng}`, '_blank')}
                    >
                      <Navigation className="w-3 h-3 mr-1" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* Quick Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-white/60 to-slate-50/60 dark:from-slate-900/60 dark:to-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-800/50 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-1">Need Immediate Assistance?</h3>
              <p className="text-sm text-muted-foreground">Our team is available 24/7 for emergency support and consultations</p>
            </div>
            <div className="flex gap-3">
              {/* <Button 
                className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0"
                onClick={() => window.open('tel:+61812345678', '_blank')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button> */}
              <Button 
                variant="outline" 
                className="rounded-full border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-950"
                onClick={() => window.open('mailto:info@syncossolutions.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ModernMapSection