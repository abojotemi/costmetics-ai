import React from "react";
import { Button } from "@/components/ui/button";
import { FaSun } from "react-icons/fa";
import { FaCamera, FaCheck, FaLightbulb, FaUpload } from "react-icons/fa6";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
const FaceScan = () => {
  return (
    <div className="space-y-6">
      <div className="relative">
        <video
          className="w-full h-full rounded-xl shadow-lg"
          autoPlay
          loop
          muted
        >
          <source src="/mushroom.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute flex items-center space-x-2 top-4 right-4 bg-white/80 p-2 font-medium max-sm:text-sm rounded-lg shadow-lg">
          <FaSun className="text-yellow-400" />
          <span className="">Good lighting</span>
        </div>
      </div>
      <div className="bg-light-gray p-4 rounded-lg">
        <div className="flex space-x-2 items-center tracking-widest mb-4">
          <FaLightbulb className="text-yellow-500" />{" "}
          <span className="font-medium">Tips for best results:</span>
        </div>
        <div className="space-y-2">
          <div className="flex space-x-2 items-center text-sm tracking-widest">
            <FaCheck className="text-green-500 " />{" "}
            <span className="">
              Remove makeup and cleanse your face before scanning
            </span>
          </div>
          <div className="flex space-x-2 items-center text-sm tracking-widest">
            <FaCheck className="text-green-500 " />{" "}
            <span className="">
              Find a well-lit area, preferably with natural light
            </span>
          </div>
          <div className="flex space-x-2 items-center text-sm tracking-widest">
            <FaCheck className="text-green-500 " />{" "}
            <span className="">
              Keep your face centered and still while capturing
            </span>
          </div>
          <div className="flex space-x-2 items-center text-sm tracking-widest">
            <FaCheck className="text-green-500 " />{" "}
            <span className="">
              Take multiple angles for more accurate analysis
            </span>
          </div>
        </div>
      </div>
      <div>
        <Button className="bg-primary/20 !p-5 text-primary hover:bg-primary/30 tracking-wider"> 
          <MapPin className="mr-2 size-5" />
          Use My Current Location
        </Button>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="terms-2"  />
        <div className="grid gap-2">
          <Label htmlFor="terms-2">Consent to Analysis</Label>
          <p className="text-muted-foreground text-sm">
          I agree to let GlowScan AI analyze my skin data for product recommendations. My data will be handled according to the privacy policy.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Button className="bg-primary text-white hover:bg-primary/80 transition-colors duration-200 h-16 text-lg">
          <FaCamera className="mr-2 size-7" />
          Capture Photo
        </Button>
        <Button
          variant={"outline"}
          className="hover:bg-primary/10 transition-colors duration-200 h-16 text-lg"
        >
          <FaUpload className="mr-2 size-7" />
          Upload Photo
        </Button>
      </div>
    </div>
  );
};

export default FaceScan;
