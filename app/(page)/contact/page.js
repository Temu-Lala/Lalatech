"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await emailjs.sendForm('service_29zgzfg', 'template_0e6rsno', e.target, 'iFh9Lbs5MZSdFKTE7');
      if (response.ok) {
        toast.success('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        toast.success('Email sent successfully!');
      }
    } catch (error) {
      toast.error('Failed to send email.');
    }
  };

  return (
    <div className='flex flex-col'>
      <div className="w-full h-80 bg-[url('https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.webp')] bg-cover bg-center"></div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 -mt-52 bg-transparent">
        <div className="mb-4 bg-black">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-cyan-300">Contact</p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-cyan-300 text-3xl sm:text-5xl">Get in Touch</h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">We’d Love to Hear From You!</p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">Whether you have a question, feedback, or just want to say hello, feel free to reach out. Our team is here to assist you and will get back to you as soon as possible."</p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-cyan-300">Our Address</h3>
                    <p className="text-gray-600 dark:text-slate-400">Addis Ababa</p>
                    <p className="text-gray-600 dark:text-slate-400">Remote Working</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-cyan-300">Contact</h3>
                    <p className="text-gray-600 dark:text-slate-400">Mobile: +251914490662</p>
                    <p className="text-gray-600 dark:text-slate-400">Mobile: +251989253506</p>
                    <p className="text-gray-600 dark:text-slate-400">Mobile: +251910514862</p>
                    <p className="text-gray-600 dark:text-slate-400">Mobile: +251937637782</p>


                   
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-cyan-300">Working hours</h3>
                    <p className="text-gray-600 dark:text-slate-400">Monday - Sunday: Anytime</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12 text-black" id="form">
              <h2 className="mb-4 text-2xl font-bold text-cyan-300">Ready to Get Started?</h2>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider">Name</label>
                    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="John Doe" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md " required />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider">Email Address</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="yourname@example.com" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md " required />
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Your message here" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md " required />
                  </div>
                  <button type="submit" className="inline-flex items-center rounded-lg bg-cyan-300 py-3 px-6 text-base font-semibold  text-black shadow-md hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:bg-cyan-200 dark:hover:bg-cyan-300 dark:focus:ring-cyan-400">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
