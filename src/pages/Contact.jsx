import Layout from "../components/Layout";

export default function Contact() {
    return (
        <Layout title="Contact Us">
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">
                    Contact Us
                </h1>

                <p>
                    For support or suggestions, contact us at:
                </p>

                <p className="mt-2 font-semibold">
                    support@studenttoolkit.com
                </p>
            </div>
        </Layout>
    );
}