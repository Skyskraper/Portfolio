import React, { useState } from 'react'
import { CgMail } from 'react-icons/cg'
import { IoCallOutline } from 'react-icons/io5'
import { MdOutlineHouse } from 'react-icons/md'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // REMOVE this line (duplicate key)
    // formData.append("access_key", "0c7e88dc-f07f-404a-931e-d990600e566c");

    formData.append("from_name", "Website Contact Form");
    formData.append("subject", "New Contact Form Submission");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✔");
      event.target.reset();
    } else {
      setResult("Failed to send message ❌");
    }
  };
  return (
    <>
      <section className="bg-[#11071F] py-12">
        <div className="ontainer w-full px-4 sm:px-8 max-w-6xl mx-auto">


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">


            <div className="w-full">
              <div className="w-full bg-[#140c1c] backdrop-blur-md rounded-lg p-6 sm:p-10 border border-[#1f1f1f]">

                <h1 className="font-bold text-4xl sm:text-5xl text-[#8750f7] mb-3">
                  Let's Work Together!
                </h1>

                <p className="text-white text-lg mb-6">
                  I design and code beautifully simple things and I love what I do.
                </p>

                <form onSubmit={onSubmit} >
                  <input type='hidden' name="access_key" value="0c7e88dc-f07f-404a-931e-d990600e566c" />

                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      name='Firstname'
                      className="text-white w-full bg-black border border-[#22272c] rounded-lg px-4 py-3"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      name='Lastname'
                      className="text-white w-full bg-black border border-[#22272c] rounded-lg px-4 py-3"
                    />
                  </div>


                  <div className="flex flex-col sm:flex-row gap-4 mt-5">
                    <input
                      type="text"
                      placeholder="Email ID"
                      required
                      name='email'
                      className="text-white w-full bg-black border border-[#22272c] rounded-lg px-4 py-3"
                    />
                    <input
                      type="number"
                      placeholder="Phone"
                      required
                      name='phone'
                      className="text-white w-full bg-black border border-[#22272c] rounded-lg px-4 py-3"
                    />
                  </div>


                  <div className="mt-5">
                    <textarea
                      rows="5"
                      placeholder="Message"
                      required
                      name='message'
                      className="text-white w-full bg-black border border-[#22272c] rounded-lg px-4 py-3 "
                    />
                  </div>

                  <button type='submit' className="bg-[#8750f7] rounded-lg px-8 py-3 text-white font-medium mt-6 w-full sm:w-auto">
                    Send Message
                  </button>
                  <p className="text-white mt-2 text-sm">{result}</p>

                </form>




              </div>
            </div>


            <div className="w-full space-y-6">


              <div className="flex items-center gap-4">
                <div className="text-white text-3xl p-3 bg-[#8750f7] rounded-full">
                  <IoCallOutline />
                </div>
                <div className="text-white">

                  <p className="text-gray-300">Phone</p>
                  <a href='tel:+917318443847'>
                    <span className="text-xl font-medium">+917318443847</span>

                  </a>

                </div>
              </div>


              <div className="flex items-center gap-4">
                <div className="text-white text-3xl p-3 bg-[#8750f7] rounded-full">
                  <CgMail />
                </div>
                <div className="text-white">
                  <p className="text-white">E-mail</p>
                  <a href='mailto:abhimanyukharwar65@gmail.com'>
                    <span className="text-xl font-medium">abhimanyukharwar65@gmail.com</span>

                  </a>
                  
                </div>
              </div>


              <div className="flex items-center gap-4">
                <div className="text-white text-3xl p-3 bg-[#8750f7] rounded-full">
                  <MdOutlineHouse />
                </div>
                <div className="text-white">
                  <p className="text-gray-300">Address</p>
                  <span className="text-xl font-medium">
                    Khalasi line 10/496, Kanpur
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Contact
