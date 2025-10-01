import ContactFooter from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-32 max-w-5xl">
      {/* Header Section */}
      <div className="mb-14 md:mb-20 text-center">
        <h1 className="mb-4 font-bold text-3xl md:text-4xl">Get in touch with us</h1>
        <p className="mx-auto max-w-2xl text-gray-600 text-lg">
          We're here to help! Whether you have a question about our services, 
          need assistance with your account, or want to provide feedback, 
          our team is ready to assist you.
        </p>
      </div>

      <div className="gap-12 grid md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-4">
          <div>
            <h2 className="mb-4 font-semibold text-2xl">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700">Email:</p>
                <p className="text-blue-600">contact@youthinagriculture.com</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Phone:</p>
                <p className="text-gray-900">+1 234 567 78</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Availability:</p>
                <p className="text-gray-600">Monday to Friday, 9 AM - 8 PM GMT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-4 sm:p-8 rounded-lg">
          <h2 className="mb-6 font-semibold text-2xl">Send us a message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="firstName" className="block mb-2 font-medium text-gray-700 text-sm">
                Full Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name..."
                className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>


            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address..."
                className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700 text-sm">
                How can we help you?
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Enter your message..."
                className="px-4 py-3 border border-gray-300 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full resize-vertical"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg w-full font-medium text-white transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

    <ContactFooter/>
    </>

  );
};

export default Contact;