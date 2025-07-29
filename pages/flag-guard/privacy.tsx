import { Container, Layout } from "components";
import Head from "next/head";
import React from "react";

const PrivacyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Tarun Singh</title>
        <meta
          name="description"
          content="Privacy Policy for Flag Guard - VPN & IP Location Verifier browser extension developed by Tarun Singh"
        />
      </Head>
      <Layout>
        <Container>
          <div className="py-16 px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">
              Privacy Policy for Flag Guard - VPN & IP Location Verifier
            </h1>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 text-center">
              <strong>Last Updated: July 29, 2025</strong>
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="mb-4">
                  Flag Guard is a browser extension that helps users verify their VPN connection and IP location by displaying country information. This privacy policy explains how we handle your data when you use our extension.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data We Do NOT Collect</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information</strong>: We do not collect, store, or transmit any personal information such as your name, email address, or contact details.</li>
                  <li><strong>Browsing History</strong>: We do not track, monitor, or store your browsing history or website visits.</li>
                  <li><strong>User Account Data</strong>: We do not require user accounts or store any login credentials.</li>
                  <li><strong>Device Information</strong>: We do not collect information about your device, operating system, or browser beyond what's necessary for the extension to function.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data We Do Access (But Don't Store)</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>IP Address</strong>: The extension queries your public IP address through third-party services (ipapi.co and ipinfo.io) to determine your location, but we do not store or log this information.</li>
                  <li><strong>Location Data</strong>: We retrieve country/region information associated with your IP address to display the appropriate flag, but this data is not stored permanently.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How the Extension Works</h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>When activated, the extension makes a request to external IP geolocation services</li>
                  <li>These services return your approximate location based on your IP address</li>
                  <li>The extension displays a flag corresponding to your detected country</li>
                  <li>All data is processed locally in your browser and is not transmitted to our servers</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                <p className="mb-4">This extension uses the following external services to function:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>ipapi.co</strong>: For IP geolocation lookup</li>
                  <li><strong>ipinfo.io</strong>: As a backup geolocation service</li>
                </ul>
                <p className="mt-4">Please refer to their respective privacy policies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><a href="https://ipapi.co/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ipapi.co Privacy Policy</a></li>
                  <li><a href="https://ipinfo.io/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ipinfo.io Privacy Policy</a></li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Local Storage Only</strong>: Any temporary data used by the extension is stored locally in your browser and is automatically cleared when you close your browser or uninstall the extension.</li>
                  <li><strong>No Remote Storage</strong>: We do not maintain any servers or databases that store user data.</li>
                  <li><strong>No Analytics</strong>: We do not use any analytics or tracking services.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Permissions Explained</h2>
                <p className="mb-4">The extension requests the following permissions:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>webRequest</strong>: To detect when IP location checks are needed</li>
                  <li><strong>alarms</strong>: To schedule periodic location updates</li>
                  <li><strong>Host permissions for ipapi.co and ipinfo.io</strong>: To query these services for location data</li>
                </ul>
                <p className="mt-4">These permissions are used solely for the extension's core functionality and not for data collection.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="mb-4">Since we don't collect or store any personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>There is no data to access, modify, or delete</li>
                  <li>No data is shared with third parties (except the necessary API calls to geolocation services)</li>
                  <li>No data is retained after you uninstall the extension</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                <p>This extension does not knowingly collect any information from children under 13 years of age.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                <p>If we make any changes to this privacy policy, we will update the "Last Updated" date at the top of this document. We recommend reviewing this policy periodically.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="mb-4">If you have any questions about this privacy policy or the extension's data practices, please contact:</p>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <p><strong>Developer</strong>: Tarun Singh</p>
                  <p><strong>Website</strong>: <a href="https://tarunsingh.dev" className="text-blue-600 dark:text-blue-400 hover:underline">https://tarunsingh.dev</a></p>
                  <p><strong>Project Repository</strong>: <a href="https://github.com/tarun7singh/Country-Flag" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://github.com/tarun7singh/Country-Flag</a></p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Compliance</h2>
                <p className="mb-4">This extension is designed to be compliant with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>General Data Protection Regulation (GDPR)</li>
                  <li>California Consumer Privacy Act (CCPA)</li>
                  <li>Chrome Web Store Developer Program Policies</li>
                </ul>
              </section>

              <div className="border-t pt-8 mt-12">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  This privacy policy reflects our commitment to protecting your privacy. Since Flag Guard operates entirely locally and doesn't collect personal data, you can use it with confidence knowing your privacy is protected.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default PrivacyPage;