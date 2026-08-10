import Stepper from "../../components/requestWizard/Stepper";
import OptionSelector from "../../components/requestWizard/OptionSelector";
import UploadArtwork from "../../components/requestWizard/UploadArtwork";
import CompanyDetails from "../../components/requestWizard/CompanyDetails";
import ReviewOrder from "../../components/requestWizard/ReviewOrder";
import SuccessScreen from "../../components/requestWizard/SuccessScreen";
import { useLocation } from "react-router-dom";

import { useState } from "react";

const RequestWizard = () => {
    const location = useLocation();

const selectedTemplate =
  location.state?.template || null;

  const [step, setStep] = useState(1);

  return (

    <section className="min-h-screen bg-gradient-to-b from-[#071321] via-[#08192E] to-[#071321] py-12">

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <Stepper
          currentStep={step}
          setCurrentStep={setStep}
        />

        <div className="mt-12">

          {step === 1 && (
            <OptionSelector
   template={selectedTemplate}
   next={() => setStep(2)}
/>
          )}

          {step === 2 && (
            <UploadArtwork
              next={() => setStep(3)}
              back={() => setStep(1)}
            />
          )}

          {step === 3 && (
            <CompanyDetails
              next={() => setStep(4)}
              back={() => setStep(2)}
            />
          )}

          {step === 4 && (
            <ReviewOrder
              next={() => setStep(5)}
              back={() => setStep(3)}
            />
          )}

          {step === 5 && (
            <SuccessScreen />
          )}

        </div>

      </div>

    </section>

  );

};

export default RequestWizard;