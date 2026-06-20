import { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    if (timeLeft === 0 && isRunning) {
      alert("🎉 Focus session completed!");
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(minutes * 60);
  };

  const handleMinutesChange = (value) => {
    setMinutes(value);
    setTimeLeft(value * 60);
    setIsRunning(false);
  };

  const formatTime = () => {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <Layout title="Pomodoro Timer">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
          <label className="block mb-4 font-semibold">Focus Duration (minutes)</label>
          <input
            type="number"
            min="1"
            value={minutes}
            onChange={(e) => handleMinutesChange(Number(e.target.value))}
            className="border rounded-xl p-3 w-40 text-center"
          />
          <div className="text-6xl font-bold my-8">{formatTime()}</div>
          <div className="flex justify-center gap-4">
            <button
              onClick={startTimer}
              className="bg-green-600 text-white px-6 py-3 rounded-xl"
            >
              Start
            </button>
            <button
              onClick={pauseTimer}
              className="bg-yellow-500 text-white px-6 py-3 rounded-xl"
            >
              Pause
            </button>
            <button
              onClick={resetTimer}
              className="bg-red-600 text-white px-6 py-3 rounded-xl"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="mt-10 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">What is the Pomodoro Technique?</h2>
          <p>
            The Pomodoro Technique is a time management method that helps students and professionals stay focused. Work for a set period of time, take a short break, and repeat the cycle to improve productivity.
          </p>
        </div>

        <div className="mt-10 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">What is a Pomodoro Timer?</h3>
              <p>
                A Pomodoro Timer helps you focus on work or study sessions by breaking time into focused intervals.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Can I customize the duration?</h3>
              <p>
                Yes. You can set any focus duration in minutes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Who can use this timer?</h3>
              <p>
                Students, programmers, writers, professionals, and anyone who wants to improve focus.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Related Tools</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <a href="/study-timetable-generator" className="border border-gray-200 rounded-2xl p-4 text-center hover:border-blue-500">
              Study Timetable Generator
            </a>
            <a href="/word-counter" className="border border-gray-200 rounded-2xl p-4 text-center hover:border-blue-500">
              Word Counter
            </a>
            <a href="/attendance-calculator" className="border border-gray-200 rounded-2xl p-4 text-center hover:border-blue-500">
              Attendance Calculator
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
