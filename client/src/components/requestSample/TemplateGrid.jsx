import { useState, useEffect } from "react";
import { useTemplates } from "../../context/TemplateContext";

import TemplateCard from "./TemplateCard";
import TemplatePreviewModal from "./TemplatePreviewModal";

const TemplateGrid = () => {

  const {
  paginatedTemplates,

  view,
} = useTemplates();

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (template) => {
    setSelectedTemplate(template);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  /* ESC Close */

  useEffect(() => {

    const handleKey = (e) => {

      if (e.key === "Escape") {

        closeModal();

      }

    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);

  }, []);

  /* Lock Body Scroll */

  useEffect(() => {

    document.body.style.overflow = modalOpen
      ? "hidden"
      : "";

    return () => {

      document.body.style.overflow = "";

    };

  }, [modalOpen]);

  return (
    <>

     <div

className={`

gap-8

${

view==="grid"

?

"grid sm:grid-cols-2 xl:grid-cols-3"

:

"flex flex-col"

}

`}
>

        {paginatedTemplates.length > 0 ? (

         paginatedTemplates.map((template) => (

            <TemplateCard
              key={template.id}
              template={template}
              openModal={openModal}
            />

          ))

        ) : (

          <div className="col-span-full py-24 text-center">

            <h2 className="text-3xl font-bold text-white">

              No Templates Found

            </h2>

            <p className="mt-3 text-slate-400">

              Try changing your search or filters.

            </p>

          </div>

        )}

      </div>

      <TemplatePreviewModal
        open={modalOpen}
        template={selectedTemplate}
        onClose={closeModal}
      />

    </>
  );

};

export default TemplateGrid;