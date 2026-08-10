import {
  FiCheckCircle,
  FiHome,
  FiDownload,
  FiShoppingBag,
} from "react-icons/fi";

import { Link } from "react-router-dom";

const SuccessScreen = () => {

  const requestId =
    "IMP-" +
    new Date().getFullYear() +
    String(new Date().getMonth() + 1).padStart(2, "0") +
    String(new Date().getDate()).padStart(2, "0") +
    "-" +
    Math.floor(1000 + Math.random() * 9000);

  return (

    <div className="flex min-h-[70vh] items-center justify-center">

      <div
        className="
          w-full
          max-w-3xl
          rounded-[36px]
          border
          border-white/10
          bg-white/5
          p-10
          text-center
          backdrop-blur-2xl
        "
      >

        {/* Success Icon */}

        <div
          className="
            mx-auto
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            bg-green-500/15
          "
        >

          <FiCheckCircle
            size={70}
            className="text-green-400"
          />

        </div>

        {/* Title */}

        <h1 className="mt-8 text-5xl font-black text-white">

          Request Submitted Successfully

        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">

          Thank you for requesting a sample.

          Our packaging experts will review your request
          and contact you within 24 working hours.

        </p>

        {/* Request ID */}

        <div
          className="
            mt-10
            rounded-2xl
            border
            border-sky-400/20
            bg-sky-500/10
            p-6
          "
        >

          <p className="text-slate-400">

            Request ID

          </p>

          <h2 className="mt-2 text-3xl font-black text-sky-400">

            {requestId}

          </h2>

        </div>

        {/* Timeline */}

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl bg-white/5 p-5">

            <h3 className="font-bold text-white">

              Step 1

            </h3>

            <p className="mt-3 text-sm text-slate-400">

              Request Received

            </p>

          </div>

          <div className="rounded-2xl bg-white/5 p-5">

            <h3 className="font-bold text-white">

              Step 2

            </h3>

            <p className="mt-3 text-sm text-slate-400">

              Artwork Review

            </p>

          </div>

          <div className="rounded-2xl bg-white/5 p-5">

            <h3 className="font-bold text-white">

              Step 3

            </h3>

            <p className="mt-3 text-sm text-slate-400">

              Team Contact

            </p>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

          <Link
            to="/"
            className="
              flex-1
              rounded-2xl
              bg-sky-500
              py-4
              font-semibold
              text-white
              transition
              hover:bg-sky-600
              flex
              items-center
              justify-center
              gap-3
            "
          >

            <FiHome />

            Back Home

          </Link>

          <button
            className="
              flex-1
              rounded-2xl
              border
              border-white/10
              bg-white/5
              py-4
              font-semibold
              text-white
              transition
              hover:border-sky-400
              flex
              items-center
              justify-center
              gap-3
            "
          >

            <FiDownload />

            Download Summary

          </button>

          <Link
            to="/request-sample"
            className="
              flex-1
              rounded-2xl
              border
              border-white/10
              bg-white/5
              py-4
              font-semibold
              text-white
              transition
              hover:border-sky-400
              flex
              items-center
              justify-center
              gap-3
            "
          >

            <FiShoppingBag />

            Browse More

          </Link>

        </div>

      </div>

    </div>

  );

};

export default SuccessScreen;