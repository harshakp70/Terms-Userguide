import React from "react"

function Terms() {

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto p-6 sm:p-12 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
            Web Magnifier : Terms and Conditions
          </h1>
          <p className="text-gray-600 mb-6 text-sm text-center">
            Last Updated: January 14, 2025
          </p>

          <div className="space-y-6 text-gray-700 text-justify">
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                Introduction
              </h2>
              <p>
                Welcome to Web Magnifier!, a platform dedicated to fostering meaningful political discussion. By accessing or using Web Magnifier you agree to
                comply with these Terms and Conditions. Please read them carefully. If You do not agree with these terms,you must not use the platform
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                1. Eligibility
              </h2>
              <p>
                You must be at least 18 years old to create an account and use Web Magnifier.
                By registering ,you confirm that all the information provided is accurate and up-to-date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">
                2. User Responsibilities
              </h2>
              <p className="g-3 mt-3 ">
                By using our website, you agree to:<br />
                <b>Account Security:</b> You are responsible for maintaining the confidentiality of you account credentials.<br />
                <b>Content Standards:</b> You agree to post only verified,respectful,and lawful content related tp political discussions.

                <b> Prohibited contents Includes:</b>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hate speech or incitement of violence.</li>
                <li>Misinformation or fake news.</li>
                <li>Content that violates any applicable laws or regulations.</li>
              </ul>
              <p><b>Prohibited Activites:</b>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Engaging in harassment, spamming, or disrupting platform operations.</li>
                  <li>Impersonating any individual or entity.</li>
                  <li>Sharing or prompting content without proper verification.</li>
                </ul>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                3. Content Ownership and Usage
              </h2>
              <p className="g-3"><b>User Content:</b> You retain ownership of the content you post. By Posting ,you grant Web Magnifier a non-exclusive,royalty-free,worldwide license
                to use ,display, and distribute your content.<br />
                <b>Platform Content:</b> All platform content,including designs,logos,and features, is owned by Web Magnifier. You may not reproduce or distribute platform content without permission

              </p>

            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                4. Moderation and  Enforcement
              </h2>
              <p>
               Web Magnifier reserves the right to moderate and review user content to ensure compliance with these terms.
               Violation of these terms may result in warnings,content removal, account suspension, or permanent banning.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                5. Privacy
              </h2>
              <p>
               By using Web Magnifier, you consent to the collection, storage, and use of your data as outlined in our Privacy Policy.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                6. Liability and Disclaimers
              </h2>
              <p>
               <b>No Guarantee of Accuracy:</b> Web Magnifier does not gurantee the accuracy or reliability of user-generated content.<br/>
               <b> Limitation of Liability:</b> Web Magnifier is not liable for any damages resulting from your use of the platform.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                7. Payment and Earnings
              </h2>
              <p>
               Users participating in monetized discussion or content must adhere to platform-specific for payments and earnings.
               Web Magnifier reserves the right to modify payment structures or terms with prior notice.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                8. Termination
              </h2>
              <p>
              You may terminate your account at any time by following the instructions in your account settings.
              Web Magnifier may terminate or suspend your account for violation of these terms or other legitimate reasons.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                9. Changes to Terms
              </h2>
              <p>
              Web Magnifier reserves the right to update or modify these Terms and conditions at any time.
              Continued use of the platform constitutes acceptance of the updated terms.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                10. Governing Law and Dispute Resolution
              </h2>
              <p>
             These terms are governed by the laws of India.
             Disputes will be resolved through arbitration or appropriate legal forums.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                11. Contact Us
              </h2>
              <p>
                If you have any questions or concerns regarding these terms, feel free
                to contact us at:
              </p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:contactus@magnifier-platform.com"
                  className="text-blue-600 hover:underline"
                >
                contactus@magnifier-platform.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/"
              className="text-blue-600 hover:underline text-sm"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );



}

export default Terms