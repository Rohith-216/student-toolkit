import { useState } from "react";
import Layout from "../components/Layout";

export default function StudyTimetableGenerator() {
  const [subjects, setSubjects] = useState("");
  const [hours, setHours] = useState("");
  const [schedule, setSchedule] = useState([]);

  const generateTimetable = () => {
    const subjectList = subjects
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const totalHours = Number(hours);

    if (!subjectList.length || !totalHours) return;

    const hoursPerSubject = (
      totalHours / subjectList.length
    ).toFixed(1);

    const result = subjectList.map((subject) => ({
      subject,
      hours: hoursPerSubject,
    }));

    setSchedule(result);
  };

  return (
    <Layout title="Study Timetable Generator">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">

          <input
            type="text"
            placeholder="Math, Physics, Chemistry"
            value={subjects}
            onChange={(e) => setSubjects(e.target.value)}
            className="w-full p-4 border rounded-xl mb-4"
          />

          <input
            type="number"
            placeholder="Study Hours Per Day"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="w-full p-4 border rounded-xl mb-4"
          />

          <button
            onClick={generateTimetable}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Generate Timetable
          </button>

          {schedule.length > 0 && (
            <div className="mt-6">
              <h3 className="font-bold text-xl mb-3">
                Recommended Schedule
              </h3>

              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b py-2"
                >
                  <span>{item.subject}</span>
                  <span>{item.hours} hrs</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}