import Image from "next/image";

export const EnvyIcon = () => (
  <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg flex items-center justify-center">
    <Image src="/envy_icon.svg" alt="Envy logo" width={20} height={20} />
  </div>
);
