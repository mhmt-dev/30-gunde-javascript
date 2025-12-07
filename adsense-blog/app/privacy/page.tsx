import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - InsightHub",
  description: "Learn how InsightHub collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 1, 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to InsightHub ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-gray-700 mb-4">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our contact form</li>
              <li>Comment on our articles</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The types of personal information we may collect include your name, email address, and any other information you choose to provide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Automatically Collected Information</h2>
            <p className="text-gray-700 mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URLs</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Device identifiers</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We collect this information using cookies and similar tracking technologies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you newsletters and marketing communications (with your consent)</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
            </p>
            <p className="text-gray-700 mb-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We may use third-party service providers to help us operate our website and administer activities on our behalf. These third parties may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <p className="text-gray-700 mb-4">
              Our website may contain advertisements served by third-party advertising partners, including Google AdSense. These partners may use cookies and similar technologies to collect information about your visits to this and other websites to provide relevant advertisements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to object to or restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p className="text-gray-700 mb-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
            </p>
            <p className="text-gray-700 mb-4">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
              <li>By email: privacy@insighthub.com</li>
              <li>By visiting our contact page</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
