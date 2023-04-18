interface Option {
    label: string;
    value: string;
  }

interface DropdownProps {
    options: Option[];
    selectedOption: string;
    onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }