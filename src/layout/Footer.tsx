const currentDate: Date = new Date();
const currentYear: number = currentDate.getFullYear();

export const Footer = () => {
  return (
    <footer>
      &#169; CCS, {currentYear} 
    </footer>
  );
}