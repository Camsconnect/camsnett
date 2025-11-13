"use client";

import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Policy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 max-w-screen-lg space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Company Policies
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Established to ensure a transparent, efficient, and mutually
            respectful partnership.
          </p>
        </section>

        <Card>
          <CardContent className="p-8 space-y-8 text-left">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                1. Payment & Billing
              </h2>
              <p className="text-muted-foreground mb-4">
                To ensure clarity and commitment from both parties, our payment
                structure is as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Project Initiation Fee:</strong> We require a 50%
                  non-refundable deposit of the total project cost before any
                  work begins. This fee secures your project in our schedule and
                  covers the initial resources and creative energy allocated to
                  your project.
                </li>
                <li>
                  <strong>Final Payment:</strong> The remaining 50% is due upon
                  project completion, prior to the transfer of final
                  deliverables and intellectual property rights.
                </li>
                <li>
                  <strong>Invoicing:</strong> All invoices are payable within 15
                  days of receipt. Late payments may be subject to a monthly
                  interest charge of 2%.
                </li>
                <li>
                  <strong>Additional Work:</strong> Services requested that fall
                  outside the original scope of work will be considered
                  additional and billed at our standard hourly rate after
                  receiving your approval in writing.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                2. Revisions & Approvals
              </h2>
              <p className="text-muted-foreground mb-4">
                We are committed to creating work that you love and that
                achieves your goals. The revision process is a key part of our
                collaboration.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Included Revisions:</strong> Each project includes two
                  rounds of reasonable revisions. This process is most effective
                  when you provide consolidated feedback.
                </li>
                <li>
                  <strong>Additional Revisions:</strong> Further revisions
                  beyond the included rounds will be billed at our standard
                  hourly rate. We will always notify you and seek approval
                  before proceeding with work that will incur additional
                  charges.
                </li>
                <li>
                  <strong>Final Approval:</strong> We will ask for your formal
                  written approval (email is sufficient) on all final designs
                  and campaigns. Upon final approval, any further changes will
                  be considered a new request and billed accordingly.
                </li>
                <li>
                  <strong>Project Abandonment:</strong> A project will be
                  considered abandoned if we do not receive communication from
                  you for 30 consecutive days. In this case, the initial deposit
                  will be forfeited, and you will have no rights to any of the
                  work created.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                3. Intellectual Property & Copyright
              </h2>
              <p className="text-muted-foreground mb-4">
                Our goal is to provide you with the creative assets you need to
                succeed.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Ownership:</strong> Upon receipt of final payment,
                  your company will be granted full ownership and copyright of
                  the final, approved designs and deliverables.
                </li>
                <li>
                  <strong>Portfolio Rights:</strong> We reserve the right to
                  showcase the completed work in our portfolio, on our website,
                  and on social media for promotional purposes. We will, of
                  course, respect any sensitive information as outlined in our
                  confidentiality clause.
                </li>
                <li>
                  <strong>Unused Concepts:</strong> All concepts, drafts, and
                  designs that are not selected or paid for remain the
                  intellectual property of Camsnett. Any use of these unapproved
                  concepts would be a violation of our rights.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                4. Confidentiality & Non-Disclosure
              </h2>
              <p className="text-muted-foreground mb-4">
                We understand the sensitive nature of your business information
                and are committed to protecting it.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Mutual Confidentiality:</strong> We agree to treat all
                  information you provide regarding your business, clients, and
                  marketing strategies as confidential. This includes any
                  proprietary information or trade secrets.
                </li>
                <li>
                  <strong>Non-Disclosure Agreement (NDA):</strong> We are happy
                  to sign a formal Non-Disclosure Agreement for your peace of
                  mind and to legally ensure the protection of your sensitive
                  data.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                5. Client Responsibilities
              </h2>
              <p className="text-muted-foreground mb-4">
                A successful partnership relies on clear communication and
                timely collaboration.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Provision of Materials:</strong> To ensure your
                  project stays on schedule, we ask that you provide all
                  necessary content, images, and information in a timely manner.
                  Delays in providing these materials may result in a revised
                  project timeline.
                </li>
                <li>
                  <strong>Single Point of Contact:</strong> You agree to appoint
                  a single representative with the authority to provide
                  instructions and approvals to ensure clear and efficient
                  communication.
                </li>
                <li>
                  <strong>Guarantee of Content:</strong> You guarantee that any
                  text, graphics, or other materials you provide for inclusion
                  in the project do not infringe on any copyrights or
                  trademarks.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                6. Service Guarantee & Termination
              </h2>
              <p className="text-muted-foreground mb-4">
                We stand by the quality of our work and also need to ensure a
                professional working relationship.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>30-Day Money-Back Guarantee:</strong> If you are not
                  satisfied with our service within the first 30 days of our
                  engagement, you may request a refund of your initial deposit.
                  This guarantee is void if you have approved and received final
                  deliverables.
                </li>
                <li>
                  <strong>Termination by Us:</strong> We reserve the right to
                  suspend or terminate service if payments are not made on time.
                  We also reserve the right to terminate our agreement
                  immediately if any member of our team is subjected to
                  inappropriate, abusive, or disrespectful behavior.
                </li>
                <li>
                  <strong>Termination by You:</strong> You have the right to
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