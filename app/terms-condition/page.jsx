import React from "react";

const Page = () => {
  return (
    <section className="bg-white">
      <div className="py-16 px-2 sm:px-6 lg:px-16">
        <div className="text-gray-700 bg-gray-100 p-3 my-3">
          By accessing the NSDMA Weather website (nsdmaweather.com) or using the
          NSDMA Weather mobile application (“App”), you agree to these Terms &
          Conditions.
        </div>
        <ol className="list-decimal space-y-2 marker:text-3xl">
          <li className="text-[#444444]">
            <span className="text-xl font-bold">Information Purpose Only</span>
            <div className="text-sm mt-3">
              The NSDMA Weather Portal is provided for information purposes
              only. Information from this website or App cannot be used to
              establish legal agreements, claims, or rights. While efforts are
              made to ensure accuracy and timeliness, NSDMA does not guarantee
              completeness or reliability of data and accepts no responsibility
              for expenses or damages resulting directly or indirectly from its
              use. For official, updated information, please contact NSDMA (Home
              Department), Nagaland Civil Secretariat, Kohima, Nagaland, India.
            </div>
          </li>
          <li className="text-[#444444]">
            <span className="text-xl font-bold">Accounts (Mobile App)</span>
            <div className="text-sm mt-3">
              The app offers
              <span className="font-bold"> an optional user login</span>
              to deliver weather alerts for your subscribed locations under your
              account. You are responsible for maintaining the confidentiality
              of your credentials and for all activities under your account.
              NSDMA may suspend or terminate access for misuse, security
              concerns, or legal requirements.
            </div>
          </li>
          <li className="text-[#444444]">
            <span className="text-xl font-bold">Acceptable Use</span>
            <div className="text-sm">
              Do not use the services for unlawful, harmful, or unauthorized
              purposes.
              <br />
              No automated scraping, bulk harvesting, or unauthorized
              integration without prior written consent. maps) bound by
              confidentiality and data-protection obligations.
              <br />
              Do not interfere with or disrupt our systems, networks, or
              security measures.
            </div>
          </li>
          <li className="text-[#444444]">
            <span className="text-xl font-bold">Intellectual Property</span>
            <div className="text-sm">
              All content, datasets, software, maps, and designs are owned by
              NSDMA or its partners and licensors. Reuse, redistribution, or
              commercial exploitation requires prior written permission from
              NSDMA. NSDMA gratefully acknowledges the Nagaland GIS & Remote
              Sensing Centre (NGIS&RS), Department of Planning & Coordination,
              Government of Nagaland, for providing district boundary datasets.
            </div>
          </li>
          <li className="text-[#444444]">
            <span className="text-xl font-bold">Third-Party Services</span>
            <div className="text-sm">
              The website and App may incorporate third-party services (e.g.,
              maps, analytics, messaging). Your use of such features is subject
              to the respective third parties’ terms and policies.
            </div>
          </li>
          <li className="text-[#444444]">
            <span className="text-xl font-bold">Liability Limitation</span>
            <div className="text-sm">
              To the maximum extent permitted by law, NSDMA and its affiliates
              are not liable for any direct, indirect, incidental, special, or
              consequential losses arising from or in connection with the use of
              the website/App or reliance on the information provided.
            </div>
          </li>
          <li className="text-[#444444]">
            <span className="text-xl font-bold">
              Changes to Services or Terms
            </span>
            <div className="text-sm">
              NSDMA may modify, suspend, or discontinue features at any time and
              may update these Terms & Conditions. Continued use after changes
              constitutes acceptance of the revised terms.
            </div>
          </li>
          <li className="text-[#444444]">
            <span className="text-xl font-bold">
              Governing Law & Jurisdiction
            </span>
            <div className="text-sm">
              These Terms are governed by the laws of India. Any disputes shall
              be subject to the exclusive jurisdiction of the courts in Kohima,
              Nagaland.
            </div>
          </li>
          <li className="text-[#444444]">
            <span className="text-xl font-bold">Contact</span>
            <div className="text-sm">
              <span className="font-bold">
                Nagaland State Disaster Management Authority (NSDMA)
              </span>
              <br />
              Home Department, Nagaland Civil Secretariat, Kohima, Nagaland,
              India
              <br />
              <span className="font-bold">Email:</span>
              <a href="#">sdma.nagaland@gmail.com</a>
            </div>
          </li>
          <span className="text-[#444444] font-bold">Acknowledgement</span>
          <br />
          <span className="text-sm text-[#444444]">
            NSDMA gratefully acknowledges the Nagaland GIS & Remote Sensing
            Centre (NGIS&RS), Department of Planning & Coordination, Government
            of Nagaland, for providing district boundary datasets.
          </span>
        </ol>
      </div>
    </section>
  );
};

export default Page;
