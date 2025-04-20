// src/components/ui/number-input-with-controls.tsx
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Define the props the component will accept
interface NumberInputWithControlsProps {
  id: string;
  label: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onIncrement: () => void;
  onDecrement: () => void;
  inputClassName?: string; // Optional class for the input
  buttonSize?: "default" | "sm" | "lg" | "icon"; // Optional button size
  iconSize?: string; // Optional icon size class (e.g., "h-4 w-4")
  disabled?: boolean; // Optional disabled state for the input
}

export const NumInputWithCtrl: React.FC<NumberInputWithControlsProps> = ({
  id,
  label,
  value,
  min = 0, // Default min value
  max = 30, // Default max value
  step = 1, // Default step value (though not directly used in input type="number" step prop here)
  onChange,
  inputClassName = "w-20 text-center", // Default input style
  disabled = false, // Default disabled state
}) => {
  return (
    <div className="space-y-1">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex items-center space-x-2">
        <Input
          id={id}
          type="number"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step} // Added step prop for accessibility/native behavior
          className={inputClassName}
          disabled={disabled} // Disable the input if needed
        />
      </div>
    </div>
  );
};
