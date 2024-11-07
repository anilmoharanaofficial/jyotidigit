import FeatureCard from "../UI/FeatureCard";

function Features() {
  return (
    <>
      <FeatureCard
        image="/feature1.svg"
        heading="Effortless Invoice Creation"
        title="Create Invoices in Seconds"
        description="Generate professional invoices with just a few clicks. Customize your invoices to reflect your brand, and get paid faster."
      />
      <FeatureCard
        positionType="reverse"
        image="/feature2.svg"
        heading="Customer Management"
        title="Manage Clients with Ease"
        description="Keep all your customers in one place, track their details, and easily add them to invoices. Perfect for staying organized and efficient."
      />
      <FeatureCard
        image="/feature3.svg"
        heading="Recurring Invoices"
        title="Automate Your Billing"
        description="Set up recurring invoices for regular clients. No need to manually create new invoices every time – let the system handle it for you."
      />
      <FeatureCard
        positionType="reverse"
        image="/feature4.svg"
        heading="Track Payments"
        title="Stay On Top of Payments"
        description="Monitor the status of your invoices, get notified when payments are received, and follow up on unpaid invoices effortlessly."
      />
    </>
  );
}

export default Features;
