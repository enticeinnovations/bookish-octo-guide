import React, { useEffect } from 'react';

export const TermsAndConditions: React.FC = () => {
  // Ensure the page loads at the very top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBFBFD] font-sans selection:bg-[#0066FF]/20">
      
      {/* Page Header */}
      <div 
        className="relative pt-32 pb-20 px-6 sm:px-12 overflow-hidden text-center"
        style={{ 
          background: 'radial-gradient(circle at 100% 100%, #E6EFFF 0%, #4F81FF 20%, #0F67FF 50%, #051A59 100%)' 
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-white/80 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md inline-block mb-2">
            Legal & Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Terms & Conditions
          </h1>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Please read the terms and conditions carefully before using or registering on the Website or accessing any material, information or services.
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 py-16">
        
        {/* Intro */}
        <div className="mb-12 p-6 bg-white rounded-3xl border border-black/[0.04] shadow-sm">
          <p className="text-[#86868B] text-sm leading-relaxed">
            These terms and conditions of <a href="https://www.enticehr.com" className="text-[#0066FF] hover:underline">https://www.enticehr.com</a> (the “Website”) between <strong className="text-[#1D1D1F]">Entice HR Solutions</strong> (hereinafter referred to as “Entice HR Solutions”) and the users / registrants of the Website. (“You” or “Your” or “Yourself” or “User”) describe the terms on which Entice HR Solutions offers you access to the Website and the Services through the Website.
          </p>
          <p className="text-[#86868B] text-sm leading-relaxed mt-4">
            Your use of the website or the services provided by the website shall signify your acceptance of the terms and conditions and your agreement to be legally bound by the same.
          </p>
        </div>

        <div className="space-y-10 text-sm text-[#86868B] leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1D1D1F] tracking-tight">1. Acceptance of Terms</h2>
            <p>
              Entice HR Solutions provides its services to you, subject to the following terms and conditions, which may be updated by us from time to time without prior notice to you. You can review the most current version of the terms and conditions at any time. In addition, when using particular services of Entice HR Solutions, you and Entice HR Solutions shall be subject to any posted guidelines or rules applicable to such services which may be posted from time to time.
            </p>
            <p>
              As you start using Entice HR Solutions, it is deemed that you have read and understood all the user-related policies of Entice HR Solutions (Privacy Policy, Terms and Conditions Policy, Copyright Policy, etc.). 
            </p>
          </section>

          <hr className="border-black/[0.06]" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1D1D1F] tracking-tight">2. Description of Services</h2>
            <p>
              Entice HR Solutions currently provides users Executive Search & Permanent Recruitment Services (the “Service”). You also understand and agree that the Service may include certain communications from Entice HR Solutions, such as service announcements, administrative messages, and newsletters.
            </p>
            <p>
              In case if you wish to opt out of receiving any communication by Entice HR Solutions, please contact us on <a href="mailto:info@enticehr.com" className="text-[#0066FF]">info@enticehr.com</a>.
            </p>
          </section>

          <hr className="border-black/[0.06]" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1D1D1F] tracking-tight">3. Your Registration Obligations</h2>
            <p>
              In consideration of your use of the Service, you agree to: a. Provide true, accurate, current, and complete information about yourself; and b. Maintain and promptly update the Registration Data. If Entice HR Solutions has reasonable grounds to suspect that such information is untrue or incomplete, we have the right to suspend or terminate your account.
            </p>
          </section>

          <hr className="border-black/[0.06]" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1D1D1F] tracking-tight">4. Member Conduct</h2>
            <p>You agree to not use the Service to:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#1D1D1F]/70">
              <li>Defame, abuse, harass, threaten or otherwise violate the legal rights of others;</li>
              <li>Impersonate any person or entity, or falsely state or misrepresent your affiliation;</li>
              <li>Upload any material/information that contain software protected by intellectual property laws unless you own or control the rights;</li>
              <li>Upload or distribute files that contain viruses, corrupted files, or any other similar software;</li>
              <li>Attempt to gain unauthorized access to any portion or feature of the Service by hacking or password mining;</li>
              <li>Violate any applicable laws or regulations for the time being in force within or outside India.</li>
            </ul>
            <p className="mt-4">
              You can contact us on <a href="mailto:info@enticehr.com" className="text-[#0066FF]">info@enticehr.com</a> along with appropriate evidences if you come across any objectionable content. We will ensure that the same shall be removed within 30 days if found appropriate.
            </p>
          </section>

          <hr className="border-black/[0.06]" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1D1D1F] tracking-tight">5. Indemnity & Limitation of Liability</h2>
            <p>
              You agree to indemnify and hold Entice HR Solutions, and its subsidiaries, affiliates, officers, and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of the content you submit or your violation of the terms.
            </p>
            <p>
              You expressly understand and agree that Entice HR Solutions shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses.
            </p>
          </section>

          <hr className="border-black/[0.06]" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1D1D1F] tracking-tight">6. Copyrights and Copyright Agents</h2>
            <p>If you believe that your work has been copied in a way that constitutes copyright infringement, please provide us with a description of the copyrighted work, its location, your contact details, and a statement of good faith belief.</p>
            <div className="bg-[#F5F5F7] p-4 rounded-2xl mt-4 space-y-1 text-sm border border-black/5">
              <p><strong className="text-[#1D1D1F]">By Email:</strong> info@enticehr.com</p>
              <p><strong className="text-[#1D1D1F]">By Post:</strong></p>
              <p>Entice HR Solutions</p>
              <p>47/65 Mettu street, Vadiveeswaram</p>
              <p>Nagercoil - 629002</p>
              <p>Tamil Nadu, India</p>
            </div>
          </section>

          <hr className="border-black/[0.06]" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#1D1D1F] tracking-tight">7. Governing Law and Jurisdiction</h2>
            <p>
              The terms and conditions and the relationship between you and Entice HR Solutions shall be governed by the laws of India without regard to its conflict of law provisions. You and Entice HR Solutions agree to submit to the personal and exclusive jurisdiction of the courts located within <strong className="text-[#1D1D1F]">Nagercoil, Tamil Nadu, India</strong>.
            </p>
          </section>
          
        </div>
      </div>
    </div>
  );
};