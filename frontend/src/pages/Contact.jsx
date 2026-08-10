import { useState } from "react";

export default function Contact(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
      setStatusMessage("Unable to reach the server. Please check your connection or try again later.");
    }
  };

return(

<section className="max-w-7xl mx-auto py-16 md:py-24 px-4 md:px-6">

<h2 className="text-3xl md:text-4xl font-bold mb-4">
Contact Me
</h2>

<p className="text-gray-400 max-w-xl mb-12 md:mb-16 text-sm md:text-base">
I'm currently looking for new opportunities. Whether you have a
question or just want to say hi — my inbox is always open!
</p>

<div className="grid md:grid-cols-2 gap-10 md:gap-16">

{/* LEFT SIDE */}

<div className="space-y-8">

<div className="flex items-center gap-4 border-b border-purple-500/10 pb-6">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
<i className="fas fa-envelope"></i>
</div>

<div>
<p className="text-gray-400 text-sm">Email</p>
<a href="mailto:princerajmne@gmail.com" className="text-purple-400">
princerajmne@gmail.com
</a>
</div>
</div>


<div className="flex items-center gap-4 border-b border-purple-500/10 pb-6">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
<i className="fas fa-phone"></i>
</div>

<div>
<p className="text-gray-400 text-sm">Phone</p>
<p className="text-purple-400">
+91 7479845306
</p>
</div>
</div>


<div className="flex items-center gap-4 border-b border-purple-500/10 pb-6">
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
<i className="fab fa-linkedin-in"></i>
</div>

<div>
<p className="text-gray-400 text-sm">LinkedIn</p>

<a
href="https://www.linkedin.com/in/princeraj7479/"
target="_blank"
className="text-purple-400"
>

linkedin.com/in/princeraj7479/

</a>

</div>

</div>


<div className="flex items-center gap-4 border-b border-purple-500/10 pb-6">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
<i className="fab fa-github"></i>
</div>

<div>
<p className="text-gray-400 text-sm">GitHub</p>

<a
href="https://github.com/princeraj05"
target="_blank"
className="text-purple-400"
>

github.com/princeraj05

</a>

</div>

</div>


<div className="flex items-center gap-4">

<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 text-lg">
<i className="fas fa-map-marker-alt"></i>
</div>

<div>
<p className="text-gray-400 text-sm">Location</p>
<p>Phagwara, Punjab, India</p>
</div>

</div>

</div>


{/* RIGHT FORM */}

<form onSubmit={handleSubmit} className="space-y-6">

<div className="grid sm:grid-cols-2 gap-4">

<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
placeholder="Your Name"
className="bg-[#1a1a28] border border-purple-500/20 rounded-lg p-3 outline-none w-full"
required
/>

<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="xyz@gmail.com"
className="bg-[#1a1a28] border border-purple-500/20 rounded-lg p-3 outline-none w-full"
required
/>

</div>

<input
type="text"
name="subject"
value={formData.subject}
onChange={handleChange}
placeholder="Job Opportunity / Collaboration"
className="w-full bg-[#1a1a28] border border-purple-500/20 rounded-lg p-3 outline-none"
/>


<textarea
name="message"
value={formData.message}
onChange={handleChange}
placeholder="Hi Prince, I'd love to connect..."
className="w-full bg-[#1a1a28] border border-purple-500/20 rounded-lg p-3 outline-none h-36"
required
/>


{statusMessage && (
  <div className={`p-4 rounded-lg text-sm font-medium border ${
    status === "success" 
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
      : "bg-rose-500/10 text-rose-400 border-rose-500/20"
  }`}>
    {statusMessage}
  </div>
)}


<button
type="submit"
disabled={status === "sending"}
className={`w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 rounded-lg font-semibold hover:scale-[1.02] transition flex items-center justify-center gap-2 ${
  status === "sending" ? "opacity-75 cursor-not-allowed" : ""
}`}
>
{status === "sending" ? (
  <>
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
    Sending...
  </>
) : (
  <>
    <i className="fas fa-paper-plane mr-2"></i>
    Send Message
  </>
)}
</button>

</form>

</div>

</section>

)

}