import './globals.css';
import MainHeader from "../../components/header/header";

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }:any) {
  return (
      <html lang="en">
      <body>
      <MainHeader/>
      {children}
      </body>
      </html>
  );
}
