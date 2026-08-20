import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const TermsAndConditions: React.FC = () => {
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
            Terms & <span className="text-[#FFD84D]">Conditions</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ delay: 0.2 }}
            className="relative text-sm sm:text-lg text-white/90 sm:text-white/75 max-w-2xl mx-auto mt-4 leading-relaxed font-medium"
          >
            Please read the terms and conditions carefully before using or registering on the Website or accessing any material, information or services.
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
                These terms and conditions of <a href="https://www.enticehr.com" className="text-[#0066FF] hover:underline font-bold">https://www.enticehr.com</a> (the “Website”) (as defined below) between Entice HR Solutions (hereinafter referred to as “Entice HR Solutions”) and the users / registrants of the Website. (“You” or “Your” or “Yourself” or “User”) describe the terms on which Entice HR Solutions offers you access to the Website and the Services (as defined below) through the Website.
              </p>
              <p className="text-[#3A3A3E] text-sm sm:text-base leading-relaxed mt-4 font-medium">
                Please read the terms and conditions carefully before using or registering on the Website or accessing any material, information or services through the website. Your use of the website or the services provided by the website shall signify your acceptance of the terms and conditions and your agreement to be legally bound by the same.
              </p>
            </div>

            <div className="space-y-12 text-sm sm:text-base text-[#505055] leading-relaxed font-medium relative z-10">
              
              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">1. Acceptance of terms</h2>
                <p>Entice HR Solutions provides its services to you, subject to the following terms and conditions, which may be updated by us from time to time without prior notice to you. You can review the most current version of the terms and conditions at any time. In addition, when using particular services of Entice HR Solutions, you and Entice HR Solutions shall be subject to any posted guidelines or rules applicable to such services which may be posted from time to time.</p>
                <p>All such guidelines or rules are hereby incorporated by reference into the terms and conditions. Entice HR Solutions also may offer other services from time to time that are governed by different Terms and Conditions.</p>
                <p>As you start using Entice HR Solutions, it is deemed that you have read and understood all the user related policies of Entice HR Solutions (means and includes Privacy Policy, Terms and Conditions Policy, Copyright Policy and any other policies added by Entice HR Solutions from time to time). In cases where Entice HR Solutions themselves add a member out of business requirement on its web portal/website and at such other places in pursuance of business requirement and duties under any agreement/contract and the member start using service/s as a result of that, the same shall be construed as acceptance of all the user related policies of Entice HR Solutions.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">2. Description of services</h2>
                <p>Entice HR Solutions currently provides users Recruitment, Consultation and Certification (the “Service”). You also understand and agree that the Service may include advertisements and that these advertisements are necessary for Entice HR Solutions to provide the Service.</p>
                <p>You also understand and agree that the Service may include certain communications from Entice HR Solutions, such as service announcements, administrative messages, newsletters, etc. and that these communications are considered a part of Entice HR Solutions membership and you will not be able to opt out of receiving them if you wish to use services provided by Entice HR Solutions. In case if you wish to opt out of receiving any communication by Entice HR Solutions, please contact us on <a href="mailto:info@enticehr.com" className="text-[#0066FF] hover:underline">info@enticehr.com</a>.</p>
                <p>Unless explicitly stated otherwise, any new features that augments or enhances the current Service, including the release of new version/s, shall be subject to this terms and conditions. You understand and agree that the Service is provided “AS-IS” and that Entice HR Solutions assumes no responsibility for the timeliness, deletion, misdelivery or failure to store any user communications or personalization settings.</p>
                <p>You are responsible for obtaining access to the Service and that access may involve third party fees (such as Internet service provider or airtime charges). You are responsible for those fees, including those fees associated with the display or delivery of advertisements. In addition, you must provide and are responsible for all equipment necessary to access the Service.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">3. Your registration obligations</h2>
                <p>In consideration of your use of the Service, you agree to: a. Provide true, accurate, current, and complete information about yourself as prompted by the Service’s registration form (such information being the “Registration Data”); and b. Maintain and promptly update the Registration Data to keep it true, accurate, current, and complete.</p>
                <p>If you provide any information that is untrue, inaccurate, not current or incomplete, or Entice HR Solutions has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, Entice HR Solutions has the right to suspend or terminate your account and refuse any and all current or future use of the Service (or any portion thereof).</p>
                <p>Entice HR Solutions is concerned about the safety and privacy of all its users, particularly of children. For this reason, we advise that parents of children under the age of 18 who wish to allow their children access to the Service should accompany them while using Entice HR Solutions.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">4. Privacy policy and Account Security</h2>
                <p>Registration data and certain other information about you are subject to our Privacy Policy. For more information, check our privacy policy on the website.</p>
                <p>You will receive a password and account designation upon completing the Service’s registration process. You are responsible for maintaining the confidentiality of the password and account, and are fully responsible for all activities that occur under your password or account.</p>
                <p>You agree to: a. Immediately notify Entice HR Solutions of any unauthorized use of your password or account or any other breach of security, and b. Ensure that you exit from your account at the end of each session. Entice HR Solutions cannot and will not be liable for any loss or damage arising from your failure to comply with this provision.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">5. Member conduct</h2>
                <p>You understand that all information, data, text, software, music, sound, photographs, graphics, video, messages or other materials (“Content”), whether publicly posted or privately transmitted, are the sole responsibility of the person from which such content is originated. This means that you, and not Entice HR Solutions, are entirely responsible for all content that you upload, post, email, transmit or otherwise make available via the Service. Entice HR Solutions does not control the Content posted via the Service and, as such, does not guarantee the accuracy, integrity or quality of such Content.</p>
                <p>Under no circumstances will Entice HR Solutions be liable in any way for any Content, including, but not limited to, for any errors or omissions in any Content, or for any loss or damage of any kind incurred as a result of the use of any Content posted, emailed, transmitted or otherwise made available via the Service.</p>
                <p>You agree to not use the Service to:</p>
                <ul className="list-disc pl-5 space-y-3 text-[#505055]">
                  <li>Defame, abuse, harass, threaten or otherwise violate the legal rights of others;</li>
                  <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity;</li>
                  <li>Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topic, name, material or information;</li>
                  <li>Upload any material/information that contain software or other tangible or intangible content protected by applicable intellectual property laws unless you own or control the rights thereto or have received all necessary consents;</li>
                  <li>Upload or distribute files that contain viruses, corrupted files, or any other similar software or programs that may damage the operation of the Service;</li>
                  <li>Engage in any activity that interferes with or disrupts access to the Service or the servers and networks which are connected to the Service;</li>
                  <li>Attempt to gain unauthorized access to any portion or feature of the Service, any other systems or networks connected to the Service, any servers on which our data is hosted, or to any other resources connected or related to Entice HR Solutions, by hacking, password mining or by any other illegitimate means;</li>
                  <li>Disrupt or interfere with the security of, or otherwise cause harm to the systems resources, accounts, passwords, servers or networks that are related to or connected to or accessible through the Service or any affiliated or linked sites;</li>
                  <li>Use the Service or any material or Content for any purpose that is unlawful or prohibited by this Policy, or to solicit the performance of any illegal activity or other activity which infringes the rights of Entice HR Solutions or other third parties;</li>
                  <li>Violate any code of conduct or other guidelines, which may be applicable for or to any particular Service;</li>
                  <li>Violate any applicable laws or regulations for the time being in force within or outside India; or violate this or any other applicable Policy of Entice HR Solutions contained herein or elsewhere; and</li>
                  <li>Reverse engineer, modify copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or software obtained from the Service.</li>
                </ul>
                <p className="pt-2">You can contact us on following email address along with appropriate evidences if you come across any objectionable content as aforementioned – <a href="mailto:info@enticehr.com" className="text-[#0066FF] hover:underline">info@enticehr.com</a>. We will ensure that the same shall be removed within 30 days if found appropriate to be removed.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">6. Content submitted or made available for inclusion on the service</h2>
                <p>Entice HR Solutions does not claim ownership over the content you submit or make available for inclusion on the Service. However, with respect to the content you submit or make available for inclusion on publicly accessible areas of the Service, you grant Entice HR Solutions the following world-wide, royalty free and non-exclusive license(s) –</p>
                <p>With respect to the content you submit or make available for inclusion on publicly accessible areas of Service, perpetual, irrevocable and fully sub-licensable license to use, distribute, reproduce, modify, adapt, publish, translate, publicly perform and publicly display such content (in whole or in part) and to incorporate such content into other works in any format or medium now known or later developed.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">7. Indemnity & No Resale of Service</h2>
                <p>You agree to indemnify and hold Entice HR Solutions, and its subsidiaries, affiliates, officers, agents, co-branders or other partners, and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of the content you submit, post, transmit or make available through the Service, your use of the Service, your connection to the Service, your violation of the terms and conditions, or your violation of any rights of another.</p>
                <p>You agree not to reproduce, duplicate, copy, sell, resell or exploit for any commercial purposes, any portion of the Service, use of the Service, or access to the Service.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">8. General practices, Modifications & Termination</h2>
                <p>You acknowledge that Entice HR Solutions may establish general practices and limits concerning use of the Service. You agree that Entice HR Solutions has no responsibility or liability for the deletion or failure to store any messages and other communications or other content maintained or transmitted by the Service.</p>
                <p>Entice HR Solutions reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that Entice HR Solutions shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.</p>
                <p>You agree that Entice HR Solutions, in its sole discretion, may terminate your password, account (or any part thereof) or use of the Service, and remove and discard any Content within the Service, for any reason, including, without limitation, for lack of use or if Entice HR Solutions believes that you have violated or acted inconsistently with the letter or spirit of Entice HR Solutions policies and processes.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">9. Dealings with advertisers & Links</h2>
                <p>Your correspondence or business dealings with, or participation in promotions of, advertisers found on or through the use of Entice HR Solutions Service, including payment and delivery of related goods or services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between you and such advertiser. You agree that Entice HR Solutions shall not be responsible or liable for any loss or damage of any sort incurred as the result of any such dealings.</p>
                <p>Entice HR Solutions or any third party on behalf of Entice HR Solutions may provide links to other World Wide Web sites or resources. Because Entice HR Solutions has no control over such sites and resources, you acknowledge and agree that Entice HR Solutions is not responsible for the availability of such external sites or resources, and does not endorse and is not responsible or liable for any Content, advertising, products, or other materials on or available from such sites or resources.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">10. Disclaimer of warranties & Limitation of liability</h2>
                <p>You expressly understand and agree that:</p>
                <ul className="list-disc pl-5 space-y-3 text-[#505055]">
                  <li>Your use of the Service is at your sole risk. The Service is provided on an “as is” and “as available” basis. Entice HR Solutions expressly disclaims all warranties of any kind, whether express or implied.</li>
                  <li>Entice HR Solutions makes no warranty that the service will meet your requirements, the service will be uninterrupted, timely, secure, or error-free.</li>
                  <li>Any material downloaded or otherwise obtained through the use of the service is done at your own discretion and risk.</li>
                </ul>
                <p className="pt-2">You expressly understand and agree that Entice HR Solutions shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses (even if Entice HR Solutions has been advised of the possibility of such damages), resulting from the use or the inability to use the service.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">11. Copyrights and Copyright Agents</h2>
                <p>Entice HR Solutions respect the intellectual property of others, and we ask our users to do the same. If you believe that your work has been copied in a way that constitutes copyright infringement, or your intellectual property rights have been otherwise violated, please provide us information.</p>
                <div className="bg-[#FBFBFD] p-6 rounded-3xl mt-6 space-y-2 text-sm sm:text-base border border-black/[0.04] shadow-inner">
                  <p><strong className="text-[#1D1D1F] font-bold">By Email:</strong> <a href="mailto:info@enticehr.com" className="text-[#0066FF] hover:underline">info@enticehr.com</a></p>
                  <p><strong className="text-[#1D1D1F] font-bold pt-2 block">By Post:</strong></p>
                  <p className="font-medium text-[#3A3A3E]">
                    Entice HR Solutions<br/>
                    47/65 Mettu street, Vadiveeswaram<br/>
                    Nagercoil - 629002<br/>
                    Tamil Nadu, India
                  </p>
                </div>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">12. Governing law and jurisdiction</h2>
                <p>This terms and conditions constitute the entire agreement between you and Entice HR Solutions and govern your use of the Service, superseding any prior agreements between you and Entice HR Solutions. The terms and conditions and the relationship between you and Entice HR Solutions shall be governed by the laws of India without regard to its conflict of law provisions.</p>
                <p>You and Entice HR Solutions agree to submit to the personal and exclusive jurisdiction of the courts located within <strong className="text-[#1D1D1F] font-bold">Nagercoil, Tamil Nadu, India</strong>. The failure of Entice HR Solutions to exercise or enforce any right or provision of the terms and conditions shall not constitute a waiver of such right or provision.</p>
              </section>

              <hr className="border-black/[0.06]" />

              <section className="space-y-4">
                <h2 className="text-2xl font-extrabold text-[#1D1D1F] tracking-tight">13. Feedback and Information</h2>
                <p>Any feedback you provide to this website shall be deemed to be non-confidential. Entice HR Solutions shall be free to use such information on an unrestricted basis. Further, by submitting the feedback, You represent and warrant that:</p>
                <ul className="list-disc pl-5 space-y-3 text-[#505055]">
                  <li>Your feedback does not contain confidential or proprietary information of you or of third parties;</li>
                  <li>Entice HR Solutions is not under any obligation of confidentiality, express or implied, with respect to the feedback;</li>
                  <li>You are not entitled to any compensation or reimbursement of any kind from Entice HR Solutions for the feedback under any circumstances.</li>
                </ul>
              </section>
              
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
