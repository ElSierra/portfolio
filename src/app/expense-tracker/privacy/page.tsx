
export default function page() {
  return (
    <div className="flex flex-col items-center ml-20">
      <h1 className="mb-20 text-2xl mt-20 font-extrabold">
        Expense Tracker Privacy Policy
      </h1>
      <div>
        <h2 className="text-lg font-bold mb-2">
          Information Collection and Use
        </h2>
        <p>
          {
            "Expense Tracker collects personal information that you provide voluntarily when using the app. This information may include your name, email address, and other details necessary for managing your expenses and providing the app's features."
          }
        </p>

        <h2 className="text-lg font-bold mb-2">Cookies</h2>
        <p>
          Expense Tracker does not use cookies or similar tracking technologies.
        </p>

        <h2 className="text-lg font-bold mb-2">Data Security</h2>
        <p>
          Expense Tracker takes appropriate measures to protect the personal
          information provided by users. However, no method of transmission over
          the internet or electronic storage is 100% secure, and we cannot
          guarantee its absolute security.
        </p>

        <h2 className="text-lg font-bold mb-2">Third-Party Services</h2>
        <p>
          Expense Tracker may utilize third-party services that have their own
          privacy policies. These services include but are not limited to
          authentication providers and cloud storage services. We recommend
          reviewing the privacy policies of these third-party services before
          using them in conjunction with Expense Tracker.
        </p>

        <h2 className="text-lg font-bold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will
          be posted on this page, and the revised date will be indicated at the
          top of the page. It is your responsibility to review this Privacy
          Policy periodically for any changes.
        </p>

        <h2 className="text-lg font-bold mb-2">Contact Us</h2>
        <p>
          If you have any questions or suggestions about our Privacy Policy,
          please contact us at{" "}
          <a href="mailto:hojoisaac@gmail.com">hojoisaac@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
