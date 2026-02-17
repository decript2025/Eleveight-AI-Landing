export const ChevronDown = ({ isOpen }: { isOpen: boolean }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`inline-block ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  );