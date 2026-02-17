'use client'

import { Button } from "ui/button"
import { Checkbox } from "ui/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "ui/dialog"
import { Input } from "ui/input"
import { Label } from "ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "ui/select"
import { Textarea } from "ui/textarea"
import { X } from "lucide-react"
import { PhoneInput } from "./PhoneInputWithSearch"
import { useState, useRef } from "react"
import { toast } from "sonner"

type ReservationDialogProps = {
  triggerVariant?: "default" | "no-border";
}

export function ReservationDialog({ triggerVariant = "default" }: ReservationDialogProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'firstname':
        if (!value || value.trim().length < 2) {
          return 'First name must be at least 2 characters';
        }
        break;
      case 'lastname':
        if (!value || value.trim().length < 2) {
          return 'Last name must be at least 2 characters';
        }
        break;
      case 'email':
        if (!value || value.trim().length < 5) {
          return 'Please enter a valid email address';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address';
        }
        break;
      case 'phone':
        if (!value || value.trim().length < 4) {
          return 'Please enter a valid phone number';
        }
        break;
    }
    return '';
  };

  const validateForm = (formData: FormData): Record<string, string> => {
    const newErrors: Record<string, string> = {};
    
    const firstname = formData.get('firstname') as string;
    const lastname = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    
    const firstnameError = validateField('firstname', firstname);
    if (firstnameError) newErrors.firstname = firstnameError;
    
    const lastnameError = validateField('lastname', lastname);
    if (lastnameError) newErrors.lastname = lastnameError;
    
    const emailError = validateField('email', email);
    if (emailError) newErrors.email = emailError;
    
    const phoneError = validateField('phone', phoneNumber);
    if (phoneError) newErrors.phone = phoneError;
    
    return newErrors;
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };
  
  const handlePhoneBlur = () => {
    const error = validateField('phone', phoneNumber);
    setErrors(prev => ({ ...prev, phone: error }));
  };
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (isSubmitting) return;
    
    const formData = new FormData(event.currentTarget);
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(event.currentTarget);
      const data: Record<string, string | boolean> = {};
      
      // Convert FormData to object, handling special cases
      formData.forEach((value, key) => {
        if (key === "phone") {
          // Ensure phone is always a string, never null
          data[key] = phoneNumber || "";
        } else if (key === "subscribe") {
          // Handle checkbox as boolean
          data[key] = true;
        } else {
          data[key] = value.toString();
        }
      });
      
      // Handle unchecked checkbox (it won't be in FormData)
      if (!formData.has("subscribe")) {
        data["subscribe"] = false;
      }
            
      const response = await fetch('https://console.eleveight.ai/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data })
      });
      
      // Try to parse response body for better error messages
      let responseText = '';
      let responseJson: Record<string, unknown> | null = null;
      
      try {
        responseText = await response.text();
        if (responseText) {
          responseJson = JSON.parse(responseText);
        }
      } catch {
        console.log('[ReservationDialog] Could not parse response as JSON:', responseText);
      }

      // Check if the request was successful
      if (!response.ok) {
        const errorMessage = responseJson?.message || responseJson?.error || `Request failed with status ${response.status}`;
        toast.error(`Submission failed: ${errorMessage}`);
        return;
      }

      // Success case
      toast.success("Form submitted successfully! We'll contact you soon.");

      // Reset form
      if (formRef.current) {
        formRef.current.reset();
        setPhoneNumber("");
        setErrors({});
      }

      // Close dialog
      setOpen(false);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      toast.error(`There was an error submitting the form: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      setOpen(isOpen);
      if (!isOpen) {
        setErrors({});
      }
    }}>
      <DialogTrigger asChild>
        <Button variant={triggerVariant}>Reserve Now</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[500px] max-h-[80vh] overflow-y-auto bg-[#111] text-white border-0 rounded-[14px] shadow-[0_12px_40px_rgba(0,0,0,0.6)] px-8 pb-8 mt-5">
        <DialogHeader className="sticky top-0 bg-[#111] z-10 pt-10 pb-4 px-4">
          <DialogTitle className="text-[26px] leading-8 font-bold text-center text-white max-w-[450px] m-auto pr-8">
            Contact us to reserve the latest NVIDIA B300 GPU
          </DialogTitle>
          <DialogDescription className="text-center text-white/80 text-sm mt-2">
            Fill out the form below and we&apos;ll get back to you with availability and pricing information.
          </DialogDescription>

          <DialogClose asChild>
            <Button variant="no-border" size="icon" className="absolute right-[-15px] top-[15px] text-[#ccc] hover:text-white" aria-label="Close modal">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        
        <form ref={formRef} onSubmit={handleSubmit} className="grid gap-3 sm:px-12 px-4">
          <div className="grid gap-2">
            <Label htmlFor="firstname" className="text-white text-[12px]">First Name *</Label>
            <Input 
              id="firstname" 
              name="firstname"
              type="text"
              className={`bg-[#323135] border-transparent text-white rounded-[6px] focus:border-[#D1D5DB] focus:outline-none ${errors.firstname ? 'border-red-500 border' : ''}`}
              onChange={() => setErrors(prev => ({ ...prev, firstname: '' }))}
              onBlur={handleBlur}
            />
            {errors.firstname && <span className="text-red-500 text-xs">{errors.firstname}</span>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="lastname" className="text-white text-[12px]">Last Name *</Label>
            <Input 
              id="lastname"
              name="lastname" 
              type="text"
              className={`bg-[#323135] border-transparent text-white rounded-[6px] focus:border-[#D1D5DB] focus:outline-none ${errors.lastname ? 'border-red-500 border' : ''}`}
              onChange={() => setErrors(prev => ({ ...prev, lastname: '' }))}
              onBlur={handleBlur}
            />
            {errors.lastname && <span className="text-red-500 text-xs">{errors.lastname}</span>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email" className="text-white text-[12px]">Email *</Label>
            <Input 
              id="email"
              name="email" 
              type="text"
              className={`bg-[#323135] border-transparent text-white rounded-[6px] focus:border-[#D1D5DB] focus:outline-none ${errors.email ? 'border-red-500 border' : ''}`}
              onChange={() => setErrors(prev => ({ ...prev, email: '' }))}
              onBlur={handleBlur}
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-white text-[12px]">Phone *</Label>
            <PhoneInput
              name="phone"
              value={phoneNumber}
              onChange={(value) => {
                setPhoneNumber(value);
                setErrors(prev => ({ ...prev, phone: '' }));
              }}
              onBlur={handlePhoneBlur}
              international
              defaultCountry="US"
              placeholder="Enter a phone number"
            />
            {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="company_name" className="text-white text-[12px]">Company name</Label>
            <Input 
              id="company_name"
              name="company_name" 
              type="text"
              className="bg-[#323135] border-transparent text-white rounded-[6px] focus:border-[#D1D5DB] focus:outline-none"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="job_title" className="text-white text-[12px]">Job title</Label>
            <Input 
              id="job_title"
              name="job_title" 
              type="text"
              className="bg-[#323135] border-transparent text-white rounded-[6px] focus:border-[#D1D5DB] focus:outline-none"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="computer_needs" className="text-white text-[12px]">What are your computer needs? *</Label>
            <Select name="computer_needs" required defaultValue="GPUs: 1-8">
              <SelectTrigger className="bg-[#323135] border-transparent text-white rounded-[6px] focus:border-[#D1D5DB] focus:outline-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2a2a2a] border-[#444] text-white">
                <SelectItem value="GPUs: 1-8">1-8 GPUs</SelectItem>
                <SelectItem value="GPUs: 8+">8+ GPUs</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="contract_length" className="text-white text-[12px]">Desired contract length *</Label>
            <Select name="contract_length" required defaultValue="Below 1 Year">
              <SelectTrigger className="bg-[#323135] border-transparent text-white rounded-[6px] focus:border-[#D1D5DB] focus:outline-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2a2a2a] border-[#444] text-white">
                <SelectItem value="Below 1 Year">Below 1 Year</SelectItem>
                <SelectItem value="More than 1 Year">More than 1 Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="when_need" className="text-white text-[12px]">How soon do you need this? *</Label>
            <Select name="when_need" required defaultValue="Within the next 3 months">
              <SelectTrigger className="bg-[#323135] border-transparent text-white rounded-[6px] focus:border-[#D1D5DB] focus:outline-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2a2a2a] border-[#444] text-white">
                <SelectItem value="Within the next 3 months">Within the next 3 months</SelectItem>
                <SelectItem value="More than 3 months">More than 3 months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="main_workload" className="text-white text-[12px]">What is your main workload? *</Label>
            <Select name="main_workload" required defaultValue="Model training">
              <SelectTrigger className="bg-[#323135] border-transparent text-white rounded-[6px] focus:border-[#D1D5DB] focus:outline-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#2a2a2a] border-[#444] text-white">
                <SelectItem value="Model training">Model training</SelectItem>
                <SelectItem value="Inference">Inference</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="additional" className="text-white text-[12px]">Additional information</Label>
            <Textarea 
              id="additional"
              name="comment" 
              rows={4}
              className="bg-[#323135] border-transparent text-white rounded-[6px] resize-none focus:border-[#D1D5DB] focus:outline-none"
            />
          </div>

          <div className="flex items-start gap-2 text-white text-sm leading-5 mb-5">
            <Checkbox id="agreement" name="subscribe" defaultChecked className="mt-1 h-[18px] w-[18px]" />
            <Label htmlFor="agreement" className="text-sm text-white cursor-pointer leading-tight">
              I agree to receive other communications from Eleveight AI
            </Label>
          </div>

          <Button type="submit" variant="default-white" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>

        <p className="text-[12px] font-normal leading-4 text-white/90 text-center px-5">
          *By clicking submit above, you consent to allow Eleveight.AI to store and process the personal information submitted above to provide you the content requested.
        </p>
      </DialogContent>
    </Dialog>
  )
}
