import { Send, Mail, Phone, MapPin } from "lucide-react";
import React, { useRef, useState, useEffect, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setLang(document.documentElement.lang === 'ar' ? 'ar' : 'en');
    }
  }, []);

  const t = useMemo(() => {
    if (lang === 'ar') {
      return {
        headingA: 'تواصل',
        headingB: 'معي',
        intro: 'هل لديك مشروع أو ترغب في التعاون؟ تواصل معي عبر النموذج أدناه أو من خلال معلومات الاتصال.',
        contactInfo: 'معلومات الاتصال',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        location: 'الموقع',
        follow: 'تابعني',
        yourName: 'اسمك',
        yourEmail: 'بريدك الإلكتروني',
        subject: 'الموضوع',
        message: 'الرسالة',
        // Keep placeholder in English as requested
        namePlaceholder: 'Ayoub Alayoubi',
        emailPlaceholder: 'ayoub@example.com',
        subjectPlaceholder: 'استفسار مشروع',
        messagePlaceholder: 'مرحبًا، أود التحدث حول...',
        send: 'إرسال الرسالة',
        city: 'ليبيا، طرابلس',
      }
    }
    return {
      headingA: 'Get In',
      headingB: 'Touch',
      intro: 'Have a project in mind or want to collaborate? Feel free to reach out to me using the form below or through my contact information.',
      contactInfo: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      follow: 'Follow Me',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      subject: 'Subject',
      message: 'Message',
      namePlaceholder: 'Ayoub Alayoubi',
      emailPlaceholder: 'ayoub@example.com',
      subjectPlaceholder: 'Project Inquiry',
      messagePlaceholder: "Hello, I'd like to talk about...",
      send: 'Send Message',
      city: 'Libya, Tripoli',
    }
  }, [lang]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(""); // Reset status
    emailjs
      .sendForm('service_hn86oar', 'template_a68oq47', form.current, '2N9o4zt_6ODE8fi10')
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          form.current.reset();
        },
        (error) => {
          toast.error('❌ Failed to send message. Please try again.', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span suppressHydrationWarning>{t.headingA} </span>
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent" suppressHydrationWarning>
              {t.headingB}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" suppressHydrationWarning>
            {t.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6" suppressHydrationWarning>{t.contactInfo}</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1" suppressHydrationWarning>{t.email}</h4>
                  <a
                    href="mailto:aybqam@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    aybqam@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1" suppressHydrationWarning>{t.phone}</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    (+218)948606475
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg text-purple-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1" suppressHydrationWarning>{t.location}</h4>
                  <p className="text-gray-400" suppressHydrationWarning>{t.city}</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4" suppressHydrationWarning>{t.follow}</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Win11HW"
                  className="p-3 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>

            <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    <span suppressHydrationWarning>{t.yourName}</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder={t.namePlaceholder}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    <span suppressHydrationWarning>{t.yourEmail}</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder={t.emailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                  >
                    <span suppressHydrationWarning>{t.subject}</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder={t.subjectPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  >
                    <span suppressHydrationWarning>{t.message}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder={t.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                value="Send"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2"
              >
                <span suppressHydrationWarning>{t.send}</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
