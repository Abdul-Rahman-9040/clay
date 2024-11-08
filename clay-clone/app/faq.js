"use client"; // Ensure this is at the top

import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Clay?",
      answer: `Clay helps go-to-market teams uplevel their data enrichment and automate personalized outreach. You can start with a list of leads, either prospected through Clay or from your own CRM, and follow the steps below.

      **Step 1: Basic Data Enrichment & Cleaning**
      Clay combines 75+ data enrichment tools into one marketplace, resulting in superior data coverage and quality—on anything from contact information to company firmographics. Our customers have tripled data coverage vs. providers like Zoominfo while cutting costs by a magnitude of ten or twenty.

      **Step 2: AI Data Enrichment**
      We enable you to use AI to do research that previously required manual SDR work, including reading and analyzing webpages, PDFs, and Google searches for specific information.

      **Step 3: Automated Outreach**
      Once you’ve nailed your data enrichment, you can use AI to craft relevant, compelling messaging based on that data. Everything syncs back to your CRM, allowing your team to go from campaign idea to execution in seconds.
      `
    },
    {
      question: "What kind of companies use Clay?",
      answer: `We serve GTM teams of all sizes, ranging from large enterprise companies to SMBs, startups, solo founders, outbound agencies, and more. We have thousands of users and hundreds of paying customers, including Ramp, Pave, Verkada, and more.`
    },
    {
      question: "Who on my team should use Clay?",
      answer: `Here are a few typically successful team setups we’ve seen with Clay.

      **At enterprise companies:**
      - GTM leaders decide the criteria for lead enrichment, segmentation, and outreach.
      - A GTM operations team member implements the above criteria into Clay. (Clay is the team’s “enrichment layer,” which syncs to the CRM to keep data live and accurate).
      - SDRs do not interface directly with Clay. Instead, they benefit from already-curated leads, enriched data, personalizations in their CRMs.
        For example, one client’s SDRs simply click a button in Salesforce to fetch enriched data from Clay, including relevant a company summary, relevant contacts, and a draft message.

      **At startups:**
      - A growth lead often implements Clay and runs all of the company’s outreach single-handedly. Once the company reaches some level of volume, these startups hire a sales team member to help with live conversations.

      **At outbound agencies:**
      - One founder often sets up and runs Clay campaigns on behalf of many clients.
      `
    }
  ];

  return (
    <section className="max-w-full mx-auto px-6 py-12 h-screen">
      <div className="flex flex-col md:flex-row md:h-full">
        
        {/* Left side - Title */}
        <div className="flex justify-start items-start md:w-2/5">
          <h1 className="font-bold text-[60px] ml-0 md:ml-[120px]">FAQ</h1>
        </div>

        {/* Right side - FAQ items */}
        <div className="text-left md:w-3/5">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 w-full">
              <button
                className="flex justify-between items-center w-full p-4 mb-2 focus:outline-none border-b-2 border-gray-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{ height: '60px', border: 'none', backgroundColor: 'transparent' }}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className="transition-all duration-300 overflow-hidden"
                style={{
                  maxHeight: openIndex === index ? '600px' : '0',
                  padding: openIndex === index ? '16px' : '0', // Adjust padding when open
                }}
              >
                <p className="text-gray-700 whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
