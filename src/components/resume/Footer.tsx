
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-100 py-8 border-t border-blue-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <Separator className="mb-8 bg-blue-900/30" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold text-lg text-blue-400">Mohith Vasamsetti</h3>
            <p className="text-gray-400">Professional Portfolio</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} All Rights Reserved</p>
            <p className="text-xs text-gray-500 mt-1">
              Designed and built with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
