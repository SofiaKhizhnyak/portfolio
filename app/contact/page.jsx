"use client";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { PiArrowRightBold } from "react-icons/pi";

import { Check } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const feedbackMessageStyle = [
  {
    type: "error",
    style: {
      text: "text-[#ea4716ff] text-sm",
      container: "border-[#fb4b24d1] border-dashed",
    },
  },
  { type: "success", style: "" },
];

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  // Form validation
  /*  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstname.trim()) {
      newErrors.firstname = "Please provide your firstname";
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname = "Please provide your lastname";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell describe your need shortly";
    }

   
  }; */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstname.trim()) {
      newErrors.firstname =
        "> Error: Firstname field required - please identify yourself;";
    }

    if (!formData.lastname.trim()) {
      newErrors.lastname =
        "> Error: Lastname not found - who shall we credit this to?";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "> Error: Email address missing - where should we ping you?";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email =
        "> Error: Invalid email format - please check your syntax;";
    }

    if (!formData.service) {
      newErrors.service =
        "> Error: No service selected - what can I assist you with?";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "> Error: Empty commit message - please describe your request";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle select change
  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));

    if (errors.service) {
      setErrors((prev) => ({
        ...prev,
        service: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: `${formData.firstname} ${formData.lastname}`,
        from_email: formData.email,
        service: formData.service,
        message: formData.message,
        to_name: "Sofia", // Your name
      };

      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus("success");

      // Reset form
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setStatusMessage(
        "Sorry, there was an error sending your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);

      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setStatusMessage("");
      }, 5000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 lg:py-0 md:px-16 lg:px-0"
    >
      <div className="container mx-4 lg:mx-16 w-full h-full flex flex-col items-center lg:justify-center lg:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll lg:overflow-y-visible">
        <div className="w-full mb-4 lg:mb-0">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col flex-1 lg:w-[600px] gap-8">
              <div>
                <h2 className="h2 mb-6">
                  Let's{" "}
                  <span className="text-accent tracking-[0.05rem] text-shadow-accent/80 text-shadow-sm/30">
                    Talk!
                  </span>
                </h2>
                <p className="max-w-[460px] text-pretty">
                  The best time to start your project?{" "}
                  <span className="font-semibold">Now</span>. <br />
                  Let's create something that stands out.
                </p>
              </div>
              <div className="flex flex-col gap-5 mb-6 lg:mb-0 pl-7">
                <Link
                  rel="noopener noreferrer"
                  href="https://wa.me/+972546400965"
                  target="_blank"
                  className="flex items-center gap-4 text-[16px] lg:text-lg hover:text-accent transition-colors"
                >
                  <span className="text-tertiary-hover">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+972 546400965</span>
                </Link>
                <div className="flex items-center gap-4 text-[16px] lg:text-lg">
                  <span className="text-tertiary-hover">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>sofiehij@hotmail.co.il</span>
                </div>
                <div className="flex items-center gap-4 text-[16px] lg:text-lg">
                  <span className="text-tertiary-hover">
                    <HiOutlineLocationMarker className="text-2xl" />
                  </span>
                  <span>Tel Aviv, Israel</span>
                </div>
              </div>
            </div>

            <div className="flex-1 p-4 m-2 lg:m-0 my-card">
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-start"
              >
                <div className="flex flex-col lg:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="firstname">
                      Firstname <span className="text-accent">•</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      placeholder="what's your name?"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      className={
                        errors.firstname
                          ? feedbackMessageStyle[0].style.container
                          : ""
                      }
                      required
                    />
                    {errors.firstname && (
                      <p className={feedbackMessageStyle[0].style.text}>
                        {errors.firstname}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <Label htmlFor="lastname">
                      Lastname <span className="text-accent">•</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      placeholder="what's your surname?"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      className={
                        errors.lastname
                          ? feedbackMessageStyle[0].style.container
                          : ""
                      }
                      required
                    />
                    {errors.lastname && (
                      <p className={feedbackMessageStyle[0].style.text}>
                        {errors.lastname}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <Label htmlFor="email">
                    Email <span className="text-accent">•</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={
                      errors.email
                        ? feedbackMessageStyle[0].style.container
                        : ""
                    }
                    required
                  />
                  {errors.email && (
                    <p className={feedbackMessageStyle[0].style.text}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <Label htmlFor="service">
                    I'm interested in <span className="text-accent">•</span>
                  </Label>
                  <Select
                    name="service"
                    value={formData.service}
                    onValueChange={handleSelectChange}
                    required
                  >
                    <SelectTrigger
                      id="service"
                      className={`w-full !h-11 bg-black/5 border-white/15 px-4 ${
                        errors.service
                          ? feedbackMessageStyle[0].style.container
                          : ""
                      }`}
                    >
                      <SelectValue placeholder="Choose service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#080532eb] border-white/25">
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                      <SelectItem value="Mobile Development">
                        Mobile Development
                      </SelectItem>
                      <SelectItem value="Web & Mobile Development">
                        Web & Mobile Development
                      </SelectItem>
                      <SelectItem value="SEO">
                        Search Engine Optimization
                      </SelectItem>
                      <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className={feedbackMessageStyle[0].style.text}>
                      {errors.service}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <Label htmlFor="message">
                    Message <span className="text-accent">•</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder='> git commit -m "write your message here"'
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`min-h-[160px] bg-black/5 border-white/15 focus-visible:border-tertiary/80 focus-visible:ring-terborder-tertiary/80 focus-visible:ring-[0.1px] resize-none p-4 selection:bg-tertiary selection:text-primary/95 placeholder:text-white/55 ${
                      errors.message
                        ? feedbackMessageStyle[0].style.container
                        : ""
                    }`}
                  />
                  {errors.message && (
                    <p className={feedbackMessageStyle[0].style.text}>
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-lg btn-accent self-center mb-2 lg:mb-0 hover:text-xl transition-all ${
                    isSubmitting
                      ? "opacity-70 pointer-events-none !bg-secondary/80"
                      : submitStatus === "success"
                      ? "pointer-events-none !bg-tertiary-hover/90 text-primary/95"
                      : ""
                  }`}
                  suppressHydrationWarning={true}
                >
                  <div className="flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <Check className="!text-2xl" />
                      </>
                    ) : (
                      <>
                        <span className="font-medium">OK Go</span>
                        <PiArrowRightBold className="text-2xl" />
                      </>
                    )}
                  </div>
                </button>
              </form>

              {/* Status Message */}
              {submitStatus === "error" && (
                <div
                  className={`mt-4 p-3 rounded-lg text-sm ${feedbackMessageStyle[0].style.text}`}
                >
                  {statusMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
