import Dropdown from "@/components/dropdown";
import { titleLayout } from "@/layouts/styles.css";
import TemplateLayout from "@/layouts/templateLayout";
import { NextPageWithLayout } from "@/types/NextPageWithLayout";
import React, { ReactElement, useState } from "react";

const options: Option[] = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

const Subjects: NextPageWithLayout = () => {
  const [selectedOption, setSelectedOption] = useState<string>(
    options[0].value
  );

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h1 className={titleLayout}>Matérias</h1>
      <div>
        <Dropdown
          options={options}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};

Subjects.getLayout = function getLayout(page: ReactElement) {
  return <TemplateLayout>{page}</TemplateLayout>;
};

export default Subjects;
