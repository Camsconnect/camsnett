"use client";

import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Policy = () => {
  return (
    <Layout noPaddingTop>
      <section className="relative w-full py-24 md:py-32 overflow-hidden border-b border-gray-200 bg-[#FAF9F6]">
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none z-0">
          <svg width="300" height="300" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 50 H350 V350 H50 Z" stroke="#DA7756" strokeWidth="2" strokeDasharray="4 12" fill="none"/>
            <path d="M100 100 H300 V300 H100 Z" stroke="#DA7756" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/5 px-3 py-1 text-sm text-brand-orange font-medium mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-orange mr-2"></span>
            Legal & Trust
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6 tracking-tight">
            Company Policies
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Established to ensure a transparent, efficient, and mutually respectful partnership.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20 max-w-screen-lg">
        <Card className="border border-gray-200 shadow-sm rounded-xl overflow-hidden bg-white">
          <CardContent className="p-8 md:p-12 space-y-12 text-left font-sans">
            
            <div className="space-y-4">
              <h2 className="text-3xl font-serif text-gray-900 border-b border-gray-100 pb-2">
                1. Payment & Billing
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To ensure clarity and commitment from both parties, our payment
                structure is as follows:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>
                  <strong className="text-gray-900">Project Initiation Fee:</strong> We require a 50%
                  non-refundable deposit of the total project cost before any
                  work begins. This fee secures your project in our schedule and
                  covers the initial resources and creative energy allocated to
                  your project.
                </li>
                <li>
                  <strong className="text-gray-900">Final Payment:</strong> The remaining 50% is due upon
                  project completion, prior to the transfer of final
                  deliverables and intellectual property rights.
                </li>
                <li>
                  <strong className="text-gray-900">Invoicing:</strong> All invoices are payable within 15
                  days of receipt. Late payments may be subject to a monthly
                  interest charge of 2%.
                </li>
                <li>
                  <strong className="text-gray-900">Additional Work:</strong> Services requested that fall
                  outside the original scope of work will be considered
                  additional and billed at our standard hourly rate after
                  receiving your approval in writing.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif text-gray-900 border-b border-gray-100 pb-2">
                2. Revisions & Approvals
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are committed to creating work that you love and that
                achieves your goals. The revision process is a key part of our
                collaboration.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>
                  <strong className="text-gray-900">Included Revisions:</strong> Each project includes two
                  rounds of reasonable revisions. This process is most effective
                  when you provide consolidated feedback.
                </li>
                <li>
                  <strong className="text-gray-900">Additional Revisions:</strong> Further revisions
                  beyond the included rounds will be billed at our standard
                  hourly rate. We will always notify you and seek approval
                  before proceeding with work that will incur additional
                  charges.
                </li>
                <li>
                  <strong className="text-gray-900">Final Approval:</strong> We will ask for your formal
                  written approval (email is sufficient) on all final designs
                  and campaigns. Upon final approval, any further changes will
                  be considered a new request and billed accordingly.
                </li>
                <li>
                  <strong className="text-gray-900">Project Abandonment:</strong> A project will be
                  considered abandoned if we do not receive communication from
                  you for 30 consecutive days. In this case, the initial deposit
                  will be forfeited, and you will have no rights to any of the
                  work created.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif text-gray-900 border-b border-gray-100 pb-2">
                3. Intellectual Property & Copyright
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our goal is to provide you with the creative assets you need to
                succeed.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>
                  <strong className="text-gray-900">Ownership:</strong> Upon receipt of final payment,
                  your company will be granted full ownership and copyright of
                  the final, approved designs and deliverables.
                </li>
                <li>
                  <strong className="text-gray-900">Portfolio Rights:</strong> We reserve the right to
                  showcase the completed work in our portfolio, on our website,
                  and on social media for promotional purposes. We will, of
                  course, respect any sensitive information as outlined in our
                  confidentiality clause.
                </li>
                <li>
                  <strong className="text-gray-900">Unused Concepts:</strong> All concepts, drafts, and
                  designs that are not selected or paid for remain the
                  intellectual property of Camsnett. Any use of these unapproved
                  concepts would be a violation of our rights.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif text-gray-900 border-b border-gray-100 pb-2">
                4. Confidentiality & Non-Disclosure
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We understand the sensitive nature of your business information
                and are committed to protecting it.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>
                  <strong className="text-gray-900">Mutual Confidentiality:</strong> We agree to treat all
                  information you provide regarding your business, clients, and
                  marketing strategies as confidential. This includes any
                  proprietary information or trade secrets.
                </li>
                <li>
                  <strong className="text-gray-900">Non-Disclosure Agreement (NDA):</strong> We are happy
                  to sign a formal Non-Disclosure Agreement for your peace of
                  mind and to legally ensure the protection of your sensitive
                  data.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif text-gray-900 border-b border-gray-100 pb-2">
                5. Client Responsibilities
              </h2>
              <p className="text-gray-600 leading-relaxed">
                A successful partnership relies on clear communication and
                timely collaboration.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>
                  <strong className="text-gray-900">Provision of Materials:</strong> To ensure your
                  project stays on schedule, we ask that you provide all
                  necessary content, images, and information in a timely manner.
                  Delays in providing these materials may result in a revised
                  project timeline.
                </li>
                <li>
                  <strong className="text-gray-900">Single Point of Contact:</strong> You agree to appoint
                  a single representative with the authority to provide
                  instructions and approvals to ensure clear and efficient
                  communication.
                </li>
                <li>
                  <strong className="text-gray-900">Guarantee of Content:</strong> You guarantee that any
                  text, graphics, or other materials you provide for inclusion
                  in the project do not infringe on any copyrights or
                  trademarks.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif text-gray-900 border-b border-gray-100 pb-2">
                6. Service Guarantee & Termination
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We stand by the quality of our work and also need to ensure a
                professional working relationship.
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600">
                <li>
                  <strong className="text-gray-900">30-Day Money-Back Guarantee:</strong> If you are not
                  satisfied with our service within the first 30 days of our
                  engagement, you may request a refund of your initial deposit.
                  This guarantee is void if you have approved and received final
                  deliverables.
                </li>
                <li>
                  <strong className="text-gray-900">Termination by Us:</strong> We reserve the right to
                  suspend or terminate service if payments are not made on time.
                  We also reserve the right to terminate our agreement
                  immediately if any member of our team is subjected to
                  inappropriate, abusive, or disrespectful behavior.
                </li>
                <li>
                  <strong className="text-gray-900">Termination by You:</strong> You have the right to
                  terminate the project at any point by providing written
                  notice. In such a case, the initial 50% deposit will be
                  non-refundable to cover the work completed.
                </li>
              </ul>
            </div>

          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Policy;