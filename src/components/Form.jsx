import React from 'react';

function ContactForm() {

  return (
    <section class='bg-[#0b0309]'>
    <div class="py-8 lg:py-16 lg:px-4 lg:mx-auto lg:max-w-screen-md mx-10">
        <h2 class="heading mb-4 text-5xl  text-center text-gray-900 dark:text-white">Contact Us</h2>
        <form action="https://formspree.io/f/mwkjwbvv" class="space-y-8">
             <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-y-fuchsia-900 dark:border-x-cyan-600  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Alison" required />
            </div>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black dark:border-y-fuchsia-900 dark:border-x-cyan-600  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@flowbite.com" required />
            </div>
            <div>
                <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-y-fuchsia-900 dark:border-x-cyan-600  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Let us know how we can help you" required />
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-black dark:border-y-fuchsia-900 dark:border-x-cyan-600  dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <button type="submit" class="hover:border-fuchsia-900 hover:border-[1px] py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
    </div>
  </section>
  );
}

export default ContactForm;
