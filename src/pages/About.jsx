import Layout from "../components/Layout";

export default function About() {
    return (
        <Layout title="About Us">
            <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">
                    About StudentToolkit
                </h1>

                <p>
                    StudentToolkit provides free online
                    tools for students, freshers, and
                    professionals to simplify academic
                    and career-related tasks.
                </p>
            </div>
        </Layout>
    );
}