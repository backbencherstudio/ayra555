'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

interface FormInputs {
  inquiryType: 'general' | 'registration' | 'educator';
  fullName: string;
  email: string;
  whatsapp?: string;
  message: string;
}

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  // Watch for changes in the inquiryType field
  const selectedInquiryType = watch('inquiryType');

  const onSubmit = async (data: FormInputs) => {
    try {
      setIsSubmitting(true);
      const templateParams = {
        inquiry_type: data.inquiryType.charAt(0).toUpperCase() + data.inquiryType.slice(1),
        full_name: data.fullName,
        email: data.email,
        whatsapp: data.whatsapp || 'Not provided',
        message: data.message,
      };

      const response = await emailjs.send(
        'service_b19u5ys',
        'template_wcw0j0y',
        templateParams,
        'goJJs8WWzrEjpRl1E'
      );

      if (response.status === 200) {
        toast.success('Message sent successfully!');
        reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 sm:py-16">
      <h2 className="text-center text-3xl sm:text-4xl font-medium text-[#262925] mb-10 sm:mb-[60px]">
        Contact Us
      </h2>

      <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="bg-[#FFD8A9] p-6 sm:p-8 md:w-2/5">
            <h2 className="text-xl sm:text-2xl text-[#262925] font-medium mb-4">
              We&apos;d love to hear from you
            </h2>
            <p className="text-[#5E615D] text-base sm:text-lg leading-6 mb-6">
              Please complete the form or contact us and we&apos;d love to help your child start their learning journey.
            </p>

            <div className="space-y-6 sm:mt-20 md:mt-[112px]">
              <div>
                <h3 className="font-medium mb-2 text-[#262925] text-lg sm:text-xl">
                  Baby Grow operating hours
                </h3>
                <p className="text-[#434642] text-sm sm:text-base">Monday-Friday 7 am-7 pm</p>
                <p className="text-[#434642] text-sm sm:text-base">Saturday 8 am-3 pm</p>
                <p className="text-[#434642] text-sm sm:text-base">51 weeks a year</p>
              </div>
              <hr className="text-[#434642]" />

              <div className="space-y-2">
                <p className="text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                  <Phone className="w-4 h-4" /> 00448198853
                </p>
                <p className="text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                  <Mail className="w-4 h-4" /> info@babygrowcare.co.uk
                </p>
              </div>

              <div>
                <p className="text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                  <MapPin className="w-4 h-4" /> St Peters church, St. Peter&apos;s terrace, SW6 6SJ
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="p-6 sm:p-8 md:w-3/5">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Radio Buttons */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  {[
                    { label: 'General inquiry', value: 'general' },
                    { label: 'Child registration inquiry', value: 'registration' },
                    { label: 'Educator application inquiry', value: 'educator' },
                  ].map(({ label, value }) => (
                    <label key={value} className="flex items-center text-sm sm:text-base">
                      <input
                        type="radio"
                        value={value}
                        className="mr-2"
                        {...register('inquiryType', { required: 'Please select an inquiry type' })}
                      />
                      {label}
                    </label>
                  ))}
                </div>
                {errors.inquiryType && (
                  <p className="text-red-500 text-sm">{errors.inquiryType.message}</p>
                )}
              </div>

              {/* Inputs */}
              <div>
                <input
                  type="text"
                  placeholder="Enter your full name..."
                  className={`w-full p-3 border rounded-lg ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('fullName', {
                    required: 'Full name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' },
                  })}
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="WhatsApp Number (Optional)"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  {...register('whatsapp')}
                />
              </div>

              <div>
                <textarea
                  placeholder="Type your message here..."
                  rows={4}
                  className={`w-full p-3 border resize-none rounded-lg ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' },
                  })}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#7CC466] text-white py-3 rounded-lg transition-colors cursor-pointer text-lg sm:text-xl ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#62C544]'}`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
