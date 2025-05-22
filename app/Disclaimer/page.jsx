'use client'; 
import React from "react";

import { useState } from 'react';

const Disclaimer = () => {
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!accepted) {
      setError(true);
    } else {
   
      alert('Terms accepted. Proceeding...');
    }}

  return (
    <div className="min-h-screen bg-gray-900/30 px-6 py-12 sm:px-20 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Disclaimer</h1>
          <div className="w-16 h-1 bg-teal-400 mt-2"></div>
        </div>

        <div className="space-y-10 text-base leading-relaxed">
          <section>
            <h2 className="font-semibold text-2xl mb-2 ">
              Online Access and Terms of Use Agreement
            </h2>
            <p>
              Welcome to Run Alpha’s website. By clicking “accept” and accessing
              this website (the “Site”), you agree that your access to and use
              of the Site, including any text, images, graphics, user
              interfaces, information, data, tools, products, services,
              software, code, and other content (collectively, the “Content”)
              provided by Run Alpha shall be exclusively governed by the terms
              and conditions set forth in this Online Access and Terms of Use
              Agreement (the “Agreement”). ...
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">
              2. Purpose of the Site: No Offer of Securities; No Advice
            </h2>
            <p>
              The Site is intended to provide an overview of Run Alpha and its
              products, and is for general information purposes only. The Site
              is not intended to provide investment, accounting, tax, or legal
              advice...
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">
              3. Summary of Risk Factors
            </h2>
            <p>
              Investments in hedge funds and other investment funds, including
              those managed by Run Alpha and such funds’ investments in any
              other funds ... intended only for experienced and sophisticated
              investors.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">
              4. Confidentiality, Intellectual Property Rights
            </h2>
            <p>
              Run Alpha owns and maintains this Site. The Content is the
              intellectual property of Run Alpha...
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">5. Disclaimers</h2>
            <p>
              The Site is operated by Run Alpha on an "AS IS," "AS AVAILABLE"
              basis, without representations or warranties of any kind...
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-2xl mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              Under no circumstances, shall Run Alpha and its affiliates or any
              of their employees, directors, officers, agents, vendors, or
              suppliers be liable for any direct or indirect losses or damages
              arising out of or in connection with the use of or inability to
              use the Site.
            </p>
          </section>
          <section>
            <h2 className="font-semibold text-2xl mb-2">7. No Endorsements</h2>
            <p>
              References on the Site to any names, marks, products, or services
              of third parties or hypertext links to third-party sites or
              information do not constitute or imply an endorsement by Run
              Alpha.
            </p>
          </section>
          <section>
            <h2 className="font-semibold text-2xl mb-2">
              8. Monitoring the Site
            </h2>
            <p>
              Run Alpha reserves the right to monitor and record activity on the
              Site at its sole discretion and may report any activity that it
              suspects may violate any law or regulation as it deems
              appropriate.
            </p>
          </section>
          <section>
            <h2 className="font-semibold text-2xl mb-2">9. Law</h2>
            <p>
              This Agreement (including non-contractual disputes or claims)
              shall be governed by and construed in accordance with the laws of
              the Federal Republic of Nigeria.
            </p>
          </section>
          <section>
            <h2 className="font-semibold text-2xl mb-2">Please read and accept the disclaimer to proceed</h2>
           
      <div className="">
       

        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 border border-gray-400 rounded"
            checked={accepted}
            onChange={(e) => {
              setAccepted(e.target.checked);
              if (error) setError(false);
            }}
          />
          <span className="text-start">I accept the terms of the disclaimer.</span>
        </label>

        {error && <p className="text-red-600 text-sm">You must accept the terms to proceed.</p>}

        <button
          onClick={handleSubmit}
          className="mt-4 inline-block px-6 py-2 bg-teal-400 text-white font-semibold rounded hover:bg-teal-500 transition"
        >
          Proceed
        </button>
      </div>
    
          </section>


        
        
       
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
