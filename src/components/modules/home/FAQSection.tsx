'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-24">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">You may be wondering</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Do you take my insurance?</AccordionTrigger>
                        <AccordionContent>
                            At this time, MediMart does not support direct insurance claims. However, we provide detailed invoices with every order, which you can submit to your insurance provider for reimbursement. We&aposre actively working on integrating insurance options in the near future to make your experience even smoother.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                        <AccordionContent>
                            We accept a variety of payment methods to ensure your convenience and security. This includes all major debit and credit cards (Visa, Mastercard), mobile banking services (bKash, Nagad, Rocket), and SurjoPay integration for secure and fast checkout. All transactions are encrypted to protect your financial data.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>What are the benefits of using MediMart?</AccordionTrigger>
                        <AccordionContent>
                            MediMart offers a comprehensive solution for purchasing medicines online. Our benefits include 24/7 order access, fast and reliable delivery, availability of verified and prescription-required medications, user-friendly UI, and seamless order tracking. We also ensure that all medicines are sourced from trusted manufacturers and maintained in temperature-controlled storage.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Is delivery free?</AccordionTrigger>
                        <AccordionContent>
                            We offer free delivery on all orders above BDT 500 within Dhaka city. For orders below this amount or for deliveries outside Dhaka, minimal delivery charges may apply based on distance and order weight. Delivery estimates and charges are clearly mentioned during checkout.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Can I upload a prescription image?</AccordionTrigger>
                        <AccordionContent>
                            Yes, for medicines that require prescriptions, MediMart allows you to upload a digital copy of your doctor’s prescription. This can be a photo or scanned document uploaded as a link. Our pharmacists verify each prescription to ensure safe and legal dispensing of medications.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
};

export default FAQSection;