import { CheckCheckIcon } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
  return (
    <div className="flex space-x-4 items-center p-w rounded-lg text-emerald-500 bg-emerald-500/30">
      <CheckCheckIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
