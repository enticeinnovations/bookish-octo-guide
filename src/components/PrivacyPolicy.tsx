import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const PrivacyPolicy: React.FC = () => {
  // Ensure the page loads at the very top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Background interaction states matching the rest of the site
  const [mousePos, setMousePos] = useState({ normX: 0, normY: 0, rawX: -1000, rawY: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const normX = (e.clientX / window.innerWidth - 0.5) * 2;
    const normY = (e.clientY / window.innerHeight - 0.5) * 2;
    setMousePos({ normX, normY, rawX: e.clientX, rawY: e.clientY });
    setIsHovering(true);
  };

  const handleMouseLeave = () => setIsHovering(false);

  const { scrollYProgress } = useScroll();
  const svgOpacity = useTransform(scrollYProgress, [0, 0.12, 0.85, 1], [0.6, 0.5, 0.35, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.12, 0.85, 1], [isHovering ? 1 : 0, isHovering ? 0.4 : 0, isHovering ? 0.4 : 0, 0]);

  return (
    <div 
      className="w-full max-w-[100vw] min-h-screen text-[#1D1D1F] relative z-0 bg-white [overflow-x:clip]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* GLOBAL SCROLLING GRADIENT */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none z-[-2]"
        style={{
          background: 'linear-gradient(to bottom, #051A59 0%, #0F67FF 16%, #3E7DFF 28%, #7FA6FF 38%, #C3D5FF 48%, #FFFFFF 58%, #FFFFFF 100%)'
        }}
      />

      {/* FIXED DYNAMIC LINES & CURSOR GLOW */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
        style={{ opacity: svgOpacity }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {[200, 500, 900, 1200].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="800" stroke="#FFD84D" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="2 6" />
          ))}
          <motion.path 
            animate={{ d: `M -100 100 Q ${600 + mousePos.normX * 500} ${300 + mousePos.normY * 400} 1500 700` }}
            transition={{ type: 'spring', stiffness: 40, damping: 20 }}
            stroke="#0F67FF" strokeOpacity="0.4" strokeWidth="3" fill="none" 
          />
          <motion.path 
            animate={{ d: `M 200 -100 Q ${800 + mousePos.normX * 800} ${500 + mousePos.normY * 300} 1500 400` }}
            transition={{ type: 'spring', stiffness: 60, damping: 25 }}
            stroke="#0F67FF" strokeOpacity="0.28" strokeWidth="2" fill="none" strokeDasharray="4 4"
          />
          <motion.path 
            animate={{ d: `M -100 750 Q ${700 - mousePos.normX * 600} ${400 - mousePos.normY * 350} 1500 -100` }}
            transition={{ type: 'spring', stiffness: 50, damping: 25 }}
            stroke="#FFD84D" strokeOpacity="0.55" strokeWidth="3" fill="none" 
          />
          <motion.path 
            animate={{ d: `M -100 500 Q ${500 - mousePos.normX * 400} ${200 - mousePos.normY * 500} 1000 -100` }}
            transition={{ type: 'spring', stiffness: 30, damping: 15 }}
            stroke="#FFD84D" strokeOpacity="0.25" strokeWidth="6" fill="none" 
          />
          <motion.path 
            animate={{ d: `M -100 350 Q ${700 + mousePos.normX * 450} ${650 + mousePos.normY * 450} 1500 900` }}
            transition={{ type: 'spring', stiffness: 35, damping: 15 }}
            stroke="#FF6B6B" strokeOpacity="0.45" strokeWidth="3" fill="none" 
          />
        </svg>

        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)',
            mixBlendMode: 'screen',
            opacity: glowOpacity
          }}
          animate={{
            left: mousePos.rawX - 200,
            top: mousePos.rawY - 200,
          }}
          transition={{ type: 'spring', stiffness: 140, damping: 22, mass: 0.6 }}
        />
      </motion.div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="relative pt-[85px] pb-6 md:pb-12 px-4 sm:px-8 max-w-7xl mx-auto text-center overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ delay: 0.1 }}
            className="relative mt-12 md:mt-24 text-[35px] sm:text-6xl font-extrabold text-white tracking-tight leading-[1.1] sm:leading-tight drop-shadow-sm"
          >
            Privacy <span className="text-[#FFD84D]">Policy</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ delay: 0.2 }}
            className="relative text-sm sm:text-lg text-white/90 sm:text-white/75 max-w-2xl mx-auto mt-4 leading-relaxed font-medium"
          >
            We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website.
          </motion.p>
        </section>

        {/* MAIN CONTENT BODY IN GLASSY CARD */}
        <section className="py-8 pb-24 px-4 sm:px-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="p-8 sm:p-14 bg-white/95 backdrop-blur-2xl border border-black/5 rounded-[2.25rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* Intro */}
            <div className="mb-12 p-6 sm:p-8 bg-[#FBFBFD] rounded-3xl border border-black/[0.04] shadow-inner relative z-10">
              <p className="text-[#3A3A3E] text-sm sm:text-base leading-relaxed font-medium">
                It is Entice HR Solutions’ policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a href="https://www.enticehr.com" className="text-[#0066FF] hover:underline font-bold">https://www.enticehr.com</a> (hereinafter, “us”, “we”, or “https://www.enticehr.com”). 
              </p>
              <p className="text-[#3A3A3E] text-sm sm:text-base leading-relaxed mt-4 font-medium">
                We have adopted this privacy policy (“Privacy Policy”) to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.
              </p>
              <p className="text-[#3A3A3E] text-sm sm:text-base leading-relaxed mt-4 font-medium">
                This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.
              </p>
            </div>

            <div className="space-y-12 text-sm sm:text-base text-[#505055] leading-relaxed font-medium relative z-10">
              
              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">Website Visitors</h2>
                <p>Like most website operators, Entice HR Solutions collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Entice HR Solutions’ purpose in collecting non-personally identifying information is to better understand how Entice HR Solutions’ visitors use its website. From time to time, Entice HR Solutions may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.</p>
                <p>Entice HR Solutions also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on https://www.enticehr.com blog posts. Entice HR Solutions only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally- identifying information as described below.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">Gathering of Personally-Identifying Information</h2>
                <p>Certain visitors to Entice HR Solutions’ websites choose to interact with Entice HR Solutions in ways that require Entice HR Solutions to gather personally-identifying information. The amount and type of information that Entice HR Solutions gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at https://www.enticehr.com to provide a username and email address.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">Security</h2>
                <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">Advertisements</h2>
                <p>Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Entice HR Solutions and does not cover the use of cookies by any advertisers.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">Links To External Sites</h2>
                <p>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.</p>
                <p>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">Google AdWords for remarketing</h2>
                <p>https://www.enticehr.com uses the remarketing services to advertise on third party websites (including Google) to previous visitors to our site. It could mean that we advertise to previous visitors who haven’t completed a task on our site, for example using the contact form to make an enquiry. This could be in the form of an advertisement on the Google search results page, or a site in the Google Display Network. Third-party vendors, including Google, use cookies to serve ads based on someone’s past visits. Of course, any data collected will be used in accordance with our own privacy policy and Google’s privacy policy.</p>
                <p>You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you want to you can opt out of interest-based advertising entirely by cookie settings or permanently using a browser plugin.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">Protection of Certain Personally-Identifying Information</h2>
                <p>Entice HR Solutions discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Entice HR Solutions’ behalf or to provide services available at Entice HR Solutions’ website, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Entice HR Solutions’ website, you consent to the transfer of such information to them. Entice HR Solutions will not rent or sell potentially personally-identifying and personally-identifying information to anyone.</p>
                <p>Other than to its employees, contractors and affiliated organizations, as described above, Entice HR Solutions discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when Entice HR Solutions believes in good faith that disclosure is reasonably necessary to protect the property or rights of Entice HR Solutions, third parties or the public at large.</p>
                <p>If you are a registered user of https://www.enticehr.com and have supplied your email address, Entice HR Solutions may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what’s going on with Entice HR Solutions and our products. We primarily use our blog to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. Entice HR Solutions takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">Aggregated Statistics</h2>
                <p>Entice HR Solutions may collect statistics about the behavior of visitors to its website. Entice HR Solutions may display this information publicly or provide it to others. However, Entice HR Solutions does not disclose your personally-identifying information.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">Affiliate Disclosure</h2>
                <p>This site uses affiliate links and does earn a commission from certain links. This does not affect your purchases or the price you may pay.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">Cookies</h2>
                <p>To enrich and perfect your online experience, Entice HR Solutions uses “Cookies”, similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.</p>
                <p>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Entice HR Solutions uses cookies to help Entice HR Solutions identify and track visitors, their usage of https://www.enticehr.com, and their website access preferences. Entice HR Solutions visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Entice HR Solutions’ websites, with the drawback that certain features of Entice HR Solutions’ websites may not function properly without the aid of cookies.</p>
                <p>By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Entice HR Solutions’ use of cookies.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">E-commerce</h2>
                <p>Those who engage in transactions with Entice HR Solutions – by purchasing Entice HR Solutions’ services or products, are asked to provide additional information, including as necessary the personal and financial information required to process those transactions. In each case, Entice HR Solutions collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with Entice HR Solutions. Entice HR Solutions does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">Business Transfers</h2>
                <p>If Entice HR Solutions, or substantially all of its assets, were acquired, or in the unlikely event that Entice HR Solutions goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of Entice HR Solutions may continue to use your personal information as set forth in this policy.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">Privacy Policy Changes</h2>
                <p>Although most changes are likely to be minor, Entice HR Solutions may change its Privacy Policy from time to time, and in Entice HR Solutions’ sole discretion. Entice HR Solutions encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
              </section>

              {/* Address Section Moved to the Bottom */}
              <div className="bg-[#FBFBFD] p-6 rounded-3xl mt-12 space-y-2 text-sm sm:text-base border border-black/[0.04] shadow-inner">
                <h2 className="text-lg font-extrabold text-[#1D1D1F] tracking-tight mb-4">Headquarters’ Address</h2>
                <p className="font-medium text-[#3A3A3E]">
                  Entice HR Solutions<br/>
                  47/65 Mettu street, Vadiveeswaram<br/>
                  Nagercoil - 629002<br/>
                  Tamil Nadu, India
                </p>
              </div>
              
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};