'use client'

import { Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';

interface FormInputs {
  inquiryType: 'general' | 'registration' | 'educator';
  fullName: string;
  email: string;
  whatsapp?: string;
  message: string;
}

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h2 className='text-center text-4xl font-medium text-[#262925] mt-[20px] md:mt-[100px] lg:mt-[150px] xl:mt-[236px] mb-[60px]'>Contact Us</h2>
      <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Section - Contact Information */}
          <div className="bg-[#FFD8A9] p-8 md:w-2/5">
            <h2 className="text-2xl text-[#262925] font-medium mb-4">We'd love to hear from you</h2>
            <p className="text-[#5E615D] font-normal text-lg leading-6  mb-6">
              Please complete the form or contact us and we'd love to help your child start their learning journey.
            </p>

            <div className="space-y-6 mt-[112px]">
              <div>
                <h3 className="font-medium mb-2 text-[#262925] text-xl ">Baby Grow operating hours</h3>
                <p className="text-[#434642] font-normal text-base leading-6">Monday-Friday 7 am-7 pm</p>
                <p className="text-[#434642] font-normal text-base leading-6">Saturday 8 am-3 pm</p>
                <p className="text-[#434642] font-normal text-base leading-6">51 weeks a year</p>
              </div>
              <hr className='text-[#434642]'/>

              <div>
                <p className="text-gray-700 flex items-center gap-2"><Phone className='w-4 h-4' /> 00448198853</p>
                <p className="text-gray-700 flex items-center gap-2"><Mail className='w-4 h-4' /> info@babygrowcare.co.uk</p>
              </div>

              <div>
                <p className="text-gray-700 flex items-center gap-2">
                <MapPin className='w-4 h-4' /> St Peters church, St. Peter's terrace, SW6 6SJ
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="p-8 md:w-3/5">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                {/* Radio Options */}
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="general"
                      className="mr-2"
                      {...register('inquiryType', { required: 'Please select an inquiry type' })}
                    />
                    <span>General inquiry</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="registration"
                      className="mr-2"
                      {...register('inquiryType', { required: 'Please select an inquiry type' })}
                    />
                    <span>Child registration inquiry</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="educator"
                      className="mr-2"
                      {...register('inquiryType', { required: 'Please select an inquiry type' })}
                    />
                    <span>Educator application inquiry</span>
                  </label>
                  {errors.inquiryType && (
                    <p className="text-red-500 text-sm w-full">{errors.inquiryType.message}</p>
                  )}
                </div>

                {/* Form Fields */}
                <div>
                  <input
                    type="text"
                    placeholder="Enter your full name..."
                    className={`w-full p-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg`}
                    {...register('fullName', {
                      required: 'Full name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
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
                    className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
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
                    className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg resize-none`}
                    {...register('message', {
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#7CC466] text-white py-3 rounded-lg hover:bg-[#62C544] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
