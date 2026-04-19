import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "917506484351";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", requirement: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone.trim()))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!form.requirement.trim())
      newErrors.requirement = "Please describe your requirement";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setTimeout(() => {
      setSubmitted(true);
      toast.success("Inquiry submitted! We'll contact you shortly.");
      setForm({ name: "", phone: "", requirement: "" });
    }, 500);
  };

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const whatsappMsg = encodeURIComponent(
    "Hi SV Engineering, I'd like to inquire about your pneumatic components.",
  );

  return (
    <div data-ocid="contact.page">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <Badge
            variant="secondary"
            className="mb-4 text-xs font-body uppercase tracking-wider"
          >
            Contact Us
          </Badge>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="font-body text-muted-foreground text-lg max-w-xl leading-relaxed">
            Send us your inquiry and we'll respond with pricing, availability,
            and technical information.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3"
          >
            <Card data-ocid="contact.form_card">
              <CardContent className="p-6 sm:p-8">
                {submitted ? (
                  <div
                    className="text-center py-8"
                    data-ocid="contact.success_state"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-display font-bold text-xl text-foreground mb-2">
                      Inquiry Submitted!
                    </h2>
                    <p className="font-body text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      className="font-body"
                      data-ocid="contact.send_another_button"
                    >
                      Send Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    data-ocid="contact.inquiry_form"
                  >
                    <h2 className="font-display font-bold text-xl text-foreground mb-1">
                      Send an Inquiry
                    </h2>
                    <p className="font-body text-muted-foreground text-sm mb-6">
                      Fill in the form below and we'll respond promptly.
                    </p>

                    <div className="space-y-5">
                      <div>
                        <Label
                          htmlFor="name"
                          className="font-body font-medium text-sm"
                        >
                          Your Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={form.name}
                          onChange={handleChange("name")}
                          placeholder="e.g. Rajesh Sharma"
                          className="mt-1.5 font-body"
                          data-ocid="contact.name_input"
                        />
                        {errors.name && (
                          <p
                            className="text-destructive text-xs mt-1 font-body"
                            data-ocid="contact.name_field_error"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label
                          htmlFor="phone"
                          className="font-body font-medium text-sm"
                        >
                          Phone Number{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange("phone")}
                          placeholder="10-digit mobile number"
                          className="mt-1.5 font-body"
                          data-ocid="contact.phone_input"
                        />
                        {errors.phone && (
                          <p
                            className="text-destructive text-xs mt-1 font-body"
                            data-ocid="contact.phone_field_error"
                          >
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label
                          htmlFor="requirement"
                          className="font-body font-medium text-sm"
                        >
                          Your Requirement{" "}
                          <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="requirement"
                          value={form.requirement}
                          onChange={handleChange("requirement")}
                          placeholder="e.g. 20 pcs of double acting cylinders, 32mm bore, 100mm stroke..."
                          rows={4}
                          className="mt-1.5 font-body resize-none"
                          data-ocid="contact.requirement_textarea"
                        />
                        {errors.requirement && (
                          <p
                            className="text-destructive text-xs mt-1 font-body"
                            data-ocid="contact.requirement_field_error"
                          >
                            {errors.requirement}
                          </p>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full mt-6 font-display font-semibold"
                      data-ocid="contact.submit_button"
                    >
                      <Send className="mr-2 w-4 h-4" />
                      Submit Inquiry
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <h2 className="font-display font-bold text-xl text-foreground mb-4">
              Direct Contact
            </h2>

            <Card data-ocid="contact.phone_card">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">
                    Phone
                  </p>
                  <a
                    href="tel:7506484351"
                    className="font-body text-primary hover:underline text-lg font-medium"
                    data-ocid="contact.phone_link"
                  >
                    7506484351
                  </a>
                  <p className="font-body text-muted-foreground text-xs mt-0.5">
                    Mon–Sat, 9am–7pm
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card data-ocid="contact.whatsapp_card">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-whatsapp-muted rounded-lg flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-whatsapp" />
                </div>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-foreground text-sm">
                    WhatsApp
                  </p>
                  <p className="font-body text-muted-foreground text-sm mt-0.5 mb-2">
                    Chat with us directly for quick responses
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.whatsapp_link"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-body text-xs"
                    >
                      <MessageCircle className="mr-1.5 w-3.5 h-3.5 text-whatsapp" />
                      Open WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card data-ocid="contact.location_card">
              <CardContent className="p-5 flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">
                    Location
                  </p>
                  <p className="font-body text-muted-foreground text-sm mt-0.5 leading-relaxed">
                    201/3, Om Namah Shivay Building,
                    <br />
                    Ram Mandir Road, Mahape,
                    <br />
                    Navi Mumbai - 400 710
                  </p>
                  <p className="font-body text-muted-foreground text-xs mt-0.5">
                    Serving clients across India
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="font-display font-semibold text-foreground text-sm mb-1">
                Quick Response Guaranteed
              </p>
              <p className="font-body text-muted-foreground text-xs leading-relaxed">
                We respond to all inquiries within 24 hours on business days.
                For urgent requirements, call or WhatsApp directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
