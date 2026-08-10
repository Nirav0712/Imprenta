import {
  FiArrowLeft,
  FiCheckCircle,
  FiPackage,
  FiFileText,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const ReviewOrder = ({ next, back }) => {

  return (

    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h2 className="text-4xl font-black text-white">

          Review Your Request

        </h2>

        <p className="mt-3 text-slate-400">

          Please verify your details before submitting your sample request.

        </p>

      </div>

      {/* Summary */}

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Left */}

        <div className="space-y-6">

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">

            <div className="flex items-center gap-3">

              <FiPackage className="text-sky-400" size={22} />

              <h3 className="text-xl font-bold text-white">

                Product Summary

              </h3>

            </div>

            <div className="mt-6 space-y-3 text-slate-300">

              <p>Template : Premium Business Card</p>

              <p>Quantity : 250</p>

              <p>Material : Paper</p>

              <p>Finish : Matte</p>

              <p>Printing : Double Side</p>

              <p>Size : A5</p>

            </div>

          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">

            <div className="flex items-center gap-3">

              <FiFileText className="text-sky-400" size={22} />

              <h3 className="text-xl font-bold text-white">

                Uploaded Artwork

              </h3>

            </div>

            <div className="mt-6">

              <p className="text-slate-300">

                BusinessCard_Final.ai

              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">

          <div className="flex items-center gap-3">

            <FiUser className="text-sky-400" size={22} />

            <h3 className="text-xl font-bold text-white">

              Company Information

            </h3>

          </div>

          <div className="mt-6 space-y-5">

            <div className="flex gap-3">

              <FiUser className="text-sky-400 mt-1"/>

              <div>

                <p className="text-sm text-slate-500">

                  Contact Person

                </p>

                <p className="text-white">

                  John Smith

                </p>

              </div>

            </div>

            <div className="flex gap-3">

              <FiMail className="text-sky-400 mt-1"/>

              <div>

                <p className="text-sm text-slate-500">

                  Email

                </p>

                <p className="text-white">

                  john@email.com

                </p>

              </div>

            </div>

            <div className="flex gap-3">

              <FiPhone className="text-sky-400 mt-1"/>

              <div>

                <p className="text-sm text-slate-500">

                  Phone

                </p>

                <p className="text-white">

                  +91 9876543210

                </p>

              </div>

            </div>

            <div className="flex gap-3">

              <FiMapPin className="text-sky-400 mt-1"/>

              <div>

                <p className="text-sm text-slate-500">

                  Address

                </p>

                <p className="text-white">

                  Ahmedabad, Gujarat

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">

        <button
          onClick={back}
          className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-white/10
            bg-white/5
            px-8
            py-4
            text-white
            transition
            hover:border-sky-400
          "
        >

          <FiArrowLeft />

          Back

        </button>

        <button
          onClick={next}
          className="
            flex
            items-center
            justify-center
            gap-3
            rounded-2xl
            bg-green-500
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:bg-green-600
          "
        >

          <FiCheckCircle />

          Submit Request

        </button>

      </div>

    </div>

  );

};

export default ReviewOrder;