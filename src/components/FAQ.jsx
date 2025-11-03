import React from 'react'

const FAQ = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-[#000000] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#858383] mb-16">
              Here whatever in your mind get answered?
            </p>
          </div>

          <div className="rounded-2xl bg-[#FAFAFA] max-w-6xl mx-auto border border-[#F1F0F0] p-4">
            <div tabIndex={0} className="collapse collapse-arrow">
              <div className="collapse-title font-light text-[#000000] text-lg">What is Resumon?</div>
              <div className="collapse-content text-sm text-[#858383]">
                Resumon is an online resume builder that hepls you craete a professional looking resume in minutes. Just fill in your details,choose a template, and download your resume instantly.
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow rounded-none border-t border-[#D9D9D9]">
              <div className="collapse-title font-light text-[#000000] text-lg">Do I need to create an account to use Resumon?</div>
              <div className="collapse-content text-sm text-[#858383]">
                You can start building your resume without an account, but creating one allows you to save, edit, and access your resumes anytime.
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow rounded-none border-t border-[#D9D9D9]">
              <div className="collapse-title font-light text-[#000000] text-lg">Can I download my Resume for free?</div>
              <div className="collapse-content text-sm text-[#858383]">
                Yes, you can download your resume for free in a professional format without any hidden charges.
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow rounded-none border-t border-[#D9D9D9]">
              <div className="collapse-title font-light text-[#000000] text-lg">Is my data safe on Resumon?</div>
              <div className="collapse-content text-sm text-[#858383]">
                Yes, your data is completely safe. Resumon securely stores your information and never shares it with third parties.
              </div>
            </div>
          </div>
        </section>
  )
}

export default FAQ
